import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "../i18n/LanguageContext";
import { scrollToHash } from "./Header";

export default function BoldStatement() {
  const { t } = useLang();
  return (
    <section data-testid="bold-statement" className="bg-brand text-white relative overflow-hidden">
      <span aria-hidden="true" className="pointer-events-none select-none absolute -right-8 -top-10 font-accent italic text-[16rem] leading-none text-white/10">
        *
      </span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70 mb-7">{t("stmt.label")}</p>
          <p className="font-display font-bold tracking-tight leading-[1.05] text-3xl sm:text-5xl lg:text-6xl max-w-5xl">
            {t("hero.sub2")}
          </p>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); scrollToHash("#work"); }}
            data-testid="statement-work-link"
            className="group mt-12 inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:bg-white hover:text-brand transition-colors"
          >
            {t("hero.explore")}
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
