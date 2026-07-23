import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/content";

export default function DanglingIDCard() {
  const reduce = useReducedMotion();
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute right-6 top-0 z-20 hidden select-none md:right-14 md:block">
      {/* lanyard clip + string */}
      <div className="mx-auto h-3 w-6 rounded-b-full border border-t-0 border-line bg-surface" />
      <svg width="2" height="46" className="mx-auto block">
        <line x1="1" y1="0" x2="1" y2="46" stroke="var(--color-line)" strokeWidth="1.5" />
      </svg>

      <motion.div
        initial={{ y: -140, opacity: 0, rotate: -8 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 11, delay: 0.4 }}
        style={{ transformOrigin: "top center" }}
      >
        <motion.div
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          style={{ transformOrigin: "top center" }}
          className="w-[148px] rounded-lg border border-line bg-surface p-3 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-ink"
              style={{ background: "linear-gradient(135deg, var(--color-amber), var(--color-coral))" }}
            >
              {initials}
            </div>
            <div className="min-w-0">
              {/* Updated the placeholder text here to reflect your actual certification */}
              <p className="truncate font-mono text-[9px] text-dim">AI/ML/DL . DEV</p>
              <p className="truncate font-display text-xs text-warm">{profile.name.split(" ")[1]}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-[3px]">
            {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3].map((w, i) => (
              <div key={i} style={{ width: w }} className="h-4 bg-line" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}