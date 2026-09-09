import { motion } from 'framer-motion';
import { Dumbbell, Flame, Armchair, UserRound, ArrowUpRight } from 'lucide-react';
import { TRAINING_PROGRAMS } from '@/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer, staggerItem } from '@/components/anim';

const ICONS = [Dumbbell, Flame, Armchair, UserRound];

export function Training() {
  return (
    <section id="training" className="grain relative section-pad overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-crimson-700/10 blur-[130px]" />

      <div className="container-x relative z-10">
        <SectionHeading
          label="Train With Purpose"
          title="TRAIN WITH PURPOSE."
          subtitle="Train smarter. Move stronger. Become better."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRAINING_PROGRAMS.map((program, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={program.number}
                variants={staggerItem}
                className="card-premium group p-7 hover:border-crimson-500/40 hover:shadow-[0_0_40px_rgba(225,29,42,0.12)]"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-crimson-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-white/10 transition-colors duration-500 group-hover:text-crimson-500/30">
                    {program.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-crimson-400 transition-all duration-500 group-hover:border-crimson-500/40 group-hover:bg-crimson-500/10">
                    <Icon size={20} />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl uppercase leading-tight text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/50">
                  {program.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/30 transition-colors duration-500 group-hover:text-crimson-400">
                  <span>Learn More</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
