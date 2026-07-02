import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile, stats } from '../data';
import { useCountUp } from '../hooks/useCountUp';

function useTyping(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function StatCard({
  value,
  suffix,
  label,
  start,
  delay,
}: {
  value: number | null;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const count = useCountUp(value ?? 0, 1500, start && value !== null);
  return (
    <div
      className="reveal glass rounded-2xl p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {value !== null ? (
          <>
            {count}
            {suffix}
          </>
        ) : (
          <Sparkles className="mx-auto h-7 w-7" />
        )}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const typed = useTyping(profile.roles);
  const sectionRef = useRef<HTMLElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStartCount(true), 600);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44"
    >
      <div className="absolute inset-0 -z-10 bg-aurora" />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:44px_44px] dark:bg-grid-dark" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-80 w-80 rounded-full bg-navy-400/20 blur-3xl dark:bg-navy-600/20" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <div
            className="reveal chip mb-6"
            style={{ transitionDelay: '60ms' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Data Analyst internships &amp; entry-level roles
          </div>

          <h1
            className="reveal font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
            style={{ transitionDelay: '120ms' }}
          >
            Hi, I&apos;m <br className="hidden sm:block" />
            <span className="gradient-text">Priya Sawant</span>
          </h1>

          <div
            className="reveal mt-5 flex items-center gap-2 text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-200"
            style={{ transitionDelay: '200ms' }}
          >
            <span className="h-6 w-1.5 rounded-full bg-blue-500" />
            <span className="font-mono text-blue-600 dark:text-blue-400">
              {typed}
            </span>
            <span className="h-6 w-0.5 animate-blink bg-blue-500" />
          </div>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-600 text-balance sm:text-lg dark:text-slate-400"
            style={{ transitionDelay: '280ms' }}
          >
            &ldquo;{profile.tagline}&rdquo;
          </p>

          <p
            className="reveal mt-5 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            style={{ transitionDelay: '340ms' }}
          >
            {profile.intro}
          </p>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-3"
            style={{ transitionDelay: '420ms' }}
          >
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/documents/Priya_Sawant_Resume_.pdf" download target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button onClick={() => scrollTo('#contact')} className="btn-ghost">
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </div>

          <div
            className="reveal mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            style={{ transitionDelay: '500ms' }}
          >
            <MapPin className="h-4 w-4 text-blue-500" />
            {profile.location}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="reveal relative mx-auto max-w-sm"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 animate-spin-slow rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-transparent to-navy-700/30 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[2.5rem] glass-strong p-8 shadow-card">
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 rounded-[2rem] bg-gradient-to-br from-blue-50 to-white p-8 dark:from-navy-950 dark:to-slate-900">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow-lg">
                    <span className="font-display text-5xl font-extrabold">PS</span>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      Priya Tanu Sawant
                    </div>
                    <div className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      Data Analyst
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {['Python', 'SQL', 'Power BI', 'ML'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-10 animate-float rounded-2xl glass-strong px-3 py-2 text-xs font-semibold text-slate-700 shadow-card dark:text-slate-200">
                <span className="text-blue-500">●</span> Power BI
              </div>
              <div
                className="absolute -left-4 bottom-16 animate-float rounded-2xl glass-strong px-3 py-2 text-xs font-semibold text-slate-700 shadow-card dark:text-slate-200"
                style={{ animationDelay: '1.5s' }}
              >
                <span className="text-emerald-500">●</span> Python
              </div>
              <div
                className="absolute -right-2 bottom-6 animate-float rounded-2xl glass-strong px-3 py-2 text-xs font-semibold text-slate-700 shadow-card dark:text-slate-200"
                style={{ animationDelay: '0.8s' }}
              >
                <span className="text-navy-500">●</span> SQL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <StatCard
            key={s.label}
            value={s.value}
            suffix={s.suffix ?? ''}
            label={s.label}
            start={startCount}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
}
