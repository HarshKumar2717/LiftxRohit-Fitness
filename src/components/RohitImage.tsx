type RohitImageProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * Renders the provided Rohit photograph exactly as uploaded.
 * No AI generation, no face/body modification — only CSS layout effects.
 * Falls back to a branded placeholder if the file isn't present yet.
 */
export function RohitImage({ className = '', imgClassName = '', priority = false }: RohitImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src="/images/image.png"
        alt="Mr. Rohit — Personal Fitness Trainer & Coach at LIFT X WITH ROHIT"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling;
          if (fallback) (fallback as HTMLElement).style.display = 'flex';
        }}
      />
      <div
        style={{ display: 'none' }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950 text-center"
      >
        <span className="font-display text-6xl text-crimson-500">RX</span>
        <span className="mt-2 font-heading text-xs uppercase tracking-ultra text-white/40">
          Mr. Rohit
        </span>
      </div>
    </div>
  );
}
