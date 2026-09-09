import { Phone, Instagram as IgIcon, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT, BRAND } from '@/constants';
import { SectionLabel } from '@/components/SectionHeading';
import { Reveal } from '@/components/anim';

export function Contact() {
  return (
    <section id="contact" className="grain relative section-pad overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute right-1/3 top-0 h-[500px] w-[500px] rounded-full bg-crimson-800/10 blur-[140px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel>Get In Touch</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-5xl uppercase leading-[1.05] text-white sm:text-6xl md:text-7xl">
              READY TO START?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base font-light text-white/55 sm:text-lg">
              Your next level starts with one decision.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-10">
            <div className="text-center">
              <p className="font-display text-3xl uppercase text-white">{BRAND.trainer}</p>
              <p className="mt-1 font-heading text-xs uppercase tracking-ultra text-crimson-400">
                Training &amp; Coaching
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ContactRow icon={<Phone size={18} />} label="Phone" value={CONTACT.phoneDisplay} />
              <ContactRow
                icon={<IgIcon size={18} />}
                label="Instagram"
                value={CONTACT.instagramHandle}
              />
              <ContactRow
                icon={<MapPin size={18} />}
                label="Location"
                value={CONTACT.addressLines.join(' ')}
                full
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={CONTACT.phoneTel} className="btn-primary">
                <Phone size={16} />
                Call Rohit
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={16} />
                WhatsApp Rohit
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IgIcon size={16} />
                Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  full,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-crimson-500/10 text-crimson-400">
        {icon}
      </span>
      <div>
        <p className="font-heading text-[10px] uppercase tracking-ultra text-white/30">{label}</p>
        <p className="mt-0.5 text-sm font-light text-white/80">{value}</p>
      </div>
    </div>
  );
}
