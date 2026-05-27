'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLang } from '@/contexts/LangContext';

/** Theme-aware text accents via CSS vars. */
const ACCENT_CYAN = 'text-[color:var(--accent)] font-medium';
const ACCENT_WHITE = 'text-[color:var(--text-primary)] font-medium';
const ACCENT_SOFT = 'text-[color:var(--text-secondary)]';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, t, hf } = useLang();

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
          >
            {t.about.label}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, var(--accent-border), transparent)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {lang === 'ru' ? (
              <>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-secondary)]" style={{ fontFamily: hf }}>
                  Меня зовут Артур, в сети — <span className={ACCENT_WHITE}>byArto</span>.{' '}
                  <span className={ACCENT_CYAN}>AI-Powered Fullstack-разработчик</span>. Работаю по методологии AI-powered development: мульти-агентный воркфлоу{' '}
                  <span className={ACCENT_SOFT}>(Cursor + Claude Code + Codex)</span>, оркестрация LLM под задачу, архитектура до кода.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-secondary)]" style={{ fontFamily: hf }}>
                  За год — <span className={ACCENT_WHITE}>6+ задеплоенных продуктов</span>.{' '}
                  <span className={ACCENT_CYAN}>SubEasy</span> в{' '}
                  <span className={ACCENT_WHITE}>Telegram App Center</span> с платящими пользователями.{' '}
                  <span className={ACCENT_CYAN}>BizzBot</span> — B2B-ассистент на Claude API с RAG, роль{' '}
                  <span className={ACCENT_WHITE}>Co-founder & CTO</span>. Коммерческая разработка в найме под{' '}
                  <span className={ACCENT_WHITE}>NDA</span>: Telegram Mini Apps, RAG-боты, маркетплейсы, парсеры.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-tertiary)]" style={{ fontFamily: hf }}>
                  До разработки — 5 лет в Web3-медиа (<span className={ACCENT_WHITE}>30K+</span> аудитории, партнёр{' '}
                  <span className={ACCENT_WHITE}>BingX</span>). Поэтому понимаю не только код, но и продуктовую боль конечного пользователя.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-secondary)]" style={{ fontFamily: hf }}>
                  My name is Artur, online — <span className={ACCENT_WHITE}>byArto</span>.{' '}
                  <span className={ACCENT_CYAN}>AI-Powered Fullstack Developer</span>. I work with an AI-powered development methodology: multi-agent workflow{' '}
                  <span className={ACCENT_SOFT}>(Cursor + Claude Code + Codex)</span>, LLM orchestration per task, architecture before code.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-secondary)]" style={{ fontFamily: hf }}>
                  In the past year — <span className={ACCENT_WHITE}>6+ deployed products</span>.{' '}
                  <span className={ACCENT_CYAN}>SubEasy</span> is live in the{' '}
                  <span className={ACCENT_WHITE}>Telegram App Center</span> with paying users.{' '}
                  <span className={ACCENT_CYAN}>BizzBot</span> — a B2B assistant on Claude API with RAG, role{' '}
                  <span className={ACCENT_WHITE}>Co-founder & CTO</span>. Commercial development under an{' '}
                  <span className={ACCENT_WHITE}>NDA</span> contract: Telegram Mini Apps, RAG bots, marketplace integrations, parsers.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[color:var(--text-tertiary)]" style={{ fontFamily: hf }}>
                  Before development — 5 years in Web3 media (<span className={ACCENT_WHITE}>30K+</span> audience,{' '}
                  <span className={ACCENT_WHITE}>BingX</span> partner). That's why I understand not just code, but the product pain of the end user.
                </p>
              </>
            )}
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl scale-110"
                style={{ background: 'var(--accent-glow)' }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ border: '1px solid var(--accent-border)' }}
              />
              <Image
                src="/IMG_4754.JPG"
                alt="Artur byArto"
                fill
                className="object-cover object-top rounded-2xl grayscale"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
