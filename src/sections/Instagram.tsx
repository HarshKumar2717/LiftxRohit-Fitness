import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram as IgIcon, ArrowUpRight, Loader2, AlertCircle, X } from 'lucide-react';
import { SectionLabel } from '@/components/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '@/components/anim';

/**
 * ── EDIT THIS LIST to manage your Instagram posts/reels ──
 * Each card uses its own URL. Add / remove / reorder freely.
 * The card component never needs to change.
 */
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/liftxwithrohit';

type IgPost = {
  id: number;
  url: string;
  type: 'post' | 'reel';
};

const instagramPosts: IgPost[] = [
  {
    id: 1,
    url: 'https://www.instagram.com/liftxwithrohit?stkn=NzcwZ2dpaTRvaG5h',
    type: 'post',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/reel/DM4pRZpPE-p/?stkn=bXJndG1wcGwya2Vh',
    type: 'reel',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/p/DOdOZiyEZIMCkG97zZCmf9_uIMdk7xL2kPO8uA0/?stkn=MWN2aDh4ejlweTc0bA==',
    type: 'post',
  },
];

const PLACEHOLDER_GRADIENTS = [
  'from-crimson-600/30 to-ink-800',
  'from-ink-700 to-ink-900',
  'from-crimson-700/20 to-ink-800',
  'from-ink-800 to-crimson-900/20',
  'from-crimson-500/15 to-ink-900',
  'from-ink-700 to-ink-950',
  'from-crimson-800/20 to-ink-800',
  'from-ink-800 to-crimson-600/20',
  'from-ink-900 to-crimson-700/20',
];

/**
 * Loads Instagram's official embed.js script once.
 * After it loads, calling window.instgrm.Embeds.process() renders
 * any blockquote-based embeds that were added to the DOM.
 */
function useInstagramEmbedScript() {
  useEffect(() => {
    const existing = document.getElementById('ig-embed-script');
    if (existing) return;

    const script = document.createElement('script');
    script.id = 'ig-embed-script';
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

function processEmbeds() {
  if (window.instgrm?.Embeds?.process) {
    window.instgrm.Embeds.process();
  }
}

/**
 * Extracts the clean Instagram permalink from a URL that may contain
 * tracking query params (stkn=...). The embed API only needs the
 * canonical post/reel path.
 */
function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const clean = `${parsed.origin}${parsed.pathname}`;
    return clean.replace(/\/$/, '');
  } catch {
    return url;
  }
}

type IgTileProps = {
  post: IgPost;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
};

type EmbedState = 'idle' | 'loading' | 'loaded' | 'error';

function IgTile({ post, index, isExpanded, onToggle }: IgTileProps) {
  const [embedState, setEmbedState] = useState<EmbedState>('idle');
  const embedRef = useRef<HTMLDivElement>(null);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When this card expands, inject the official Instagram embed blockquote
  // and ask the embed script to render it.
  useEffect(() => {
    if (!isExpanded) {
      setEmbedState('idle');
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
      return;
    }

    setEmbedState('loading');
    const cleanUrl = toEmbedUrl(post.url);

    // Give the embed script a moment to process, then check if it rendered.
    loadTimeoutRef.current = setTimeout(() => {
      const iframe = embedRef.current?.querySelector('iframe');
      if (iframe) {
        setEmbedState('loaded');
      } else {
        // Retry once after the script has had more time.
        processEmbeds();
        loadTimeoutRef.current = setTimeout(() => {
          const iframe2 = embedRef.current?.querySelector('iframe');
          setEmbedState(iframe2 ? 'loaded' : 'error');
        }, 3000);
      }
    }, 2500);

    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, [isExpanded, post.url]);

  const handleEmbedLoad = useCallback(() => {
    setEmbedState('loaded');
  }, []);

  return (
    <motion.div
      variants={staggerItem}
      layout
      className={`group relative overflow-hidden rounded-xl border transition-all duration-500 ${
        isExpanded
          ? 'border-crimson-500/40 shadow-[0_0_40px_rgba(225,29,42,0.15)]'
          : 'border-white/5'
      }`}
    >
      {/* Collapsed / placeholder view */}
      {!isExpanded && (
        <button
          onClick={onToggle}
          className="block w-full cursor-pointer"
          aria-label={`Open Instagram ${post.type} ${post.id}`}
        >
          <div className="relative aspect-square w-full">
            {/* Gradient placeholder */}
            <div
              className={`h-full w-full bg-gradient-to-br ${
                PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length]
              }`}
            />
            {/* Pattern */}
            <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(255,255,255,0.05)_8px,rgba(255,255,255,0.05)_16px)]" />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100">
              <IgIcon size={28} className="text-white" />
              <span className="font-heading text-xs uppercase tracking-widest text-white/80">
                {post.type === 'reel' ? 'View Reel' : 'View Post'}
              </span>
            </div>

            {/* Number */}
            <span className="absolute left-3 top-3 font-heading text-[10px] uppercase tracking-widest text-white/20">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Type badge */}
            <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 font-heading text-[9px] uppercase tracking-widest text-white/50 backdrop-blur-sm">
              {post.type}
            </span>
          </div>
        </button>
      )}

      {/* Expanded view — official Instagram embed */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <IgIcon size={16} className="text-crimson-400" />
                <span className="font-heading text-xs uppercase tracking-widest text-white/60">
                  {String(index + 1).padStart(2, '0')} • {post.type}
                </span>
              </div>
              <button
                onClick={onToggle}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-crimson-500 hover:text-crimson-400"
                aria-label="Close embed"
              >
                <X size={14} />
              </button>
            </div>

            {/* Embed area */}
            <div className="relative bg-ink-900 p-4">
              {embedState === 'loading' && (
                <div className="flex h-64 flex-col items-center justify-center gap-3">
                  <Loader2 size={24} className="animate-spin text-crimson-500" />
                  <span className="font-heading text-xs uppercase tracking-widest text-white/40">
                    Loading Instagram…
                  </span>
                </div>
              )}

              {embedState === 'error' && (
                <div className="flex h-64 flex-col items-center justify-center gap-4">
                  <AlertCircle size={28} className="text-crimson-500" />
                  <p className="text-sm font-light text-white/50">
                    Unable to load this post
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs"
                  >
                    View on Instagram
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}

              {/* Official Instagram blockquote embed */}
              <div
                ref={embedRef}
                className={`${embedState === 'loaded' ? 'block' : 'hidden'} flex justify-center`}
                onLoad={handleEmbedLoad}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={toEmbedUrl(post.url)}
                  data-instgrm-version="14"
                  style={{
                    background: '#0D0D0D',
                    border: 0,
                    margin: 0,
                    maxWidth: '420px',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%',
                  }}
                />
              </div>

              {/* Fallback link (always available below the embed) */}
              {embedState === 'loaded' && (
                <div className="mt-3 flex justify-center">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-widest text-white/40 transition-colors hover:text-crimson-400"
                  >
                    View on Instagram
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function InstagramSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  useInstagramEmbedScript();

  // Re-process embeds whenever a card expands (the blockquote is now in the DOM).
  useEffect(() => {
    if (expandedId !== null) {
      // Small delay to ensure the blockquote is painted.
      const t = setTimeout(processEmbeds, 100);
      return () => clearTimeout(t);
    }
  }, [expandedId]);

  const handleToggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="grain relative section-pad overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-crimson-700/10 blur-[130px]" />

      <div className="container-x relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Instagram</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
                FOLLOW THE JOURNEY
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 font-heading text-sm uppercase tracking-wider text-crimson-400">
                @liftxwithrohit
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              <IgIcon size={16} />
              Follow on Instagram
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {instagramPosts.map((post, i) => (
            <IgTile
              key={post.id}
              post={post}
              index={i}
              isExpanded={expandedId === post.id}
              onToggle={() => handleToggle(post.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
