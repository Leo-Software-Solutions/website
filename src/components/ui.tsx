import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import logoSrc from "../assets/logo.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Leo Software Solutions"
      className={cn("h-14 w-14 object-contain", className)}
    />
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wider text-brand-muted">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-brand-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-line bg-brand-bg px-3 py-1 text-xs text-brand-muted">
      {children}
    </span>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-linear-to-r from-brand-gold to-brand-blue text-brand-bg hover:opacity-95",
        variant === "secondary" &&
          "border border-brand-line bg-brand-panel text-brand-text hover:border-brand-blue/60"
      )}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Card({
  title,
  children,
  tone = "blue",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "blue" | "gold";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-line bg-brand-panel p-6 shadow-glow",
        tone === "gold" && "shadow-gold"
      )}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-brand-muted">
        {children}
      </div>
    </div>
  );
}
