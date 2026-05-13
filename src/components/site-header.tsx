import Link from "next/link";
import { LogoMark } from "./logo-mark";
import { UiPresetSwitcher } from "./ui-preset-switcher";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="ui-header-surface fixed inset-x-0 top-0 z-50 border-b border-[var(--ui-header-border)] bg-[var(--ui-header-bg)]">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:gap-4 sm:px-6">
        <Link
          href="#top"
          className="ui-heading flex min-w-0 shrink items-center gap-2.5 text-sm tracking-tight text-[var(--ui-fg)]"
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="hidden truncate sm:inline">Meridian Holdings</span>
          <span className="truncate sm:hidden">Meridian</span>
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-6">
          <nav className="flex min-w-0 items-center gap-0.5 text-sm text-[var(--ui-muted)]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="shrink-0 px-2 py-1.5 transition hover:text-[var(--ui-fg)] sm:px-3"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <UiPresetSwitcher />
        </div>
      </div>
    </header>
  );
}
