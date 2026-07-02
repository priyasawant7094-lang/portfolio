import { useEffect, useState } from 'react';
import { Github, ExternalLink, ArrowRight, X, CheckCircle2, Layers } from 'lucide-react';
import { projects, type Project } from '../data';
import { SectionHeading } from './SectionHeading';

const filters = ['All', 'Data Visualization', 'Machine Learning'] as const;
type Filter = (typeof filters)[number];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl glass shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
        <span className="absolute left-4 top-4 chip !bg-white/90 !text-slate-800 backdrop-blur">
          {project.category}
        </span>
        <div className="absolute inset-x-4 bottom-4 flex translate-y-2 flex-wrap gap-1.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          <button
            onClick={() => onOpen(project)}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl glass-strong p-6 shadow-card animate-fade-up sm:rounded-3xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>

        <span className="chip mb-3">{project.category}</span>
        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white">
            <Layers className="h-4 w-4 text-blue-500" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
            Key Features
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-white/40 p-2.5 dark:border-slate-700/70 dark:bg-slate-800/40"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>

        {project.highlights && (
          <div className="mt-5">
            <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
              Predicted Classes
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-1"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Real <span className="gradient-text">projects</span>, real insights
            </>
          }
          subtitle="Three completed projects spanning machine learning and business intelligence."
        />

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-blue-500 to-navy-700 text-white shadow-glow'
                  : 'border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
