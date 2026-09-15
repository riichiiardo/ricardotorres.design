import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Reveal, SectionHead } from "../Reveal";
import { PROFILE } from "../../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — thank you. Ricardo will get back to you.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error("Could not send right now — please use the email button instead.");
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full bg-transparent border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none transition-colors";

  return (
    <section id="contact" data-testid="contact-section" className="py-24 sm:py-32 border-t border-border scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          id="contact"
          overline="Contact"
          title="Let's design something meaningful."
          lead="Whether you are building a new digital product, improving an existing experience or navigating a complex design challenge, I'd be happy to talk."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} className="border border-border bg-card p-6 sm:p-8 space-y-5" data-testid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cf-name" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Name *</label>
                  <input id="cf-name" data-testid="contact-name-input" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="cf-email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Email *</label>
                  <input id="cf-email" data-testid="contact-email-input" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="cf-company" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Company / project</label>
                <input id="cf-company" data-testid="contact-company-input" value={form.company} onChange={set("company")} className={inputCls} placeholder="Optional" />
              </div>
              <div>
                <label htmlFor="cf-message" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">Message *</label>
                <textarea id="cf-message" data-testid="contact-message-input" required rows={5} value={form.message} onChange={set("message")} className={inputCls} placeholder="Tell me about the problem you're trying to solve…" />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit-btn"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:bg-brand hover:text-white transition-colors disabled:opacity-50"
              >
                {sending ? "Sending…" : "Start a conversation"}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="border border-border p-6 sm:p-8 h-full flex flex-col justify-between gap-8">
              <ul className="space-y-5 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand shrink-0" />
                  <span>{PROFILE.location}</span>
                </li>
                <li>
                  <a data-testid="contact-phone-link" href={PROFILE.phoneHref} className="flex items-center gap-3 hover:text-brand transition-colors">
                    <Phone size={16} className="text-brand shrink-0" /> {PROFILE.phone}
                  </a>
                </li>
                <li>
                  <a data-testid="contact-email-link" href={PROFILE.emailHref} className="flex items-center gap-3 hover:text-brand transition-colors break-all">
                    <Mail size={16} className="text-brand shrink-0" /> {PROFILE.email}
                  </a>
                </li>
              </ul>
              <div className="space-y-3">
                <a
                  data-testid="contact-mailto-btn"
                  href={PROFILE.emailHref}
                  className="flex items-center justify-center gap-2 border border-foreground/30 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] hover:border-brand hover:text-brand transition-colors"
                >
                  <Mail size={14} /> Email directly
                </a>
                <a
                  data-testid="contact-linkedin-btn"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-foreground/30 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] hover:border-brand hover:text-brand transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
