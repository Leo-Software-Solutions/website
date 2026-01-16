import { Link } from "react-router-dom";
import { company } from "../lib/constants";
import { LogoMark } from "./ui";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-bg/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-4">
            <LogoMark />
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold leading-tight">{company.name}</div>
              <div className="text-xs text-brand-muted">
                Software & IT Services
              </div>
            </div>
          </Link>

          <div className="flex flex-wrap gap-3 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-brand-muted hover:text-brand-text"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-brand-muted">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
