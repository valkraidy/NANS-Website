import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[color:var(--nans-lime)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--nans-ink)]">
      {children}
    </span>
  );
}

export function EyebrowSoft({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[color:var(--nans-green-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--nans-green-deep)]">
      {children}
    </span>
  );
}
