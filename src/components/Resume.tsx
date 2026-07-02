import {
  Download,
  FileText,
  GraduationCap,
  Wrench,
  FolderGit2,
  Award,
  ExternalLink,
  Trophy,
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
} from 'lucide-react';
import {
  resumeSummary,
  skillGroups,
  projects,
  education,
  certificates,
  achievements,
  profile,
} from '../data';
import { SectionHeading } from './SectionHeading';

function SectionDivider({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
        {icon}
      </span>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        {title}
      </h4>
      <div className="flex-1 border-t border-blue-200/70 dark:border-blue-500/20" />
    </div>
  );
}

export function Resume() {
  const techSkillGroups = skillGroups.filter((g) =>
    ['Languages', 'Visualization & Tools', 'Core Analytics'].includes(g.title)
  );

  return (
    <section id="resume" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resume"
          title={
            <>
              My <span className="gradient-text">professional</span> snapshot
            </>
          }
          subtitle="A complete overview matching my actual resume — skills, projects, certifications, and achievements."
        />

        {/* Download bar */}
        <div className="reveal mt-12 flex flex-col gap-4 rounded-3xl glass-strong px-6 py-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-base font-bold text-slate-900 dark:text-white">
                Priya Tanu Sawant — Resume
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Data Analyst · Power BI · Python · SQL
              </p>
            </div>
          </div>
          <a
            href="/documents/Priya_Sawant_Resume_.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* Resume card */}
        <div
          className="reveal mt-6 overflow-hidden rounded-3xl glass shadow-card"
          style={{ transitionDelay: '80ms' }}
        >
          {/* Header */}
          <div className="border-b border-slate-200/70 bg-gradient-to-r from-blue-600 to-navy-800 p-8 text-center text-white dark:border-slate-700/70">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              PRIYA TANU SAWANT
            </h2>
            <p className="mt-1.5 text-sm font-medium text-blue-100">
              Data Analyst &nbsp;|&nbsp; Power BI &nbsp;|&nbsp; Python &nbsp;|&nbsp; SQL
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-blue-100">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" /> {profile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> {profile.phone}
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            {/* Objective */}
            <div>
              <SectionDivider title="Objective" icon={<FileText className="h-4 w-4" />} />
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {resumeSummary}
              </p>
            </div>

            {/* Education */}
            <div>
              <SectionDivider title="Education" icon={<GraduationCap className="h-4 w-4" />} />
              {education.map((e, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {e.degree}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {e.institution}
                      {e.cgpa && (
                        <span className="ml-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                          — CGPA: {e.cgpa}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="mt-0.5 shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-right">
                    {e.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <SectionDivider title="Skills" icon={<Wrench className="h-4 w-4" />} />
              <div className="space-y-2">
                {techSkillGroups.map((g) => (
                  <div
                    key={g.title}
                    className="grid gap-2 text-sm"
                    style={{ gridTemplateColumns: '140px 1fr' }}
                  >
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {g.title}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {g.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
                <div
                  className="grid gap-2 text-sm"
                  style={{ gridTemplateColumns: '140px 1fr' }}
                >
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Languages
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    English, Hindi, Marathi
                  </span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <SectionDivider title="Projects" icon={<FolderGit2 className="h-4 w-4" />} />
              <div className="space-y-5">
                {projects.map((p) => (
                  <div key={p.id}>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {p.title}
                      </span>
                      <span className="text-xs italic text-slate-500 dark:text-slate-400">
                        — {p.technologies.join(', ')}
                      </span>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <Github className="h-3 w-3" /> GitHub
                      </a>
                    </div>
                    <ul className="mt-1.5 space-y-1 pl-4">
                      {p.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="list-disc text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionDivider title="Certifications" icon={<Award className="h-4 w-4" />} />
              <div className="grid gap-3 sm:grid-cols-2">
                {certificates.map((cert) => (
                  <a
                    key={cert.title + cert.issuer}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/40 p-3 transition-all duration-300 hover:border-blue-400 hover:shadow-glow dark:border-slate-700/70 dark:bg-slate-800/40 dark:hover:border-blue-500"
                  >
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${cert.color} text-white`}
                    >
                      <FileText className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {cert.title}
                      </p>
                      <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <SectionDivider title="Achievements" icon={<Trophy className="h-4 w-4" />} />
              <ul className="space-y-2 pl-4">
                {achievements.map((a) => (
                  <li
                    key={a}
                    className="list-disc text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div>
              <SectionDivider title="Interests" icon={<Sparkles className="h-4 w-4" />} />
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Analytics',
                  'Data Visualization',
                  'Business Intelligence',
                  'Machine Learning',
                  'Power BI Dashboard Development',
                  'Continuous Learning',
                ].map((interest) => (
                  <span key={interest} className="chip">
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
