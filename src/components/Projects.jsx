import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; projects</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm">Things I've built</h2>
          <p className="mt-3 max-w-xl text-sage">
            Every project here is real, working code — not just notebooks: modular structure, tests,
            and documentation throughout.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
