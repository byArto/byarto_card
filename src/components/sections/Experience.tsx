'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useLang } from '@/contexts/LangContext';
import { useTheme } from '@/contexts/ThemeContext';

const GhostCursor = dynamic(() => import('@/components/ui/GhostCursor'), { ssr: false });

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

type StackPalette = { accent: string; bg: string; border: string };

function getStackColors(isLight: boolean): Record<string, StackPalette> {
  if (isLight) {
    return {
      Code:  { accent: '#0891b2', bg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.22)' },
      AI:    { accent: '#7c3aed', bg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.22)' },
      Infra: { accent: '#059669', bg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.22)' },
      'Integrations & QA': { accent: '#b45309', bg: 'rgba(180,83,9,0.07)', border: 'rgba(180,83,9,0.22)' },
      'Интеграции и QA':   { accent: '#b45309', bg: 'rgba(180,83,9,0.07)', border: 'rgba(180,83,9,0.22)' },
    };
  }
  return {
    Code:  { accent: '#00E5FF', bg: 'rgba(0,229,255,0.06)', border: 'rgba(0,229,255,0.18)' },
    AI:    { accent: '#A78BFA', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.18)' },
    Infra: { accent: '#34D399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.18)' },
    'Integrations & QA': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.18)' },
    'Интеграции и QA':   { accent: '#F59E0B', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.18)' },
  };
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t, hf } = useLang();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const workflow = t.experience.workflow;
  const timeline = t.experience.timeline;
  const stack = t.experience.stack;

  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase shrink-0"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
          >
            {t.experience.label}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, var(--accent-strong), transparent)' }}
          />
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Column 1 — How I Work */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{
              background: isLight ? 'var(--bg-surface)' : 'rgba(0, 229, 255, 0.04)',
              border: `1px solid ${isLight ? 'var(--border-default)' : 'rgba(0, 229, 255, 0.18)'}`,
            }}
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {!isLight && (
              <div className="hidden md:block">
                <GhostCursor color="#00E5FF" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
              </div>
            )}

            <span
              className="text-[11px] tracking-[0.25em] uppercase relative z-10"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
            >
              {t.experience.col_workflow}
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              {workflow.map((item) => (
                <div
                  key={item.num}
                  className="group rounded-xl p-4 transition-all duration-300"
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
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className="text-[10px] font-bold shrink-0 mt-0.5"
                      style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="text-sm font-semibold leading-snug"
                      style={{ fontFamily: hf, color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed pl-[22px]"
                    style={{ fontFamily: hf, color: 'var(--text-tertiary)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Experience timeline */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{
              background: isLight ? 'var(--bg-surface)' : 'rgba(255, 255, 255, 0.04)',
              border: `1px solid ${isLight ? 'var(--border-default)' : 'rgba(255, 255, 255, 0.1)'}`,
            }}
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {!isLight && (
              <div className="hidden md:block">
                <GhostCursor color="#A78BFA" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
              </div>
            )}

            {/* Timeline brand color: violet on dark, deeper violet on light */}
            {(() => {
              const PURPLE = isLight ? '#7c3aed' : '#A78BFA';
              const purpleSoft = isLight ? 'rgba(124,58,237,0.08)' : 'rgba(167,139,250,0.12)';
              const purpleLine = isLight ? 'rgba(124,58,237,0.18)' : 'rgba(167,139,250,0.15)';
              const purpleGlow = isLight ? 'rgba(124,58,237,0.35)' : 'rgba(167,139,250,0.7)';
              const purpleBorder = isLight ? 'rgba(124,58,237,0.45)' : 'rgba(167,139,250,0.6)';
              return (
                <>
                  <span
                    className="text-[11px] tracking-[0.25em] uppercase relative z-10"
                    style={{ fontFamily: 'var(--font-mono)', color: PURPLE }}
                  >
                    {t.experience.col_experience}
                  </span>

                  <div className="relative flex flex-col gap-0 z-10">
                    <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: purpleLine }} />

                    {timeline.map((item, i) => (
                      <div key={i} className="flex gap-4 pb-6 last:pb-0">
                        <div className="relative shrink-0 mt-[5px]">
                          <div
                            className="w-[11px] h-[11px] rounded-full"
                            style={{
                              background: item.current ? PURPLE : (isLight ? 'rgba(124,58,237,0.3)' : 'rgba(167,139,250,0.4)'),
                              border: `1px solid ${purpleBorder}`,
                              boxShadow: item.current ? `0 0 10px ${purpleGlow}` : 'none',
                            }}
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-[11px] tracking-widest"
                              style={{ color: PURPLE, fontFamily: 'var(--font-mono)' }}
                            >
                              {item.year}
                            </span>
                            {item.current && (
                              <span
                                className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full"
                                style={{
                                  background: purpleSoft,
                                  border: `1px solid ${purpleBorder}`,
                                  color: PURPLE,
                                  fontFamily: 'var(--font-mono)',
                                }}
                              >
                                <span className="w-1 h-1 rounded-full animate-pulse inline-block" style={{ background: PURPLE }} />
                                now
                              </span>
                            )}
                          </div>
                          <span
                            className="text-sm leading-relaxed"
                            style={{ fontFamily: hf, color: 'var(--text-secondary)' }}
                          >
                            {item.text}
                          </span>
                          {item.note && (
                            <span
                              className="text-[11px] leading-relaxed italic mt-1"
                              style={{ fontFamily: hf, color: 'var(--text-muted)' }}
                            >
                              {item.note}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Web3 background note */}
                    <div
                      className="mt-4 rounded-xl p-4"
                      style={{
                        background: isLight ? 'rgba(31,30,29,0.03)' : 'rgba(255,255,255,0.02)',
                        border: `1px solid ${isLight ? 'var(--border-subtle)' : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      <p
                        className="text-xs leading-relaxed"
                        style={{ fontFamily: hf, color: 'var(--text-muted)' }}
                      >
                        {t.experience.web3_bg_note}
                      </p>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>

          {/* Column 3 — Stack (Code / AI / Infra) */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{
              background: isLight ? 'var(--bg-surface)' : 'rgba(0, 180, 160, 0.05)',
              border: `1px solid ${isLight ? 'var(--border-default)' : 'rgba(0, 200, 180, 0.18)'}`,
            }}
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {!isLight && (
              <div className="hidden md:block">
                <GhostCursor color="#34D399" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
              </div>
            )}

            <span
              className="text-[11px] tracking-[0.25em] uppercase relative z-10"
              style={{ fontFamily: 'var(--font-mono)', color: isLight ? '#059669' : '#34D399' }}
            >
              {t.experience.col_stack}
            </span>

            <div className="flex flex-col gap-5 relative z-10">
              {(() => {
                const stackColors = getStackColors(isLight);
                return stack.map((group) => {
                  const colors = stackColors[group.label] ?? {
                    accent: isLight ? '#059669' : '#34D399',
                    bg: isLight ? 'rgba(5,150,105,0.07)' : 'rgba(52,211,153,0.06)',
                    border: isLight ? 'rgba(5,150,105,0.22)' : 'rgba(52,211,153,0.18)',
                  };
                return (
                  <div key={group.label} className="flex flex-col gap-2">
                    {/* Group label with colored dot */}
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: colors.accent, boxShadow: `0 0 6px ${colors.accent}80` }}
                      />
                      <span
                        className="text-[10px] tracking-[0.22em] uppercase font-medium"
                        style={{ color: colors.accent, fontFamily: 'var(--font-mono)' }}
                      >
                        {group.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-3.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-md"
                          style={{
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: 'var(--text-secondary)',
                            fontFamily: hf,
                            lineHeight: '1.4',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
                });
              })()}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
