import { MapPin, Navigation } from 'lucide-react';
import { CONTACT } from '@/constants';
import { SectionLabel } from '@/components/SectionHeading';
import { Reveal } from '@/components/anim';

export function Location() {
  return (
    <section className="relative section-pad overflow-hidden bg-ink-950">
      <div className="container-x relative z-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-10">
              <SectionLabel>Find The Gym</SectionLabel>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl">
                TRAINING LOCATION
              </h2>
              <p className="mt-4 font-heading text-sm uppercase tracking-wider text-crimson-400">
                {CONTACT.locationShort}
              </p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-white/40" />
                <p className="text-sm font-light leading-relaxed text-white/60">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <a
                href={CONTACT.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 self-start"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </Reveal>

          {/* Map placeholder card */}
          <Reveal delay={0.15}>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-ink-800 lg:min-h-full">
              {/* Stylized dark map */}
              <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950" />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
              {/* Roads */}
              <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 bg-white/5" />
              <div className="absolute bottom-0 left-1/3 top-0 w-1.5 bg-white/5" />
              <div className="absolute left-0 right-0 top-1/4 h-px bg-white/10" />
              <div className="absolute left-2/3 bottom-0 top-0 w-px bg-white/10" />

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-crimson-500/30 blur-xl animate-glow-pulse" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-crimson-500 bg-ink-950">
                    <MapPin size={20} className="text-crimson-500" />
                  </div>
                  <div className="absolute left-1/2 top-full h-4 w-px -translate-x-1/2 bg-crimson-500" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-ink-950/80 px-4 py-2 backdrop-blur-sm">
                <p className="font-heading text-xs uppercase tracking-widest text-white/70">
                  Budh Vihar Phase - 2, Delhi
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
