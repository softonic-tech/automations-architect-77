import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

const options: Record<string, string[]> = {
  "Generate leads": ["Ad / form", "Validate", "AI qualify", "CRM", "Auto follow-up"],
  "Answer customers": ["Message in", "Context lookup", "AI reply", "Escalate if needed", "Log"],
  "Automate CRM": ["Event", "Enrich record", "Update stage", "Create task", "Notify owner"],
  "Automate social media": ["Research", "Generate", "Approve", "Schedule", "Publish"],
  "Build an AI agent": ["Knowledge", "Tools", "Reasoning", "Action", "Audit trail"],
};

export function AutomationCommand() {
  const [choice, setChoice] = useState<string>("Generate leads");
  const steps = options[choice]!;

  return (
    <section className="py-6">
      <div className="container-x">
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-primary" />
            <h2 className="font-display text-lg font-semibold md:text-xl">
              What would you like to automate?
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick an area to see the shape of a system I'd build for it.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {Object.keys(options).map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setChoice(o)}
                aria-pressed={choice === o}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  choice === o
                    ? "border-primary/50 bg-primary/12 text-foreground"
                    : "border-hairline bg-surface/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {o}
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.ol
                key={choice}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex min-w-max items-center gap-3"
              >
                {steps.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="rounded-xl border border-hairline bg-background/60 px-4 py-3 text-xs whitespace-nowrap">
                      {s}
                    </span>
                    {i < steps.length - 1 ? (
                      <span className="text-primary/60" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </motion.li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>
          <p className="mt-5 font-mono text-[0.62rem] text-muted-foreground">
            Illustrative only — the real architecture is designed around your process.
          </p>
        </div>
      </div>
    </section>
  );
}
