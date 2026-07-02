import { GraduationCap, BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { education, certificates } from '../data';
import { SectionHeading } from './SectionHeading';

const milestones = [
  {
    icon: BookOpen,
    title: 'Foundation',
    text: 'Built strong fundamentals in programming, data structures, and algorithms.',
  },
  {
    icon: Award,
    title: 'Skill Building',
    text: 'Developed hands-on expertise in Power BI, SQL, Python, and data visualization.',
  },
  {
    icon: GraduationCap,
    title: 'Projects & Growth',
    text: 'Completed three real-world projects in analytics and deep learning.',
  },
];

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-50" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education & Journey"
          title={
            <>
              My <span className="gradient-text">learning</span> path
            </>
          }
          subtitle="A continuous journey of building skills and shipping projects."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-navy-500 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`reveal relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="hidden flex-1 sm:block" />
                <div className="absolute left-4 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow sm:left-1/2">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="flex-1 pl-12 sm:px-8">
                  <div className="glass rounded-3xl p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="chip mb-3">{edu.status}</span>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {edu.institution} · {edu.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="reveal glass rounded-2xl p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {m.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {m.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="reveal mb-8 text-center">
            <span className="chip mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Certifications
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Verified <span className="gradient-text">achievements</span>
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <div
                key={cert.title}
                className="reveal group glass rounded-2xl p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-glow`}
                  >
                    <FileText className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
