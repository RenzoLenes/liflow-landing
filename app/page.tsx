import Background from "@/components/Background";
import Reveal from "@/components/Reveal";
import DiagnosticForm from "@/components/DiagnosticForm";

/* ---------- small primitives ---------- */

function Mono({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mint-400/80">
      {children}
    </span>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-md bg-mint-400/20 blur-[6px]" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7">
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="5"
            className="fill-ink-900 stroke-mint-400/70"
            strokeWidth="1.2"
          />
          <path
            d="M7 16 L7 8 M7 16 L12 16 M15 8 C12 8 12 12 15 12 C18 12 18 16 15 16"
            className="stroke-mint-400"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="font-mono text-sm font-semibold tracking-[0.2em] text-bone">
        LIFLOW<span className="text-mint-400">OS</span>
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
            ["Sistema", "#sistema"],
            ["Recorrido", "#recorrido"],
            ["Cómo funciona", "#loop"],
            ["Para ti", "#persona"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-3.5 py-1.5 text-sm text-bone-dim transition hover:bg-ink-700/50 hover:text-bone"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#diagnostico"
          className="rounded-2xl border border-mint-400/40 bg-mint-400/10 px-4 py-2.5 text-sm font-medium text-mint-300 backdrop-blur-md transition hover:bg-mint-400/20"
        >
          Diagnóstico gratis
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pt-44">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/50 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400 shadow-[0_0_8px_2px_rgba(95,227,161,0.6)]" />
              <Mono>Sistema operativo para la vida adulta</Mono>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display text-5xl leading-[0.98] tracking-tight text-bone sm:text-6xl lg:text-[5.2rem]">
            <Reveal as="span" className="block" delay={80}>
              Tu copiloto
            </Reveal>
            <Reveal as="span" className="block" delay={160}>
              financiero{" "}
              <span className="italic text-mint-400">y de vida.</span>
            </Reveal>
          </h1>

          <Reveal delay={260}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone-dim">
              No necesitas más disciplina ni más apps. Necesitas un{" "}
              <span className="text-bone">sistema</span> que organice tu dinero,
              tu tiempo y tus metas — para vivir con más claridad, control y
              tranquilidad.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#diagnostico"
                className="group inline-flex items-center gap-2 rounded-xl bg-mint-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
              >
                Empieza tu diagnóstico
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#sistema"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-600 px-6 py-3.5 text-sm font-medium text-bone transition hover:border-mint-400/50 hover:bg-ink-800/50"
              >
                Ver el sistema
              </a>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-10 flex items-center gap-6 font-mono text-xs text-bone-faint">
              <span>Gratis para empezar</span>
              <span className="h-3 w-px bg-ink-600" />
              <span>Sin tarjeta</span>
              <span className="h-3 w-px bg-ink-600" />
              <span>Para 22–35</span>
            </div>
          </Reveal>
        </div>

        {/* OS window mock */}
        <Reveal delay={300}>
          <OsPanel />
        </Reveal>
      </div>
    </section>
  );
}

function OsPanel() {
  const lines = [
    { t: "booting liflow.os", c: "text-bone-faint" },
    { t: "scan: finanzas ........ ok", c: "text-mint-300" },
    { t: "scan: tiempo .......... ok", c: "text-mint-300" },
    { t: "scan: metas ........... ok", c: "text-mint-300" },
    { t: "estado: caos → claridad", c: "text-amber-300" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[28px] bg-mint-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[22px] border border-ink-600/80 bg-ink-900/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* titlebar */}
        <div className="flex items-center justify-between border-b border-ink-700/70 bg-ink-850/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
            liflow — panel de vida
          </span>
          <span className="font-mono text-[10px] text-mint-400">●live</span>
        </div>

        {/* boot terminal */}
        <div className="space-y-1.5 border-b border-ink-700/50 px-5 py-4 font-mono text-[12px]">
          {lines.map((l, i) => (
            <div key={i} className={l.c}>
              <span className="text-mint-400/50">$</span> {l.t}
            </div>
          ))}
          <div className="text-bone-faint">
            <span className="text-mint-400/50">$</span>{" "}
            <span className="cursor-blink text-mint-400">▮</span>
          </div>
        </div>

        {/* metric tiles */}
        <div className="grid grid-cols-2 gap-px bg-ink-700/40">
          {[
            { k: "Salud financiera", v: "72", s: "+8 este mes", up: true },
            { k: "Ahorro automático", v: "S/420", s: "agendado", up: true },
            { k: "Metas activas", v: "3", s: "en progreso", up: true },
            { k: "Tiempo recuperado", v: "6h", s: "/ semana", up: true },
          ].map((m) => (
            <div key={m.k} className="bg-ink-900/80 px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-bone-faint">
                {m.k}
              </p>
              <p className="mt-1.5 font-display text-3xl text-bone">{m.v}</p>
              <p className="mt-0.5 text-[11px] text-mint-400">↑ {m.s}</p>
            </div>
          ))}
        </div>

        {/* progress bar */}
        <div className="px-5 py-4">
          <div className="mb-2 flex justify-between font-mono text-[10px] text-bone-faint">
            <span>caos</span>
            <span>claridad</span>
            <span>control</span>
            <span className="text-mint-400">crecimiento</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink-700">
            <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-amber-400 via-mint-400 to-mint-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- problems / system errors ---------- */

const PROBLEMS = [
  ["err_01", "Estrés financiero constante", "El dinero pesa todos los días."],
  ["err_02", "Gastos e ingresos en desorden", "Nunca sabes a dónde se fue."],
  ["err_03", "Metas sin claridad", "Avanzas, pero ¿hacia dónde?"],
  ["err_04", "5 apps desconectadas", "Cada una con un pedazo de tu vida."],
  ["err_05", "Sensación de estancamiento", "Trabajas más y avanzas igual."],
  ["err_06", "Hábitos que no sostienes", "La disciplina no es el problema."],
];

function Problems() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Mono>Diagnóstico · errores del sistema actual</Mono>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-bone sm:text-5xl">
          La vida adulta no vino con{" "}
          <span className="italic text-amber-300">manual</span>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-700/40 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map(([code, title, sub], i) => (
          <Reveal key={code} delay={i * 70}>
            <div className="group h-full bg-ink-900/70 p-6 transition hover:bg-ink-850">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300/70">
                  {code}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-bone">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-bone-dim">
                {sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-10 text-center font-display text-2xl italic text-bone-dim">
          No te falta esfuerzo. Te falta un sistema.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- modules / value prop ---------- */

const MODULES = [
  {
    icon: "◈",
    name: "Finanzas",
    desc: "Ingresos, gastos y ahorro en un solo lugar, ordenados solos.",
  },
  {
    icon: "◎",
    name: "Metas",
    desc: "Define hacia dónde vas y mide cada paso con claridad.",
  },
  {
    icon: "⧗",
    name: "Tiempo",
    desc: "Tu agenda y tus prioridades alineadas con lo que importa.",
  },
  {
    icon: "⚙",
    name: "Automatización",
    desc: "Decisiones y tareas repetitivas que el sistema hace por ti.",
  },
  {
    icon: "✦",
    name: "IA · Copiloto",
    desc: "Diagnóstico y recomendaciones personalizadas, cuando las necesitas.",
  },
];

function Modules() {
  return (
    <section id="sistema" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <Reveal>
        <Mono>El sistema · módulos integrados</Mono>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-bone sm:text-5xl">
          Un solo ecosistema. Tu dinero, tu tiempo y tus metas{" "}
          <span className="italic text-mint-400">hablando entre sí.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-mint-400/40 hover:bg-ink-850">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mint-500/0 blur-2xl transition group-hover:bg-mint-500/20" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint-400/25 bg-mint-500/10 text-xl text-mint-300">
                {m.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-bone">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                {m.desc}
              </p>
            </div>
          </Reveal>
        ))}

        {/* feature panel filling the 6th cell */}
        <Reveal delay={400}>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-mint-400/30 bg-gradient-to-br from-mint-500/15 via-ink-900/60 to-ink-900/80 p-7">
            <div>
              <Mono>Centralización</Mono>
              <p className="mt-4 font-display text-2xl leading-snug text-bone">
                Todo conectado.{" "}
                <span className="italic text-mint-300">Nada disperso.</span>
              </p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-bone-dim">
              Deja de saltar entre 5 apps. LIFLOW OS reúne lo esencial y lo
              automatiza para que tú solo decidas lo importante.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- journey ---------- */

const STAGES = [
  {
    n: "01",
    t: "Caos",
    d: "Todo disperso, sin visión. El punto de partida de casi todos.",
    color: "text-amber-300",
    dot: "bg-amber-400",
  },
  {
    n: "02",
    t: "Claridad",
    d: "Ves tu situación real. Sabes dónde estás parado.",
    color: "text-bone",
    dot: "bg-bone",
  },
  {
    n: "03",
    t: "Control",
    d: "Decides con datos. El sistema trabaja contigo.",
    color: "text-mint-300",
    dot: "bg-mint-400",
  },
  {
    n: "04",
    t: "Crecimiento",
    d: "Avanzas de forma sostenible, sin agotarte.",
    color: "text-mint-400",
    dot: "bg-mint-300",
  },
];

function Journey() {
  return (
    <section id="recorrido" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Mono>El recorrido</Mono>
        <h2 className="mt-4 font-display text-4xl leading-tight text-bone sm:text-5xl">
          De caos a crecimiento.
        </h2>
        <p className="mt-4 max-w-xl text-bone-dim">
          LIFLOW OS no es otra app financiera. Es el camino completo, en cuatro
          estados.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* connecting flow line */}
        <svg
          className="absolute left-0 top-7 hidden h-2 w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 2"
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            className="stroke-ink-600"
            strokeWidth="0.4"
          />
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            className="flow-line stroke-mint-400"
            strokeWidth="0.5"
            strokeDasharray="3 5"
          />
        </svg>

        <div className="grid gap-8 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <Reveal key={s.t} delay={i * 110}>
              <div className="relative">
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ink-600 bg-ink-900 font-mono text-sm ${s.color}`}
                >
                  <span
                    className={`absolute h-2 w-2 -translate-y-5 rounded-full ${s.dot} shadow-[0_0_10px_2px_currentColor]`}
                  />
                  {s.n}
                </span>
                <h3
                  className={`mt-6 font-display text-3xl ${s.color}`}
                >
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                  {s.d}
                </p>
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
  "Descubres contenido educativo",
  "Haces un diagnóstico gratuito",
  "Obtienes claridad real",
  "Usas herramientas y automatizaciones",
  "Mejoras tus resultados",
  "Compartes tu experiencia",
];

function GrowthLoop() {
  return (
    <section id="loop" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="hairline mb-16 h-px w-full" />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Mono>Cómo funciona · growth loop</Mono>
            <h2 className="mt-4 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Un ciclo que{" "}
              <span className="italic text-mint-400">se refuerza solo.</span>
            </h2>
            <p className="mt-5 max-w-md text-bone-dim">
              Cada paso alimenta al siguiente. Mientras más lo usas, más claro y
              más automático se vuelve todo.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-3">
          {LOOP.map((step, i) => (
            <Reveal key={i} delay={i * 70}>
              <li className="group flex items-center gap-5 rounded-2xl border border-ink-700/60 bg-ink-900/50 px-6 py-5 transition hover:border-mint-400/40 hover:bg-ink-850">
                <span className="font-mono text-sm text-mint-400/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-bone">{step}</span>
                {i === LOOP.length - 1 && (
                  <span className="ml-auto font-mono text-xs text-mint-400">
                    ↻ vuelve a empezar
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- persona ---------- */

const TRAITS = [
  "Tienen ingresos pero sienten que no avanzan",
  "Buscan independencia financiera",
  "Quieren mejorar su productividad",
  "Desean reducir el estrés y decidir mejor",
  "Valoran la tecnología y la automatización",
];

function Persona() {
  return (
    <section id="persona" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-ink-700/70 bg-ink-900/60">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-ink-700/60 p-10 lg:border-b-0 lg:border-r">
            <Reveal>
              <Mono>Hecho para ti si…</Mono>
              <h2 className="mt-4 font-display text-4xl leading-tight text-bone">
                Profesional joven,{" "}
                <span className="italic text-mint-400">22 a 35</span>.
              </h2>
              <p className="mt-5 text-bone-dim">
                Tienes ambición y energía. Lo que te falta no es esfuerzo: es un
                sistema que ordene el caos por ti.
              </p>
            </Reveal>
          </div>
          <div className="p-10">
            <ul className="space-y-4">
              {TRAITS.map((t, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint-400/40 bg-mint-500/10 text-[11px] text-mint-400">
                      ✓
                    </span>
                    <span className="text-bone-dim">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- final CTA ---------- */

function FinalCta() {
  return (
    <section id="diagnostico" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-mint-400/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-900 px-8 py-16 text-center sm:px-16">
          <div className="absolute -top-1/2 left-1/2 h-[120%] w-[60%] -translate-x-1/2 rounded-full bg-mint-500/15 blur-[100px]" />
          <div className="relative">
            <Mono>Empieza gratis</Mono>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] text-bone sm:text-6xl">
              Conoce tu situación real en{" "}
              <span className="italic text-mint-400">3 minutos.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-bone-dim">
              Haz tu diagnóstico financiero gratuito y recibe recomendaciones
              personalizadas para pasar del caos a la claridad.
            </p>
            <div className="mx-auto mt-9 max-w-md text-left">
              <DiagnosticForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-ink-700/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <Logo />
        <p className="font-display text-lg italic text-bone-dim">
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
        <Problems />
        <Modules />
        <Journey />
        <GrowthLoop />
        <Persona />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
