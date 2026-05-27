'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LaptopMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function LaptopMockup({ children, className = '' }: LaptopMockupProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Frame palette per theme — dark anodised aluminum vs silver "Space Silver" MacBook
  const frame = isLight
    ? {
        lid: 'linear-gradient(180deg, #d9d3c5 0%, #b8b0a0 100%)',
        lidShadow:
          '0 30px 60px rgba(74,50,30,0.18), 0 0 0 1px rgba(74,50,30,0.10), 0 0 60px rgba(217,119,87,0.12), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(74,50,30,0.18)',
        webcam: '#7a7466',
        webcamShadow: 'inset 0 0 1px rgba(0,0,0,0.3), 0 0 1px rgba(217,119,87,0.2)',
        display: '#fdf8ee',
        hinge: 'linear-gradient(180deg, #a8a092 0%, #c2bbac 50%, #a8a092 100%)',
        hingeShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
        base: 'linear-gradient(180deg, #c5bdac 0%, #a8a092 50%, #8d8678 100%)',
        baseShadow: '0 6px 14px rgba(74,50,30,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
        notch: '#7a7466',
        ambient:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(217,119,87,0.14) 0%, transparent 70%)',
      }
    : {
        lid: 'linear-gradient(180deg, #1c1c1f 0%, #0a0a0c 100%)',
        lidShadow:
          '0 30px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(0,229,255,0.10), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)',
        webcam: '#3a3a3d',
        webcamShadow: 'inset 0 0 1px rgba(0,0,0,0.6), 0 0 1px rgba(0,229,255,0.15)',
        display: '#000',
        hinge: 'linear-gradient(180deg, #15151a 0%, #28282d 50%, #15151a 100%)',
        hingeShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        base: 'linear-gradient(180deg, #2a2a2f 0%, #1c1c20 50%, #0e0e10 100%)',
        baseShadow: '0 6px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        notch: '#0a0a0c',
        ambient:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,255,0.10) 0%, transparent 70%)',
      };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Ambient glow behind the laptop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: frame.ambient,
          filter: 'blur(20px)',
        }}
      />

      {/* SCREEN / LID */}
      <div
        className="relative w-full p-[10px] md:p-3"
        style={{
          background: frame.lid,
          borderRadius: '14px 14px 6px 6px',
          boxShadow: frame.lidShadow,
        }}
      >
        {/* Webcam */}
        <div className="flex justify-center mb-1.5">
          <span
            className="w-[3px] h-[3px] rounded-full"
            style={{
              background: frame.webcam,
              boxShadow: frame.webcamShadow,
            }}
            aria-hidden
          />
        </div>

        {/* DISPLAY — children render here */}
        <div
          className="relative overflow-hidden"
          style={{
            background: frame.display,
            borderRadius: '6px',
            boxShadow: isLight ? 'inset 0 0 0 1px rgba(74,50,30,0.10)' : 'inset 0 0 0 1px rgba(0,0,0,0.5)',
          }}
        >
          {children}
        </div>
      </div>

      {/* HINGE + BASE — hidden on small screens to save space */}
      <div className="hidden sm:block relative">
        {/* Hinge — thin strip, screen width */}
        <div
          className="h-[3px] w-full"
          style={{
            background: frame.hinge,
            boxShadow: frame.hingeShadow,
          }}
        />

        {/* Base — slightly wider than screen (perspective hint) */}
        <div
          className="relative mx-auto"
          style={{
            width: 'calc(100% + 28px)',
            marginLeft: '-14px',
          }}
        >
          <div
            className="relative h-[7px]"
            style={{
              background: frame.base,
              borderRadius: '0 0 10px 10px',
              boxShadow: frame.baseShadow,
            }}
          >
            {/* Notch — small indent for opening the lid */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{
                width: '15%',
                height: '3px',
                background: frame.notch,
                borderRadius: '0 0 5px 5px',
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopMockup;
