import { Reveal } from "../Reveal";

const CHAPTERS = [
  {
    n: "01",
    title: "Problem before pixels",
    body: "Every engagement starts with the problem, the people it affects and the constraints around it. Screens come after understanding — never before.",
  },
  {
    n: "02",
    title: "Evidence over opinion",
    body: "Research, usability testing and analytics turn design debates into design decisions. If a choice can't be explained with evidence, it isn't finished.",
  },
  {
    n: "03",
    title: "Systems that scale",
    body: "Design systems, patterns and documentation let products grow without losing themselves — and let teams move faster without breaking consistency.",
  },
];

export default function Positioning() {
  return (
    <section data-testid="positioning-section" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-6">Positioning</p>
          <h2 className="font-display font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl max-w-4xl">
            I don't just design screens.{" "}
            <span className="text-muted-foreground">I solve product problems — from discovery and research to validated delivery.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border" data-testid="manifesto-chapters">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.12} className="bg-background p-8 sm:p-10 group hover:bg-card transition-colors">
              <p className="font-mono text-sm text-brand">{c.n}</p>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
