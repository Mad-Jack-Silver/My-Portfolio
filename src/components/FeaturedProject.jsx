import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GithubIcon } from "./icons";
import { featuredProject } from "../data/content";
import { Reveal } from "./motion";
import MallMapIllustration from "./MallMapIllustration";

export default function FeaturedProject() {
  const reduce = useReducedMotion();
  const hasGithub = featuredProject.githubUrl && !featuredProject.githubUrl.startsWith("TODO");

  return (
    <section id="featured" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/5 px-3 py-1 font-mono text-xs text-amber">
            <Sparkles size={12} /> Featured — Final Year Project
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <Reveal delay={0.05} className="order-2 md:order-1">
            <h2 className="font-display text-3xl font-light text-warm md:text-4xl">
              {featuredProject.title}
            </h2>
            <p className="mt-1 font-mono text-sm text-sage">{featuredProject.subtitle}</p>

            {/* Added text-justify to both summary and details paragraphs */}
            <p className="mt-5 text-sage leading-relaxed text-justify">{featuredProject.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-dim text-justify">{featuredProject.details}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-sage">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {hasGithub ? (
                <motion.a
                  href={featuredProject.githubUrl}
                  target="_blank" rel="noreferrer"
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber to-coral px-5 py-3 font-mono text-sm font-medium text-ink"
                >
                  <GithubIcon size={16} /> View Code
                </motion.a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm text-dim/60"
                  title="Add the GoGuide repo link in content.js"
                >
                  <GithubIcon size={16} /> Code coming soon
                </span>
              )}
              <span className="font-mono text-xs text-dim">Presented at NUML's Open House exhibition</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 md:order-2">
            <div className="rounded-2xl border border-line bg-surface p-4">
              <MallMapIllustration className="w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}