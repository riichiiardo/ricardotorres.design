import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { MaskedLines } from "../Reveal";
import { PROFILE, EXPERTISE_LINE } from "../../data/site";
import { scrollToHash } from "../Header";

const FACTS = [
  { value: "7+", label: "Years in UX/UI & product design" },
  { value: "04", label: "Signature case studies" },
  { value: "10", label: "Selected projects" },
  { value: "14", label: "Steps, problem to learnings" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

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
            {PROFILE.role}
          </motion.p>

          <MaskedLines
            lines={["I design digital products", "that connect people,", "business and technology."]}
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
            UX/UI Project Lead and Digital Product Designer focused on turning complex problems into clear, usable and scalable digital experiences.
            <span className="block mt-3 text-foreground font-medium">I don't just design screens. I solve product problems.</span>
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
              Explore my work
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={PROFILE.cvFile}
              download
              data-testid="hero-download-cv-btn"
              className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:border-brand hover:text-brand transition-colors"
            >
              <Download size={14} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            data-testid="hero-expertise-line"
          >
            {EXPERTISE_LINE.map((e) => (
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
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Open to senior opportunities</span>
            </div>
            <p className="font-display text-2xl font-bold leading-tight tracking-tight">
              Problem<br />→ Evidence<br />→ Design<br />→ Validation<br />
              <span className="text-brand">→ Delivery</span>
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} /> {PROFILE.location}
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
          {FACTS.map((f) => (
            <div key={f.label} className="pt-5 pr-6">
              <p className="font-display text-3xl font-bold tracking-tight">{f.value}</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-[0.12em] font-mono">{f.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
