"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  a: number;
  vy: number;
  vx: number;
  ph: number;
  tw: number;
};

// Faint bioluminescent motes drifting up through deep water. Shown only under
// the `ocean` theme. Sparse, slow, and glowing rather than a connected
// "constellation" network (which reads as generic). Off for reduced motion.
export function OceanDrift() {
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
    let motes: Mote[] = [];
    let raf = 0;
    let running = false;
    let last = 0;

    function spawn(): Mote {
      const r = 0.6 + Math.random() * 1.6;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        a: 0.12 + Math.random() * 0.26,
        vy: -(0.05 + Math.random() * 0.16), // slow rise
        vx: (Math.random() - 0.5) * 0.1,
        ph: Math.random() * Math.PI * 2,
        tw: 0.005 + Math.random() * 0.013, // twinkle speed
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
      const n = Math.min(70, Math.max(10, Math.round((W * H) / 26000)));
      motes = Array.from({ length: n }, spawn);
    }

    function frame(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (now - last < 33) return; // ~30fps
      last = now;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#9fd6f5";
      ctx.shadowColor = "#4facfe";
      for (const m of motes) {
        m.y += m.vy;
        m.x += m.vx + Math.sin(m.ph) * 0.12;
        m.ph += m.tw;
        if (m.y < -4) {
          m.y = H + 4;
          m.x = Math.random() * W;
        }
        if (m.x < -4) m.x = W + 4;
        else if (m.x > W + 4) m.x = -4;

        ctx.globalAlpha = Math.max(0, m.a * (0.55 + 0.45 * Math.sin(m.ph)));
        ctx.shadowBlur = m.r * 4;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
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
      if (document.documentElement.getAttribute("data-theme") === "ocean") start();
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
      style={{ opacity: 0.7 }}
    />
  );
}
