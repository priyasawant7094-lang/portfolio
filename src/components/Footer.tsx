import { Linkedin, Github, Mail, ArrowUp, Heart } from 'lucide-react';
import { navLinks, profile } from '../data';

export function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50/50 dark:border-slate-800/70 dark:bg-slate-950/50">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow">
                <span className="font-display text-sm font-extrabold">PS</span>
              </span>
              <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Priya Sawant
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Aspiring Data Analyst transforming raw data into meaningful
              business insights through analytics, visualization, and machine
              learning.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Let&apos;s Talk
            </h4>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Open to Data Analyst internships and entry-level opportunities.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-ghost mt-4">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row dark:border-slate-800/70">
          <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            Designed &amp; Developed by Priya Sawant
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
          </p>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Priya Sawant. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
