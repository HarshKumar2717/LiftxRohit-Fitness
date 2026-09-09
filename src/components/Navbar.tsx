import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="group flex flex-col leading-none"
            aria-label="LIFT X WITH ROHIT home"
          >
            <span className="font-display text-xl tracking-tight text-white transition-colors group-hover:text-crimson-400">
              LIFT X
            </span>
            <span className="font-heading text-[10px] font-medium uppercase tracking-ultra text-white/50">
              WITH ROHIT
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="group relative font-heading text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-crimson-500 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNav('#contact')}
            className="hidden rounded-full bg-crimson-500 px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-crimson-600 hover:shadow-[0_0_25px_rgba(225,29,42,0.45)] lg:inline-flex"
          >
            Start Training
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-xl text-white">LIFT X</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <motion.nav
              className="flex flex-col gap-2 px-5 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => handleNav(link.href)}
                  className="border-b border-white/5 py-4 text-left font-display text-3xl uppercase text-white/80 transition-colors hover:text-crimson-400"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => handleNav('#contact')}
                className="mt-8 rounded-full bg-crimson-500 px-6 py-4 font-heading text-sm font-semibold uppercase tracking-widest text-white"
              >
                Start Training
              </motion.button>
              <p className="mt-6 font-heading text-xs uppercase tracking-ultra text-white/30">
                {BRAND.tagline}
              </p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
