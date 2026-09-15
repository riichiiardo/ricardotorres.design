import { useEffect } from "react";
import { Download, Printer, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function CVPage() {
  const { profile, experience, capabilities, toolGroups, methods, t } = useLang();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20" data-testid="cv-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{t("cv.title")}</h1>
          <div className="flex gap-3">
            <button onClick={() => window.print()} data-testid="cv-print-btn" className="inline-flex items-center gap-2 border border-foreground/30 px-5 py-3 text-xs font-mono uppercase tracking-[0.15em] hover:border-brand hover:text-brand transition-colors">
              <Printer size={13} /> {t("cv.print")}
            </button>
            <a href={profile.cvFile} download data-testid="cv-download-btn" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-xs font-mono uppercase tracking-[0.15em] hover:bg-brand hover:text-white transition-colors">
              <Download size={13} /> {t("cv.download")}
            </a>
          </div>
        </div>

        <article className="border border-border bg-card p-8 sm:p-12 space-y-10" data-testid="cv-document">
          <header className="border-b border-border pb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{profile.name}</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-brand">{profile.role}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin size={14} /> {profile.location}</span>
              <a href={profile.phoneHref} className="flex items-center gap-2 hover:text-brand"><Phone size={14} /> {profile.phone}</a>
              <a href={profile.emailHref} className="flex items-center gap-2 hover:text-brand"><Mail size={14} /> {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand"><Linkedin size={14} /> {profile.linkedinLabel}</a>
            </div>
          </header>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.profile")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t("cv.summary")}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.experience")}</h3>
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.company} className="grid grid-cols-12 gap-4">
                  <p className="col-span-12 sm:col-span-3 font-mono text-xs text-muted-foreground pt-0.5">{e.period}</p>
                  <div className="col-span-12 sm:col-span-9">
                    <p className="font-display font-semibold tracking-tight">{e.role}</p>
                    <p className="text-sm text-brand font-medium">{e.company}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.capabilities")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((c) => (
                <div key={c.title} className="border border-border p-4">
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.methods")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{methods.join(" · ")}</p>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.tools")}</h3>
            <div className="space-y-3">
              {toolGroups.map((g) => (
                <p key={g.label} className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{g.label}: </span>
                  {g.items.join(", ")}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-4">{t("cv.projects")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("cv.projectsList")}</p>
          </section>
        </article>
      </div>
    </main>
  );
}
