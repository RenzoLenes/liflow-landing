export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* primary mint glow */}
      <div className="drift absolute -top-[20%] left-[8%] h-[55vw] w-[55vw] rounded-full bg-mint-500/14 blur-[120px]" />
      {/* secondary deep teal */}
      <div className="drift-slow absolute top-[35%] -right-[10%] h-[50vw] w-[50vw] rounded-full bg-mint-600/10 blur-[130px]" />
      {/* warm amber accent low */}
      <div className="drift absolute bottom-[-15%] left-[30%] h-[40vw] w-[40vw] rounded-full bg-amber-400/[0.06] blur-[120px]" />

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(95,227,161,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(95,227,161,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(6,8,7,0.7)_100%)]" />
    </div>
  );
}
