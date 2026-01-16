import { useMemo } from "react";
import { SectionTitle, Pill, ButtonLink } from "../components/ui";
import { SEO } from "../components/SEO";

type Project = {
  title: string;
  industry: string;
  summary: string;
  tags: string[];
};

export function Projects() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "Client Project Placeholder",
        industry: "Industry (e.g., FinTech / eCommerce / Healthcare)",
        summary:
          "Short case-study style summary: problem → solution → outcome. Replace with real work when ready.",
        tags: ["Web", "API", "Cloud"],
      },
      {
        title: "Client Project Placeholder",
        industry: "Industry",
        summary:
          "Add measurable results when possible (faster load times, reduced cost, increased conversions).",
        tags: ["Mobile", "Backend", "CI/CD"],
      },
      {
        title: "Client Project Placeholder",
        industry: "Industry",
        summary:
          "Keep each card scannable. Link to full case studies later if you want.",
        tags: ["UI/UX", "Frontend", "Performance"],
      },
    ],
    []
  );

  return (
    <>
      <SEO
        title="Projects"
        description="Explore our portfolio of web apps, mobile apps, and cloud solutions built for clients across various industries."
        path="/projects"
      />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionTitle
          eyebrow="Client work"
          title="Projects we've built"
          description="Here's where you'll showcase your strongest work. Replace placeholders with real projects."
        />
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={`${p.title}-${idx}`}
              className="flex flex-col rounded-2xl border border-brand-line bg-brand-panel p-6 shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-brand-muted">{p.industry}</p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-linear-to-r from-brand-gold/25 to-brand-blue/25 px-3 py-1.5 text-xs leading-none text-center text-brand-text ring-1 ring-brand-line">
                  Case study
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {p.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <ButtonLink to="/contact">Build something similar</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-brand-line bg-brand-panel p-6 shadow-glow">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Want a dedicated case study page?
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                You can later expand these cards into full pages (problem →
                approach → tech → outcomes).
              </p>
            </div>
            <ButtonLink to="/contact">Discuss your project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
