import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, RotateCcw, Check } from "lucide-react";
import { SectionHeading } from "@/components/animations/primitives";

const steps = [
  { label: "Lead received", detail: "Webhook · website form" },
  { label: "Data validated", detail: "Email & phone verified" },
  { label: "CRM searched", detail: "No duplicate record found" },
  { label: "AI analysing", detail: "Industry, budget, urgency" },
  { label: "Lead score: 89", detail: "Qualified · high intent" },
  { label: "Message generated", detail: "Personalized email + SMS" },
  { label: "CRM updated", detail: "Stage → Qualified" },
  { label: "Sales rep notified", detail: "Slack · assigned owner" },
];

export function AutomationDemo() {
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!running) return;
    if (active >= steps.length - 1) {
      setRunning(false);
      return;
    }
    const t = setTimeout(() => setActive((a) => a + 1), 750);
    return () => clearTimeout(t);
  }, [running, active]);

  const start = () => {
    setActive(-1);
    setRunning(true);
  };

  return (
    <section className="relative py-24 md:py-32">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Interactive demo"
          title="See How an Automation Thinks"
          subtitle="Trigger a lead and watch the decisions a system makes in the seconds before anyone on your team opens their laptop."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="glass flex flex-col justify-between rounded-2xl p-6">
            <div>
              <p className="font-mono text-[0.62rem] tracking-widest text-muted-foreground uppercase">
                Trigger
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">New Lead Arrives</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A contact form submission from a marketing agency asking about support automation.
              </p>
            </div>
            <button
              type="button"
              onClick={start}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              {active >= steps.length - 1 && !running ? (
                <>
                  <RotateCcw className="size-4" /> Replay demo
                </>
              ) : (
                <>
                  <Play className="size-4" /> Run automation
                </>
              )}
            </button>
          </div>

          <div className="glass rounded-2xl p-5 sm:p-7">
            <ol className="grid gap-2.5 sm:grid-cols-2">
              {steps.map((s, i) => {
                const done = i <= active;
                return (
                  <li
                    key={s.label}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition-all duration-500 ${
                      done
                        ? "border-primary/30 bg-primary/[0.06]"
                        : "border-hairline bg-surface/30 opacity-45"
                    }`}
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-hairline">
                      <AnimatePresence mode="wait">
                        {done ? (
                          <motion.span
                            key="c"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-primary"
                          >
                            <Check className="size-3" />
                          </motion.span>
                        ) : (
                          <span
                            key="d"
                            className="size-1.5 rounded-full bg-muted-foreground/40"
                          />
                        )}
                      </AnimatePresence>
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{s.label}</span>
                      <span className="block font-mono text-[0.62rem] text-muted-foreground">
                        {s.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
            <p className="mt-5 border-t border-hairline pt-4 font-mono text-[0.62rem] text-muted-foreground">
              Illustrative walkthrough of a real workflow pattern — no data leaves this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
