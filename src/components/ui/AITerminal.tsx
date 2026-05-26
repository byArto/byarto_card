'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type LineType = 'prompt' | 'system' | 'success';

interface Line {
  type: LineType;
  prefix: string;
  text: string;
}

interface Scenario {
  name: string;
  lines: Line[];
}

const scenarios: Scenario[] = [
  {
    name: 'bizzbot.deploy',
    lines: [
      { type: 'prompt',  prefix: '$',            text: 'deploy bizzbot --rag --target=b2b' },
      { type: 'system',  prefix: '[Claude API]', text: 'Integrating knowledge base...' },
      { type: 'system',  prefix: '[Gateway]',    text: 'Connecting Telegram + WhatsApp...' },
      { type: 'success', prefix: '✓',            text: 'BizzBot deployed. Automation active.' },
    ],
  },
  {
    name: 'multi-agent.run',
    lines: [
      { type: 'prompt',  prefix: '$',             text: 'run multi-agent --parallel' },
      { type: 'system',  prefix: '[Claude Code]', text: 'Implementing feature on main...' },
      { type: 'system',  prefix: '[Codex]',       text: 'Generating tests in parallel...' },
      { type: 'success', prefix: '✓',             text: 'Orchestration completed.' },
    ],
  },
  {
    name: 'tma.init',
    lines: [
      { type: 'prompt',  prefix: '$',          text: 'init tma --stack=next+supabase' },
      { type: 'system',  prefix: '[Supabase]', text: 'Configuring Postgres, Auth, RLS...' },
      { type: 'system',  prefix: '[Telegram]', text: 'Connecting Bot API + Mini App SDK...' },
      { type: 'success', prefix: '✓',          text: 'WebApp shipped to Vercel.' },
    ],
  },
];

const PROMPT_SPEED = 38;
const SYSTEM_SPEED = 16;
const SUCCESS_SPEED = 30;
const LINE_GAP = 380;
const SCENARIO_PAUSE = 3200;
const FADE_DURATION = 600;

type Phase = 'typing' | 'lineEnd' | 'scenarioDone' | 'fadeOut';

export function AITerminal() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');

  const scenario = scenarios[scenarioIdx];
  const currentLine = scenario.lines[lineIdx];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;

    if (phase === 'typing') {
      if (charIdx < currentLine.text.length) {
        const speed =
          currentLine.type === 'prompt' ? PROMPT_SPEED :
          currentLine.type === 'success' ? SUCCESS_SPEED : SYSTEM_SPEED;
        t = setTimeout(() => setCharIdx(c => c + 1), speed);
      } else {
        setPhase('lineEnd');
      }
    } else if (phase === 'lineEnd') {
      if (lineIdx < scenario.lines.length - 1) {
        t = setTimeout(() => {
          setLineIdx(l => l + 1);
          setCharIdx(0);
          setPhase('typing');
        }, LINE_GAP);
      } else {
        t = setTimeout(() => setPhase('scenarioDone'), 200);
      }
    } else if (phase === 'scenarioDone') {
      t = setTimeout(() => setPhase('fadeOut'), SCENARIO_PAUSE);
    } else if (phase === 'fadeOut') {
      t = setTimeout(() => {
        setScenarioIdx(i => (i + 1) % scenarios.length);
        setLineIdx(0);
        setCharIdx(0);
        setPhase('typing');
      }, FADE_DURATION);
    }

    return () => {
      if (t) clearTimeout(t);
    };
  }, [phase, lineIdx, charIdx, currentLine, scenario.lines.length]);

  const completedLines = scenario.lines.slice(0, lineIdx);
  const isContentVisible = phase !== 'fadeOut';
  const showTypingLine = phase === 'typing' || phase === 'lineEnd';

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full relative"
      style={{
        background:
          'linear-gradient(180deg, rgba(10,14,20,1) 0%, rgba(6,10,14,1) 100%)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.3)',
        }}
      >
        <div className="flex items-center gap-[6px]">
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#febc2e' }} />
          <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
        </div>
        <motion.span
          key={scenario.name}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.15em] text-gray-500"
        >
          ~/byarto · <span className="text-gray-400">{scenario.name}</span>
        </motion.span>
        <span className="w-[42px]" />
      </div>

      {/* Body */}
      <div className="px-4 py-4 min-h-[212px]">
        <motion.div
          animate={{ opacity: isContentVisible ? 1 : 0 }}
          transition={{ duration: FADE_DURATION / 1000, ease: 'easeOut' }}
          className="flex flex-col gap-1.5 text-[12px] leading-[1.65]"
        >
          {completedLines.map((line, i) => (
            <TerminalLine key={`done-${scenarioIdx}-${i}`} line={line} text={line.text} />
          ))}

          {showTypingLine && currentLine && (
            <TerminalLine
              line={currentLine}
              text={currentLine.text.slice(0, charIdx)}
              cursor={phase === 'typing'}
            />
          )}

          {phase === 'scenarioDone' && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[#00E5FF] font-medium">$</span>
              <Cursor />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function TerminalLine({
  line,
  text,
  cursor,
}: {
  line: Line;
  text: string;
  cursor?: boolean;
}) {
  const prefixClass =
    line.type === 'prompt' ? 'text-[#00E5FF]' :
    line.type === 'success' ? 'text-emerald-400' : 'text-gray-500';
  const textClass =
    line.type === 'prompt' ? 'text-gray-100' :
    line.type === 'success' ? 'text-emerald-300' : 'text-gray-400';

  return (
    <div className="flex items-baseline gap-1.5">
      <span className={`${prefixClass} shrink-0 font-medium`}>{line.prefix}</span>
      <span className={`${textClass} break-words`}>
        {text}
        {cursor && <Cursor inline />}
      </span>
    </div>
  );
}

function Cursor({ inline }: { inline?: boolean } = {}) {
  return (
    <motion.span
      aria-hidden
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
      className={`inline-block ${inline ? 'ml-1' : ''}`}
      style={{
        width: '7px',
        height: '13px',
        background: '#00E5FF',
        boxShadow: '0 0 8px rgba(0,229,255,0.7)',
        verticalAlign: 'middle',
        transform: 'translateY(2px)',
      }}
    />
  );
}

export default AITerminal;
