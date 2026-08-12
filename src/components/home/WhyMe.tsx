import { whyPoints } from "@/data/services";
import { stats } from "@/data/site";
import { Counter, Reveal, SectionHeading } from "@/components/animations/primitives";

export function WhyMe() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why work with me"
            title="Engineering, not tinkering"
            subtitle="Automation that survives real business volume looks different from a workflow assembled in an afternoon."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyPoints.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors hover:border-primary/30">
                  <h3 className="font-display text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8">
              <p className="font-display text-4xl font-semibold text-primary">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
