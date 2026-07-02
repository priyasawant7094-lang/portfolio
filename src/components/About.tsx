import { CheckCircle2, GraduationCap, Heart, Sparkles } from 'lucide-react';
import { aboutPoints, interests, profile } from '../data';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A <span className="gradient-text">data-driven</span> storyteller in
              the making
            </>
          }
          subtitle="Turning curiosity into clarity — one dataset at a time."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <div className="glass rounded-3xl p-8 shadow-card transition-all duration-500 hover:shadow-card-hover">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Who I Am
                </h3>
              </div>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.intro}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {aboutPoints.map((point, i) => (
                  <div
                    key={point}
                    className="reveal flex items-start gap-2.5 rounded-2xl border border-slate-200/70 bg-white/50 p-3 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-700/70 dark:bg-slate-800/40 dark:hover:border-blue-500/40"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal space-y-6 lg:col-span-5" style={{ transitionDelay: '120ms' }}>
            <div className="glass rounded-3xl p-8 shadow-card">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/10 text-navy-600 dark:text-navy-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Background
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                A Computer Science graduate and fresher with a strong academic
                foundation in programming, data structures, and analytics. I am
                passionate about Business Intelligence and love building
                dashboards that make complex data easy to understand.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 shadow-card">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Heart className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, i) => (
                  <span
                    key={interest}
                    className="reveal chip transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
