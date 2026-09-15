import { Reveal, SectionHead } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";

export default function Capabilities() {
  const { capabilities, toolGroups, t } = useLang();
  return (
    <section data-testid="capabilities-section" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="capabilities"
          overline={t("cap.overline")}
          title={t("cap.title")}
          lead={t("cap.lead")}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border" data-testid="capabilities-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08} className="bg-background p-8 group hover:bg-card transition-colors">
              <p className="font-mono text-xs text-brand">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] uppercase tracking-[0.12em] border border-border px-2 py-0.5 text-muted-foreground group-hover:border-brand/50 transition-colors">{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" data-testid="tools-matrix">
            {toolGroups.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-3">{g.label}</p>
                <ul className="space-y-1.5">
                  {g.items.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
