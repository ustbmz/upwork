import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-[var(--ui-border-soft)] px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28"
    >
      <div className="ui-hero-inner">
        <p className="ui-eyebrow mb-4 text-xs font-semibold uppercase text-[var(--ui-muted)]">
          US-based holding company · sample build
        </p>
        <h1 className="ui-heading text-balance text-4xl tracking-tight text-[var(--ui-fg)] sm:text-[2.65rem] sm:leading-[1.15]">
          Capital allocation with a steady, traditional hand.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--ui-muted)] sm:text-lg">
          A classic corporate landing template—Next.js and Tailwind—with
          emphasis on legibility, hierarchy, and understated presentation.
        </p>
        <div className="ui-hero-actions">
          <Link
            href="#contact"
            className="inline-flex h-11 w-full items-center justify-center border border-[var(--ui-primary-bg)] bg-[var(--ui-primary-bg)] px-7 text-sm font-semibold text-[var(--ui-primary-fg)] transition hover:bg-[var(--ui-primary-hover)] sm:w-auto"
            style={{ borderRadius: "var(--ui-radius-btn)" }}
          >
            Start a conversation
          </Link>
          <Link
            href="#work"
            className="inline-flex h-11 w-full items-center justify-center border border-[var(--ui-secondary-border)] bg-transparent px-7 text-sm font-semibold text-[var(--ui-secondary-fg)] transition hover:border-[var(--ui-fg)] hover:bg-[var(--ui-secondary-hover-bg)] sm:w-auto"
            style={{ borderRadius: "var(--ui-radius-btn)" }}
          >
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
