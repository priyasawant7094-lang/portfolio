import { useEffect, useRef, useState } from 'react';
import { skillGroups, skillIcons } from '../data';
import { SectionHeading } from './SectionHeading';

function SkillBar({
  name,
  level,
  start,
  delay,
}: {
  name: string;
  level: number;
  start: boolean;
  delay: number;
}) {
  const Icon = skillIcons[name];
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
          {Icon && <Icon className="h-3.5 w-3.5 text-blue-500" />}
          {name}
        </span>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-navy-700 transition-[width] duration-1000 ease-out"
          style={{
            width: start ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({
  group,
  index,
  start,
}: {
  group: (typeof skillGroups)[number];
  index: number;
  start: boolean;
}) {
  const Icon = group.icon;
  return (
    <div
      className="reveal group relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
      />
      <div className="mb-6 flex items-center gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-glow transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            {group.title}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {group.skills.length} skills
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            start={start}
            delay={index * 100 + i * 80}
          />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills &amp; Expertise"
          title={
            <>
              Tools that turn <span className="gradient-text">data</span> into
              decisions
            </>
          }
          subtitle="A blend of technical proficiency and human-centered soft skills."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
