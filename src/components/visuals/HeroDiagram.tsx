import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; x: number; y: number };

const nodes: Node[] = [
  { id: "crm", label: "CRM", x: 12, y: 16 },
  { id: "wa", label: "WhatsApp", x: 8, y: 50 },
  { id: "mail", label: "Email", x: 14, y: 84 },
  { id: "cal", label: "Calendar", x: 88, y: 16 },
  { id: "db", label: "Database", x: 92, y: 50 },
  { id: "social", label: "Social", x: 86, y: 84 },
  { id: "openai", label: "OpenAI", x: 50, y: 8 },
  { id: "n8n", label: "n8n", x: 50, y: 92 },
];

const leftIds = ["crm", "wa", "mail", "openai"];

export function HeroDiagram() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
        aria-hidden
      >
        {nodes.map((n, i) => {
          const inbound = leftIds.includes(n.id);
          const d = `M ${n.x} ${n.y} C ${(n.x + 50) / 2} ${n.y}, ${(n.x + 50) / 2} ${50}, 50 50`;
          const active = hover === n.id;
          return (
            <g key={n.id}>
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth={active ? 0.5 : 0.28}
                className={cn(
                  "text-foreground/15 transition-all duration-300",
                  active && "text-primary/70",
                )}
                vectorEffect="non-scaling-stroke"
              />
              {!reduced ? (
                <circle r="0.75" fill="currentColor" className="text-primary">
                  <animateMotion
                    dur={`${2.6 + (i % 4) * 0.55}s`}
                    begin={`${i * 0.35}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints={inbound ? "0;1" : "1;0"}
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              ) : null}
            </g>
          );
        })}
      </svg>

      {/* Center AI core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduced ? {} : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex size-24 items-center justify-center rounded-full border border-primary/30 bg-background/80 backdrop-blur-md sm:size-32"
          style={{ boxShadow: "var(--glow-accent)" }}
        >
          <div className="absolute inset-2 rounded-full border border-primary/15" />
          <div className="text-center">
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-primary uppercase">Core</p>
            <p className="font-display text-sm font-semibold sm:text-base">AI Engine</p>
          </div>
        </motion.div>
      </div>

      {nodes.map((n, i) => (
        <motion.button
          key={n.id}
          type="button"
          initial={reduced ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
          onPointerEnter={() => setHover(n.id)}
          onPointerLeave={() => setHover(null)}
          onFocus={() => setHover(n.id)}
          onBlur={() => setHover(null)}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className={cn(
            "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-hairline bg-surface/80 px-2.5 py-1.5 text-[0.65rem] whitespace-nowrap backdrop-blur-md transition-all duration-300 sm:px-3.5 sm:py-2 sm:text-xs",
            hover === n.id
              ? "border-primary/50 text-foreground shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_10%,transparent)]"
              : "text-muted-foreground",
          )}
        >
          <span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary/70 align-middle" />
          {n.label}
        </motion.button>
      ))}

      <div className="pointer-events-none absolute inset-x-0 -bottom-2 flex justify-center">
        <p className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
          Input → AI Processing → Business Action
        </p>
      </div>
    </div>
  );
}
