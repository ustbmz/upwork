const projects = [
  {
    name: "Northwind Analytics",
    tag: "B2B SaaS",
    description:
      "Operating metrics, cohort views, and exportable board packs for growth-stage teams.",
  },
  {
    name: "Harbor Ledger",
    tag: "Fintech",
    description:
      "Treasury workflows with approval chains, audit trails, and bank-grade security posture.",
  },
  {
    name: "Atlas Field",
    tag: "Operations",
    description:
      "Dispatch and routing for distributed crews—mobile-first, offline-tolerant, and fast.",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <p className="ui-eyebrow text-xs font-semibold uppercase text-[var(--ui-muted)]">
            Portfolio
          </p>
          <h2 className="ui-heading mt-2 text-2xl tracking-tight text-[var(--ui-fg)] sm:text-3xl">
            Representative holdings
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ui-muted)] sm:text-base">
            Placeholder case cards for demo purposes—swap titles and tags to
            match your real brands.
          </p>
        </div>

        <ul className="ui-portfolio-grid mt-12">
          {projects.map((p) => (
            <li key={p.name}>
              <article
                className="ui-portfolio-card group flex h-full flex-col overflow-hidden border border-[var(--ui-border)] bg-[var(--ui-surface-solid)] transition-colors hover:border-[var(--ui-focus-border)]"
                style={{
                  borderRadius: "var(--ui-radius-card)",
                  boxShadow: "var(--ui-shadow-card)",
                }}
              >
                <div className="ui-card-accent" aria-hidden />
                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ui-muted)]">
                    {p.tag}
                  </p>
                  <h3 className="ui-heading mt-1 text-lg text-[var(--ui-fg)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ui-muted)]">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-[var(--ui-muted)] transition group-hover:text-[var(--ui-fg)]">
                    View detail →
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
