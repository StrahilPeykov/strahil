"use client"

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  size: number
  baseAlpha: number
  twinkle: number
  speed: number
}

export function StarfieldCanvas({ density = 130 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let stars: Star[] = []
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width - 0.5) * 2
      mouseY = (e.clientY / height - 0.5) * 2
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.scale(dpr, dpr)
      initStars()
      draw(0)
    }

    const initStars = () => {
      const count = Math.round(density * (width * height) / (1280 * 720))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.2,
        baseAlpha: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.1 + 0.02,
      }))
    }

    let last = 0
    const draw = (t: number) => {
      if (!ctx) return
      const dt = Math.min((t - last) / 16.67, 2)
      last = t

      ctx.clearRect(0, 0, width, height)
      // Theme-aware background color using CSS variable --background (HSL tokens)
      const styles = getComputedStyle(document.documentElement)
      const bg = styles.getPropertyValue('--background').trim() || '222 47% 11%'
      ctx.fillStyle = `hsl(${bg})`
      ctx.fillRect(0, 0, width, height)

      for (const s of stars) {
        // Parallax offset (very subtle)
        const px = s.x + mouseX * (s.size * 2)
        const py = s.y + mouseY * (s.size * 2)

        const alpha = prefersReducedMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * 0.001 + s.twinkle) * 0.2

        ctx.globalAlpha = Math.max(0, Math.min(0.7, alpha))
        ctx.beginPath()
        ctx.arc(px, py, s.size, 0, Math.PI * 2)
        const fg = styles.getPropertyValue('--foreground').trim() || '210 40% 96%'
        ctx.fillStyle = `hsl(${fg})`
        ctx.fill()
        ctx.closePath()

        if (!prefersReducedMotion) {
          // Slow drift
          s.x += s.speed * dt
          if (s.x > width + 2) s.x = -2
        }
      }
      ctx.globalAlpha = 1

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(draw)
      }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    resize()
    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(draw)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  )
}

