'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Send, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

interface SocialPillProps {
  href: string;
  pillClass: string;
  icon: React.ReactNode;
  count: string;
  label: string;
  popupTitle: string;
  popupDesc: string;
  popupColor: string;
  openChannel: string;
  subscribers: string;
}

function SocialPill({ href, pillClass, icon, count, label, popupTitle, popupDesc, popupColor, openChannel, subscribers }: SocialPillProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pillClass} flex items-center gap-2.5 rounded-xl px-4 py-2.5 border transition-all duration-300 flex-shrink-0`}
        style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
      >
        {icon}
        <div>
          <p className="text-xs font-bold text-white leading-none" style={{ fontFamily: 'var(--font-mono)' }}>{count}</p>
          <p className="text-[9px] text-gray-500 mt-0.5">{label}</p>
        </div>
      </a>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-[200px] rounded-2xl p-4 pointer-events-none z-50"
            style={{
              background: 'rgba(14,14,14,0.95)',
              border: `1px solid ${popupColor}30`,
              backdropFilter: 'blur(20px)',
              boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${popupColor}15`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${popupColor}15`, border: `1px solid ${popupColor}30` }}>
                {icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{popupTitle}</p>
                <p className="text-[10px] font-bold" style={{ color: popupColor, fontFamily: 'var(--font-mono)' }}>{count} {subscribers}</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed">{popupDesc}</p>
            <div className="mt-2.5 flex items-center gap-1" style={{ color: popupColor }}>
              <span className="text-[9px] font-medium" style={{ fontFamily: 'var(--font-mono)' }}>{openChannel}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const screenshots = [
  { src: '/subeasy-1.png', x: -220, y: -60,  rotate: -18 },
  { src: '/subeasy-2.png', x: -160, y: -190, rotate: -10 },
  { src: '/subeasy-3.png', x: -40,  y: -230, rotate: -3  },
  { src: '/subeasy-4.png', x: 100,  y: -210, rotate: 5   },
  { src: '/subeasy-5.png', x: 200,  y: -140, rotate: 13  },
  { src: '/subeasy-6.png', x: 240,  y: -10,  rotate: 20  },
];

function SubEasyCard() {
  const [hovered, setHovered] = useState(false);
  const { t, hf } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-[340px] flex-shrink-0 lg:mr-24 relative mx-auto lg:mx-0"
      style={{ overflow: 'visible' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fan screenshots */}
      {screenshots.map((s, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-[155px] pointer-events-none"
          style={{ translateX: '-50%', translateY: '-50%', zIndex: 10 + i }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.85 }}
          animate={
            hovered
              ? { x: s.x, y: s.y, rotate: s.rotate, opacity: 1, scale: 1 }
              : { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.85 }
          }
          transition={{ duration: 0.5, delay: hovered ? i * 0.07 : (2 - i) * 0.04, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={`SubEasy screen ${i + 1}`} className="w-full h-auto block" />
          </div>
        </motion.div>
      ))}

      {/* Card itself scales on hover — fully clickable */}
      <motion.a
        href="https://subeasy.org"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="block cursor-pointer"
      >
      <div
        className="rounded-2xl p-5"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-gray-500"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t.hero.currentlyBuilding}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
              {t.hero.live}
            </span>
          </span>
        </div>

        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <p className="text-white font-semibold text-base leading-tight" style={{ fontFamily: hf }}>
              SubEasy
            </p>
            <p className="text-gray-500 text-xs mt-0.5">{t.hero.subeasy_sub}</p>
          </div>
          <a
            href="https://subeasy.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00E5FF] transition-colors mt-0.5 flex-shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mb-1.5">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>{t.hero.linesOfCode}</span>
            <span className="text-[10px] text-[#00E5FF]" style={{ fontFamily: 'var(--font-mono)' }}>18K+</span>
          </div>
          <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #00E5FF, #2DD4BF)' }}
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <span className="px-2 py-0.5 text-[9px] rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] text-[#00E5FF]" style={{ fontFamily: 'var(--font-mono)' }}>
            Telegram App Center ✓
          </span>
        </div>
      </div>
      </motion.a>
    </motion.div>
  );
}

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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
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
        className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 md:pb-24 pt-32"
        style={{ opacity: contentOpacity, y: contentY, willChange: 'transform, opacity' }}
      >
        {/* Row 1: heading left + SubEasy right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mb-10">

          {/* Left: eyebrow + heading + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
            style={{ scale: headingScale, transformOrigin: 'left bottom', willChange: 'transform' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#00E5FF]" style={{ fontFamily: 'var(--font-mono)' }}>
                {t.hero.badge}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-8 max-w-2xl"
              style={{ fontFamily: hf }}
            >
              {t.hero.h1_line1}
              <br />
              <span className="text-[#00E5FF]">{t.hero.h1_accent1}</span> {t.hero.h1_line2}{' '}
              <span className="text-[#00E5FF]">{t.hero.h1_accent2}</span>
            </h1>

            <p
              className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Right: SubEasy card */}
          <SubEasyCard />
        </div>

        {/* Row 2: buttons LEFT + audience RIGHT — full width */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          {/* Buttons */}
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

          {/* Audience — right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-2 sm:gap-4 lg:mr-24 overflow-x-auto pb-1 no-scrollbar"
          >
            <span
              className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-gray-500 mr-2 flex-shrink-0"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t.hero.audience}
            </span>

            {/* YouTube */}
            <SocialPill
              href="https://www.youtube.com/@byArtoCrypto"
              pillClass="social-pill-yt"
              icon={<svg className="w-3.5 h-3.5 text-[#ff4444] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
              count="22K"
              label="YouTube"
              popupTitle="byArto Crypto"
              popupDesc={t.hero.yt_desc}
              popupColor="#ff4444"
              openChannel={t.hero.openChannel}
              subscribers={t.hero.subscribers}
            />

            {/* Telegram */}
            <SocialPill
              href="https://t.me/byarto1"
              pillClass="social-pill-tg"
              icon={<Send className="w-3.5 h-3.5 text-[#29b6f6] flex-shrink-0" />}
              count="6K"
              label="Telegram"
              popupTitle={t.hero.tg_title}
              popupDesc={t.hero.tg_desc}
              popupColor="#29b6f6"
              openChannel={t.hero.openChannel}
              subscribers={t.hero.subscribers}
            />

            {/* X */}
            <SocialPill
              href="https://x.com/byArtoCrypto"
              pillClass="social-pill-x"
              icon={<svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
              count="1.4K"
              label="X / Twitter"
              popupTitle="@byArtoCrypto"
              popupDesc={t.hero.x_desc}
              popupColor="#e2e8f0"
              openChannel={t.hero.openChannel}
              subscribers={t.hero.subscribers}
            />

            {/* Total */}
            <div className="flex items-baseline gap-1 pl-2 flex-shrink-0">
              <span className="hidden sm:inline text-[10px] text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>Total</span>
              <span className="text-sm font-bold text-[#00E5FF]" style={{ fontFamily: 'var(--font-mono)' }}>~30K+</span>
            </div>
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
