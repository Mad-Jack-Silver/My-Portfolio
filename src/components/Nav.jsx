import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#featured", label: "Featured" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  const initial = profile.name.trim()[0];
  return (
    <motion.a
      href="#top"
      aria-label="Back to top"
      whileHover={{ scale: 1.07, rotate: -6 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full p-[1.5px]"
      style={{ background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))" }}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-warm">
        {initial}
      </span>
    </motion.a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Logo />

        <ul className="hidden gap-7 font-mono text-sm lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-sage transition-colors hover:text-warm group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber to-coral transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-sage lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-line/60 px-6 font-mono text-sm lg:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="py-2">
                <a
                  href={l.href}
                  className="block text-sage transition-colors hover:text-warm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* scroll progress indicator */}
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-amber to-coral"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
