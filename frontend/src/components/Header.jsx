import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, Linkedin, Download } from "lucide-react";
import { PROFILE } from "../data/site";

const NAV = [
  { label: "Home", hash: "#top", id: "home" },
  { label: "Work", hash: "#work", id: "work" },
  { label: "About", hash: "#about", id: "about" },
  { label: "Experience", hash: "#experience", id: "experience" },
  { label: "Contact", hash: "#contact", id: "contact" },
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
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            data-testid="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 border border-border hover:border-foreground/40 transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            data-testid="linkedin-btn"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 border border-border hover:border-foreground/40 transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            data-testid="download-cv-btn"
            href={PROFILE.cvFile}
            download
            className="hidden sm:flex items-center gap-2 bg-foreground text-background px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] hover:bg-brand hover:text-white transition-colors"
          >
            <Download size={13} /> Download CV
          </a>
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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
              {n.label}
            </a>
          ))}
          <a data-testid="mobile-download-cv-btn" href={PROFILE.cvFile} download className="mt-3 flex items-center justify-center gap-2 bg-foreground text-background px-4 py-3 text-xs font-mono uppercase tracking-[0.15em]">
            <Download size={13} /> Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
