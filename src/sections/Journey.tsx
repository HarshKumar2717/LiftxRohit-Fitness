import { motion } from 'framer-motion';
import { Flag, Shield, Repeat, Dumbbell, TrendingUp } from 'lucide-react';
import { JOURNEY_STEPS } from '@/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/anim';

const ICONS = [Flag, Shield, Repeat, Dumbbell, TrendingUp];

export function Journey() {
  return (
    <section id="journey" className="grain relative section-pad overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-crimson-800/10 blur-[130px]" />

      <div className="container-x relative z-10">
        <SectionHeading
          label="The Process"
          title="THE JOURNEY"
          subtitle="Every transformation follows the same path — one step at a time."
          align="center"
        />

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-crimson-500 via-crimson-500 to-transparent"
            />

            <div className="grid grid-cols-5 gap-4">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-crimson-500/30 bg-ink-950 text-crimson-400">
                      <Icon size={22} />
                    </div>
                    <p className="mt-4 font-display text-xl uppercase text-white">{step}</p>
                    <span className="mt-1 font-heading text-[10px] uppercase tracking-ultra text-white/30">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative pl-10">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
            {JOURNEY_STEPS.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-10 flex h-10 w-10 items-center justify-center rounded-full border border-crimson-500/30 bg-ink-950 text-crimson-400">
                    <Icon size={16} />
                  </div>
                  <p className="font-display text-2xl uppercase text-white">{step}</p>
                  <span className="font-heading text-[10px] uppercase tracking-ultra text-white/30">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center font-heading text-lg uppercase tracking-wider text-white/50 sm:text-xl">
            Fitness isn't a destination.
            <br />
            <span className="text-white">It's a lifestyle.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
