import { Reveal, SectionHead } from "../Reveal";
import { APPROACH_STEPS } from "../../data/site";

export default function Approach() {
  return (
    <section data-testid="approach-section" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="approach"
          overline="End-to-end design approach"
          title="From problem to learnings"
          lead="How I approach complex digital problems — the same spine runs through every signature case study on this site."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-border border border-border" data-testid="approach-steps">
          {APPROACH_STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 0.04} y={16} className="bg-background p-5 group hover:bg-card transition-colors">
              <p className="font-mono text-[10px] text-brand">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-display text-sm font-semibold tracking-tight leading-snug">{s}</p>
              {i < APPROACH_STEPS.length - 1 && (
                <p className="mt-2 text-muted-foreground/50 text-xs font-mono hidden lg:block">→</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 max-w-3xl">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed border-l-2 border-brand pl-5">
            The process is rigorous but not rigid: Discovery, UX Research, Design Thinking, Human-Centered Design and Design Sprints are applied where they genuinely help — never as decoration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
