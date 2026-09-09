import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import { BRAND, STATS } from '@/constants';
import { RohitImage } from '@/components/RohitImage';
import { SectionLabel } from '@/components/SectionHeading';
import { AnimatedCounter, Reveal, staggerContainer, staggerItem } from '@/components/anim';

export function About() {
  return (
    <section id="about" className="grain relative section-pad overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-crimson-800/10 blur-[120px]" />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: image */}
        <Reveal>
          <div className="group relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-crimson-600/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <RohitImage
                className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-3xl uppercase text-white">MR. ROHIT</p>
                <p className="font-heading text-[10px] uppercase tracking-ultra text-crimson-400">
                  Training &amp; Coaching
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: content */}
        <div>
          <Reveal>
            <SectionLabel>About The Coach</SectionLabel>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
              MEET MR. ROHIT
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base font-light leading-relaxed text-white/60 sm:text-lg">
              Mr. Rohit is the trainer and coach behind LIFT X WITH ROHIT, focused on helping
              people build strength, discipline, confidence and a stronger mindset.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base font-light leading-relaxed text-white/60 sm:text-lg">
              His approach goes beyond workouts. Training is about consistency, discipline,
              mindset and becoming better every day.
            </p>
          </Reveal>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 grid grid-cols-3 gap-4 border-y border-white/5 py-8"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center sm:text-left">
                <p className="font-display text-3xl text-white sm:text-4xl md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-heading text-[10px] uppercase tracking-widest text-white/40 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-3">
              <Dumbbell size={20} className="text-crimson-500" />
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
                Training &amp; Coaching by{' '}
                <span className="text-crimson-500">Mr. Rohit</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-3 font-heading text-xs uppercase tracking-ultra text-white/30">
              {BRAND.keywords}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
