import { techGroups } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/animations/primitives";

export function TechStack() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology"
          title="The Stack Behind the Systems"
          subtitle="Grouped by what it does for your business, not by logo count."
        />
      </div>

      <div className="mt-14 space-y-3">
        {techGroups.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.05}>
            <div className="group flex items-center gap-6 border-y border-hairline py-4">
              <span className="container-x w-40 shrink-0 pr-0 font-mono text-[0.62rem] tracking-widest text-muted-foreground uppercase md:w-56">
                {g.group}
              </span>
              <div className="relative flex-1 overflow-hidden">
                <div
                  className="marquee-track flex w-max gap-10 group-hover:[animation-play-state:paused]"
                  style={{ ["--marquee-duration" as string]: `${28 + i * 6}s` }}
                >
                  {[...g.items, ...g.items, ...g.items, ...g.items].map((t, k) => (
                    <span
                      key={`${t}-${k}`}
                      className="font-display text-lg font-medium whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-primary md:text-2xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
