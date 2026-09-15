import { Reveal } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";

export default function Positioning() {
  const { t } = useLang();
  const chapters = t("pos.chapters");
  return (
    <section data-testid="positioning-section" className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-6">{t("pos.overline")}</p>
          <h2 className="font-display font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl max-w-4xl">
            {t("pos.titleA")}{" "}
            <span className="text-muted-foreground">{t("pos.titleB")}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border" data-testid="manifesto-chapters">
          {chapters.map((c, i) => (
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
