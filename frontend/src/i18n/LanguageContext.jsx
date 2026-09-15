import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as siteEn from "../data/site";
import * as siteEs from "../data/site.es";
import { FLAGSHIPS } from "../data/flagships";
import { FLAGSHIPS_ES } from "../data/flagships.es";
import { ADDITIONAL } from "../data/additional";
import { ADDITIONAL_ES } from "../data/additional.es";
import { UI } from "./ui";

const LangContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const site = lang === "es" ? siteEs : siteEn;
    const dict = UI[lang];
    return {
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "en" ? "es" : "en")),
      t: (key) => dict[key] ?? UI.en[key] ?? key,
      profile: site.PROFILE,
      expertiseLine: site.EXPERTISE_LINE,
      capabilities: site.CAPABILITIES,
      approachSteps: site.APPROACH_STEPS,
      experience: site.EXPERIENCE,
      toolGroups: site.TOOL_GROUPS,
      methods: site.METHODS,
      flagships: lang === "es" ? FLAGSHIPS_ES : FLAGSHIPS,
      additional: lang === "es" ? ADDITIONAL_ES : ADDITIONAL,
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
