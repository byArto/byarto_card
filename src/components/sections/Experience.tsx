'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useLang } from '@/contexts/LangContext';

const GhostCursor = dynamic(() => import('@/components/ui/GhostCursor'), { ssr: false });

const columns = [
  {
    bg: 'rgba(0, 229, 255, 0.04)',
    border: 'rgba(0, 229, 255, 0.18)',
  },
  {
    bg: 'rgba(255, 255, 255, 0.04)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  {
    bg: 'rgba(0, 180, 160, 0.05)',
    border: 'rgba(0, 200, 180, 0.18)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t, hf } = useLang();

  const skills = t.experience.skills;
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
            className="text-xs tracking-[0.3em] uppercase text-[#00E5FF] shrink-0"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t.experience.label}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,229,255,0.25)] to-transparent" />
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Column 1 — Skills */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{ background: columns[0].bg, border: `1px solid ${columns[0].border}` }}
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="hidden md:block">
              <GhostCursor color="#00E5FF" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
            </div>
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[#00E5FF] relative z-10"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t.experience.col_skills}
            </span>

            <div className="flex flex-col gap-2.5 relative z-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-gray-300 px-4 py-2 rounded-lg"
                  style={{
                    border: '1px solid rgba(0,229,255,0.15)',
                    background: 'rgba(0,229,255,0.04)',
                    fontFamily: hf,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Experience timeline */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{ background: columns[1].bg, border: `1px solid ${columns[1].border}` }}
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="hidden md:block">
              <GhostCursor color="#A78BFA" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
            </div>
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[#A78BFA] relative z-10"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t.experience.col_experience}
            </span>

            <div className="relative flex flex-col gap-0 z-10">
              {/* Vertical line */}
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px"
                style={{ background: 'rgba(167,139,250,0.15)' }}
              />

              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 pb-5 last:pb-0">
                  {/* Dot — all glow */}
                  <div className="relative shrink-0 mt-[6px]">
                    <div
                      className="w-[11px] h-[11px] rounded-full"
                      style={{
                        background: '#A78BFA',
                        border: '1px solid rgba(167,139,250,0.6)',
                        boxShadow: '0 0 8px rgba(167,139,250,0.55)',
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    {item.year && (
                      <span
                        className="text-[11px] text-[#A78BFA] tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {item.year}
                      </span>
                    )}
                    <span
                      className="text-sm leading-relaxed text-gray-300"
                      style={{ fontFamily: hf }}
                    >
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3 — Stack */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
            style={{ background: columns[2].bg, border: `1px solid ${columns[2].border}` }}
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="hidden md:block">
              <GhostCursor color="#34D399" trailLength={40} inertia={0.6} bloomStrength={0.3} bloomRadius={2.0} bloomThreshold={0} fadeDelayMs={300} fadeDurationMs={1500} brightness={0.9} zIndex={0} />
            </div>
            <span
              className="text-[11px] tracking-[0.25em] uppercase text-[#34D399] relative z-10"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t.experience.col_stack}
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              {stack.map((group) => (
                <div key={group.label} className="flex flex-col gap-1.5">
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase text-gray-500"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-gray-300 px-2.5 py-1 rounded-md"
                        style={{
                          border: '1px solid rgba(0,200,180,0.15)',
                          background: 'rgba(0,200,180,0.04)',
                          fontFamily: hf,
                          lineHeight: '1.4',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
