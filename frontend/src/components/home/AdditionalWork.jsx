import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead } from "../Reveal";
import ProjectVisual from "../ProjectVisual";
import { useLang } from "../../i18n/LanguageContext";

export default function AdditionalWork() {
  const { additional, t } = useLang();
  return (
    <section data-testid="additional-work-section" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="additional-work"
          overline={t("add.overline")}
          title={t("add.title")}
          lead={t("add.lead")}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="additional-work-grid">
          {additional.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <a
                href={`/work/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`additional-card-${p.slug}`}
                className="group block border border-border bg-card hover:border-foreground/40 transition-colors h-full"
              >
                <div className="overflow-hidden">
                  <div className="visual-zoom">
                    <ProjectVisual variant={p.variant} palette={p.palette} slug={p.slug} ratio="aspect-[16/9]" />
                  </div>
                </div>
                <div className="p-6 border-t border-border">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight">{p.title}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.client} · {p.industry}</p>
                    </div>
                    <ArrowUpRight size={16} className="shrink-0 mt-1 text-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.challenge}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.disciplines.map((d) => (
                      <span key={d} className="font-mono text-[9px] uppercase tracking-[0.12em] border border-border px-2 py-0.5 text-muted-foreground">{d}</span>
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-brand">{t("add.viewProject")}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
