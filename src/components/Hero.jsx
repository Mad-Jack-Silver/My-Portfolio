import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/content";
import NetworkDiagram from "./NetworkDiagram";
import DanglingIDCard from "./DanglingIDCard";

const EASE = [0.21, 0.47, 0.32, 0.98];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const diagramRef = useRef(null);

  // Subtle parallax tilt on the diagram, following the pointer -- desktop only,
  // gracefully does nothing if the user never moves a mouse (e.g. touch devices).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e) {
    if (reduce || !diagramRef.current) return;
    const rect = diagramRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  // Split the name to force the last word ("Rizvi") onto a new line
  const nameParts = profile.name.split(" ");
  const lastName = nameParts.pop();
  const restOfName = nameParts.join(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      <DanglingIDCard />
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-12 lg:gap-24 px-6 pt-16 pb-20 md:grid-cols-5 md:pt-24 md:pb-28"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <div className="md:col-span-3">
          <motion.p variants={reduce ? undefined : item} className="font-mono text-sm text-sage">
            <span className="text-amber">&gt;</span> {profile.role}
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-4 font-display text-5xl font-extralight leading-[1.05] text-warm md:text-6xl"
          >
            <span className="bg-gradient-to-r from-warm via-warm to-amber bg-clip-text text-transparent">
              {/* Renders: "Syed Hussain Abbas" on top, "Rizvi" on bottom */}
              {restOfName} <br /> {lastName}
            </span>
          </motion.h1>

          <motion.p variants={reduce ? undefined : item} className="mt-6 max-w-xl text-lg leading-relaxed text-sage text-justify">
            {profile.tagline}
          </motion.p>

          <motion.div variants={reduce ? undefined : item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber to-coral px-5 py-3 font-mono text-sm font-medium text-ink"
            >
              View Projects <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { scale: 1.04, borderColor: "var(--color-sage)" }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-warm"
            >
              Get in Touch
            </motion.a>
            <div className="flex items-center gap-3 pl-1">
              <motion.a
                href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"
                whileHover={reduce ? undefined : { scale: 1.15, y: -2 }}
                className="text-sage hover:text-warm transition-colors"
              >
                <GithubIcon size={20} />
              </motion.a>
              <motion.a
                href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"
                whileHover={reduce ? undefined : { scale: 1.15, y: -2 }}
                className="text-sage hover:text-warm transition-colors"
              >
                <LinkedinIcon size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={reduce ? undefined : item}
          className="md:col-span-2 flex justify-end"
          style={{ perspective: 800 }}
          ref={diagramRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div style={reduce ? undefined : { rotateX, rotateY }} className="w-full">
            <NetworkDiagram className="w-full max-w-lg md:ml-auto drop-shadow-[0_0_40px_rgba(232,163,61,0.08)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-dim md:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}