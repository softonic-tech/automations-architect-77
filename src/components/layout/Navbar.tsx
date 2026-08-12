import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto mt-0 transition-all duration-500 md:mt-3",
          scrolled ? "max-w-5xl px-3" : "max-w-7xl px-4",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between rounded-none border border-transparent px-4 py-3.5 transition-all duration-500 md:rounded-full md:px-5",
            scrolled
              ? "glass border-hairline bg-background/70 backdrop-blur-xl"
              : "bg-transparent md:py-4",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="relative flex size-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              {site.name}
              <span className="ml-2 hidden text-xs font-normal text-muted-foreground lg:inline">
                {site.person}
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 md:inline-flex"
            >
              Let's Talk
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-hairline bg-surface/70 md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[68px] z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 py-10">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-hairline py-4 font-display text-2xl"
                    >
                      {l.label}
                      <ArrowUpRight className="size-5 text-muted-foreground" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 font-medium text-primary-foreground"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
