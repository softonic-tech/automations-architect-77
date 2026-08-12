import { testimonials } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/animations/primitives";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client feedback"
          title="What clients say"
          subtitle="Only verified quotes appear here. Testimonials are stored in a data file and render automatically once added."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.length === 0
            ? [0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-dashed border-hairline bg-surface/25 p-7">
                    <Quote className="size-5 text-primary/40" />
                    <p className="mt-5 font-mono text-xs tracking-wide text-muted-foreground">
                      Add verified client testimonial
                    </p>
                    <div className="mt-6 space-y-2" aria-hidden>
                      <span className="block h-2 w-full rounded-full bg-surface-2" />
                      <span className="block h-2 w-4/5 rounded-full bg-surface-2" />
                      <span className="block h-2 w-2/3 rounded-full bg-surface-2" />
                    </div>
                  </div>
                </Reveal>
              ))
            : testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08}>
                  <figure className="h-full rounded-2xl border border-hairline bg-surface/40 p-7">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: t.rating ?? 5 }).map((_, k) => (
                        <Star key={k} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                      {t.avatar ? (
                        <img src={t.avatar} alt="" className="size-9 rounded-full object-cover" />
                      ) : (
                        <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                          {t.name.slice(0, 1)}
                        </span>
                      )}
                      <span>
                        <span className="block text-sm font-medium">{t.name}</span>
                        <span className="block text-xs text-muted-foreground">
                          {t.company}
                          {t.platform ? ` · ${t.platform}` : ""}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
