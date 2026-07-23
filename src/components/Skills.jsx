import { skills } from "../data/content";
import { skillIcons } from "../data/skillIcons";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; skills</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm">What I work with</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <Reveal key={category} delay={catIdx * 0.06}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-dim">{category}</h3>
              <StaggerGroup className="mt-4 flex flex-wrap gap-2" stagger={0.04}>
                {items.map((skill) => (
                  <StaggerItem key={skill} y={8}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-sage transition-colors hover:border-amber hover:text-warm">
                      {skillIcons[skill]}
                      {skill}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
