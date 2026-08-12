import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { processSteps } from "@/data/services";
import { SectionHeading } from "@/components/animations/primitives";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How I work"
          title="From Business Problem to Working Automation"
          subtitle="A predictable five-stage path. You always know what is being built, why, and what happens after launch."
        />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute top-0 left-[7px] h-full w-px bg-hairline md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-[7px] w-px bg-primary md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-12 md:space-y-16">
            {processSteps.map((s, i) => (
              <li key={s.index} className="relative md:grid md:grid-cols-2 md:gap-14">
                <span className="absolute top-1.5 -left-8 size-3.5 rounded-full border border-primary/50 bg-background md:left-1/2 md:-translate-x-1/2">
                  <span className="absolute inset-1 rounded-full bg-primary" />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    i % 2 === 0
                      ? "md:col-start-1 md:pr-6 md:text-right"
                      : "md:col-start-2 md:pl-6"
                  }
                >
                  <span className="font-mono text-xs tracking-widest text-primary">{s.index}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold md:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
