import { Reveal, SectionHead } from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";

export default function AboutSection() {
  const { profile, methods, t } = useLang();
  return (
    <section id="about" data-testid="about-section" className="py-24 sm:py-32 border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <SectionHead
            id="about"
            overline={t("about.overline")}
            title={t("about.title")}
          />
          <Reveal className="mt-8 space-y-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </Reveal>

          <Reveal className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-4">{t("about.methods")}</p>
            <div className="flex flex-wrap gap-2" data-testid="about-methods">
              {methods.map((m) => (
                <span key={m} className="font-mono text-[10px] uppercase tracking-[0.12em] border border-border px-3 py-1.5 text-muted-foreground hover:border-brand hover:text-foreground transition-colors">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="border border-border bg-card aspect-[4/5] relative overflow-hidden" data-testid="about-portrait-frame">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-5 opacity-[0.07]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="border border-foreground" />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <p className="font-display text-7xl font-bold tracking-tight text-foreground/90">RT</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {t("about.portraitNote")}
                </p>
              </div>
              <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/80 backdrop-blur px-5 py-3 flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{profile.location}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-label="Available" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
