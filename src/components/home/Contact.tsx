import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { budgets, site } from "@/data/site";
import { SectionHeading } from "@/components/animations/primitives";
import { submitEnquiry } from "@/lib/enquiry.functions";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(12, "A sentence or two about the process helps a lot"),
  budget: z.string().min(1, "Choose a range"),
  contactMethod: z.string().min(1, "Choose a contact method"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50";

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { budget: "", contactMethod: "Email" },
  });

  const onSubmit = async (values: FormValues) => {
    await submitEnquiry({ data: values });
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 22%, transparent), transparent)",
            }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Start here"
                title="Have a Process You Want to Automate?"
                subtitle="Tell me what's currently taking your team too much time. I'll help you identify what can be automated and how the system should work."
              />
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li>· Reply within one business day</li>
                <li>· Free scoping conversation, no pitch deck</li>
                <li>· You get an architecture outline either way</li>
                <li>
                  ·{" "}
                  <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start justify-center rounded-2xl border border-primary/25 bg-primary/[0.06] p-8"
                >
                  <CheckCircle2 className="size-8 text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">Message received</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Thanks — I'll read the details properly and come back with initial thoughts on
                    what can be automated and how I'd approach it.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-4 sm:grid-cols-2"
                  noValidate
                >
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                      Name
                    </label>
                    <input id="name" className={fieldClass} placeholder="Jane Cooper" {...register("name")} />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={fieldClass}
                      placeholder="jane@company.com"
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="mb-1.5 block text-xs text-muted-foreground">
                      Company <span className="opacity-60">(optional)</span>
                    </label>
                    <input id="company" className={fieldClass} placeholder="Company name" {...register("company")} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                      What would you like to automate?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={fieldClass}
                      placeholder="Right now our team manually copies leads from forms into the CRM and follows up by hand…"
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-xs text-muted-foreground">
                      Estimated budget
                    </label>
                    <select id="budget" className={fieldClass} {...register("budget")}>
                      <option value="">Select a range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.budget ? (
                      <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="contactMethod" className="mb-1.5 block text-xs text-muted-foreground">
                      Preferred contact method
                    </label>
                    <select id="contactMethod" className={fieldClass} {...register("contactMethod")}>
                      {["Email", "WhatsApp", "Phone call", "Video call"].map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
                    >
                      {isSubmitting ? "Sending…" : "Discuss My Automation"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
