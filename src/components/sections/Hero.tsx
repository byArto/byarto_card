'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef } from 'react';
import { useLang } from '@/contexts/LangContext';
import { useTheme } from '@/contexts/ThemeContext';
import AITerminal from '@/components/ui/AITerminal';
import LaptopMockup from '@/components/ui/LaptopMockup';

export function Hero() {
  const { t, hf } = useLang();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.3], [1.0, 1.27]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1.0, 0.89]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — dark photo + cyan glow on dark, warm vellum + terra-cotta glow on light */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, willChange: 'transform', transformStyle: 'preserve-3d' }}
      >
        {isLight ? (
          <>
            <div className="absolute inset-0" style={{ background: 'var(--bg-base)' }} />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 30% 70%, rgba(217,119,87,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(8,145,178,0.06) 0%, transparent 65%)',
              }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(0,229,255,0.06) 0%, transparent 50%)' }}
            />
          </>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-28 lg:py-24"
        style={{ opacity: contentOpacity, y: contentY, willChange: 'transform, opacity' }}
      >
        <div className="mx-auto max-w-[1540px] flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 min-w-0 max-w-2xl"
          style={{ scale: headingScale, transformOrigin: 'left center', willChange: 'transform' }}
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
            />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            >
              {t.hero.badge}
            </span>
          </div>


          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-bold leading-[1.02] tracking-tight mb-8"
            style={{ fontFamily: hf, color: 'var(--text-primary)' }}
          >
            {t.hero.h1_line1}
            <br />
            <span style={{ color: 'var(--accent)' }}>{t.hero.h1_accent1}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-tertiary)' }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href="#products"
              className="btn-glow px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm font-semibold tracking-wide inline-flex items-center gap-2"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="btn-glass px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-sm font-medium tracking-wide inline-flex items-center gap-2"
            >
              {t.hero.contactMe}
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: AI Terminal inside Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex justify-center shrink-0 w-full lg:w-[480px] xl:w-[540px] lg:ml-auto"
        >
          <LaptopMockup>
            <AITerminal />
          </LaptopMockup>
        </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 right-8 md:right-16 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span
            className="text-[10px] tracking-widest uppercase rotate-90 origin-center mb-8"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-12"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(to bottom, var(--accent) 0%, transparent 100%)',
              opacity: 0.6,
              transformOrigin: 'top',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
