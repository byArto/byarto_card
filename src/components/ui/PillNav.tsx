'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo?: React.ReactNode | string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

export const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = '#0A0A0A',
  pillColor = 'rgba(255,255,255,0.08)',
  hoveredPillTextColor = '#00E5FF',
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? '#F0F0F0';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);


  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 0.8, ease, overwrite: 'auto' },
          0,
        );
        if (label)
          tl.to(
            label,
            { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' },
            0,
          );
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' },
            0,
          );
        }
        tlRefs.current[index] = tl;
      });
    };
    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [items, ease]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.4,
      ease,
      overwrite: 'auto',
    });
  };
  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '48px',
    '--pill-pad-x': '20px',
    '--pill-gap': '6px',
  } as React.CSSProperties;

  return (
    <div
      className={`relative z-[1000] w-full max-w-4xl mx-auto ${className}`}
      style={cssVars}
    >
      <nav
        className="w-full flex items-center justify-center p-4 gap-4 relative"
        aria-label="Primary"
      >
        {/* Mobile hamburger — positioned absolutely to not shift center */}
        <button
          className="md:hidden absolute right-16 sm:right-20 flex flex-col gap-1.5 p-2 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-5 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white/70 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center rounded-full px-1.5"
          style={{
            height: 'var(--nav-h)',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-0 h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle: React.CSSProperties = {
                background: 'transparent',
                color: 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
              };
              return (
                <li key={item.href} role="none" className="flex items-center">
                  <a
                    role="menuitem"
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center h-[calc(var(--nav-h)-12px)] self-center no-underline rounded-full box-border font-medium text-sm tracking-wider cursor-pointer transition-colors duration-200 hover:z-10"
                    style={pillStyle}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{
                        background: 'rgba(0,229,255,0.12)',
                        willChange: 'transform',
                      }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative inline-block leading-none z-[2] overflow-hidden py-1">
                      <span
                        className="pill-label relative z-[2] inline-block"
                        style={{ willChange: 'transform' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center"
                        style={{
                          color: 'var(--hover-text)',
                          willChange: 'transform, opacity',
                        }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full z-[4]"
                        style={{ background: '#00E5FF' }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full right-4 w-48 rounded-2xl p-2 z-50"
          style={{
            background: 'rgba(14,14,14,0.95)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 px-4 text-sm text-gray-300 hover:text-[#00E5FF] transition-colors rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PillNav;
