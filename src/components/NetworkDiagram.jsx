import { useMemo } from "react";

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const LAYER_SIZES = [6, 8, 8, 6, 3];
const W = 640;
const H = 340;
const PAD_X = 30;
const PAD_Y = 20;

function buildDiagram() {
  const rand = mulberry32(11);
  const layerX = LAYER_SIZES.map(
    (_, i) => PAD_X + ((W - PAD_X * 2) * i) / (LAYER_SIZES.length - 1)
  );
  const layers = LAYER_SIZES.map((n, li) => {
    const ys =
      n === 1
        ? [H / 2]
        : Array.from({ length: n }, (_, i) => PAD_Y + ((H - PAD_Y * 2) * i) / (n - 1));
    return ys.map((y) => ({ x: layerX[li], y }));
  });

  const edges = [];
  for (let li = 0; li < layers.length - 1; li++) {
    layers[li].forEach((from) => {
      const targets = new Set();
      const count = Math.min(3, layers[li + 1].length);
      while (targets.size < count) {
        targets.add(Math.floor(rand() * layers[li + 1].length));
      }
      targets.forEach((ti) => edges.push({ from, to: layers[li + 1][ti] }));
    });
  }

  const highlightIdx = LAYER_SIZES.map((n) => Math.floor(n / 2));
  const highlightNodes = layers.map((layer, li) => layer[highlightIdx[li]]);
  const highlightEdges = highlightNodes.slice(0, -1).map((from, i) => ({
    from,
    to: highlightNodes[i + 1],
  }));

  return { layers, edges, highlightNodes, highlightEdges };
}

export default function NetworkDiagram({ className = "", animated = true }) {
  const { layers, edges, highlightNodes, highlightEdges } = useMemo(buildDiagram, []);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="Diagram of a neural network with one highlighted activation path flowing from input to output"
    >
      <defs>
        <linearGradient id="activationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-amber)" />
          <stop offset="100%" stopColor="var(--color-coral)" />
        </linearGradient>
      </defs>

      {/* dim background connections */}
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y}
          stroke="var(--color-line)" strokeWidth="1" opacity="0.6"
        />
      ))}

      {/* highlighted activation path */}
      {highlightEdges.map((e, i) => (
        <line
          key={i}
          x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y}
          pathLength="1"
          stroke="url(#activationGradient)" strokeWidth="2.5"
          strokeLinecap="round"
          className={animated ? "diagram-edge" : ""}
          style={animated ? { animationDelay: `${i * 0.15}s, 1s` } : undefined}
        />
      ))}

      {/* dim nodes */}
      {layers.flat().map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="4.5" fill="var(--color-dim)" />
      ))}

      {/* highlighted nodes */}
      {highlightNodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r="6.5"
          fill={i === highlightNodes.length - 1 ? "var(--color-coral)" : "var(--color-amber)"}
          className={animated ? "diagram-node" : ""}
          style={animated ? { animationDelay: `${i * 0.15}s, 1s` } : undefined}
        />
      ))}
    </svg>
  );
}
