import { company } from "../lib/constants";
import {
  Pill,
  ButtonLink,
  Card,
  SectionTitle,
  LogoMark,
} from "../components/ui";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-panel px-3 py-1 text-xs text-brand-muted">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              Bengaluru-based • Global delivery • Production-ready engineering
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {company.tagline}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              Leo Software Solutions helps teams build modern applications:
              responsive frontends, robust APIs, mobile apps, and AWS cloud
              infrastructure—with clean architecture and reliable delivery.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Request a consultation</ButtonLink>
              <ButtonLink to="/projects" variant="secondary">
                See client projects
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>React / Next</Pill>
              <Pill>Node / Python</Pill>
              <Pill>React Native / Flutter</Pill>
              <Pill>AWS + CI/CD</Pill>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-brand-line bg-brand-panel p-6 shadow-glow">
              <div className="flex items-center gap-4">
                <LogoMark className="h-28 w-28" />
                <div>
                  <div className="text-xl font-bold">
                    Professional IT services you can trust
                  </div>
                  <div className="text-sm text-brand-muted">
                    Build • Modernize • Scale
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-line bg-brand-bg p-4">
                  <div className="text-xs text-brand-muted">Delivery</div>
                  <div className="mt-1 text-sm font-semibold">
                    Agile milestones & clear communication
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-line bg-brand-bg p-4">
                  <div className="text-xs text-brand-muted">Quality</div>
                  <div className="mt-1 text-sm font-semibold">
                    Testing, code review, best practices
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-line bg-brand-bg p-4">
                  <div className="text-xs text-brand-muted">Security</div>
                  <div className="mt-1 text-sm font-semibold">
                    Secure APIs & safe deployments
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-line bg-brand-bg p-4">
                  <div className="text-xs text-brand-muted">Scale</div>
                  <div className="mt-1 text-sm font-semibold">
                    Performance-first architecture
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-r from-brand-gold/15 to-brand-blue/15 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          eyebrow="How we work"
          title="A simple, reliable process"
          description="Clear milestones, transparent communication, and strong engineering standards."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          <Card title="1) Discovery" tone="gold">
            Requirements, user flows, scope, and architecture aligned to
            business goals.
          </Card>
          <Card title="2) Plan & Design">
            UI/UX (if needed), technical design, sprint plan and milestone
            delivery.
          </Card>
          <Card title="3) Build & Test">
            Iterative development, code review, automated tests, and CI/CD
            pipeline.
          </Card>
          <Card title="4) Launch & Support" tone="gold">
            Deploy to production, monitor, optimize, and maintain long-term.
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions"
          description="Short, confident answers—typical of professional IT service websites."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card title="How do you estimate timelines?">
            We break your scope into milestones, define deliverables, and
            provide an execution plan with weekly progress updates.
          </Card>
          <Card title="Do you provide ongoing support?">
            Yes—bug fixes, enhancements, performance improvements, monitoring,
            and maintenance packages.
          </Card>
          <Card title="Can you work with an existing codebase?">
            Absolutely. We can audit, modernize, refactor, improve performance,
            and ship new features safely.
          </Card>
          <Card title="What's your typical engagement model?">
            Fixed-price for defined scopes, or monthly retainer for continuous
            development and support.
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-brand-line bg-brand-panel p-8 shadow-glow text-center">
          <h2 className="text-2xl font-semibold">
            Ready to build something great?
          </h2>
          <p className="mt-2 text-brand-muted">
            Let's discuss your project and create a plan tailored to your needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink to="/contact">Get in touch</ButtonLink>
            <ButtonLink to="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
