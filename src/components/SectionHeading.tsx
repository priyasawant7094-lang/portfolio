import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span className="chip mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
