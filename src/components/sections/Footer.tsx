'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail } from 'lucide-react';
import FooterAmbient from '../ui/FooterAmbient';
import { useLang } from '@/contexts/LangContext';

const socials = [
  {
    label: 'Telegram',
    href: 'https://t.me/by_arto',
    icon: <Send className="w-5 h-5" />,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/byArtoCrypto',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [copied, setCopied] = useState(false);
  const { t, hf } = useLang();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bisayzov@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden"
      ref={ref}
    >
      {/* FooterAmbient — slow drifting aurora orbs, replaces WebGL LightRays */}
      <FooterAmbient />

      {/* Top fade — smooth transition from page above */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.7) 50%, transparent 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Headline + pitch */}
          <div className="flex flex-col gap-7">
            {/* Section label */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#00E5FF] shrink-0"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {t.footer.label}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,229,255,0.25)] to-transparent" />
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[#4ADE80]"
                style={{
                  background: 'rgba(74,222,128,0.08)',
                  border: '1px solid rgba(74,222,128,0.2)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"
                  style={{ boxShadow: '0 0 6px rgba(74,222,128,0.9)', animation: 'pulse 2s infinite' }}
                />
                {t.footer.available}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: hf }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {t.footer.headline1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2DD4BF]">
                {t.footer.headline2}
              </span>
            </motion.h2>

            {/* Pitch */}
            <motion.p
              className="text-sm text-gray-500 leading-relaxed max-w-sm"
              style={{ fontFamily: hf }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.footer.pitch}
            </motion.p>
          </div>

          {/* Right — Contact methods */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Email CTA — click to copy */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 w-full text-left cursor-pointer"
              style={{
                background: copied ? 'rgba(74,222,128,0.06)' : 'rgba(0,229,255,0.04)',
                border: `1px solid ${copied ? 'rgba(74,222,128,0.35)' : 'rgba(0,229,255,0.15)'}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  background: copied ? 'rgba(74,222,128,0.12)' : 'rgba(0,229,255,0.1)',
                  border: `1px solid ${copied ? 'rgba(74,222,128,0.3)' : 'rgba(0,229,255,0.2)'}`,
                }}
              >
                <Mail className="w-4 h-4 transition-colors duration-300" style={{ color: copied ? '#4ADE80' : '#00E5FF' }} />
              </div>
              <div className="flex flex-col flex-1">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase mb-0.5 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mono)', color: copied ? '#4ADE80' : '#6B7280' }}
                >
                  {copied ? t.footer.copied : t.footer.email_label}
                </span>
                <span
                  className="text-sm transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mono)', color: copied ? '#4ADE80' : '#E5E7EB' }}
                >
                  bisayzov@gmail.com
                </span>
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-gray-600"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {t.footer.divider}
              </span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
            </div>

            {/* Social links — stacked */}
            <div className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 w-full"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  whileHover={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(255,255,255,0.14)',
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                >
                  {s.icon}
                  <span style={{ fontFamily: hf, fontSize: '1rem', fontWeight: 500 }}>
                    {s.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 pb-8 flex justify-center">
        <p
          className="text-xs text-gray-600 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
