import { Instagram as IgIcon, MessageCircle, Phone } from 'lucide-react';
import { BRAND, CONTACT, NAV_LINKS } from '@/constants';

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="grain relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-crimson-800/10 blur-[120px]" />

      <div className="container-x relative z-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl uppercase text-white">LIFT X</h3>
            <p className="font-heading text-[10px] uppercase tracking-ultra text-white/40">
              WITH ROHIT
            </p>
            <p className="mt-5 font-heading text-sm uppercase tracking-wider text-white/60">
              {BRAND.tagline}
            </p>
            <p className="mt-3 font-heading text-xs uppercase tracking-ultra text-crimson-400">
              {BRAND.keywords}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-ultra text-white/40">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((l) => l.href !== '#journey').map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-heading text-sm text-white/60 transition-colors hover:text-crimson-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-ultra text-white/40">Contact</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={CONTACT.phoneTel}
                  className="font-heading text-sm text-white/60 transition-colors hover:text-crimson-400"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-sm text-white/60 transition-colors hover:text-crimson-400"
                >
                  {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>

            <h4 className="mt-6 font-heading text-xs uppercase tracking-ultra text-white/40">
              Address
            </h4>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/50">
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-ultra text-white/40">Follow</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-crimson-500 hover:text-crimson-400"
              >
                <IgIcon size={18} />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-crimson-500 hover:text-crimson-400"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={CONTACT.phoneTel}
                aria-label="Phone"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-crimson-500 hover:text-crimson-400"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-heading text-xs uppercase tracking-widest text-white/30">
            © 2026 LIFT X WITH ROHIT. ALL RIGHTS RESERVED.
          </p>
          <p className="font-heading text-[10px] uppercase tracking-ultra text-white/20">
            {BRAND.trainer} • {BRAND.keywords}
          </p>
        </div>
      </div>
    </footer>
  );
}
