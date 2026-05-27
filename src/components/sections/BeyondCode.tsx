'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Send, ExternalLink } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

interface PlatformCardProps {
  href?: string;
  icon: React.ReactNode;
  color: string;
  count: string;
  label: string;
  caption: string;
}

function PlatformCard({ href, icon, color, count, label, caption }: PlatformCardProps) {
  const card = (
    <div
      className="rounded-xl p-4 md:p-5 flex flex-col gap-4 h-full transition-all duration-300"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${color}55`;
        (e.currentTarget as HTMLElement).style.background = `${color}08`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
        (e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)';
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            {icon}
          </div>
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
          >
            {label}
          </span>
        </div>
        {href && <ExternalLink className="w-3.5 h-3.5" style={{ color: 'var(--text-faint)' }} />}
      </div>
      <div className="flex flex-col gap-1">
        <span
          className="text-2xl font-bold leading-none"
          style={{ color, fontFamily: 'var(--font-mono)' }}
        >
          {count}
        </span>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {caption}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }
  return card;
}

export function BeyondCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang, hf } = useLang();
  // theme is read in PlatformCard children via CSS variables — no direct branching here

  const YT_ICON = (
    <svg className="w-4 h-4 text-[#ff4444]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
  const TG_ICON = <Send className="w-4 h-4 text-[#29b6f6]" />;
  const X_ICON = (
    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
  const BINGX_ICON = (
    <Image
      src="/bingx-logo.svg"
      alt="BingX"
      width={24}
      height={24}
      className="w-6 h-6 rounded-md"
    />
  );

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase shrink-0"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
          >
            {lang === 'ru' ? '// Бэкграунд' : '// Beyond Code'}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, var(--accent-strong), transparent)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center">
          {/* Left — quote */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {lang === 'ru' ? (
              <>
                <h2
                  className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold leading-[1.1]"
                  style={{ fontFamily: hf, color: 'var(--text-primary)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>5 лет</span> строю медиа.<br />
                  Теперь строю и продукты.
                </h2>
                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ fontFamily: hf, color: 'var(--text-tertiary)' }}
                >
                  Параллельно с разработкой веду каналы в Web3 на 30K+ человек. Поэтому понимаю не только код, но и аудиторию, продуктовую боль и монетизацию. Web3-бэкграунд работает{' '}
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>на разработку</span>, а не вместо неё.
                </p>
              </>
            ) : (
              <>
                <h2
                  className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold leading-[1.1]"
                  style={{ fontFamily: hf, color: 'var(--text-primary)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>5 years</span> building media.<br />
                  Now building products too.
                </h2>
                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ fontFamily: hf, color: 'var(--text-tertiary)' }}
                >
                  In parallel with development, I run Web3 channels for 30K+ people. That&apos;s why I understand not just code, but audience, product pain and monetization. Web3 background works{' '}
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>for development</span>, not instead of it.
                </p>
              </>
            )}
          </motion.div>

          {/* Right — platform grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PlatformCard
              href="https://www.youtube.com/@byArtoCrypto"
              icon={YT_ICON}
              color="#ff4444"
              count="22K"
              label="YouTube"
              caption={lang === 'ru' ? '581 видео · 2.3M просмотров' : '581 videos · 2.3M views'}
            />
            <PlatformCard
              href="https://t.me/byarto1"
              icon={TG_ICON}
              color="#29b6f6"
              count="6K"
              label="Telegram"
              caption={lang === 'ru' ? 'Крипто-альфа · Web3-новости' : 'Crypto alpha · Web3 news'}
            />
            <PlatformCard
              href="https://x.com/byArtoCrypto"
              icon={X_ICON}
              color="#e2e8f0"
              count="1.4K"
              label="X / Twitter"
              caption="@byArtoCrypto"
            />
            <PlatformCard
              icon={BINGX_ICON}
              color="#2354E6"
              count={lang === 'ru' ? '3+ года' : '3+ years'}
              label={lang === 'ru' ? 'BingX Партнёр' : 'BingX Partner'}
              caption={lang === 'ru' ? 'Эксклюзивное партнёрство с крипто-биржей' : 'Exclusive partnership with crypto exchange'}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
