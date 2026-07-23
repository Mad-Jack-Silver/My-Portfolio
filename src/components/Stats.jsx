import AnimatedCounter from "./AnimatedCounter";
import { StaggerGroup, StaggerItem } from "./motion";

const STATS = [
  { value: 5, decimals: 0, suffix: "", label: "Real Projects Shipped" },
  { value: 54, decimals: 0, suffix: "K+", label: "Images Classified" },
  { value: 0.92, decimals: 2, suffix: "", label: "R² Score (House Price)" },
  { value: 3, decimals: 0, suffix: "+", label: "Years Professional Experience" },
];

export default function Stats() {
  return (
    <section className="border-t border-line/60">
      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {STATS.map((s) => (
          <StaggerItem key={s.label} className="text-center">
            <div className="font-display text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber to-coral md:text-5xl">
              <AnimatedCounter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </div>
            <p className="mt-2 font-mono text-xs text-dim">{s.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
