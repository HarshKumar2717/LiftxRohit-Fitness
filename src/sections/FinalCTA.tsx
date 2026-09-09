import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '@/constants';
import { Reveal } from '@/components/anim';

export function FinalCTA() {
  return (
    <section className="grain relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink-950 py-24">
      {/* Large red gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-600/20 blur-[160px] animate-glow-pulse" />
      <div className="pointer-events-none absolute inset-0 spotlight" />

      <div className="container-x relative z-10 text-center">
        <Reveal>
          <p className="font-heading text-xs uppercase tracking-ultra text-crimson-400">
            {BRAND.secondaryTagline}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[16vw] uppercase leading-[0.85] tracking-tight text-white sm:text-[12vw] lg:text-[9vw]">
            READY TO
            <br />
            <span className="text-gradient-red">LEVEL UP?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-heading text-sm uppercase tracking-wider text-white/50">
            Training &amp; Coaching by Mr. Rohit
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Start Training
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              Contact Rohit
            </button>
          </div>
        </Reveal>
      </div>

      {/* Animated bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center' }}
        className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-crimson-500 to-transparent"
      />
    </section>
  );
}
