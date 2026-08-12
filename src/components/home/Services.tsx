import { services } from "@/data/services";
import { Reveal, SectionHeading, SpotlightCard } from "@/components/animations/primitives";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="Automation Systems I Build"
          subtitle="Six categories that cover everything from a single connected workflow to a full internal platform."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={(i % 3) * 0.08}>
              <SpotlightCard className="flex h-full flex-col p-6 md:p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-widest text-primary">{s.index}</span>
                  <span className="h-px w-12 bg-hairline" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-hairline bg-background/50 px-2.5 py-1 text-[0.68rem] text-muted-foreground transition-colors group-hover:border-primary/25"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
