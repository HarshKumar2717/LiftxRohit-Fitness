import { motion } from 'framer-motion';
import { ShieldCheck, Repeat, UserCheck, Zap, ClipboardCheck, Brain } from 'lucide-react';
import { WHY_FEATURES } from '@/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { staggerContainer, staggerItem } from '@/components/anim';

const ICONS = [ShieldCheck, Repeat, UserCheck, Zap, ClipboardCheck, Brain];

export function WhyLiftX() {
  return (
    <section className="grain relative section-pad overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson-900/10 blur-[150px]" />

      <div className="container-x relative z-10">
        <SectionHeading
          label="The Difference"
          title="WHY LIFT X?"
          subtitle="Six principles that shape every session with Mr. Rohit."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_FEATURES.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={feature.number}
                variants={staggerItem}
                className="group relative bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-white/10 transition-colors duration-500 group-hover:text-crimson-500/30">
                    {feature.number}
                  </span>
                  <Icon
                    size={22}
                    className="text-white/30 transition-colors duration-500 group-hover:text-crimson-400"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl uppercase text-white">
                  {feature.title}
                </h3>
                <div className="mt-4 h-px w-0 bg-crimson-500 transition-all duration-500 group-hover:w-12" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
