import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { MaskedLines } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";
import { scrollToHash } from "../Header";

const FACT_VALUES = ["7+", "04", "10", "14"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const { profile, expertiseLine, t } = useLang();
  const factLabels = t("hero.facts");
  const funnel = t("hero.funnel");

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-medium mb-6"
            data-testid="hero-kicker"
          >
            {profile.role}
          </motion.p>

          <MaskedLines
            key={t("hero.lines")[0]}
            lines={t("hero.lines")}
            className="font-display font-bold tracking-tight leading-[1.04] text-4xl sm:text-5xl lg:text-6xl"
            lineClassName=""
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            data-testid="hero-subcopy"
          >
            {t("hero.sub1")}
            <span className="block mt-3 text-foreground font-medium">{t("hero.sub2")}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollToHash("#work"); }}
              data-testid="hero-explore-work-btn"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:bg-brand hover:text-white transition-colors"
            >
              {t("hero.explore")}
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.cvFile}
              download
              data-testid="hero-download-cv-btn"
              className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:border-brand hover:text-brand transition-colors"
            >
              <Download size={14} /> {t("action.downloadCv")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            data-testid="hero-expertise-line"
          >
            {expertiseLine.map((e) => (
              <span key={e} className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {e}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y, opacity }} className="hidden lg:block col-span-4" data-testid="hero-aside">
          <div className="border border-border p-6 bg-card/60">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t("hero.open")}</span>
            </div>
            <p className="font-display text-2xl font-bold leading-tight tracking-tight">
              {funnel.slice(0, 4).map((f) => (
                <span key={f} className="block">→ {f}</span>
              ))}
              <span className="block text-brand">→ {funnel[4]}</span>
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} /> {profile.location}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border" data-testid="hero-facts">
          {FACT_VALUES.map((v, i) => (
            <div key={v} className="pt-5 pr-6">
              <p className="font-display text-3xl font-bold tracking-tight">{v}</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-[0.12em] font-mono">{factLabels[i]}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
