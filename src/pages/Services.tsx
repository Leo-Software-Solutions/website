import { SectionTitle, Card, ButtonLink } from "../components/ui";
import { SEO } from "../components/SEO";

export function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Web development, mobile apps, backend APIs, cloud infrastructure, and DevOps services. Modern technology stack with reliable delivery."
        path="/services"
      />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionTitle
          eyebrow="What we do"
          title="IT services for modern businesses"
          description="From MVPs to enterprise systems—designed for reliability, speed, and maintainability."
        />
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Web Development" tone="gold">
            Modern responsive websites and web apps using React/Next, Angular,
            Vue—fast, accessible, SEO-ready.
          </Card>
          <Card title="Backend & APIs">
            Django/FastAPI/Flask, Node (Express/Nest), .NET, Go, Rails—secure,
            testable services.
          </Card>
          <Card title="Mobile Apps">
            Cross-platform apps (React Native/Flutter) plus native Kotlin/Swift
            when needed.
          </Card>
          <Card title="Cloud & DevOps" tone="gold">
            AWS architectures, Docker/Kubernetes, CI/CD pipelines—clean
            deployments and dependable releases.
          </Card>
          <Card title="Databases & Performance">
            Postgres/MySQL/SQL Server + Mongo/Redis/DynamoDB—schema design,
            caching, optimization.
          </Card>
          <Card title="Support & Maintenance">
            Monitoring, fixes, improvements, and enhancements—keep your product
            stable and evolving.
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          eyebrow="Technology"
          title="Our tech stack"
          description="We use modern, battle-tested technologies to build scalable solutions."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6">
            <h3 className="text-lg font-semibold text-brand-gold">Frontend</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>React / Next.js</li>
              <li>Vue / Nuxt</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6">
            <h3 className="text-lg font-semibold text-brand-blue">Backend</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>Node.js / Express / Nest</li>
              <li>Python / Django / FastAPI</li>
              <li>.NET / C#</li>
              <li>Go</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6">
            <h3 className="text-lg font-semibold text-brand-gold">Mobile</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Swift (iOS)</li>
              <li>Kotlin (Android)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6">
            <h3 className="text-lg font-semibold text-brand-blue">
              Cloud & DevOps
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>AWS / GCP / Azure</li>
              <li>Docker / Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Terraform / IaC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-brand-line bg-brand-panel p-8 shadow-glow text-center">
          <h2 className="text-2xl font-semibold">Need a custom solution?</h2>
          <p className="mt-2 text-brand-muted">
            Let's discuss your requirements and find the best approach for your
            project.
          </p>
          <div className="mt-6">
            <ButtonLink to="/contact">Get in touch</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
