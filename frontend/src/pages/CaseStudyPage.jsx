import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Reveal } from "../components/Reveal";
import ProjectVisual from "../components/ProjectVisual";
import { useLang } from "../i18n/LanguageContext";
import { PROJECT_MEDIA } from "../data/media";

const SectionText = ({ s }) => (
  <div className="max-w-3xl">
    {s.body.map((p, i) => (
      <p key={i} className="text-base text-muted-foreground leading-relaxed mt-4 first:mt-0">{p}</p>
    ))}
    {s.statement && (
      <p className="mt-8 font-display text-xl sm:text-2xl font-semibold tracking-tight leading-snug border-l-2 border-brand pl-6">
        {s.statement}
      </p>
    )}
    {s.images && (
      <div className="mt-8 space-y-4">
        {s.images.map((src) => (
          <img key={src} src={src} alt="Design system artifact from the Figma source" loading="lazy" className="w-full border border-border" />
        ))}
      </div>
    )}
  </div>
);

const SectionSteps = ({ s, numbered = true }) => (
  <div className="space-y-px border border-border bg-border">
    {s.intro && <p className="bg-background p-5 text-sm text-muted-foreground">{s.intro}</p>}
    {s.steps.map((st, i) => (
      <div key={st.name} className="bg-background p-5 sm:p-6 grid grid-cols-12 gap-4 items-baseline">
        <p className="col-span-12 sm:col-span-3 font-mono text-xs text-brand tracking-[0.12em]">
          {numbered ? `${String(i + 1).padStart(2, "0")} — ` : ""}{st.name}
        </p>
        <p className="col-span-12 sm:col-span-9 text-sm sm:text-base text-muted-foreground leading-relaxed">{st.detail}</p>
      </div>
    ))}
  </div>
);

const SectionInsights = ({ s }) => {
  const { t } = useLang();
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
    {s.items.map((it, i) => (
      <div key={i} className="bg-background p-6 space-y-4">
        {["observation", "insight", "opportunity", "principle"].map((k, j) => (
          <div key={k}>
            <p className={`font-mono text-[9px] uppercase tracking-[0.2em] ${k === "principle" ? "text-brand" : "text-muted-foreground/70"}`}>
              {t("ins." + k)}{j < 3 ? " ↓" : ""}
            </p>
            <p className={`mt-1 text-sm leading-relaxed ${k === "principle" ? "font-display font-semibold text-foreground" : "text-muted-foreground"}`}>
              {it[k]}
            </p>
          </div>
        ))}
      </div>
    ))}
  </div>
  );
};

const SectionColumns = ({ s }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {s.columns.map((c) => (
      <div key={c.heading} className="border border-border bg-card p-6">
        <h4 className="font-display text-base font-semibold tracking-tight">{c.heading}</h4>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
      </div>
    ))}
  </div>
);

function FlagshipCaseStudy({ project, prev, next, t }) {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium">
              {t("case.caseStudy")} {project.number} — {project.industry}
            </p>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl">{project.tagline}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border" data-testid="case-meta-grid">
            {[
              [t("case.client"), project.client],
              [t("case.role"), project.role],
              [t("case.platform"), project.platform],
              [t("case.industry"), project.industry],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">{k}</p>
                <p className="mt-2 text-sm font-medium leading-snug">{v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <ProjectVisual variant={project.variant} palette={project.palette} slug={project.slug} ratio="aspect-[16/8]" />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border" data-testid="case-summary-grid">
            {[
              [t("case.challenge"), project.challenge],
              [t("case.approach"), project.approach],
              [t("case.result"), project.result],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08} className="bg-background p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{k}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">{t("case.snapshot")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border" data-testid="case-snapshot-grid">
            {project.snapshot.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04} className="bg-background p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand">{s.label}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {project.sections.map((s, idx) => (
        <section key={s.id} className={`py-16 sm:py-20 ${idx % 2 === 0 ? "" : "bg-card/40"} border-b border-border`} data-testid={`case-section-${s.id}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {s.type === "visual" ? (
              <Reveal>
                <ProjectVisual variant={s.variant} palette={project.palette} slug={`${project.slug}-detail`} ratio="aspect-[16/8]" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  {t("case.visualNote")}
                </p>
              </Reveal>
            ) : (
              <>
                <Reveal className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-3">{s.label}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight max-w-3xl">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  {s.type === "text" && <SectionText s={s} />}
                  {s.type === "steps" && <SectionSteps s={s} />}
                  {s.type === "loop" && <SectionSteps s={s} numbered={false} />}
                  {s.type === "insights" && <SectionInsights s={s} />}
                  {s.type === "columns" && <SectionColumns s={s} />}
                </Reveal>
              </>
            )}
          </div>
        </section>
      ))}

      {(PROJECT_MEDIA[project.slug]?.board || PROJECT_MEDIA[project.slug]?.gallery) && (
        <section className="py-16 sm:py-20 border-b border-border" data-testid="case-board">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-3">
                {PROJECT_MEDIA[project.slug]?.board ? t("case.figmaSource") : t("case.screensTitle")}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                {PROJECT_MEDIA[project.slug]?.board ? t("case.boardTitle") : t("case.screensTitle")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                {PROJECT_MEDIA[project.slug]?.board ? t("case.boardNote") : t("case.screensNote")}
              </p>
            </Reveal>
            {PROJECT_MEDIA[project.slug]?.board ? (
              <Reveal>
                <img
                  src={PROJECT_MEDIA[project.slug].board}
                  alt={`${project.title} — full project board from the Figma source`}
                  loading="lazy"
                  className="w-full border border-border"
                  data-testid="case-board-image"
                />
              </Reveal>
            ) : (
              <div className={`grid gap-4 ${PROJECT_MEDIA[project.slug].gallery.length > 2 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`} data-testid="case-gallery">
                {PROJECT_MEDIA[project.slug].gallery.map((src, i) => (
                  <Reveal key={src} delay={i * 0.08}>
                    <img src={src} alt={`${project.title} — product screen ${i + 1}`} loading="lazy" className="w-full border border-border" data-testid={`case-gallery-${i}`} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 border-b border-border" data-testid="case-contribution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-3">{t("case.contribution")}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{t("case.contributionTitle")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal className="border border-brand/40 bg-card p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-5">{t("case.contribution")}</p>
              <ul className="space-y-2.5">
                {project.contribution.mine.map((c) => (
                  <li key={c} className="text-sm leading-relaxed flex gap-3"><span className="text-brand mt-0.5">—</span>{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="border border-border p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5">{t("case.team")}</p>
              <ul className="space-y-2.5">
                {project.contribution.team.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground leading-relaxed flex gap-3"><span className="mt-0.5">—</span>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-border" data-testid="case-learnings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-3">{t("case.learnings")}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{t("case.learningsTitle")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              [t("case.learned"), project.learnings.learned],
              [t("case.differently"), project.learnings.differently],
              [t("case.exploreNext"), project.learnings.next],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08} className="bg-background p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{k}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectNav prev={prev} next={next} t={t} />
    </>
  );
}

function LightCaseStudy({ project, prev, next, t }) {
  const rows = [
    [t("case.context"), project.context],
    [t("case.challenge"), project.challenge],
    [t("case.myRole"), `${project.role}. ${project.contribution}`],
    [t("case.process"), project.process],
    [t("case.solution"), project.solution],
  ];
  return (
    <>
      <section className="pt-32 pb-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium">
              {t("case.additional")} — {project.industry}
            </p>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">{project.title}</h1>
            <p className="mt-4 text-muted-foreground">{project.client}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <ProjectVisual variant={project.variant} palette={project.palette} slug={project.slug} ratio="aspect-[16/8]" />
          </Reveal>
        </div>
      </section>
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-px border border-border bg-border" data-testid="light-case-body">
          {rows.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.05} className="bg-background p-6 sm:p-8 grid grid-cols-12 gap-4">
              <p className="col-span-12 sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">{k}</p>
              <p className="col-span-12 sm:col-span-9 text-sm sm:text-base text-muted-foreground leading-relaxed">{v}</p>
            </Reveal>
          ))}
          <Reveal className="bg-background p-6 sm:p-8 grid grid-cols-12 gap-4">
            <p className="col-span-12 sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">{t("case.disciplines")}</p>
            <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <span key={d} className="font-mono text-[10px] uppercase tracking-[0.12em] border border-border px-3 py-1.5 text-muted-foreground">{d}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {PROJECT_MEDIA[project.slug]?.board && (
        <section className="py-14 border-b border-border" data-testid="case-board">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-3">{t("case.figmaSource")}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{t("case.boardTitle")}</h2>
            </Reveal>
            <Reveal>
              <img
                src={PROJECT_MEDIA[project.slug].board}
                alt={`${project.title} — full project board from the Figma source`}
                loading="lazy"
                className="w-full border border-border"
                data-testid="case-board-image"
              />
            </Reveal>
          </div>
        </section>
      )}
      <ProjectNav prev={prev} next={next} t={t} />
    </>
  );
}

function ProjectNav({ prev, next, t }) {
  return (
    <nav className="py-14" aria-label="Project navigation" data-testid="project-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-stretch justify-between gap-4">
        {prev ? (
          <Link to={`/work/${prev.slug}`} data-testid="prev-project-link" className="group flex-1 border border-border p-6 hover:border-foreground/40 transition-colors">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2"><ArrowLeft size={13} /> {t("case.prev")}</p>
            <p className="mt-2 font-display text-lg font-bold tracking-tight group-hover:text-brand transition-colors">{prev.title}</p>
          </Link>
        ) : <div className="flex-1" />}
        <Link to="/#work" data-testid="all-projects-link" className="flex items-center justify-center gap-2 border border-border px-6 py-6 hover:border-brand hover:text-brand transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
          <LayoutGrid size={14} /> {t("case.allProjects")}
        </Link>
        {next ? (
          <Link to={`/work/${next.slug}`} data-testid="next-project-link" className="group flex-1 border border-border p-6 text-right hover:border-foreground/40 transition-colors">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-end gap-2">{t("case.nextProject")} <ArrowRight size={13} /></p>
            <p className="mt-2 font-display text-lg font-bold tracking-tight group-hover:text-brand transition-colors">{next.title}</p>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </nav>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const { flagships, additional, t } = useLang();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [slug]);

  const fi = flagships.findIndex((p) => p.slug === slug);
  const ai = additional.findIndex((p) => p.slug === slug);
  const isFlagship = fi !== -1;
  const list = isFlagship ? flagships : additional;
  const idx = isFlagship ? fi : ai;
  const project = list[idx];

  if (!project) {
    return (
      <main className="pt-40 pb-24 text-center" data-testid="case-not-found">
        <h1 className="font-display text-3xl font-bold">{t("case.notFound")}</h1>
        <Link to="/" className="mt-6 inline-block text-brand font-mono text-sm uppercase tracking-[0.2em]">← {t("case.back")}</Link>
      </main>
    );
  }

  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  return (
    <main data-testid={`case-study-${slug}`}>
      <motion.div className="fixed top-0 inset-x-0 h-[3px] bg-brand z-[60] origin-left" style={{ scaleX: progress }} data-testid="reading-progress" />
      <div className="fixed top-20 left-4 sm:left-6 z-40">
        <Link
          to="/"
          data-testid="back-to-portfolio-link"
          className="inline-flex items-center gap-2 bg-background/90 backdrop-blur border border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] hover:border-brand hover:text-brand transition-colors"
        >
          <ArrowLeft size={13} /> {t("case.back")}
        </Link>
      </div>
      {isFlagship ? (
        <FlagshipCaseStudy project={project} prev={prev} next={next} t={t} />
      ) : (
        <LightCaseStudy project={project} prev={prev} next={next} t={t} />
      )}
    </main>
  );
}
