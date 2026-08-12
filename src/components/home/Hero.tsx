import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroDiagram } from "@/components/visuals/HeroDiagram";
import { Magnetic, StaggerWords } from "@/components/animations/primitives";

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="relative size-1.5 rounded-full bg-primary text-primary pulse-dot" />
            <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
              8+ years in software &amp; automation
            </span>
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
            <StaggerWords text="AI Automation That Turns Repetitive Work Into" />{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={reduced ? false : { opacity: 0, y: "0.4em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Autonomous Systems
            </motion.span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I design intelligent automation systems, AI agents and connected workflows that help
            businesses automate sales, support, operations and customer engagement.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                style={{ boxShadow: "var(--glow-accent)" }}
              >
                Start a Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={8}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-6 py-3.5 text-sm font-medium backdrop-blur-md transition-colors hover:border-primary/40"
              >
                Explore Automation Systems
                <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <HeroDiagram />
        </motion.div>
      </div>
    </section>
  );
}
