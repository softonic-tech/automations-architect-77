import { platforms } from "@/data/site";
import { Reveal } from "@/components/animations/primitives";

export function PlatformStrip() {
  return (
    <section aria-label="Systems I work with" className="border-y border-hairline py-10">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-6 text-center">Systems I work with</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {platforms.map((p) => (
              <li
                key={p}
                className="font-display text-sm font-medium text-muted-foreground/60 transition-colors duration-300 hover:text-primary sm:text-base"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
