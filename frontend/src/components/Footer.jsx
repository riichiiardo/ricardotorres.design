import { Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { PROFILE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-display font-bold text-xl tracking-tight">{PROFILE.shortName}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
              UX/UI Project Lead · Digital Product Designer · AI & Conversational UX
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a data-testid="footer-email" href={PROFILE.emailHref} className="flex items-center gap-2 hover:text-foreground transition-colors"><Mail size={14} /> {PROFILE.email}</a>
            <a data-testid="footer-phone" href={PROFILE.phoneHref} className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone size={14} /> {PROFILE.phone}</a>
            <span className="flex items-center gap-2"><MapPin size={14} /> {PROFILE.location}</span>
            <a data-testid="footer-linkedin" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors"><Linkedin size={14} /> LinkedIn</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ricardo Andrei Torres Medina. Designed & built with intent.</p>
          <button
            data-testid="back-to-top-btn"
            onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
            aria-label="Back to top"
            className="p-2 border border-border hover:border-foreground/40 transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
