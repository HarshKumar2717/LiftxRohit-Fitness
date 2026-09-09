import { motion } from 'framer-motion';

/**
 * Ambient red glow + grain overlay used behind cinematic sections.
 */
export function AmbientGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-crimson-600/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-crimson-700/10 blur-[100px]" />
    </div>
  );
}

/**
 * Thin animated horizontal lines for cinematic backgrounds.
 */
export function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]">
      <div className="absolute inset-x-0 top-1/4 h-px bg-white" />
      <div className="absolute inset-x-0 top-2/4 h-px bg-white" />
      <div className="absolute inset-x-0 top-3/4 h-px bg-white" />
    </div>
  );
}

/**
 * Floating particles for the hero.
 */
export function Particles() {
  const particles = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 7 + 5) % 100;
        const top = (i * 13 + 10) % 100;
        const size = i % 3 === 0 ? 3 : 2;
        const delay = (i % 5) * 0.8;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-crimson-400/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
