import { about } from "../data/content";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

export default function About() {
  return (
    <section id="about" className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; about</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm">Where I'm coming from</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-4 text-sage leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-justify">{p}</p>
          ))}
        </Reveal>

        {/* Learning path -- a real, ordered progression, so a timeline device is honest here */}
        <div className="mt-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-dim">
            The path so far
          </p>
          <StaggerGroup className="grid gap-6 md:grid-cols-4" stagger={0.1}>
            {about.path.map((step, i) => (
              <StaggerItem key={step.label}>
                <div className="relative pl-6 md:pl-0">
                  <div
                    className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full md:static md:mb-3 md:h-3 md:w-3"
                    style={{
                      background: `linear-gradient(90deg, var(--color-amber), var(--color-coral))`,
                      opacity: 0.4 + (i / (about.path.length - 1)) * 0.6,
                    }}
                  />
                  <div className="border-l border-line pl-4 md:border-l-0 md:pl-0">
                    <h3 className="font-mono text-sm text-warm">{step.label}</h3>
                    <p className="mt-1 text-sm text-sage">{step.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-dim">Education</p>
            <p className="mt-3 text-sm text-warm">{about.education.degree}</p>
            <p className="mt-1 text-sm text-sage">{about.education.institution}</p>
            <p className="mt-1 font-mono text-xs text-dim">
              {about.education.year} · {about.education.detail}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-dim">Honors & Awards</p>
            <ul className="mt-3 space-y-2">
              {about.honors.map((h) => (
                <li key={h} className="text-sm text-sage">{h}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}