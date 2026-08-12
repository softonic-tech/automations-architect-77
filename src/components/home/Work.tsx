import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, conceptCards } from "@/data/projects";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { Reveal, SectionHeading, SpotlightCard } from "@/components/animations/primitives";
import { cn } from "@/lib/utils";

export function Work() {
  const featured = projects.slice(0, 5);
  const rest = projects.slice(5);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected systems"
          title="Systems I've Built"
          subtitle="Real-world automation designed around business operations — not demo workflows."
        />

        <div className="mt-16 space-y-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={0.05}>
              <SpotlightCard className="p-6 md:p-8">
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                    i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div>
                    <p className="eyebrow">{p.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.description}
                    </p>

                    <dl className="mt-6 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-2">
                      <div>
                        <dt className="font-mono text-[0.6rem] tracking-widest text-muted-foreground/70 uppercase">
                          Problem
                        </dt>
                        <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {p.problem.split(".")[0]}.
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.6rem] tracking-widest text-muted-foreground/70 uppercase">
                          Outcome
                        </dt>
                        <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {p.results[0]}
                        </dd>
                      </div>
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.62rem] text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/work/$slug"
                      params={{ slug: p.slug }}
                      className="group mt-7 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40"
                    >
                      View Case Study
                      <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="min-h-[240px]">
                    <ProjectVisual project={p} />
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <SpotlightCard className="flex h-full flex-col p-6">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <div className="mt-5 min-h-[150px]">
                  <ProjectVisual project={p} />
                </div>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  View Case Study
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="font-display text-xl font-semibold">Systems I also build on request</h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Common automation patterns that can be adapted to your process in days rather than
            months.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {conceptCards.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-hairline bg-surface/40 p-4 transition-colors hover:border-primary/30"
              >
                <p className="font-display text-sm font-semibold">{c.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
