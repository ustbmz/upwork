export function AboutStrip() {
  return (
    <section
      id="about"
      className="border-b border-[var(--ui-border-soft)] bg-[var(--ui-surface)] px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="ui-about-grid mx-auto max-w-5xl">
        {[
          {
            title: "Governance",
            body: "Board-level clarity, documented decisions, and reporting that stays readable at a glance.",
          },
          {
            title: "Portfolio",
            body: "Long-horizon positions across software, infrastructure, and operating businesses.",
          },
          {
            title: "Partnership",
            body: "We work with founders and teams who care about craft, margins, and compounding trust.",
          },
        ].map((item) => (
          <div key={item.title} className="ui-about-item">
            <h2 className="ui-heading text-lg text-[var(--ui-fg)]">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ui-muted)]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
