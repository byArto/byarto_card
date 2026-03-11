'use client';

/**
 * FooterAmbient — Slow drifting aurora orbs background effect.
 *
 * Pure CSS/SVG only. No WebGL, no canvas, no Three.js.
 * Designed to sit behind footer content at z-index 0 without
 * overpowering white/gray text on a #0A0A0A background.
 */

export function FooterAmbient() {
  return (
    <>
      {/* Keyframe definitions scoped inside this component */}
      <style>{`
        @keyframes fa-drift-a {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(40px, -30px) scale(1.06); }
          50%  { transform: translate(20px, -60px) scale(0.97); }
          75%  { transform: translate(-30px, -25px) scale(1.03); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes fa-drift-b {
          0%   { transform: translate(0px, 0px) scale(1.04); }
          20%  { transform: translate(-50px, 20px) scale(0.96); }
          45%  { transform: translate(-25px, 55px) scale(1.08); }
          70%  { transform: translate(45px, 30px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1.04); }
        }

        @keyframes fa-drift-c {
          0%   { transform: translate(0px, 0px) scale(0.98); }
          30%  { transform: translate(35px, 40px) scale(1.05); }
          60%  { transform: translate(-20px, 25px) scale(0.95); }
          85%  { transform: translate(15px, -20px) scale(1.02); }
          100% { transform: translate(0px, 0px) scale(0.98); }
        }

        @keyframes fa-drift-d {
          0%   { transform: translate(0px, 0px) scale(1.02); }
          35%  { transform: translate(-40px, -45px) scale(0.94); }
          65%  { transform: translate(30px, -30px) scale(1.07); }
          90%  { transform: translate(-10px, 15px) scale(0.99); }
          100% { transform: translate(0px, 0px) scale(1.02); }
        }

        @keyframes fa-breathe {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
      `}</style>

      {/*
        Wrapper: fills parent, clips overflow, no pointer events, behind content.
        The parent footer must have position: relative (it already does).
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >

        {/*
          Orb 1 — Primary cyan. Bottom-left quadrant.
          Large anchor presence. 28s drift cycle.
        */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-8%',
            width: '580px',
            height: '580px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #00E5FF 0%, transparent 70%)',
            opacity: 0.07,
            filter: 'blur(100px)',
            animation: 'fa-drift-a 28s ease-in-out infinite, fa-breathe 14s ease-in-out infinite',
            willChange: 'transform',
          }}
        />

        {/*
          Orb 2 — Teal. Bottom-right area, slightly above center.
          Counter-movement to Orb 1. 34s drift cycle.
        */}
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '-12%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #2DD4BF 0%, transparent 68%)',
            opacity: 0.065,
            filter: 'blur(90px)',
            animation: 'fa-drift-b 34s ease-in-out infinite, fa-breathe 18s ease-in-out infinite 4s',
            willChange: 'transform',
          }}
        />

        {/*
          Orb 3 — Violet. Center-upper area of footer.
          Brings depth contrast and a nebula feel. 22s drift cycle.
          Kept at an even lower opacity so it never reads as purple overtly.
        */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '38%',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #A78BFA 0%, transparent 65%)',
            opacity: 0.045,
            filter: 'blur(110px)',
            animation: 'fa-drift-c 22s ease-in-out infinite, fa-breathe 22s ease-in-out infinite 8s',
            willChange: 'transform',
          }}
        />

        {/*
          Orb 4 — Secondary cyan, smaller accent.
          Tucked in the bottom-center to reinforce the brand color
          without competing with Orb 1. 30s drift cycle.
        */}
        <div
          style={{
            position: 'absolute',
            bottom: '-5%',
            left: '42%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #00E5FF 0%, transparent 60%)',
            opacity: 0.055,
            filter: 'blur(80px)',
            animation: 'fa-drift-d 30s ease-in-out infinite, fa-breathe 16s ease-in-out infinite 2s',
            willChange: 'transform',
          }}
        />

        {/*
          Subtle vignette overlay: keeps the very bottom edge and outer
          corners deeply dark so text always reads clearly.
          This is a thin, purely darkening gradient — no color added.
        */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: [
              'radial-gradient(ellipse 120% 80% at 50% 110%, transparent 40%, #0A0A0A 75%)',
              'linear-gradient(to bottom, #0A0A0A 0%, transparent 18%, transparent 82%, #0A0A0A 100%)',
            ].join(', '),
          }}
        />

      </div>
    </>
  );
}

export default FooterAmbient;
