import { Reveal, SectionHead } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";

export default function Experience() {
  const { experience, t } = useLang();
  return (
    <section id="experience" data-testid="experience-section" className="py-24 sm:py-32 border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="experience"
          overline={t("exp.overline")}
          title={t("exp.title")}
          lead={t("exp.lead")}
        />

        <div className="mt-14 relative" data-testid="experience-timeline">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" aria-hidden="true" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.08} className="relative sm:pl-10">
                <span className="hidden sm:block absolute left-0 top-2 w-[15px] h-[15px] border-2 border-brand bg-background" aria-hidden="true" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border border-border bg-card p-6 sm:p-8 hover:border-foreground/40 transition-colors">
                  <div className="lg:col-span-3">
                    <p className="font-mono text-xs text-brand tracking-[0.15em]">{e.period}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">{e.role}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{e.company}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {e.capabilities.map((c) => (
                        <span key={c} className="font-mono text-[9px] uppercase tracking-[0.12em] border border-border px-2 py-0.5 text-muted-foreground">{c}</span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-[0.15em] text-[9px] text-brand block mb-1">{t("exp.tools")}</span>
                      {e.tools.join(" · ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
