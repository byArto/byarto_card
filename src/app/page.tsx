'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import PillNav from '@/components/ui/PillNav';
import FuzzyText from '@/components/ui/FuzzyText';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Products from '@/components/sections/Products';
import TechMarquee from '@/components/sections/TechMarquee';
import { LangProvider, useLang } from '@/contexts/LangContext';

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

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.contacts, href: '#contact' },
  ];

  return (
    <main className="relative bg-[#0A0A0A] min-h-screen">
      {/* Logo */}
      <div className="fixed top-[26px] sm:top-[32px] left-4 sm:left-6 z-[100] flex items-center" style={{ height: '48px' }}>
        <a href="#hero" className="flex items-center">
          <FuzzyText
            fontSize="0.9rem"
            fontWeight={700}
            color="#00E5FF"
            baseIntensity={0.05}
            hoverIntensity={0.5}
            className="-mr-[30px]"
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
              filter: 'hue-rotate(60deg) saturate(1.3) brightness(1.1)',
            }}
          />
        </a>
      </div>

      {/* Sticky nav */}
      <header className="fixed top-4 left-0 right-0 z-[100]">
        <PillNav
          items={navItems}
          baseColor="#0A0A0A"
          pillColor="rgba(255,255,255,0.06)"
          hoveredPillTextColor="#00E5FF"
          pillTextColor="#9CA3AF"
        />
      </header>

      {/* Language toggle — top right */}
      <div className="fixed top-[26px] sm:top-[32px] right-4 sm:right-6 z-[100] flex items-center" style={{ height: '48px' }}>
        <div
          className="flex items-center rounded-full px-3 py-1.5"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
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
              color: lang === 'en' ? '#00E5FF' : '#6B7280',
            }}
          >
            EN
          </button>
          <span style={{ color: '#374151', fontFamily: 'var(--font-mono)', fontSize: '10px', margin: '0 4px' }}>|</span>
          <button
            onClick={() => setLang('ru')}
            className="transition-colors duration-200 px-1"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: lang === 'ru' ? '#00E5FF' : '#6B7280',
            }}
          >
            RU
          </button>
        </div>
      </div>

      <Hero />
      <ScrollFade><About /></ScrollFade>
      <ScrollFade><Experience /></ScrollFade>
      <ScrollFade><Products /></ScrollFade>
      <ScrollFade><TechMarquee /></ScrollFade>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
