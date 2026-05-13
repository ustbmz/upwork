export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="2"
        className="stroke-[var(--ui-logo-frame)]"
        strokeWidth="1.5"
      />
      <path
        d="M10 16h12M16 10v12"
        className="stroke-[var(--ui-logo-mark)]"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
