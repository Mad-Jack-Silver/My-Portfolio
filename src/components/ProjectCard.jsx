import { useRef } from "react";
import {
  motion, useMotionValue, useMotionTemplate, useSpring, useTransform, useReducedMotion,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  const reduce = useReducedMotion();
  const cardRef = useRef(null);
  const hasGithub = project.githubUrl && !project.githubUrl.startsWith("TODO");
  const hasDemo = project.demoUrl && project.demoUrl.length > 0;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 220, damping: 24 });
  const mxPct = useTransform(mx, (v) => `${v * 100}%`);
  const myPct = useTransform(my, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mxPct} ${myPct}, rgba(232,163,61,0.10), transparent 72%)`;

  function handleMove(e) {
    if (reduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition-colors hover:border-dim"
    >
      {!reduce && (
        <motion.div className="pointer-events-none absolute inset-0" style={{ backgroundImage: spotlight }} />
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-warm">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-amber">
            {project.type}
          </span>
        </div>

        {/* Added text-justify to both summary and details for consistent alignment */}
        <p className="mt-3 text-sm leading-relaxed text-sage text-justify">{project.summary}</p>
        <p className="mt-3 text-sm leading-relaxed text-dim text-justify">{project.details}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-2 py-0.5 font-mono text-xs text-sage transition-colors group-hover:border-dim"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 border-t border-line pt-4 font-mono text-sm">
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sage hover:text-warm transition-colors"
            >
              <GithubIcon size={15} /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-dim/60" title="Add your GitHub repo link in content.js">
              <GithubIcon size={15} /> Code
            </span>
          )}
          {hasDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sage hover:text-warm transition-colors"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}