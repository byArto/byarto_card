'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap, Globe, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useLang } from '@/contexts/LangContext';

const icons = [Zap, Globe, Trophy];
const accents = ['#A78BFA', '#34D399', '#F59E0B'];
const images = ['/alphascanner.png', '/nft.png', '/vibeathon.png'];
const BIZZBOT_SITE_URL = 'https://bizzbot.ru';
const BIZZBOT_DEMO_URL = 'https://t.me/BeautyProDemo_bot';

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t, hf } = useLang();
  const bizzbot = t.products.bizzbot;

  const compactProjects = t.products.compact.map((p, i) => ({
    ...p,
    icon: icons[i],
    accent: accents[i],
    image: images[i],
  }));

  return (
    <section id="products" className="py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#00E5FF] shrink-0"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t.products.label}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,229,255,0.25)] to-transparent" />
        </motion.div>

        {/* Hero card — SubEasy */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-5 relative"
          style={{
            background: 'rgba(0, 229, 255, 0.03)',
            border: '1px solid rgba(0, 229, 255, 0.18)',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle gradient bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Content */}
            <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                {/* Tag */}
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase bg-[rgba(0,229,255,0.1)] text-[#00E5FF] rounded-full border border-[rgba(0,229,255,0.25)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {t.products.flagship_tag}
                  </span>
                  <span
                    className="text-[10px] tracking-widest uppercase text-gray-500"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {t.products.flagship_sub}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-3 leading-none"
                    style={{ fontFamily: hf }}
                  >
                    <span className="text-white">Sub</span><span style={{ color: '#4ADE80' }}>Easy</span>
                  </h2>
                  <p
                    className="text-base text-gray-400 leading-relaxed max-w-md"
                    style={{ fontFamily: hf }}
                  >
                    {t.products.subeasy_desc}
                  </p>
                </div>

                {/* Key facts */}
                <div className="flex flex-col gap-2.5">
                  {t.products.subeasy_facts.map((fact) => (
                    <div key={fact} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: '#00E5FF', boxShadow: '0 0 6px rgba(0,229,255,0.8)' }}
                      />
                      <span
                        className="text-sm text-gray-300"
                        style={{ fontFamily: hf }}
                      >
                        {fact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: link + stack */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://subeasy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium group w-fit"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem' }}
                >
                  <span className="shimmer-link">subeasy.org</span>
                  <ExternalLink className="w-4 h-4 text-[#00E5FF] opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex flex-wrap gap-2">
                  {['Python', 'aiogram', 'SQLite', 'Telegram Bot API'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full text-gray-400"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Screenshots */}
            <div className="relative flex items-center justify-center p-8 md:p-10 lg:py-12 lg:pr-12 lg:pl-6 overflow-hidden">

              {/* Ambient top glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0,229,255,0.07) 0%, transparent 70%)',
                }}
              />

              {/* Floor glow — cyan left, green right */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: '0',
                  left: '5%',
                  width: '45%',
                  height: '45%',
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.18) 0%, transparent 70%)',
                  filter: 'blur(18px)',
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: '0',
                  right: '5%',
                  width: '45%',
                  height: '45%',
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(74,222,128,0.15) 0%, transparent 70%)',
                  filter: 'blur(18px)',
                }}
              />

              {/* Two phone screenshots */}
              <div className="relative flex items-end justify-center gap-2 w-full max-w-[380px] mx-auto">
                {/* Back screenshot */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: '46%',
                    aspectRatio: '9 / 19.5',
                    borderRadius: '12%',
                    transform: 'translateY(24px) rotate(-5deg)',
                    boxShadow: '0 0 0 1.5px rgba(0,229,255,0.55), 0 0 16px 4px rgba(0,229,255,0.22), 0 24px 48px rgba(0,0,0,0.8)',
                  }}
                >
                  <Image
                    src="/2.png"
                    alt="SubEasy Detail"
                    fill
                    className="object-cover"
                    sizes="160px"
                    style={{ transform: 'scale(1.09)', transformOrigin: 'center center' }}
                  />
                </div>

                {/* Front screenshot */}
                <div
                  className="relative overflow-hidden z-10"
                  style={{
                    width: '54%',
                    aspectRatio: '9 / 19.5',
                    borderRadius: '12%',
                    transform: 'rotate(3deg)',
                    boxShadow: '0 0 0 1.5px rgba(74,222,128,0.6), 0 0 18px 5px rgba(74,222,128,0.2), 0 32px 56px rgba(0,0,0,0.85)',
                  }}
                >
                  <Image
                    src="/1.png"
                    alt="SubEasy Subscriptions"
                    fill
                    className="object-cover"
                    sizes="185px"
                    style={{ transform: 'scale(1.03)', transformOrigin: 'center center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary cases — BizzBot accent card + compact project column */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.95fr] gap-4">
          <motion.article
            className="relative overflow-hidden rounded-[28px]"
            style={{
              background: 'linear-gradient(140deg, rgba(28,24,22,0.98) 0%, rgba(18,17,17,0.98) 52%, rgba(58,34,21,0.95) 100%)',
              border: '1px solid rgba(201,90,40,0.22)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 14% 18%, rgba(255,255,255,0.06) 0%, transparent 26%), radial-gradient(circle at 82% 18%, rgba(201,90,40,0.14) 0%, transparent 26%), radial-gradient(circle at 72% 88%, rgba(255,213,181,0.1) 0%, transparent 24%)',
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0 h-full">
              <div className="p-7 md:p-8 lg:p-9 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0"
                        style={{
                          background: 'rgba(255,248,240,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: '0 12px 28px rgba(0,0,0,0.28)',
                        }}
                      >
                        <Image
                          src="/bizzbot-logo.png"
                          alt="BizzBot logo"
                          fill
                          className="object-contain p-2.5"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex flex-col gap-1 min-w-0">
                        <span
                          className="text-[10px] tracking-[0.22em] uppercase"
                          style={{ color: '#F3D4C0', fontFamily: 'var(--font-mono)' }}
                        >
                          {bizzbot.badge}
                        </span>
                        <span
                          className="text-xs text-[#C5B5A9]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {bizzbot.role}
                        </span>
                      </div>
                    </div>

                    <span
                      className="px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase rounded-full whitespace-nowrap"
                      style={{
                        color: '#F5A06E',
                        background: 'rgba(201,90,40,0.14)',
                        border: '1px solid rgba(201,90,40,0.24)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {bizzbot.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3
                        className="text-4xl md:text-[3.25rem] font-bold leading-none mb-2.5 text-white"
                        style={{ fontFamily: hf }}
                      >
                        BizzBot
                      </h3>
                      <p
                        className="text-sm uppercase tracking-[0.26em]"
                        style={{ color: '#D78556', fontFamily: 'var(--font-mono)' }}
                      >
                        {bizzbot.subtitle}
                      </p>
                    </div>

                    <p
                      className="text-[15px] md:text-base leading-relaxed max-w-xl"
                      style={{ color: '#D2C6BE', fontFamily: hf }}
                    >
                      {bizzbot.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    {bizzbot.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full shrink-0 mt-2"
                          style={{
                            background: '#D78556',
                            boxShadow: '0 0 12px rgba(215,133,86,0.45)',
                          }}
                        />
                        <span
                          className="text-sm md:text-[15px] leading-relaxed"
                          style={{ color: '#EFE7E0', fontFamily: hf }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2.5">
                    {bizzbot.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1.5 text-[11px] rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#DDD4CD',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={BIZZBOT_SITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                      style={{
                        color: '#fff',
                        background: 'linear-gradient(135deg, #C95A28 0%, #E07D43 100%)',
                        boxShadow: '0 16px 30px rgba(201,90,40,0.24)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <span>{bizzbot.primary_cta}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={BIZZBOT_DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm transition-colors"
                      style={{ color: '#D7B39A', fontFamily: 'var(--font-mono)' }}
                    >
                      <span>{bizzbot.secondary_cta}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative p-5 md:p-6 lg:p-7 pt-0 lg:pt-7">
                <div
                  data-bizzbot-right-stack
                  className="grid grid-cols-1 auto-rows-fr gap-4 min-h-[420px] md:min-h-[520px] lg:min-h-full h-full"
                >
                  <div
                    data-bizzbot-offer-card
                    className="relative overflow-hidden rounded-[28px] p-4 md:p-5"
                    style={{
                      background: 'linear-gradient(180deg, rgba(250,245,239,0.98) 0%, rgba(236,228,220,0.94) 100%)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      boxShadow: '0 18px 40px rgba(0,0,0,0.16)',
                    }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 12% 12%, rgba(255,255,255,0.66) 0%, transparent 24%), radial-gradient(circle at 85% 16%, rgba(201,90,40,0.12) 0%, transparent 22%)',
                      }}
                    />

                    <div className="relative flex items-center justify-between gap-3 mb-4">
                      <span
                        className="text-[10px] uppercase tracking-[0.24em]"
                        style={{ color: '#8C5A40', fontFamily: 'var(--font-mono)' }}
                      >
                        {bizzbot.offer_panel_label}
                      </span>
                      <div className="flex flex-wrap justify-end gap-2">
                        {bizzbot.chips.slice(0, 3).map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] rounded-full"
                            style={{
                              color: '#46352C',
                              background: 'rgba(255,255,255,0.52)',
                              border: '1px solid rgba(70,53,44,0.08)',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="relative rounded-[22px] overflow-hidden h-[220px] md:h-[250px] lg:h-[265px]"
                      style={{
                        background: 'rgba(255,255,255,0.55)',
                        boxShadow: 'inset 0 0 0 1px rgba(70,53,44,0.06)',
                      }}
                    >
                      <Image
                        src="/bizzbot-offer.png"
                        alt="BizzBot product offer"
                        fill
                        className="object-contain"
                        sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
                      />
                    </div>
                  </div>

                  <div
                    data-bizzbot-chat-card
                    className="relative overflow-hidden rounded-[28px] p-5 md:p-6"
                    style={{
                      background: 'linear-gradient(160deg, rgba(17,15,15,0.96) 0%, rgba(28,22,19,0.98) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 18px 42px rgba(0,0,0,0.22)',
                    }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 20% 18%, rgba(215,133,86,0.12) 0%, transparent 26%), radial-gradient(circle at 80% 86%, rgba(255,255,255,0.06) 0%, transparent 24%)',
                      }}
                    />

                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-[0.24em] mb-2"
                            style={{ color: '#D78556', fontFamily: 'var(--font-mono)' }}
                          >
                            {bizzbot.chat_panel_label}
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: '#EFE6DE', fontFamily: hf }}
                          >
                            {bizzbot.chat_panel_note}
                          </p>
                        </div>

                        <span
                          className="px-3 py-1 text-[10px] rounded-full uppercase tracking-[0.18em]"
                          style={{
                            color: '#E8D7CB',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          Telegram
                        </span>
                      </div>

                      <div className="flex-1 flex items-center justify-center pt-5 pb-1">
                        <div
                          className="relative w-[160px] md:w-[182px] lg:w-[194px] aspect-[9/16] rounded-[28px] overflow-hidden"
                          style={{
                            background: '#120f0e',
                            border: '1.5px solid rgba(242,194,162,0.68)',
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 54px rgba(0,0,0,0.5), 0 0 34px rgba(201,90,40,0.18)',
                          }}
                        >
                          <Image
                            src="/bizzbot-chat.jpg"
                            alt="BizzBot Telegram dialogue"
                            fill
                            className="object-cover"
                            sizes="194px"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
            {compactProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  className="group rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.3s ease',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.18 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ borderColor: `${project.accent}40` }}
                >
                  {/* Hover background screenshot */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-contain object-right-bottom"
                      sizes="400px"
                      style={{ transform: 'scale(0.7)', transformOrigin: 'right bottom' }}
                    />
                    {/* Gradient mask — left fade for text readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(105deg, rgba(10,10,10,1) 30%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.2) 100%)',
                      }}
                    />
                    {/* Gradient mask — top fade */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 25%, transparent 55%)',
                      }}
                    />
                  </div>

                  {/* Icon + tag */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: project.accent }} />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-gray-500"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: hf }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                      style={{ fontFamily: hf }}
                    >
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GitHub footnote */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-[11px] text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>
            {t.products.github_note}
          </span>
          <a
            href="https://github.com/byArto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/byArto
          </a>
        </div>

      </div>
    </section>
  );
}

export default Products;
