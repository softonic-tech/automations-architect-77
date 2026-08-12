import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { ProjectVisual, FlowStrip } from "@/components/visuals/ProjectVisual";
import { Reveal } from "@/components/animations/primitives";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Case Study`;
    return {
      meta: [
        { title },
        { name: "description", content: project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.name,
            description: project.tagline,
            about: project.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudy,
});

function CaseNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-3xl font-semibold">Case study not found</h1>
      <Link to="/" className="text-sm text-primary hover:underline">
        Back to homepage
      </Link>
    </div>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-hairline py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
        <div>
          <span className="font-mono text-xs tracking-widest text-primary">{index}</span>
          <h2 className="mt-2 font-display text-xl font-semibold">{title}</h2>
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground md:text-base">{children}</div>
      </div>
    </Reveal>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <header className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/3 h-[420px] w-[700px] rounded-full opacity-35 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 20%, transparent), transparent)",
            }}
          />
          <div className="container-x relative">
            <Link
              to="/"
              hash="work"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> All systems
            </Link>
            <p className="eyebrow mt-8">{project.category}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight font-semibold text-balance md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.tagline}
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="min-h-[220px]">
                <ProjectVisual project={project} />
              </div>
              <div className="rounded-2xl border border-hairline bg-surface/40 p-6">
                <p className="font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase">
                  Automation flow
                </p>
                <div className="mt-4">
                  <FlowStrip steps={project.flow} />
                </div>
                <p className="mt-6 font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase">
                  Technology
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-hairline px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>

        <div className="container-x">
          <Section index="01" title="Problem">
            <p>{project.problem}</p>
          </Section>
          <Section index="02" title="Solution">
            <p>{project.solution}</p>
          </Section>
          <Section index="03" title="Architecture">
            <ul className="space-y-2.5">
              {project.architecture.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                  {a}
                </li>
              ))}
            </ul>
          </Section>
          <Section index="04" title="Automation Flow">
            <ol className="grid gap-2 sm:grid-cols-2">
              {project.flow.map((f, i) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-surface/40 px-4 py-3"
                >
                  <span className="font-mono text-[0.6rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85">{f}</span>
                </li>
              ))}
            </ol>
          </Section>
          <Section index="05" title="Key Features">
            <ul className="flex flex-wrap gap-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-hairline bg-surface/40 px-3 py-1.5 text-xs"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Section>
          <Section index="06" title="Technology">
            <div className="grid gap-2 sm:grid-cols-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-hairline bg-surface/40 px-4 py-3 text-center font-display text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>
          <Section index="07" title="Result">
            <ul className="space-y-2.5">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.62rem] text-muted-foreground/70">
              Qualitative outcomes. Client-specific data and metrics are kept confidential.
            </p>
          </Section>
        </div>

        <section className="container-x border-t border-hairline py-16">
          <h2 className="font-display text-xl font-semibold">More systems</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-hairline bg-surface/40 p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-2 font-display text-base font-semibold">{p.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary">
                  View case study
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-x pb-24">
          <div className="glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                Want something like this for your operation?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Tell me what's taking your team too much time and I'll outline how the system would
                work.
              </p>
            </div>
            <Link
              to="/"
              hash="contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
