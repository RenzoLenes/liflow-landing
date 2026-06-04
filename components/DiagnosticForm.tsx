"use client";

import { useState } from "react";

export default function DiagnosticForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="relative">
      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (valid) setSent(true);
          }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-mint-400/70">
              &gt;
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full rounded-xl border border-ink-600 bg-ink-900/70 py-3.5 pl-9 pr-4 font-mono text-sm text-bone placeholder:text-bone-faint outline-none transition focus:border-mint-400/60 focus:bg-ink-850"
            />
          </div>
          <button
            type="submit"
            disabled={!valid}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-mint-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-mint-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Diagnóstico gratis
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-3 rounded-xl border border-mint-400/30 bg-mint-500/10 px-5 py-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-400 text-ink-950">
            ✓
          </span>
          <p className="font-mono text-sm text-mint-300">
            Listo. Te enviaremos tu diagnóstico a{" "}
            <span className="text-bone">{email}</span>
          </p>
        </div>
      )}
      <p className="mt-3 font-mono text-xs text-bone-faint">
        Sin tarjeta. Resultados en 3 minutos.
      </p>
    </div>
  );
}
