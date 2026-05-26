'use client';

import React from 'react';

interface LaptopMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function LaptopMockup({ children, className = '' }: LaptopMockupProps) {
  return (
    <div className={`w-full relative ${className}`}>
      {/* Ambient cyan glow behind the laptop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,229,255,0.10) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* SCREEN / LID */}
      <div
        className="relative w-full p-[10px] md:p-3"
        style={{
          background: 'linear-gradient(180deg, #1c1c1f 0%, #0a0a0c 100%)',
          borderRadius: '14px 14px 6px 6px',
          boxShadow:
            '0 30px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(0,229,255,0.10), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)',
        }}
      >
        {/* Webcam */}
        <div className="flex justify-center mb-1.5">
          <span
            className="w-[3px] h-[3px] rounded-full"
            style={{
              background: '#3a3a3d',
              boxShadow: 'inset 0 0 1px rgba(0,0,0,0.6), 0 0 1px rgba(0,229,255,0.15)',
            }}
            aria-hidden
          />
        </div>

        {/* DISPLAY — children render here */}
        <div
          className="relative overflow-hidden"
          style={{
            background: '#000',
            borderRadius: '6px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)',
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
            background: 'linear-gradient(180deg, #15151a 0%, #28282d 50%, #15151a 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
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
              background:
                'linear-gradient(180deg, #2a2a2f 0%, #1c1c20 50%, #0e0e10 100%)',
              borderRadius: '0 0 10px 10px',
              boxShadow:
                '0 6px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            {/* Notch — small indent for opening the lid */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{
                width: '15%',
                height: '3px',
                background: '#0a0a0c',
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
