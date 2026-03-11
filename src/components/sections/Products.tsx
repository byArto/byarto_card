'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap, Globe, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useLang } from '@/contexts/LangContext';

const icons = [Zap, Globe, Trophy];
const accents = ['#A78BFA', '#34D399', '#F59E0B'];
const images = ['/alphascanner.png', '/nft.png', '/vibeathon.png'];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t, hf } = useLang();

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

        {/* Compact cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                      background: `linear-gradient(105deg, rgba(10,10,10,1) 30%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.2) 100%)`,
                    }}
                  />
                  {/* Gradient mask — top fade */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 25%, transparent 55%)`,
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
