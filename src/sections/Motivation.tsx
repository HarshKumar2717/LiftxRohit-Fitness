import { motion } from 'framer-motion';
import { BRAND } from '@/constants';

const lines = ['YOUR ONLY', 'LIMIT', 'IS YOUR', 'MIND.'];

export function Motivation() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink-950 py-24">
      {/* Red glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-700/20 blur-[150px] animate-glow-pulse" />

      <div className="container-x relative z-10 text-center">
        <div>
          {lines.map((line, i) => (
            <motion.h2
              key={line}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[14vw] uppercase leading-[0.9] tracking-tight text-white sm:text-[10vw] lg:text-[8vw]"
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 font-heading text-sm uppercase tracking-ultra text-crimson-400 sm:text-base"
        >
          {BRAND.secondaryTagline}
        </motion.p>
      </div>
    </section>
  );
}
