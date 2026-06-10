export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* primary turquoise glow */}
      <div className="drift absolute -top-[20%] left-[8%] h-[55vw] w-[55vw] rounded-full bg-brand-500/[0.10] blur-[120px]" />
      {/* secondary cyan */}
      <div className="drift-slow absolute top-[35%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-electric-500/[0.08] blur-[130px]" />
      {/* subtle green success accent low */}
      <div className="drift absolute bottom-[-15%] left-[30%] h-[40vw] w-[40vw] rounded-full bg-mint-500/[0.05] blur-[120px]" />

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,184,166,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      {/* soft top light + faint edge cool */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]" />
    </div>
  );
}
