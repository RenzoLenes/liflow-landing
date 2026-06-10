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
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-electric-700">
              &gt;
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full rounded-xl border border-ink-600 bg-ink-900 py-3.5 pl-9 pr-4 font-mono text-sm text-bone shadow-[inset_0_1px_2px_rgba(12,24,48,0.06)] placeholder:text-bone-faint outline-none transition focus:border-brand-500/70 focus:ring-2 focus:ring-brand-500/15"
            />
          </div>
          <button
            type="submit"
            disabled={!valid}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 px-6 py-3.5 text-sm font-semibold text-bone shadow-[0_10px_30px_-10px_rgba(14,165,233,0.7)] transition hover:from-brand-400 hover:to-electric-400 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Diagnóstico gratis
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-3 rounded-xl border border-mint-500/30 bg-mint-500/10 px-5 py-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-500 text-bone">
            ✓
          </span>
          <p className="font-mono text-sm text-mint-700">
            Listo. Te enviaremos tu diagnóstico a{" "}
            <span className="text-bone">{email}</span>
          </p>
        </div>
      )}
      <p className="mt-3 font-mono text-xs text-bone-faint">
        Sin tarjeta. No conectamos tu banco. Solo 6 preguntas, 3 minutos.
      </p>
    </div>
  );
}
