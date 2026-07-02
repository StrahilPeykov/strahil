"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  s: number; // half-length of the petal
  a: number;
  vy: number;
  vx: number;
  rot: number;
  vr: number;
  tilt: number;
  vt: number;
  ph: number;
  sw: number;
  color: string;
};

const COLORS = ["#f2a9bf", "#ec92ad", "#e57e9e"];

// Sparse cherry-blossom petals drifting down on a light breeze. Shown only
// under the `sakura` theme. Petals tumble (fake 3D via width squash) and sway
// rather than falling straight, which is what sells it. Off for reduced motion.
export function SakuraPetals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const context = node.getContext("2d");
    if (!context) return;
    const el: HTMLCanvasElement = node;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let petals: Petal[] = [];
    let raf = 0;
    let running = false;
    let last = 0;

    function spawn(anywhere: boolean): Petal {
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : -10,
        s: 3 + Math.random() * 3.5,
        a: 0.35 + Math.random() * 0.35,
        vy: 0.35 + Math.random() * 0.5,
        vx: -(0.1 + Math.random() * 0.3), // steady breeze to the left
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        tilt: Math.random() * Math.PI * 2,
        vt: 0.01 + Math.random() * 0.02,
        ph: Math.random() * Math.PI * 2,
        sw: 0.008 + Math.random() * 0.014, // sway speed
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      el.width = Math.floor(W * dpr);
      el.height = Math.floor(H * dpr);
      el.style.width = W + "px";
      el.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(32, Math.max(8, Math.round((W * H) / 48000)));
      petals = Array.from({ length: n }, () => spawn(true));
    }

    function drawPetal(p: Petal) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      // Tumble: apparent width collapses as the petal turns edge-on.
      ctx.scale(0.35 + 0.65 * Math.abs(Math.sin(p.tilt)), 1);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.color;
      const s = p.s;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.bezierCurveTo(s * 0.8, -s * 0.5, s * 0.55, s * 0.55, 0, s);
      ctx.bezierCurveTo(-s * 0.55, s * 0.55, -s * 0.8, -s * 0.5, 0, -s);
      ctx.fill();
      ctx.restore();
    }

    function frame(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (now - last < 33) return; // ~30fps
      last = now;

      ctx.clearRect(0, 0, W, H);
      for (const p of petals) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.ph) * 0.3;
        p.ph += p.sw;
        p.rot += p.vr;
        p.tilt += p.vt;
        if (p.y > H + 10) {
          const fresh = spawn(false);
          Object.assign(p, fresh);
        }
        if (p.x < -12) p.x = W + 12;
        else if (p.x > W + 12) p.x = -12;
        drawPetal(p);
      }
      ctx.globalAlpha = 1;
    }

    function start() {
      if (running || reduce) return;
      running = true;
      resize();
      ctx.clearRect(0, 0, el.width, el.height);
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, el.width, el.height);
    }

    function sync() {
      if (document.documentElement.getAttribute("data-theme") === "sakura") start();
      else stop();
    }

    function onResize() {
      if (running) resize();
    }

    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", onResize);
    sync();

    return () => {
      obs.disconnect();
      window.removeEventListener("resize", onResize);
      stop();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ opacity: 0.75 }}
    />
  );
}
