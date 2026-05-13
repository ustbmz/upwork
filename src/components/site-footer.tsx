export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--ui-border-soft)] bg-[var(--ui-footer)] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 text-sm text-[var(--ui-muted)] sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Meridian Holdings · Sample Next.js page
        </p>
        <p className="text-xs opacity-90">
          Deploy on Vercel · Tailwind CSS v4 · App Router
        </p>
      </div>
    </footer>
  );
}
