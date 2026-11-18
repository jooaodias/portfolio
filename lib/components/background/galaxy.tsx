'use client'

import { useEffect, useRef, type ReactNode } from 'react';

interface GalaxyProps {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
  children?: ReactNode;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  depth: number;
  baseAlpha: number;
  phase: number;
  twinkleRate: number;
  tint: string;
}

const STAR_TINTS = [
  '255, 255, 255',
  '226, 232, 240',
  '191, 219, 254',
  '221, 214, 254',
];

export default function Galaxy({
  starSpeed = 0.5,
  density = 1,
  disableAnimation = false,
  speed = 1.0,
  glowIntensity = 0.3,
  twinkleIntensity = 0.3,
  transparent = true,
  children,
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isStatic = disableAnimation || prefersReducedMotion;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let animateId = 0;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const buildStars = () => {
      const isNarrow = width < 768;
      const lowCores = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
      const baseCount = isNarrow || lowCores ? 45 : 85;
      const count = Math.max(24, Math.round(baseCount * Math.min(density, 1.2)));

      stars = Array.from({ length: count }, (_, i) => {
        const depth = 0.25 + (i % 4) * 0.25;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: (0.6 + Math.random() * 1.1) * (0.6 + depth * 0.4),
          depth,
          baseAlpha: 0.25 + Math.random() * 0.55,
          phase: Math.random() * Math.PI * 2,
          twinkleRate: 0.6 + Math.random() * 1.4,
          tint: STAR_TINTS[i % STAR_TINTS.length],
        };
      });
    };

    const drawFrame = (timeSeconds: number) => {
      ctx.clearRect(0, 0, width, height);

      const driftSpeed = starSpeed * speed * 6;
      const glowScale = Math.min(Math.max(glowIntensity, 0.1), 0.5);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        let x = s.x;
        let y = s.y;

        if (!isStatic) {
          y = (s.y - timeSeconds * driftSpeed * s.depth) % height;
          if (y < 0) y += height;
        }

        const twinkle = isStatic
          ? 1
          : 1 - twinkleIntensity * 0.45 * (0.5 + 0.5 * Math.sin(timeSeconds * s.twinkleRate + s.phase));

        const alpha = Math.min(1, s.baseAlpha * twinkle);

        if (s.radius > 1.35) {
          ctx.fillStyle = `rgba(${s.tint}, ${alpha * glowScale})`;
          ctx.beginPath();
          ctx.arc(x, y, s.radius * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${s.tint}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const setupSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap DPR at 1.5 to avoid excessive pixel fill on high-DPI mobile/laptop screens
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      drawFrame(0);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setupSize, 180);
    };

    setupSize();
    window.addEventListener('resize', handleResize, { passive: true });

    if (isStatic) {
      return () => {
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', handleResize);
      };
    }

    const frameInterval = 1000 / 30;
    let lastFrameTime = 0;

    const tick = (now: number) => {
      animateId = requestAnimationFrame(tick);
      if (now - lastFrameTime < frameInterval) return;
      lastFrameTime = now - ((now - lastFrameTime) % frameInterval);
      drawFrame(now * 0.001);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animateId);
      } else {
        lastFrameTime = 0;
        animateId = requestAnimationFrame(tick);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animateId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animateId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [starSpeed, density, disableAnimation, speed, glowIntensity, twinkleIntensity]);

  return (
    <div
      className={`w-full min-h-screen relative ${transparent ? 'bg-[#06070d]' : 'bg-black'}`}
    >
      {/* Atmospheric CSS nebula backdrop — renders immediately with zero JS */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.14), transparent 70%), radial-gradient(ellipse 60% 45% at 85% 25%, rgba(139, 92, 246, 0.10), transparent 65%), radial-gradient(ellipse 55% 40% at 15% 75%, rgba(99, 102, 241, 0.08), transparent 70%)',
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
      />
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
}
