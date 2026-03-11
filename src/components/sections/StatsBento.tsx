'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Youtube, Users, Code2 } from 'lucide-react';
import DynamicCounter from '../ui/DynamicCounter';

const cards = [
  {
    icon: <Youtube className="w-6 h-6 text-[#00E5FF]" />,
    number: 30000,
    suffix: '+',
    label: 'Audience',
    description: 'YouTube, Telegram & X community focused on Crypto & AI.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: <Users className="w-6 h-6 text-[#00E5FF]" />,
    number: 5,
    suffix: '+',
    label: 'Years in Web3',
    description: 'Built a 6-channel ecosystem. BingX Partner.',
    span: 'col-span-1',
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#00E5FF]" />,
    number: 18000,
    suffix: '+',
    label: 'Lines of Code',
    description: 'Lines of Code shipped in the latest flagship AI product.',
    span: 'col-span-1',
  },
];

export function StatsBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-24 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            className={`glass-card rounded-2xl p-8 transition-all duration-300 ${card.span}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center">
                {card.icon}
              </div>
              <span
                className="text-xs tracking-widest uppercase text-gray-500"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {card.label}
              </span>
            </div>

            <DynamicCounter
              end={card.number}
              suffix={card.suffix}
              className="text-5xl md:text-6xl font-bold text-white block mb-4"
            />

            <p className="text-sm text-gray-400 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsBento;
