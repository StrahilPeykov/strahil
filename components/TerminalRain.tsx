"use client";

import { useEffect, useRef } from "react";

// Matrix-style character rain, shown only under the `terminal` theme. Inspired
// by the canvas bg-effects in Odysseus. Deliberately subtle: low opacity, behind
// everything, throttled, and fully off for reduced-motion users or other themes.
export function TerminalRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const context = node.getContext("2d");
    if (!context) return;
    // Non-null aliases so the nested helpers don't trip strict null checks.
    const el: HTMLCanvasElement = node;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fontSize = 14;
    const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789".split("");

    let W = 0;
    let H = 0;
    let cols = 0;
    let drops: number[] = [];
    let raf = 0;
    let running = false;
    let last = 0;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      el.width = Math.floor(W * dpr);
      el.height = Math.floor(H * dpr);
      el.style.width = W + "px";
      el.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / fontSize);
      drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -40));
    }

    function frame(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (now - last < 45) return; // ~22fps: calmer and lighter on the CPU
      last = now;

      // Translucent wash leaves fading trails behind each leading glyph.
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${fontSize}px "Fira Code", monospace`;
      ctx.fillStyle = "rgba(0,255,65,0.8)";
      for (let i = 0; i < cols; i++) {
        const ch = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
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
      if (document.documentElement.getAttribute("data-theme") === "terminal") start();
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
      style={{ opacity: 0.35 }}
    />
  );
}
