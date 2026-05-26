'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import FooterAmbient from '../ui/FooterAmbient';
import { useLang } from '@/contexts/LangContext';

const TG_URL = 'https://t.me/by_arto';
const X_URL = 'https://x.com/byArtoCrypto';
const EMAIL = 'bisayzov@gmail.com';

const XIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/** HUD-style corner brackets — 4 L-shaped accents at the corners of a card */
function HUDCorners({
  color = '#00E5FF',
  size = 14,
  offset = 10,
  thickness = 1.5,
}: {
  color?: string;
  size?: number;
  offset?: number;
  thickness?: number;
}) {
  const common = `absolute pointer-events-none`;
  const s = `${size}px`;
  const o = `${offset}px`;
  const t = `${thickness}px`;
  return (
    <>
      {/* TL */}
      <span
        className={common}
        style={{ top: o, left: o, width: s, height: s, borderTop: `${t} solid ${color}`, borderLeft: `${t} solid ${color}` }}
        aria-hidden
      />
      {/* TR */}
      <span
        className={common}
        style={{ top: o, right: o, width: s, height: s, borderTop: `${t} solid ${color}`, borderRight: `${t} solid ${color}` }}
        aria-hidden
      />
      {/* BL */}
      <span
        className={common}
        style={{ bottom: o, left: o, width: s, height: s, borderBottom: `${t} solid ${color}`, borderLeft: `${t} solid ${color}` }}
        aria-hidden
      />
      {/* BR */}
      <span
        className={common}
        style={{ bottom: o, right: o, width: s, height: s, borderBottom: `${t} solid ${color}`, borderRight: `${t} solid ${color}` }}
        aria-hidden
      />
    </>
  );
}

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [copied, setCopied] = useState(false);
  const { t, hf } = useLang();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden"
      ref={ref}
    >
      <FooterAmbient />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.7) 50%, transparent 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — Headline + pitch + mini socials */}
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]"
              style={{ fontFamily: hf }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {t.footer.headline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2DD4BF]">
                {t.footer.headline2}
              </span>
            </motion.h2>

            {/* Pitch */}
            <motion.p
              className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-md"
              style={{ fontFamily: hf }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.footer.pitch}
            </motion.p>

            {/* Mini social icons row */}
            <motion.div
              className="flex items-center gap-3 mt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00E5FF] transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <Send className="w-[18px] h-[18px]" />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00E5FF] transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <XIcon className="w-[16px] h-[16px]" />
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00E5FF] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,229,255,0.35)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <Mail className="w-[18px] h-[18px]" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT — Email card + TG/X big square cards */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Email card */}
            <button
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 w-full text-left cursor-pointer overflow-hidden"
              style={{
                background: copied ? 'rgba(74,222,128,0.04)' : 'rgba(0,229,255,0.03)',
                border: `1px solid ${copied ? 'rgba(74,222,128,0.3)' : 'rgba(0,229,255,0.18)'}`,
              }}
            >
              <HUDCorners color={copied ? '#4ADE80' : '#00E5FF'} />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 relative z-10"
                style={{
                  background: copied ? 'rgba(74,222,128,0.1)' : 'rgba(0,229,255,0.08)',
                  border: `1px solid ${copied ? 'rgba(74,222,128,0.3)' : 'rgba(0,229,255,0.2)'}`,
                }}
              >
                <Mail className="w-4 h-4 transition-colors duration-300" style={{ color: copied ? '#4ADE80' : '#00E5FF' }} />
              </div>

              <div className="flex flex-col flex-1 relative z-10">
                <span
                  className="text-[10px] tracking-[0.22em] uppercase mb-1 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mono)', color: copied ? '#4ADE80' : '#6B7280' }}
                >
                  {copied ? t.footer.copied : t.footer.email_label}
                </span>
                <span
                  className="text-sm transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-mono)', color: copied ? '#4ADE80' : '#E5E7EB' }}
                >
                  {EMAIL}
                </span>
              </div>

              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                {copied ? (
                  <Check className="w-4 h-4 text-[#4ADE80]" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-600 group-hover:text-[#00E5FF] transition-colors" />
                )}
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[rgba(0,229,255,0.12)]" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-gray-600"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {`// ${t.footer.divider}`}
              </span>
              <div className="flex-1 h-px bg-[rgba(0,229,255,0.12)]" />
            </div>

            {/* TG + X big square cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Telegram */}
              <motion.a
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(0,229,255,0.025)',
                  border: '1px solid rgba(0,229,255,0.15)',
                }}
                whileHover={{
                  background: 'rgba(0,229,255,0.06)',
                  borderColor: 'rgba(0,229,255,0.4)',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <HUDCorners color="#00E5FF" size={16} offset={12} />

                <Send
                  className="w-14 h-14 text-[#00E5FF] mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(0,229,255,0.4))' }}
                />
                <span
                  className="text-base md:text-lg font-medium text-white relative z-10"
                  style={{ fontFamily: hf }}
                >
                  Telegram
                </span>

                <ArrowUpRight
                  className="absolute bottom-5 right-5 w-5 h-5 text-[#00E5FF] opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(0,229,255,0.025)',
                  border: '1px solid rgba(0,229,255,0.15)',
                }}
                whileHover={{
                  background: 'rgba(0,229,255,0.06)',
                  borderColor: 'rgba(0,229,255,0.4)',
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.42 }}
              >
                <HUDCorners color="#00E5FF" size={16} offset={12} />

                <XIcon className="w-12 h-12 text-[#00E5FF] mb-5 transition-transform duration-300 group-hover:scale-110" />
                <span
                  className="text-base md:text-lg font-medium text-white relative z-10"
                  style={{ fontFamily: hf }}
                >
                  X / Twitter
                </span>

                <ArrowUpRight
                  className="absolute bottom-5 right-5 w-5 h-5 text-[#00E5FF] opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
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
