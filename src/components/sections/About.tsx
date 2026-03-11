'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLang } from '@/contexts/LangContext';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, hf } = useLang();

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
            className="text-xs tracking-[0.3em] uppercase text-[#00E5FF]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t.about.label}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,229,255,0.2)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-300"
              style={{ fontFamily: hf }}
            >
              {t.about.p1_pre}{' '}
              <span className="text-white font-medium">byArto</span>. {t.about.p1_since}{' '}
              <span className="text-[#00E5FF] font-medium">{t.about.p1_year}</span>{' '}
              {t.about.p1_content}{' '}
              <span className="text-white font-medium">{t.about.p1_audience}</span>{t.about.p1_partner}{' '}
              <span className="text-white font-medium">BingX</span>{t.about.p1_end}
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6"
              style={{ fontFamily: hf }}
            >
              {t.about.p2_pre}{' '}
              <span className="text-[#00E5FF] font-medium">{t.about.p2_product}</span>{t.about.p2_mid}{' '}
              <span className="text-white font-medium">{t.about.p2_platform}</span>{t.about.p2_end}
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-400 mt-6"
              style={{ fontFamily: hf }}
            >
              {t.about.p3}
            </p>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[rgba(0,229,255,0.06)] blur-2xl scale-110" />
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-[rgba(0,229,255,0.12)]" />
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
