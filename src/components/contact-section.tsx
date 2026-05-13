"use client";

import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      body: (form.elements.namedItem("body") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  const fieldClass =
    "mt-2 w-full border border-[var(--ui-border)] bg-[var(--ui-input-bg)] px-3 py-2.5 text-sm text-[var(--ui-fg)] outline-none placeholder:text-[var(--ui-muted)] placeholder:opacity-70 focus:border-[var(--ui-focus-border)] focus:ring-2 focus:ring-[var(--ui-focus-ring)]";

  return (
    <section
      id="contact"
      className="border-t border-[var(--ui-border-soft)] bg-[var(--ui-surface)] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="ui-contact-grid mx-auto max-w-5xl">
        <div>
          <p className="ui-eyebrow text-xs font-semibold uppercase text-[var(--ui-muted)]">
            Contact
          </p>
          <h2 className="ui-heading mt-2 text-2xl tracking-tight text-[var(--ui-fg)] sm:text-3xl">
            Tell us what you are building.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ui-muted)] sm:text-base">
            This form posts to a Next.js Route Handler. Wire it to Resend,
            Slack, or your CRM via environment variables for production.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[var(--ui-border)] bg-[var(--ui-surface-solid)] p-6 sm:p-8"
          style={{
            borderRadius: "var(--ui-radius-card)",
            boxShadow: "var(--ui-shadow-card)",
          }}
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--ui-muted)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Alex Morgan"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--ui-muted)]"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--ui-muted)]"
              >
                Message
              </label>
              <textarea
                id="body"
                name="body"
                required
                rows={4}
                className={`${fieldClass} resize-y`}
                placeholder="A few lines on scope, timeline, and links."
              />
            </div>
          </div>

          {message ? (
            <p
              className={`mt-4 text-sm ${status === "error" ? "text-[var(--ui-error)]" : "text-[var(--ui-muted)]"}`}
            >
              {message}
            </p>
          ) : null}

          {status === "success" ? (
            <p className="mt-4 text-sm text-[var(--ui-success)]">
              Thanks—your note was received. (Demo: not emailed yet.)
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex h-11 w-full items-center justify-center border border-[var(--ui-primary-bg)] bg-[var(--ui-primary-bg)] text-sm font-semibold text-[var(--ui-primary-fg)] transition hover:bg-[var(--ui-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            style={{ borderRadius: "var(--ui-radius-btn)" }}
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
