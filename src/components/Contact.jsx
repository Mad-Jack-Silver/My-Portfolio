import { motion, useReducedMotion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/content";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

export default function Contact() {
  const reduce = useReducedMotion();
  const hasEmail = profile.email && !profile.email.startsWith("TODO");
  const hasResume = profile.resumeUrl && profile.resumeUrl.length > 0;

  return (
    <section id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; contact</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm md:text-4xl">
            Let's talk
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sage">
            Open to junior ML/AI developer roles and collaboration. Reach out however's easiest.
          </p>
        </Reveal>

        <StaggerGroup className="mt-9 flex flex-wrap items-center justify-center gap-4" stagger={0.08}>
          {hasEmail && (
            <StaggerItem>
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber to-coral px-5 py-3 font-mono text-sm font-medium text-ink"
              >
                <Mail size={16} /> {profile.email}
              </motion.a>
            </StaggerItem>
          )}
          <StaggerItem>
            <motion.a
              href={profile.github} target="_blank" rel="noreferrer"
              whileHover={reduce ? undefined : { scale: 1.04, borderColor: "var(--color-sage)" }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-warm"
            >
              <GithubIcon size={16} /> GitHub
            </motion.a>
          </StaggerItem>
          <StaggerItem>
            <motion.a
              href={profile.linkedin} target="_blank" rel="noreferrer"
              whileHover={reduce ? undefined : { scale: 1.04, borderColor: "var(--color-sage)" }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-warm"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </motion.a>
          </StaggerItem>
          {hasResume && (
            <StaggerItem>
              <motion.a
                href={profile.resumeUrl} target="_blank" rel="noreferrer"
                whileHover={reduce ? undefined : { scale: 1.04, borderColor: "var(--color-sage)" }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-warm"
              >
                <FileText size={16} /> Resume
              </motion.a>
            </StaggerItem>
          )}
        </StaggerGroup>
      </div>
    </section>
  );
}
