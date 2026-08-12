import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-hairline">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <span className="font-display text-sm font-semibold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. I design and build the systems that run sales, support and operations
            without manual work in the middle.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold">Navigate</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {["Work", "Services", "Process", "About", "Contact"].map((l) => (
              <li key={l}>
                <a className="transition-colors hover:text-foreground" href={`/#${l.toLowerCase()}`}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Elsewhere</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a className="transition-colors hover:text-foreground" href={s.href}>
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a className="transition-colors hover:text-foreground" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-hairline py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono tracking-wide">Built around automation.</p>
      </div>
    </footer>
  );
}
