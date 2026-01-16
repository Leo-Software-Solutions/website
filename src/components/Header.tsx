import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { company } from "../lib/constants";
import { LogoMark, ButtonLink } from "./ui";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn("fixed inset-0 z-50", open ? "" : "pointer-events-none")}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-brand-line bg-brand-bg p-6 transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LogoMark />
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold leading-tight">{company.name}</div>
              <div className="text-xs text-brand-muted">IT Services</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-brand-line bg-brand-panel px-3 py-2 text-sm hover:border-brand-blue/60"
          >
            Close
          </button>
        </div>

        <nav className="mt-6 space-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="block rounded-xl border border-brand-line bg-brand-panel px-4 py-3 text-sm font-semibold hover:border-brand-gold/60"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-brand-line bg-brand-panel p-4">
          <p className="text-xs text-brand-muted">
            Need a quote? Let's discuss your scope.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <ButtonLink to="/contact">Get in touch</ButtonLink>
            <ButtonLink to="/projects" variant="secondary">
              View projects
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-line bg-brand-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-4">
            <LogoMark />
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold leading-tight">{company.name}</div>
              <div className="text-xs text-brand-muted">
                Web • Mobile • Cloud • DevOps
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm hover:text-brand-text",
                  location.pathname === l.to
                    ? "text-brand-text font-medium"
                    : "text-brand-muted"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-xl bg-linear-to-r from-brand-gold to-brand-blue px-4 py-2 text-sm font-semibold text-brand-bg hover:opacity-95"
            >
              Let's talk
            </Link>
          </nav>

          <button
            className="md:hidden rounded-xl border border-brand-line bg-brand-panel px-3 py-2 text-sm hover:border-brand-blue/60"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
