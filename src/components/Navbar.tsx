import { useEffect, useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { navLinks, profile } from '../data';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

const ids = navLinks.map((l) => l.href.replace('#', ''));

export function Navbar({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong border-b border-slate-200/70 py-2 shadow-card dark:border-slate-800/70'
          : 'border-b border-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go('#home')}
          className="group flex items-center gap-2.5"
          aria-label="Priya Sawant home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            <BarChart3 className="h-5 w-5" />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
            Priya<span className="text-blue-600 dark:text-blue-400">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-navy-700 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <a
            href={`mailto:${profile.email}`}
            className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-0 top-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-3 top-16 z-50 origin-top rounded-3xl glass-strong p-4 shadow-card transition-all duration-300 ${
            open
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-3 scale-95 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                  <span className="text-xs text-slate-400">0{i + 1}</span>
                </button>
              );
            })}
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
