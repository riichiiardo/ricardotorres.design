import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/home/Hero";
import Positioning from "../components/home/Positioning";
import SignatureWork from "../components/home/SignatureWork";
import Marquee from "../components/Marquee";
import AdditionalWork from "../components/home/AdditionalWork";
import Capabilities from "../components/home/Capabilities";
import Approach from "../components/home/Approach";
import Experience from "../components/home/Experience";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import { useLang } from "../i18n/LanguageContext";
import { scrollToHash } from "../components/Header";

export default function HomePage() {
  const location = useLocation();
  const { expertiseLine } = useLang();

  useEffect(() => {
    if (location.hash) {
      const t = setTimeout(() => scrollToHash(location.hash), 120);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <main data-testid="home-page">
      <Hero />
      <Positioning />
      <Marquee items={expertiseLine} />
      <SignatureWork />
      <AdditionalWork />
      <Capabilities />
      <Approach />
      <Experience />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
