import { motion } from 'framer-motion';
import { Target, ClipboardList, LineChart, ShieldCheck, Users, Brain } from 'lucide-react';
import { COACHING_PILLARS, CONTACT } from '@/constants';
import { SectionLabel } from '@/components/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '@/components/anim';

const ICONS = [Target, ClipboardList, LineChart, ShieldCheck, Users, Brain];

export function Coaching() {
  return (
    <section id="coaching" className="grain relative section-pad overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-crimson-800/10 blur-[140px]" />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: pillars */}
          <div>
            <Reveal>
              <SectionLabel>Coaching</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl md:text-5xl">
                COACHING THAT BUILDS MORE THAN MUSCLE.
              </h2>
            </Reveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {COACHING_PILLARS.map((pillar, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={pillar}
                    variants={staggerItem}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-ink-800 px-4 py-4 transition-all duration-300 hover:border-crimson-500/30"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-crimson-500/10 text-crimson-400">
                      <Icon size={16} />
                    </span>
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-white/80">
                      {pillar}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: big statement + CTA */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-12">
                <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-crimson-600/10 blur-2xl" />
                <div className="relative">
                  <span className="font-heading text-xs uppercase tracking-ultra text-crimson-400">
                    The Mindset
                  </span>
                  <blockquote className="mt-4 font-display text-3xl uppercase leading-[1.1] text-white sm:text-4xl">
                    YOUR BODY CHANGES
                    <br />
                    WHEN YOUR MIND
                    <br />
                    <span className="text-gradient-red">DECIDES TO CHANGE.</span>
                  </blockquote>

                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8"
                  >
                    Talk To Rohit
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
