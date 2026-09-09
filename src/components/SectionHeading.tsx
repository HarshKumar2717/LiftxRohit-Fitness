type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-crimson-500" />
      <span className="font-heading text-xs font-semibold uppercase tracking-ultra text-crimson-400">
        {children}
      </span>
    </div>
  );
}

type SectionHeadingProps = {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {label && (
        <div className={isCenter ? 'flex justify-center' : ''}>
          <SectionLabel>{label}</SectionLabel>
        </div>
      )}
      <h2 className="mt-5 font-display text-4xl uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base font-light leading-relaxed text-white/55 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
