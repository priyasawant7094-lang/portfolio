import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { profile } from '../data';
import { supabase } from '../lib/supabase';
import { SectionHeading } from './SectionHeading';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/priya-sawant-149b10358',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/priyasawant7094-lang',
    href: profile.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: undefined,
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setStatus('error');
      setErrorMsg('Submission is temporarily unavailable. Please email me directly.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:placeholder-slate-500';

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s <span className="gradient-text">connect</span>
            </>
          }
          subtitle="Open to Data Analyst internships, entry-level roles, and collaboration. I'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="reveal space-y-4 lg:col-span-5">
            {contactCards.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <div className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-navy-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {c.value}
                    </p>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="reveal block"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {content}
                </a>
              ) : (
                <div key={c.label} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  {content}
                </div>
              );
            })}

            <div className="reveal rounded-2xl bg-gradient-to-br from-blue-500 to-navy-700 p-6 text-white shadow-glow" style={{ transitionDelay: '320ms' }}>
              <p className="font-display text-lg font-bold">Currently available</p>
              <p className="mt-1 text-sm text-blue-100">
                Actively seeking Data Analyst internships and entry-level opportunities.
              </p>
            </div>
          </div>

          <div className="reveal lg:col-span-7" style={{ transitionDelay: '120ms' }}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-7 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="How can I help?"
                  className={inputClass}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about the opportunity or just say hi..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary mt-6 w-full disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Thank you! Your message has been sent. I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
