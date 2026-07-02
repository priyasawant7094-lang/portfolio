import { useEffect, useState } from 'react';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 dark:bg-[#080c1c] ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={done}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
          <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-600" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-600" />
          </span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Priya Sawant
          </span>
          <span className="h-4 w-px animate-blink bg-blue-500" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}
