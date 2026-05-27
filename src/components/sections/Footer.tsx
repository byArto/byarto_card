'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import FooterAmbient from '../ui/FooterAmbient';
import { useLang } from '@/contexts/LangContext';
import { useTheme } from '@/contexts/ThemeContext';

const TG_URL = 'https://t.me/by_arto';
const X_URL = 'https://x.com/byArtoCrypto';
const EMAIL = 'bisayzov@gmail.com';

const XIcon = ({
  className = 'w-5 h-5',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
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
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        // Fallback for non-secure contexts / older browsers
        const ta = document.createElement('textarea');
        ta.value = EMAIL;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail — user can still see the email and copy manually
    }
  };

  return (
    <footer
      id="contact"
      className="relative min-h-[75vh] flex flex-col justify-between overflow-hidden"
      ref={ref}
    >
      {/* Aurora orbs only on dark — too bright/colorful on cream */}
      {!isLight && <FooterAmbient />}

      {/* Subtle warm ambient on light theme */}
      {isLight && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 85%, rgba(217,119,87,0.08) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Top fade — page bg → transparent */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, var(--bg-base) 0%, color-mix(in srgb, var(--bg-base) 70%, transparent) 50%, transparent 100%)',
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
                className="text-xs tracking-[0.3em] uppercase shrink-0"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
              >
                {t.footer.label}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: 'linear-gradient(to right, var(--accent-strong), transparent)' }}
              />
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                style={{
                  color: isLight ? '#16a34a' : '#4ADE80',
                  background: isLight ? 'rgba(22,163,74,0.08)' : 'rgba(74,222,128,0.08)',
                  border: `1px solid ${isLight ? 'rgba(22,163,74,0.28)' : 'rgba(74,222,128,0.2)'}`,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: isLight ? '#16a34a' : '#4ADE80',
                    boxShadow: isLight ? '0 0 6px rgba(22,163,74,0.6)' : '0 0 6px rgba(74,222,128,0.9)',
                    animation: 'pulse 2s infinite',
                  }}
                />
                {t.footer.available}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]"
              style={{ fontFamily: hf, color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {t.footer.headline1}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: isLight
                    ? 'linear-gradient(to right, #d97757, #c95a28)'
                    : 'linear-gradient(to right, #00E5FF, #2DD4BF)',
                }}
              >
                {t.footer.headline2}
              </span>
            </motion.h2>

            {/* Pitch */}
            <motion.p
              className="text-sm md:text-[15px] leading-relaxed max-w-md"
              style={{ fontFamily: hf, color: 'var(--text-tertiary)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.footer.pitch}
            </motion.p>

          </div>

          {/* RIGHT — Email card + TG/X big square cards */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {(() => {
              const successColor = isLight ? '#16a34a' : '#4ADE80';
              const successSoft = isLight ? 'rgba(22,163,74,0.06)' : 'rgba(74,222,128,0.04)';
              const successBorder = isLight ? 'rgba(22,163,74,0.32)' : 'rgba(74,222,128,0.3)';
              const accentColor = isLight ? '#0891b2' : '#00E5FF';
              return (
                <>
                  {/* Email card */}
                  <button
                    onClick={handleCopyEmail}
                    className="group relative flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 w-full text-left cursor-pointer overflow-hidden"
                    style={{
                      background: copied ? successSoft : 'var(--accent-soft)',
                      border: `1px solid ${copied ? successBorder : 'var(--accent-border)'}`,
                    }}
                  >
                    <HUDCorners color={copied ? successColor : accentColor} />

                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 relative z-10"
                      style={{
                        background: copied ? `${successColor}1a` : 'var(--accent-soft)',
                        border: `1px solid ${copied ? successBorder : 'var(--accent-border)'}`,
                      }}
                    >
                      <Mail className="w-4 h-4 transition-colors duration-300" style={{ color: copied ? successColor : 'var(--accent)' }} />
                    </div>

                    <div className="flex flex-col flex-1 relative z-10">
                      <span
                        className="text-[10px] tracking-[0.22em] uppercase mb-1 transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-mono)', color: copied ? successColor : 'var(--text-muted)' }}
                      >
                        {copied ? t.footer.copied : t.footer.email_label}
                      </span>
                      <span
                        className="text-sm transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-mono)', color: copied ? successColor : 'var(--text-primary)' }}
                      >
                        {EMAIL}
                      </span>
                    </div>

                    <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      {copied ? (
                        <Check className="w-4 h-4" style={{ color: successColor }} />
                      ) : (
                        <Copy className="w-4 h-4 transition-colors" style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px" style={{ background: 'var(--accent-border)' }} />
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
                    >
                      {`// ${t.footer.divider}`}
                    </span>
                    <div className="flex-1 h-px" style={{ background: 'var(--accent-border)' }} />
                  </div>
                </>
              );
            })()}

            {/* TG + X big square cards — theme-aware via CSS vars */}
            <div className="grid grid-cols-2 gap-4">
              {([
                { url: TG_URL, label: 'Telegram', iconCls: 'w-14 h-14', icon: 'send', delay: 0.35 },
                { url: X_URL, label: 'X / Twitter', iconCls: 'w-12 h-12', icon: 'x', delay: 0.42 },
              ] as const).map((c) => (
                <motion.a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--accent-border)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-strong)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-border)';
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: c.delay }}
                >
                  <HUDCorners color={isLight ? '#0891b2' : '#00E5FF'} size={16} offset={12} />

                  {c.icon === 'send' ? (
                    <Send
                      className={`${c.iconCls} mb-5 transition-transform duration-300 group-hover:scale-110`}
                      style={{
                        color: 'var(--accent)',
                        filter: isLight ? 'none' : 'drop-shadow(0 0 12px rgba(0,229,255,0.4))',
                      }}
                    />
                  ) : (
                    <XIcon
                      className={`${c.iconCls} mb-5 transition-transform duration-300 group-hover:scale-110`}
                      style={{ color: 'var(--accent)' }}
                    />
                  )}
                  <span
                    className="text-base md:text-lg font-medium relative z-10"
                    style={{ fontFamily: hf, color: 'var(--text-primary)' }}
                  >
                    {c.label}
                  </span>

                  <ArrowUpRight
                    className="absolute bottom-5 right-5 w-5 h-5 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: 'var(--accent)' }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 pb-8 flex justify-center">
        <p
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
        >
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
