"use client";

import { useState } from "react";
import { ArrowRight, Lock, Check } from "@phosphor-icons/react/dist/ssr";

const GOALS = [
  "Ordenar mis finanzas",
  "Ahorrar más",
  "Salir de deudas",
  "Empezar a invertir",
];

export default function DiagnosticForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [sent, setSent] = useState(false);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const valid = name.trim().length > 1 && validEmail;

  if (sent) {
    return (
      <div className="rounded-2xl border border-mint-500/30 bg-mint-500/10 px-5 py-6 text-center">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 text-bone">
          <Check weight="bold" className="h-5 w-5" />
        </span>
        <p className="mt-4 font-display text-lg font-medium text-bone">
          Listo, {name.split(" ")[0]}.
        </p>
        <p className="mt-1 text-sm text-bone-dim">
          Te enviaremos tu Score y tu primer paso a{" "}
          <span className="text-bone">{email}</span>.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-bone shadow-[inset_0_1px_2px_rgba(12,24,48,0.06)] placeholder:text-bone-faint outline-none transition focus:border-brand-500/70 focus:ring-2 focus:ring-brand-500/15";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) setSent(true);
      }}
      className="space-y-3"
    >
      <div>
        <label htmlFor="df-name" className="sr-only">
          Nombre
        </label>
        <input
          id="df-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="df-email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="df-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="df-goal" className="sr-only">
          Tu objetivo principal
        </label>
        <select
          id="df-goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className={`${inputCls} appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat ${
            goal ? "text-bone" : "text-bone-faint"
          }`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2379899d' stroke-width='2.2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            ¿Cuál es tu objetivo?
          </option>
          {GOALS.map((g) => (
            <option key={g} value={g} className="text-ink-950">
              {g}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!valid}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 px-6 py-3.5 text-sm font-semibold text-bone shadow-[0_10px_30px_-10px_rgba(14,165,233,0.7)] transition hover:from-brand-400 hover:to-electric-400 hover:shadow-[0_14px_36px_-10px_rgba(14,165,233,0.85)] active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Diagnóstico gratis
        <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="flex items-center justify-center gap-1.5 pt-1 text-center font-mono text-[11px] text-bone-faint">
        <Lock weight="fill" className="h-3.5 w-3.5" />
        Tus datos están protegidos. No conectamos tu banco.
      </p>
    </form>
  );
}
