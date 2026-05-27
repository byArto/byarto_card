'use client';

const techs = [
  // Code / Frontend
  'TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'Vite',
  // Backend / Languages
  'Python', 'Node.js', 'FastAPI', 'Express', 'aiogram', 'Telegraf',
  // Database
  'PostgreSQL', 'Supabase', 'SQLite',
  // AI
  'Claude Code', 'Cursor', 'Codex', 'RAG', 'MCP', 'Claude API',
  // Infra
  'Docker', 'Nginx', 'PM2', 'Vercel', 'GitHub Actions', 'Cloudflare',
  // Platform / Anim
  'Telegram Mini Apps', 'Framer Motion',
];

export function TechMarquee() {
  return (
    <section
      className="py-12 overflow-hidden"
      style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      <div className="relative">
        {/* Fade edges — masks use the page bg so they blend across themes */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
        />

        <div className="flex animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <div key={`${tech}-${i}`} className="flex items-center gap-8 px-8">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-border)' }}
              />
              <span
                className="text-lg md:text-xl font-medium whitespace-nowrap transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
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
