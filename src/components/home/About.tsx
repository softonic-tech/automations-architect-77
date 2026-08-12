import { Reveal } from "@/components/animations/primitives";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          {/* Replace this placeholder with a real portrait: <img src={portrait} alt="..." /> */}
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-hairline bg-surface/50">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(120% 90% at 30% 10%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%)",
              }}
            />
            <div aria-hidden className="grid-bg absolute inset-0 opacity-50" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase">
                Portrait placeholder
              </p>
              <p className="mt-1 font-display text-lg font-semibold">{site.person}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
              I build the systems, not just the workflows
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm an automation-focused software engineer who builds intelligent systems
                connecting AI, business applications, APIs and data.
              </p>
              <p>
                Instead of automating isolated tasks, I focus on understanding how a business
                operates and designing systems that automate complete workflows — from lead capture
                and customer conversations to CRM operations, reporting and internal processes.
              </p>
              <p>
                In practice that spans agent design and prompt architecture, n8n and custom
                orchestration, CRM and messaging integrations, PostgreSQL and Supabase data layers,
                and the React and Node.js interfaces your team uses to actually run the thing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {[
                "AI agent architecture",
                "Workflow orchestration",
                "API & webhook integration",
                "Data modelling",
                "Dashboards & internal tools",
                "Reliability & error handling",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-hairline bg-surface/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
