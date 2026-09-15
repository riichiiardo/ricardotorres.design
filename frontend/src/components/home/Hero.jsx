import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download } from "lucide-react";
import { MaskedLines } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";
import { scrollToHash } from "../Header";

const FACT_VALUES = ["7+", "04", "08", "14"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const { profile, expertiseLine, t } = useLang();
  const factLabels = t("hero.facts");

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <img
              src="/images/ricardo-portrait.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover border border-border"
              data-testid="hero-avatar"
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-emerald-500">●</span> {profile.shortName} — {profile.location}
            </p>
          </motion.div>

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
            accentIndex={2}
            className="font-display font-bold tracking-tight leading-[1.02] text-[2.55rem] sm:text-6xl lg:text-7xl"
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
              className="group inline-flex items-center gap-3 bg-brand text-white px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
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

        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
          data-testid="hero-portrait"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-brand" aria-hidden="true" />
            <div className="relative border border-foreground/25 bg-card aspect-[4/5] overflow-hidden">
              <img
                src="/images/ricardo-portrait.jpg"
                alt="Ricardo Andrei Torres Medina — UX/UI Project Lead"
                className="w-full h-full object-cover"
                data-testid="hero-portrait-img"
              />
              {["top-3 left-3", "top-3 right-3", "bottom-16 left-3", "bottom-16 right-3"].map((pos) => (
                <span key={pos} aria-hidden="true" className={`absolute ${pos} font-mono text-sm text-white mix-blend-difference select-none`}>+</span>
              ))}
              <div className="absolute bottom-0 inset-x-0 bg-background/85 backdrop-blur border-t border-border px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold tracking-tight truncate">{profile.name}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">UX/UI Project Lead</p>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("hero.open")}
                </span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ delay: 1.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 sm:-left-8 top-10 bg-background border border-border px-4 py-3 shadow-xl"
            >
              <p className="font-display text-2xl font-bold tracking-tight text-brand">7+</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground max-w-[140px]">{factLabels[0]}</p>
            </motion.div>
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
