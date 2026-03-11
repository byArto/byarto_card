'use client';

const techs = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Telegram Mini Apps',
  'GSAP',
  'Cursor',
  'Claude',
  'Tailwind CSS',
  'FastAPI',
  'SQLite',
  'Framer Motion',
];

export function TechMarquee() {
  return (
    <section className="py-12 border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <div key={`${tech}-${i}`} className="flex items-center gap-8 px-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/40 flex-shrink-0" />
              <span
                className="text-lg md:text-xl font-medium text-gray-500 whitespace-nowrap hover:text-[#00E5FF] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechMarquee;
