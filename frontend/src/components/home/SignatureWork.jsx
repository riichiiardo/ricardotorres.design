import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead } from "../Reveal";
import ProjectVisual from "../ProjectVisual";
import { useLang } from "../../i18n/LanguageContext";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function SignatureWork() {
  const { flagships, t } = useLang();
  return (
    <section id="work" data-testid="signature-work-section" className="py-24 sm:py-32 border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="selected-work"
          overline={t("work.overline")}
          title={t("work.title")}
          lead={t("work.lead")}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {flagships.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={`col-span-1 ${SPANS[i]}`}>
              <a
                href={`/work/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`signature-card-${p.slug}`}
                className="group block border border-border bg-card hover:border-foreground/40 transition-colors h-full"
              >
                <div className="overflow-hidden">
                  <div className="visual-zoom">
                    <ProjectVisual variant={p.variant} palette={p.palette} slug={p.slug} />
                  </div>
                </div>
                <div className="p-6 sm:p-8 border-t border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-brand tracking-[0.2em]">{p.number} — {p.industry}</p>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
                    </div>
                    <span className="shrink-0 mt-1 p-2 border border-border group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-colors">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.challenge}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] border border-border px-2.5 py-1 text-muted-foreground">{p.role.split("—")[0].trim()}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand ml-auto">{t("work.viewCase")}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
