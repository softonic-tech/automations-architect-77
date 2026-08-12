import { motion, useReducedMotion } from "motion/react";
import { outcomes } from "@/data/services";
import { Reveal, SectionHeading, SpotlightCard } from "@/components/animations/primitives";

function MiniViz({ kind }: { kind: "ops" | "leads" | "reply" | "scale" }) {
  const reduced = useReducedMotion();
  const anim = (i: number) =>
    reduced ? {} : { opacity: [0.35, 1, 0.35], transition: { duration: 2.4, repeat: Infinity, delay: i * 0.25 } };

  if (kind === "scale") {
    return (
      <div className="flex h-12 items-end gap-1.5">
        {[30, 45, 38, 62, 74, 88].map((h, i) => (
          <motion.span
            key={i}
            className="w-2.5 rounded-sm bg-primary/40"
            style={{ height: `${h}%` }}
            animate={anim(i)}
          />
        ))}
      </div>
    );
  }
  if (kind === "reply") {
    return (
      <div className="flex h-12 items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span key={i} className="size-2 rounded-full bg-primary/60" animate={anim(i)} />
        ))}
        <span className="ml-2 font-mono text-[0.6rem] text-muted-foreground">replying…</span>
      </div>
    );
  }
  if (kind === "leads") {
    return (
      <div className="flex h-12 items-center gap-1.5">
        {["Lead", "Score", "Route"].map((s, i) => (
          <motion.span
            key={s}
            className="rounded-md border border-hairline bg-surface/70 px-2 py-1 font-mono text-[0.58rem]"
            animate={anim(i)}
          >
            {s}
          </motion.span>
        ))}
      </div>
    );
  }
  return (
    <div className="flex h-12 flex-col justify-center gap-1.5">
      {[80, 55, 68].map((w, i) => (
        <motion.span
          key={i}
          className="h-1.5 rounded-full bg-primary/40"
          style={{ width: `${w}%` }}
          animate={anim(i)}
        />
      ))}
    </div>
  );
}

export function Outcomes() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Business outcomes"
          title="Automate More Than Tasks"
          subtitle="Isolated shortcuts save minutes. Systems change how the business runs — these are the four results clients actually buy."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6">
                <MiniViz kind={o.kind} />
                <h3 className="mt-6 font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
