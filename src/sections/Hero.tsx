import { motion, type Variants } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { BRAND } from '@/constants';
import { RohitImage } from '@/components/RohitImage';
import { Particles } from '@/components/Effects';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: EASE },
  }),
};

export function Hero() {
  const words = ['LIFT', 'X', 'WITH', 'ROHIT'];

  return (
    <section
      id="home"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-crimson-700/15 blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-crimson-900/20 blur-[120px]" />
        <div className="spotlight absolute inset-0" />
      </div>
      <GridLines />
      <Particles />

      {/* Content */}
      <div className="container-x relative z-10 grid items-center gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
            <span className="font-heading text-[10px] font-semibold uppercase tracking-ultra text-white/70 sm:text-xs">
              Personal Fitness Trainer &amp; Coach
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[18vw] uppercase leading-[0.85] tracking-tight text-white sm:text-[14vw] lg:text-[9vw]">
            {words.map((word, i) => (
              <span key={word} className="block">
                <motion.span
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${word === 'ROHIT' ? 'text-gradient-red' : ''}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 font-heading text-lg font-medium uppercase tracking-wider text-white sm:text-xl"
          >
            {BRAND.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-2 text-sm font-light text-white/50 sm:text-base"
          >
            {BRAND.secondaryTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Start Your Journey
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#training')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              Explore Training
            </button>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="group relative mx-auto max-w-sm lg:max-w-none">
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-3xl bg-crimson-600/20 blur-2xl" />
            {/* Border frame */}
            <div className="relative overflow-hidden rounded-2xl border border-crimson-500/30 shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
              <RohitImage
                priority
                className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                imgClassName="object-cover"
              />
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/40 to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                <div>
                  <p className="font-display text-2xl uppercase text-white">MR. ROHIT</p>
                  <p className="font-heading text-[10px] uppercase tracking-ultra text-crimson-400">
                    Trainer &amp; Coach
                  </p>
                </div>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-sm">
                  LIFT X
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] uppercase tracking-ultra text-white/40">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-crimson-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
      <div className="absolute inset-x-0 top-1/4 h-px bg-white" />
      <div className="absolute inset-x-0 top-2/4 h-px bg-white" />
      <div className="absolute inset-x-0 top-3/4 h-px bg-white" />
    </div>
  );
}
