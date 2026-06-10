import Image from "next/image";
import {
  Wallet,
  Target,
  Clock,
  Gear,
  Sparkle,
  ArrowRight,
  Check,
  X,
  ArrowsClockwise,
  ShieldCheck,
  Users,
  Lock,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import Background from "@/components/Background";
import Reveal from "@/components/Reveal";
import DiagnosticForm from "@/components/DiagnosticForm";
import ScoreGauge from "@/components/ScoreGauge";

/* ---------- small primitives ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-electric-700">
      {children}
    </span>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/mascot-head.png"
        alt="LIFLOW OS"
        width={56}
        height={72}
        priority
        className="h-7 w-auto"
      />
      <span className="font-mono text-sm font-semibold tracking-[0.2em] text-bone">
        LIFLOW<span className="text-brand-700"> OS</span>
      </span>
    </div>
  );
}

/* ---------- nav ---------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="rounded-2xl border border-ink-700/70 bg-ink-900/60 px-4 py-2.5 backdrop-blur-md">
          <Logo />
        </div>
        <nav className="hidden items-center gap-1 rounded-2xl border border-ink-700/70 bg-ink-900/60 px-2 py-2 backdrop-blur-md md:flex">
          {[
            ["Copiloto", "#copiloto"],
            ["Sistema", "#sistema"],
            ["Recorrido", "#recorrido"],
            ["Para ti", "#persona"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-3.5 py-1.5 text-sm text-bone-dim transition hover:bg-ink-800 hover:text-bone"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#diagnostico"
          className="rounded-2xl border border-brand-500/40 bg-brand-500/12 px-4 py-2.5 text-sm font-medium text-brand-700 backdrop-blur-md transition hover:bg-brand-500/20 active:translate-y-[1px]"
        >
          Diagnóstico gratis
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

const HERO_BULLETS = [
  "Tu Score de Salud Financiera al instante",
  "Recomendaciones con IA, no otra app que interpretar",
  "Gratis, en 3 minutos y sin conectar tu banco",
];

function Hero() {
  return (
    <section id="diagnostico" className="relative mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: message + benefits */}
        <div>
          <Reveal>
            <Eyebrow>Sistema operativo para la vida adulta</Eyebrow>
          </Reveal>

          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-bone sm:text-5xl lg:text-[3.9rem]">
            <Reveal as="span" className="block" delay={80}>
              Del caos <span className="text-brand-700">al control</span>
            </Reveal>
            <Reveal as="span" className="block" delay={160}>
              de tu dinero, tu tiempo y tu futuro.
            </Reveal>
          </h1>

          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim">
              La IA que conecta tus finanzas, tu agenda y tus metas, y te dice
              qué hacer. Una sola, en vez de cinco apps sueltas.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-8 space-y-3">
              {HERO_BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-500/15 text-mint-700">
                    <Check weight="bold" className="h-3 w-3" />
                  </span>
                  <span className="text-bone-dim">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* right: lead-capture form card */}
        <Reveal delay={260}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-brand-500/20 via-electric-500/12 to-transparent blur-3xl" />
            <div className="elev rounded-3xl border border-ink-700 bg-ink-900 p-6 sm:p-8">
              <div className="mb-6 text-center">
                <Image
                  src="/mascot-head.png"
                  alt=""
                  width={120}
                  height={150}
                  priority
                  className="mx-auto h-16 w-auto"
                />
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone">
                  Haz <span className="text-brand-700">gratis</span> tu diagnóstico
                </h2>
                <p className="mt-1.5 text-sm text-bone-dim">
                  Recibe tu Score de Salud Financiera y tu primer paso con IA.
                </p>
              </div>
              <DiagnosticForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- reinforcement statement ---------- */

function Reinforcement() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-6 pt-2 text-center">
      <Reveal>
        <p className="font-display text-2xl font-medium leading-snug tracking-tight text-bone sm:text-[1.9rem]">
          Imagina abrir una sola app y saber{" "}
          <span className="text-brand-700">exactamente qué hacer</span> con tu
          dinero hoy.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- problems ---------- */

const PROBLEMS = [
  ["Llega fin de mes y no sabes a dónde se fue", "Gastas sin rastrear y el sueldo desaparece antes del 20."],
  ["Gastos e ingresos en cinco lugares", "Una hoja, dos apps y tu cabeza. Nada cuadra."],
  ["Quieres ahorrar e invertir, pero nunca empiezas", "Sabes que deberías. No sabes por dónde."],
  ["Cinco apps y ningún panorama", "Cada una tiene un pedazo. Ninguna te muestra el todo."],
  ["Ganas más, pero avanzas igual", "Ves a otros progresar y la sensación de estar atrasado no se va."],
  ["Empiezas un presupuesto y lo dejas a la 2ª semana", "No es disciplina. Es que hacerlo a mano agota."],
];

function Problems() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
          La vida adulta no vino con manual.
        </h2>
        <p className="mt-5 max-w-lg text-bone-dim">
          Tienes tu primer sueldo formal y más ingresos que nunca. Aun así, cada
          mes se siente como empezar de cero. Estas son las grietas que nadie te
          enseñó a tapar.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-12 sm:grid-cols-2">
        {PROBLEMS.map(([title, sub], i) => (
          <Reveal key={title} delay={(i % 2) * 60 + Math.floor(i / 2) * 40}>
            <div className="border-t border-ink-700/60 py-6">
              <h3 className="text-lg font-medium text-bone">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-bone-dim">{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <p className="mt-12 font-display text-2xl font-medium tracking-tight text-bone-dim">
          No te falta esfuerzo. Te falta un{" "}
          <span className="text-bone">sistema</span>.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- modules ---------- */

const COPILOT_DOES = [
  "Ve tu panorama completo: dinero, agenda y metas en un mismo lugar.",
  "Detecta qué te está frenando y cuánto te cuesta cada mes.",
  "Te dice el siguiente paso concreto, hoy. No otro dashboard que interpretar.",
];

function Copilot() {
  return (
    <section id="copiloto" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <Eyebrow>El diferenciador</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
            La única IA que cruza tu dinero, tu tiempo y tus metas{" "}
            <span className="text-brand-700">para decirte el siguiente paso.</span>
          </h2>
          <p className="mt-5 max-w-xl text-bone-dim">
            Notion, YNAB o Todoist hacen bien una cosa. Ninguna ve las tres a la
            vez, así que el trabajo de conectarlas queda en ti. El copiloto de
            LIFLOW vive en ese cruce: por eso puede recomendarte algo que ninguna
            app suelta podría.
          </p>

          <ul className="mt-8 space-y-4">
            {COPILOT_DOES.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-electric-500 text-bone">
                    <Sparkle weight="fill" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-bone-dim">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* benchmarking: apps sueltas vs el cruce de datos (data moat) */}
        <Reveal delay={200}>
          <div className="space-y-3">
            <div className="elev rounded-2xl border border-ink-700 bg-ink-900 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint">
                Apps sueltas
              </p>
              <div className="mt-4 space-y-2.5">
                {["Notion", "YNAB", "Todoist"].map((app) => (
                  <div key={app} className="flex items-center gap-3">
                    <X weight="bold" className="h-4 w-4 shrink-0 text-bone-faint" />
                    <span className="text-sm text-bone-dim">
                      <span className="text-bone">{app}</span> ve solo un pedazo.
                      Tú haces de pegamento.
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="elev relative overflow-hidden rounded-2xl border border-brand-500/40 bg-gradient-to-br from-brand-500/15 via-electric-500/10 to-ink-900 p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-700">
                LIFLOW OS
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-electric-500 text-bone">
                  <Check weight="bold" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-bone">
                  Cruza dinero, tiempo y metas, y te da el siguiente paso.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- modules ---------- */

const MODULES = [
  { Icon: Wallet, name: "Finanzas", desc: "Ingresos, gastos y ahorro en un solo lugar, ordenados solos." },
  { Icon: Target, name: "Metas", desc: "Define hacia dónde vas y el copiloto mide cada paso." },
  { Icon: Clock, name: "Tiempo", desc: "Tu agenda y tus prioridades alineadas con lo que importa." },
  { Icon: Gear, name: "Automatización", desc: "Las tareas repetitivas que el sistema hace por ti." },
];

function Modules() {
  return (
    <section id="sistema" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow>Lo que el copiloto ordena</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
          Cuatro frentes de tu vida, en un mismo sistema.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((m, i) => (
          <Reveal key={m.name} delay={i * 70}>
            <div className="elev elev-hover group relative h-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 p-7 hover:border-electric-500/50">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/15 to-brand-500/10 text-electric-700 ring-1 ring-inset ring-electric-500/20 transition group-hover:from-electric-500/25 group-hover:to-brand-500/15">
                <m.Icon weight="duotone" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-bone">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                {m.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- journey ---------- */

const STAGES = [
  { n: "01", t: "Caos", d: "Todo disperso, sin visión. El punto de partida de casi todos.", color: "text-amber-500", dot: "bg-amber-400" },
  { n: "02", t: "Claridad", d: "Ves tu situación real. Sabes dónde estás parado.", color: "text-electric-700", dot: "bg-electric-500" },
  { n: "03", t: "Control", d: "Decides con datos. El sistema trabaja contigo.", color: "text-brand-700", dot: "bg-brand-500" },
  { n: "04", t: "Crecimiento", d: "Avanzas de forma sostenible, sin agotarte.", color: "text-mint-700", dot: "bg-mint-500" },
];

function Journey() {
  return (
    <section id="recorrido" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
          De caos a crecimiento.
        </h2>
        <p className="mt-4 max-w-xl text-bone-dim">
          LIFLOW OS no es otra app financiera. Es el camino completo, en cuatro
          estados.
        </p>
      </Reveal>

      <div className="relative mt-16">
        <svg
          className="absolute left-0 top-[7px] hidden h-2 w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 2"
        >
          <line x1="0" y1="1" x2="100" y2="1" stroke="var(--color-ink-600)" strokeWidth="0.4" />
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            className="flow-line"
            stroke="var(--color-electric-500)"
            strokeWidth="0.6"
            strokeDasharray="3 5"
          />
        </svg>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="relative">
                <span className={`block h-3.5 w-3.5 rounded-full ${s.dot}`} />
                <span className={`mt-5 block font-mono text-xs ${s.color}`}>{s.n}</span>
                <h3 className="mt-1 font-display text-2xl font-medium tracking-tight text-bone">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- growth loop ---------- */

const LOOP = [
  "Haces tu diagnóstico gratuito",
  "Recibes tu Score de Salud Financiera",
  "El copiloto te da tu siguiente paso",
  "Automatizas y avanzas a tus metas",
  "Tu Score sube cada mes",
  "Compartes tu progreso y alguien más empieza",
];

function GrowthLoop() {
  return (
    <section id="loop" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
              Un ciclo que se refuerza solo.
            </h2>
            <p className="mt-5 max-w-md text-bone-dim">
              Tu Score de Salud Financiera es el motor. Verlo subir es la razón
              para volver, y para mostrarle a alguien más por dónde empezar.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-3">
          {LOOP.map((step, i) => {
            const isScore = i === 1;
            return (
              <Reveal key={i} delay={i * 60}>
                <li
                  className={`elev group flex items-center gap-5 rounded-2xl border px-6 py-5 transition ${
                    isScore
                      ? "border-brand-500/40 bg-gradient-to-r from-brand-500/12 to-electric-500/8"
                      : "border-ink-700 bg-ink-900 hover:border-brand-500/50 hover:bg-ink-850"
                  }`}
                >
                  <span className="font-mono text-sm text-electric-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-bone">{step}</span>
                  {isScore && (
                    <span className="ml-auto rounded-full bg-gradient-to-r from-brand-500 to-electric-500 px-2.5 py-1 font-mono text-[10px] font-semibold text-bone">
                      el artefacto
                    </span>
                  )}
                  {i === LOOP.length - 1 && (
                    <ArrowsClockwise weight="bold" className="ml-auto h-4 w-4 text-brand-700" />
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- persona ---------- */

const BEHAVIORS = [
  "Revisa el banco con ansiedad varias veces al día",
  "Abandona cada presupuesto a la segunda semana",
  "Tiene cinco apps y ninguna le da el panorama completo",
  "Quiere invertir, pero no sabe por dónde empezar",
  "Gana más que nunca y aun así no ve el progreso",
];

function Persona() {
  return (
    <section id="persona" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-700">
            <Image
              src="/person.jpeg"
              alt="Camila, 26, profesional con su primer sueldo formal"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6 pt-16">
              <p className="font-display text-lg font-medium text-white">
                “Gano bien, pero no sé en qué se me va.”
              </p>
              <p className="mt-1 font-mono text-xs text-white/70">
                Camila, 26 · primer sueldo formal
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-bone">
              Tu primer sueldo formal, <span className="text-brand-700">y mil dudas</span>.
            </h2>
            <p className="mt-5 text-bone-dim">
              No es un tema de edad ni de ganar más. Es no tener un sistema que
              ordene el caos por ti. Si te reconoces en esto, LIFLOW es para ti.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {BEHAVIORS.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint-500/40 bg-mint-500/10 text-mint-700">
                    <Check weight="bold" className="h-3 w-3" />
                  </span>
                  <span className="text-bone-dim">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */
/* TODO: reemplazar quotes, nombres y fotos por testimonios reales antes de lanzar. */

const TESTIMONIALS = [
  {
    img: "/testimonio-1.jpg",
    quote: "Por primera vez sé cuánto puedo gastar sin culpa. El Score me ordenó la cabeza.",
    name: "Camila R.",
    role: "Diseñadora, 26",
  },
  {
    img: "/testimonio-2.jpg",
    quote: "Dejé de saltar entre apps. Abro una y ya sé cuál es mi siguiente paso.",
    name: "Diego M.",
    role: "Ingeniero, 29",
  },
  {
    img: "/testimonio-3.jpg",
    quote: "Empecé a ahorrar casi sin notarlo. El copiloto hace la parte aburrida.",
    name: "Valeria S.",
    role: "Analista, 27",
  },
];

function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
          Los primeros en probarlo ya lo notan.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="elev flex h-full flex-col justify-between rounded-2xl border border-ink-700 bg-ink-900 p-7">
              <div>
                <Quotes weight="fill" className="h-6 w-6 text-brand-500/40" />
                <blockquote className="mt-4 text-lg leading-snug text-bone">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-ink-600">
                  <Image src={t.img} alt={t.name} fill sizes="44px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-bone">{t.name}</span>
                  <span className="block text-xs text-bone-faint">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- trust ---------- */

const TRUST = [
  { Icon: Lock, title: "No conectas tu banco", desc: "El diagnóstico son solo preguntas. Cero acceso a tus cuentas." },
  { Icon: ShieldCheck, title: "Tus datos, cifrados", desc: "Privados de punta a punta. Nunca los vendemos ni los compartimos." },
  { Icon: Users, title: "Lista de espera abierta", desc: "Estamos en acceso temprano. Sé de los primeros en entrar." },
];

function Trust() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-bone sm:text-5xl">
          Confianza primero. Después, tu dinero.
        </h2>
        <p className="mt-5 max-w-lg text-bone-dim">
          Sabemos lo que pedimos. Por eso el diagnóstico no toca tu banco y tus
          datos son tuyos.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {TRUST.map((t, i) => (
          <Reveal key={t.title} delay={i * 80}>
            <div className="elev elev-hover h-full rounded-2xl border border-ink-700 bg-ink-900 p-7 hover:border-brand-500/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-electric-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/20">
                <t.Icon weight="duotone" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-bone">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-bone-dim">{t.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- final CTA ---------- */

function FinalCta() {
  return (
    <section id="empezar" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-brand-500/25 bg-gradient-to-br from-ink-900 via-ink-850 to-ink-900 px-8 py-14 shadow-[0_24px_70px_-30px_rgba(12,24,48,0.35)] sm:px-12 lg:px-16">
          <div className="absolute -top-1/2 left-1/2 h-[120%] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/15 to-electric-500/12 blur-[100px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-bone sm:text-5xl">
                Tu Score de Salud Financiera en{" "}
                <span className="text-brand-700">3 minutos.</span>
              </h2>
              <p className="mt-5 max-w-lg text-bone-dim">
                Responde 6 preguntas y el copiloto te devuelve tu Score y el
                primer paso para mejorarlo. Sin conectar tu banco.
              </p>
              <a
                href="#diagnostico"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 px-6 py-3.5 text-sm font-semibold text-bone shadow-[0_10px_30px_-10px_rgba(14,165,233,0.7)] transition hover:from-brand-400 hover:to-electric-400 hover:shadow-[0_14px_36px_-10px_rgba(14,165,233,0.85)] active:translate-y-[1px]"
              >
                Diagnóstico gratis
                <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <Reveal delay={150}>
              <div className="elev flex flex-col items-center rounded-3xl border border-ink-700 bg-ink-900 p-8">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint">
                  Esto recibes
                </p>
                <ScoreGauge value={68} label="Salud financiera" caption="ejemplo" />
                <p className="mt-4 text-center text-sm text-bone-dim">
                  Un número claro para saber dónde estás, y verlo subir cada mes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-ink-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
        <Image
          src="/logo-transparent.png"
          alt="LIFLOW OS · Tu vida, en automático"
          width={396}
          height={446}
          className="h-24 w-auto"
        />
        <p className="font-mono text-xs text-bone-faint">
          Caos → Claridad → Control → Crecimiento
        </p>
        <p className="font-mono text-xs text-bone-faint">
          © {new Date().getFullYear()} LIFLOW OS
        </p>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Reinforcement />
        <Problems />
        <Copilot />
        <Modules />
        <Journey />
        <GrowthLoop />
        <Persona />
        <Testimonials />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
