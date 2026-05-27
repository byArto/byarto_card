'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Sun, Moon } from 'lucide-react';
import PillNav from '@/components/ui/PillNav';
import FuzzyText from '@/components/ui/FuzzyText';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Products from '@/components/sections/Products';
import BeyondCode from '@/components/sections/BeyondCode';
import TechMarquee from '@/components/sections/TechMarquee';
import { LangProvider, useLang } from '@/contexts/LangContext';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  ssr: false,
});

function ScrollFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.6, 1], [0, -40]);

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

function AppContent() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.contacts, href: '#contact' },
  ];

  return (
    <main className="relative min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Top bar — logo (left) + lang toggle (right), aligned with Hero content container */}
      <div className="fixed top-8 left-0 right-0 z-[100] pointer-events-none">
        <div className="w-full px-6 md:px-16 lg:px-24">
        <div
          className="mx-auto max-w-[1540px] flex items-center justify-between"
          style={{ height: '48px' }}
        >
          {/* Logo */}
          <a href="#hero" className="pointer-events-auto flex items-center h-full">
            <FuzzyText
              fontSize="0.9rem"
              fontWeight={700}
              color={theme === 'light' ? '#d97757' : '#00E5FF'}
              baseIntensity={0.05}
              hoverIntensity={0.5}
              className="-ml-[60px] -mr-[30px]"
            >
              {'<byArto>'}
            </FuzzyText>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo 1.png"
              alt="byArto logo"
              style={{
                height: '22px',
                width: 'auto',
                /* On light theme: shift original hue to terra-cotta and darken slightly so it reads on cream;
                   On dark: original cyan-shifted treatment */
                filter:
                  theme === 'light'
                    ? 'hue-rotate(310deg) saturate(1.8) brightness(0.85) contrast(1.1)'
                    : 'hue-rotate(60deg) saturate(1.3) brightness(1.1)',
              }}
            />
          </a>

          {/* Right group: Theme toggle + Lang toggle */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="flex items-center justify-center rounded-full w-9 h-9 transition-all duration-300"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                backdropFilter: 'blur(12px)',
                color: 'var(--text-tertiary)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-tertiary)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
              }}
            >
              {theme === 'dark' ? (
                <Sun className="w-[14px] h-[14px]" />
              ) : (
                <Moon className="w-[14px] h-[14px]" />
              )}
            </button>

            {/* Language toggle */}
            <div
              className="flex items-center rounded-full px-3 py-1.5"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <button
                onClick={() => setLang('en')}
                className="transition-colors duration-200 px-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: lang === 'en' ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                EN
              </button>
              <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', fontSize: '10px', margin: '0 4px' }}>|</span>
              <button
                onClick={() => setLang('ru')}
                className="transition-colors duration-200 px-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: lang === 'ru' ? 'var(--accent)' : 'var(--text-muted)',
                }}
              >
                RU
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Sticky nav — centered, independent layer */}
      <header className="fixed top-4 left-0 right-0 z-[99] pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav
            items={navItems}
            baseColor="var(--bg-base)"
            pillColor="var(--bg-elevated)"
            hoveredPillTextColor="var(--accent)"
            pillTextColor="var(--text-tertiary)"
          />
        </div>
      </header>

      <Hero />
      <ScrollFade><About /></ScrollFade>
      <ScrollFade><Experience /></ScrollFade>
      <ScrollFade><Products /></ScrollFade>
      <ScrollFade><BeyondCode /></ScrollFade>
      <ScrollFade><TechMarquee /></ScrollFade>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  );
}
