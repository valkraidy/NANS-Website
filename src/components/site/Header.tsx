import { Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/nans-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/chapters", label: "Chapters" },
  { to: "/membership", label: "Membership" },
  { to: "/news", label: "News & Events" },
  { to: "/resources", label: "Resources" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="NANS logo" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-[color:var(--nans-green-deep)]">NANS GHANA</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Nzema Students</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-[color:var(--nans-green-deep)]"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-[color:var(--nans-green-deep)] font-semibold" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-[color:var(--nans-green)]" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:nansghana26@gmail.com"
            aria-label="Email NANS"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-accent hover:text-[color:var(--nans-green-deep)] md:inline-flex"
          >
            <Mail className="h-4 w-4" />
          </a>
          <Link
            to="/membership"
            className="hidden rounded-full bg-[color:var(--nans-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[color:var(--nans-green-deep)] hover:shadow-md md:inline-flex"
          >
            Join NANS
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "bg-accent text-[color:var(--nans-green-deep)]" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[color:var(--nans-green)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join NANS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
