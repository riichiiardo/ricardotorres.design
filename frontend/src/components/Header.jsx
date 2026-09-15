import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, Linkedin, Download } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const NAV = [
  { key: "nav.home", hash: "#top", id: "home" },
  { key: "nav.work", hash: "#work", id: "work" },
  { key: "nav.about", hash: "#about", id: "about" },
  { key: "nav.experience", hash: "#experience", id: "experience" },
  { key: "nav.contact", hash: "#contact", id: "contact" },
];

export const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, t, lang, toggleLang } = useLang();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const go = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      scrollToHash(hash === "#top" ? "body" : hash);
      window.history.replaceState(null, "", hash === "#top" ? "/" : "/" + hash);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-md" data-testid="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="/" onClick={(e) => go(e, "#top")} data-testid="brand-link" className="flex items-baseline gap-2 min-w-0">
          <span className="font-display font-bold text-lg tracking-tight">RT</span>
          <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
            Ricardo Torres — UX/UI Lead
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {NAV.map((n) => (
            <a key={n.id} href={"/" + n.hash} onClick={(e) => go(e, n.hash)} data-testid={`nav-${n.id}`} className="link-sweep text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            data-testid="language-toggle"
            onClick={toggleLang}
            aria-label="Switch language / Cambiar idioma"
            className="w-9 h-9 border border-border hover:border-brand hover:text-brand transition-colors font-mono text-[11px] tracking-widest"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            data-testid="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? t("action.themeLight") : t("action.themeDark")}
            className="p-2 border border-border hover:border-foreground/40 transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            data-testid="linkedin-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("action.linkedinAria")}
            className="p-2 border border-border hover:border-foreground/40 transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            data-testid="download-cv-btn"
            href={profile.cvFile}
            download
            className="hidden sm:flex items-center gap-2 bg-foreground text-background px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] hover:bg-brand hover:text-white transition-colors"
          >
            <Download size={13} /> {t("action.downloadCv")}
          </a>
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={t("action.menu")}
            aria-expanded={open}
            className="lg:hidden p-2 border border-border"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation" data-testid="mobile-menu">
          {NAV.map((n) => (
            <a key={n.id} href={"/" + n.hash} onClick={(e) => go(e, n.hash)} data-testid={`mobile-nav-${n.id}`} className="py-3 px-2 text-base border-b border-border/60 last:border-0">
              {t(n.key)}
            </a>
          ))}
          <a data-testid="mobile-download-cv-btn" href={profile.cvFile} download className="mt-3 flex items-center justify-center gap-2 bg-foreground text-background px-4 py-3 text-xs font-mono uppercase tracking-[0.15em]">
            <Download size={13} /> {t("action.downloadCv")}
          </a>
        </nav>
      )}
    </header>
  );
}
