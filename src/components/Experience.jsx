import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { experience } from "../data/content";
import { Reveal } from "./motion";

export default function Experience() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="experience" className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; experience</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm">Professional experience</h2>
          <p className="mt-3 max-w-xl text-sage">
            3+ years combining technical work with operations, data management, and client-facing roles.
          </p>
        </Reveal>

        <div ref={trackRef} className="relative mt-10 space-y-8">
          {/* static track */}
          <div className="absolute left-0 top-1 bottom-1 w-px bg-line" />
          {/* fills in as you scroll through this section */}
          {!reduce && (
            <motion.div
              className="absolute left-0 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-amber to-coral"
              style={{ scaleY: lineScale }}
            />
          )}

          {experience.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.06} className="relative pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-warm">{job.title}</h3>
                <span className="font-mono text-xs text-dim">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-amber">{job.org}</p>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((p, idx) => (
                  <li key={idx} className="text-sm leading-relaxed text-sage">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
