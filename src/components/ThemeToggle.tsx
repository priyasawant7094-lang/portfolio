import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

export function ThemeToggle({
  theme,
  toggle,
}: {
  theme: Theme;
  toggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ${
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
