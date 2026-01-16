import { company } from "../lib/constants";
import { SectionTitle } from "../components/ui";
import { SEO } from "../components/SEO";

export function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Leo Software Solutions. Share your project idea and we'll respond with a plan and next steps."
        path="/contact"
      />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk"
          description="Share your idea and we'll respond with a plan and next steps."
        />
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6 shadow-glow">
            <h3 className="text-lg font-semibold">Company details</h3>

            <div className="mt-4 space-y-3 text-sm text-brand-muted">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">
                  Address
                </div>
                <div className="mt-1 text-brand-text">{company.address}</div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted">
                    Email
                  </div>
                  <div className="mt-1">
                    <a
                      className="text-brand-blue hover:text-brand-cyan"
                      href={`mailto:${company.email}`}
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted">
                    Phone
                  </div>
                  <div className="mt-1 text-brand-text">{company.phone}</div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-line bg-brand-bg p-4">
                <div className="text-xs text-brand-muted">
                  Replace phone/email placeholders anytime. The layout will stay
                  the same.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-panel p-6 shadow-glow">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-brand-muted">
              This is a frontend-only form UI. Connect it to your backend/email
              service later.
            </p>

            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks! Connect this form to your backend to send messages."
                );
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-brand-muted">Name</span>
                  <input
                    required
                    className="mt-1 w-full rounded-xl border border-brand-line bg-brand-bg px-4 py-3 text-sm outline-none focus:border-brand-blue"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-brand-muted">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl border border-brand-line bg-brand-bg px-4 py-3 text-sm outline-none focus:border-brand-blue"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs text-brand-muted">
                  Project details
                </span>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-brand-line bg-brand-bg px-4 py-3 text-sm outline-none focus:border-brand-blue"
                  placeholder="Tell us what you want to build, timeline, and any preferred tech."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-brand-gold to-brand-blue px-5 py-3 text-sm font-semibold text-brand-bg hover:opacity-95"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
