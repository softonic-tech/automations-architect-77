import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border border-hairline bg-background/60 p-4 sm:p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  const reduced = useReducedMotion();
  return (
    <Frame>
      <div className="grid gap-2">
        {steps.slice(0, 6).map((s, i) => (
          <motion.div
            key={s}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[0.6rem] text-muted-foreground/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative flex-1 overflow-hidden rounded-lg border border-hairline bg-surface/60 px-3 py-2 text-xs">
              {s}
              {!reduced ? (
                <motion.span
                  className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/12 to-transparent"
                  animate={{ x: ["0%", "400%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function CrmBoard() {
  const cols = [
    { name: "New", items: ["Acme Ltd", "Northwind"] },
    { name: "Qualified", items: ["Bright Dental"] },
    { name: "Booked", items: ["Halo Media", "Rivet Co"] },
  ];
  return (
    <Frame>
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c, ci) => (
          <div key={c.name} className="rounded-lg border border-hairline bg-surface/50 p-2">
            <p className="mb-2 font-mono text-[0.58rem] tracking-widest text-muted-foreground uppercase">
              {c.name}
            </p>
            <div className="space-y-1.5">
              {c.items.map((it, i) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (ci + i) }}
                  className="rounded-md border border-hairline bg-background/70 px-2 py-1.5"
                >
                  <p className="truncate text-[0.68rem]">{it}</p>
                  <div className="mt-1 h-1 rounded-full bg-surface-2">
                    <motion.div
                      className="h-1 rounded-full bg-primary/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${55 + ((ci * 3 + i * 7) % 40)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function ChatUI({ variant = "receptionist" }: { variant?: "receptionist" | "whatsapp" }) {
  const messages =
    variant === "whatsapp"
      ? [
          { from: "user", text: "Hi, can I move my appointment to Friday?" },
          { from: "bot", text: "Of course. Friday has 10:30 and 15:00 free." },
          { from: "user", text: "10:30 works." },
          { from: "bot", text: "Booked — Fri 10:30 with Dr. Rahman. Reminder sent." },
        ]
      : [
          { from: "user", text: "My boiler is leaking, is that urgent?" },
          { from: "bot", text: "That's an emergency call-out. What's the postcode?" },
          { from: "user", text: "M14 5TB" },
          { from: "bot", text: "Engineer assigned for today, 16:00–18:00. Details saved to CRM." },
        ];
  return (
    <Frame className="bg-background/70">
      <div className="mb-3 flex items-center gap-2 border-b border-hairline pb-2">
        <span className="relative size-2 rounded-full bg-primary text-primary pulse-dot" />
        <p className="font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase">
          {variant === "whatsapp" ? "Chat Assistant" : "AI Receptionist"} · online
        </p>
      </div>
      <div className="space-y-2">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 * i }}
            className={cn("flex", m.from === "user" ? "justify-start" : "justify-end")}
          >
            <p
              className={cn(
                "max-w-[80%] rounded-2xl px-3 py-2 text-[0.7rem] leading-relaxed",
                m.from === "user"
                  ? "rounded-bl-sm border border-hairline bg-surface/70 text-muted-foreground"
                  : "rounded-br-sm bg-primary/15 text-foreground",
              )}
            >
              {m.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function DataTable() {
  const rows = [
    ["SKU-4821", "£12.40", "£29.99", "3", "58%"],
    ["SKU-1177", "£6.10", "£18.50", "5", "41%"],
    ["SKU-9034", "£22.00", "£54.90", "2", "62%"],
    ["SKU-2210", "£4.75", "£13.25", "8", "33%"],
  ];
  return (
    <Frame>
      <div className="font-mono text-[0.62rem]">
        <div className="grid grid-cols-5 gap-2 border-b border-hairline pb-2 text-muted-foreground/70">
          {["SKU", "Cost", "Sale", "Sellers", "Margin"].map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r[0]}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="grid grid-cols-5 gap-2 border-b border-hairline/60 py-2"
          >
            {r.map((c, ci) => (
              <span key={ci} className={ci === 4 ? "text-primary" : "text-foreground/80"}>
                {c}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function Waveform() {
  const reduced = useReducedMotion();
  const bars = Array.from({ length: 42 });
  return (
    <Frame>
      <div className="flex h-16 items-center gap-[3px]">
        {bars.map((_, i) => (
          <motion.span
            key={i}
            className="w-full rounded-full bg-primary/50"
            style={{ height: `${18 + Math.abs(Math.sin(i * 1.3)) * 70}%` }}
            animate={reduced ? {} : { scaleY: [0.5, 1, 0.6, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.04 }}
          />
        ))}
      </div>
      <div className="mt-3 space-y-1.5 border-t border-hairline pt-3 text-[0.68rem] text-muted-foreground">
        <p>
          <span className="text-primary">Summary ·</span> Interested, budget confirmed, decision
          next week.
        </p>
        <p>
          <span className="text-primary">Disposition ·</span> Follow-up scheduled · CRM updated
        </p>
      </div>
    </Frame>
  );
}

function SocialGrid() {
  const items = ["Facebook", "Instagram", "TikTok"];
  return (
    <Frame>
      <div className="grid gap-2">
        {items.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center justify-between rounded-lg border border-hairline bg-surface/50 px-3 py-2.5"
          >
            <span className="text-xs">{p}</span>
            <span className="flex items-center gap-2 font-mono text-[0.6rem] text-primary">
              <span className="relative size-1.5 rounded-full bg-primary text-primary pulse-dot" />
              replied · logged
            </span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function TicketBoard() {
  const rows = [
    ["Refund not received", "Billing", "High", "Negative"],
    ["How do I export data?", "Product", "Low", "Neutral"],
    ["Login loop on mobile", "Bug", "Urgent", "Negative"],
    ["Upgrade plan question", "Sales", "Medium", "Positive"],
  ];
  return (
    <Frame>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <motion.div
            key={r[0]}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between gap-2 rounded-lg border border-hairline bg-surface/50 px-3 py-2"
          >
            <span className="truncate text-[0.7rem]">{r[0]}</span>
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.55rem]">
              <span className="rounded border border-hairline px-1.5 py-0.5 text-muted-foreground">
                {r[1]}
              </span>
              <span className="rounded bg-primary/15 px-1.5 py-0.5 text-primary">{r[2]}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function GraphViz({ memory = false }: { memory?: boolean }) {
  const reduced = useReducedMotion();
  const points = memory
    ? [
        [20, 20],
        [20, 50],
        [20, 80],
        [50, 50],
        [80, 30],
        [80, 70],
      ]
    : [
        [15, 30],
        [40, 15],
        [40, 60],
        [70, 35],
        [70, 80],
        [90, 55],
      ];
  return (
    <Frame>
      <svg viewBox="0 0 100 100" className="h-40 w-full" aria-hidden>
        {points.map((p, i) =>
          points.slice(i + 1).map((q, j) => (
            <line
              key={`${i}-${j}`}
              x1={p[0]}
              y1={p[1]}
              x2={q[0]}
              y2={q[1]}
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-foreground/10"
            />
          )),
        )}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={i === 3 ? 4 : 2.4}
            className={i === 3 ? "fill-primary" : "fill-foreground/40"}
            animate={reduced ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>
      <p className="text-center font-mono text-[0.6rem] tracking-widest text-muted-foreground uppercase">
        {memory ? "Semantic knowledge graph" : "Structured research store"}
      </p>
    </Frame>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "pipeline":
      return <Pipeline steps={project.flow} />;
    case "crm":
      return <CrmBoard />;
    case "chat":
      return <ChatUI variant="receptionist" />;
    case "whatsapp":
      return <ChatUI variant="whatsapp" />;
    case "table":
      return <DataTable />;
    case "waveform":
      return <Waveform />;
    case "social":
      return <SocialGrid />;
    case "tickets":
      return <TicketBoard />;
    case "memory":
      return <GraphViz memory />;
    default:
      return <GraphViz />;
  }
}

export function FlowStrip({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-hairline bg-surface/60 px-2.5 py-1 font-mono text-[0.6rem] text-muted-foreground">
            {s}
          </span>
          {i < steps.length - 1 ? <span className="text-primary/50">→</span> : null}
        </div>
      ))}
    </div>
  );
}
