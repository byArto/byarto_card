'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface FuzzyTextProps {
  children: string;
  fontSize?: string;
  fontWeight?: number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  fps?: number;
  className?: string;
}

export const FuzzyText: React.FC<FuzzyTextProps> = ({
  children,
  fontSize = '1.2rem',
  fontWeight = 700,
  fontFamily = "'Space Grotesk', sans-serif",
  color = '#00E5FF',
  enableHover = true,
  baseIntensity = 0.05,
  hoverIntensity = 0.5,
  fuzzRange = 30,
  fps = 30,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isHoveredRef = useRef(false);
  const animRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);

  const run = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    // measure text
    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    const metrics = ctx.measureText(children);
    const textW = Math.ceil(metrics.width);
    const textH = Math.ceil(parseFloat(fontSize) * 1.4);

    const pad = fuzzRange * 2;
    const w = textW + pad * 2;
    const h = textH + pad * 2;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // offscreen
    const offscreen = document.createElement('canvas');
    offscreen.width = w * dpr;
    offscreen.height = h * dpr;
    const offCtx = offscreen.getContext('2d')!;
    offCtx.scale(dpr, dpr);
    offCtx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    offCtx.fillStyle = color;
    offCtx.textBaseline = 'middle';
    offCtx.textAlign = 'center';
    offCtx.fillText(children, w / 2, h / 2);

    const interval = 1000 / fps;

    const draw = (now: number) => {
      if (now - lastFrameRef.current < interval) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameRef.current = now;

      const intensity = isHoveredRef.current ? hoverIntensity : baseIntensity;
      ctx.clearRect(0, 0, w, h);

      const sliceH = 2;
      for (let y = 0; y < h; y += sliceH) {
        const dx = (Math.random() - 0.5) * fuzzRange * intensity;
        ctx.drawImage(
          offscreen,
          0,
          y * dpr,
          w * dpr,
          sliceH * dpr,
          dx,
          y,
          w,
          sliceH,
        );
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [children, fontSize, fontWeight, fontFamily, color, baseIntensity, hoverIntensity, fuzzRange, fps]);

  useEffect(() => {
    const cleanup = run();
    return cleanup;
  }, [run]);

  return (
    <canvas
      ref={canvasRef}
      className={`inline-block ${className}`}
      onMouseEnter={() => {
        if (enableHover) isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    />
  );
};

export default FuzzyText;
