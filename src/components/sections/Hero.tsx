'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef } from 'react';
import { useLang } from '@/contexts/LangContext';
import AITerminal from '@/components/ui/AITerminal';
import LaptopMockup from '@/components/ui/LaptopMockup';

export function Hero() {
  const { t, hf } = useLang();
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
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, willChange: 'transform', transformStyle: 'preserve-3d' }}
      >
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
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-[#00E5FF]" style={{ fontFamily: 'var(--font-mono)' }}>
              {t.hero.badge}
            </span>
          </div>


          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-bold leading-[1.02] tracking-tight mb-8"
            style={{ fontFamily: hf }}
          >
            {t.hero.h1_line1}
            <br />
            <span className="text-[#00E5FF]">{t.hero.h1_accent1}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
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
            className="text-[10px] tracking-widest uppercase text-gray-500 rotate-90 origin-center mb-8"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-[#00E5FF]/60 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
