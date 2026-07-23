import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { certifications } from "../data/content";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

export default function Certifications() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section id="certifications" className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-amber">&gt; certifications</p>
          <h2 className="mt-3 font-display text-3xl font-light text-warm">Credentials</h2>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <button
                onClick={() => setActive(cert)}
                className="group relative w-full overflow-hidden rounded-xl border border-line bg-surface text-left transition-colors hover:border-dim"
              >
                <div className="aspect-[4/2.6] overflow-hidden bg-ink">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-warm/40 bg-ink/70 px-4 py-2 font-mono text-xs text-warm">
                      <ExternalLink size={13} /> View full size
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base text-warm">{cert.title}</h3>
                  <p className="mt-1 font-mono text-xs text-amber">{cert.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-dim">
                    {cert.date}
                    {cert.credentialId && ` · ID: ${cert.credentialId}`}
                  </p>
                  {cert.note && <p className="mt-2 text-xs italic text-dim/80">{cert.note}</p>}
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.94, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative max-h-[85vh] max-w-3xl overflow-auto rounded-xl border border-line bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-warm backdrop-blur hover:bg-ink"
              >
                <X size={18} />
              </button>
              <img src={active.image} alt={`${active.title} certificate`} className="w-full" />
              <div className="p-5">
                <h3 className="font-display text-lg text-warm">{active.title}</h3>
                <p className="mt-1 font-mono text-sm text-amber">{active.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
