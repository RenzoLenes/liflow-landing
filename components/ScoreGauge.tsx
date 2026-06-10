/**
 * Score de Salud Financiera — the shareable artifact that closes the growth loop.
 * A radial gauge (0-100). Pure SVG, no client JS.
 */
export default function ScoreGauge({
  value = 68,
  label = "Salud financiera",
  caption = "ejemplo",
}: {
  value?: number;
  label?: string;
  caption?: string;
}) {
  const r = 80;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = c * (1 - pct / 100);

  return (
    <div className="relative">
      <svg viewBox="0 0 200 200" className="h-auto w-full max-w-[260px]">
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-brand-500)" />
            <stop offset="100%" stopColor="var(--color-electric-500)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={r} fill="none" stroke="var(--color-ink-700)" strokeWidth="12" />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
          className="gauge-arc"
          style={{ "--c": c, "--target": offset } as React.CSSProperties}
        />
        <text
          x="100"
          y="96"
          textAnchor="middle"
          className="fill-bone font-display"
          style={{ fontSize: "52px", fontWeight: 600 }}
        >
          {pct}
        </text>
        <text x="100" y="122" textAnchor="middle" className="fill-bone-faint" style={{ fontSize: "12px" }}>
          / 100
        </text>
      </svg>
      <div className="mt-1 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-700">
          {label}
        </p>
        <p className="mt-0.5 font-mono text-[10px] text-bone-faint">{caption}</p>
      </div>
    </div>
  );
}
