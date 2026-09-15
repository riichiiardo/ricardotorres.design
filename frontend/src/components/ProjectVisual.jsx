import { PROJECT_MEDIA } from "../data/media";

// CSS-composed project visuals. These are illustrative compositions standing in
// for Figma exports (the source prototype requires login) — swap with real
// project screens when available.

const alpha = (hex, a) => `${hex}${a}`;

const Browser = ({ p, children, className = "" }) => (
  <div className={`border ${className}`} style={{ background: p.soft, borderColor: alpha(p.ink, "22") }}>
    <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: alpha(p.ink, "18") }}>
      <span className="w-2 h-2 rounded-full" style={{ background: alpha(p.ink, "35") }} />
      <span className="w-2 h-2 rounded-full" style={{ background: alpha(p.ink, "35") }} />
      <span className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
      <span className="ml-2 h-2 flex-1 max-w-[40%]" style={{ background: alpha(p.ink, "18") }} />
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const Phone = ({ p, children, className = "" }) => (
  <div
    className={`border ${className}`}
    style={{ background: p.soft, borderColor: alpha(p.ink, "26"), borderRadius: "18px" }}
  >
    <div className="mx-auto mt-2 w-10 h-1.5 rounded-full" style={{ background: alpha(p.ink, "3a") }} />
    <div className="p-3">{children}</div>
  </div>
);

const Block = ({ p, w = "100%", h = 8, accent = false, className = "" }) => (
  <div
    className={className}
    style={{ width: w, height: h, background: accent ? p.accent : alpha(p.ink, "16") }}
  />
);

const Ecosystem = ({ p }) => (
  <div className="relative w-full h-full p-6 sm:p-10" style={{ background: p.bg }}>
    <Browser p={p} className="w-[78%]">
      <div className="flex gap-3">
        <div className="w-1/4 space-y-2">
          <Block p={p} h={6} w="70%" accent />
          <Block p={p} h={6} /><Block p={p} h={6} /><Block p={p} h={6} />
        </div>
        <div className="flex-1 space-y-3">
          <Block p={p} h={14} w="65%" accent />
          <Block p={p} h={5} w="90%" /><Block p={p} h={5} w="75%" />
          <div className="flex gap-2 pt-1">
            <Block p={p} h={22} className="flex-1" /><Block p={p} h={22} className="flex-1" /><Block p={p} h={22} className="flex-1" />
          </div>
        </div>
      </div>
    </Browser>
    <Phone p={p} className="absolute right-[6%] bottom-[8%] w-[26%] shadow-2xl">
      <Block p={p} h={10} w="60%" accent className="mb-2" />
      <div className="space-y-1.5">
        <Block p={p} h={4} /><Block p={p} h={4} w="85%" /><Block p={p} h={4} w="70%" />
      </div>
      <Block p={p} h={12} accent className="mt-3" />
    </Phone>
    <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
      Web · Mobile · System
    </span>
  </div>
);

const Ops = ({ p }) => (
  <div className="relative w-full h-full p-6 sm:p-10" style={{ background: p.bg }}>
    <Browser p={p} className="w-full">
      <div className="flex justify-between items-center mb-4">
        <Block p={p} h={10} w="34%" accent />
        <Block p={p} h={8} w="18%" />
      </div>
      {[70, 85, 55, 90].map((w, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-t" style={{ borderColor: alpha(p.ink, "14") }}>
          <span className="w-2 h-2 shrink-0 rounded-full" style={{ background: i === 1 ? p.accent : alpha(p.ink, "3a") }} />
          <Block p={p} h={6} w={`${w * 0.55}%`} />
          <span className="ml-auto font-mono text-[9px] px-1.5 py-0.5" style={{ background: i === 1 ? alpha(p.accent, "30") : alpha(p.ink, "12"), color: p.ink }}>
            {["VALIDATED", "IN FIELD", "PENDING", "VALIDATED"][i]}
          </span>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <Block p={p} h={18} className="flex-[2]" /><Block p={p} h={18} className="flex-1" accent />
      </div>
    </Browser>
    <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
      Field Operations
    </span>
  </div>
);

const Dataviz = ({ p }) => {
  const bars = [38, 62, 45, 78, 56, 88, 66, 92, 50, 71];
  return (
    <div className="relative w-full h-full p-6 sm:p-10" style={{ background: p.bg }}>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {["CASES", "TREND", "RISK"].map((k, i) => (
          <div key={k} className="border p-3" style={{ borderColor: alpha(p.ink, "1e"), background: p.soft }}>
            <p className="font-mono text-[9px] tracking-[0.2em]" style={{ color: alpha(p.ink, "60") }}>{k}</p>
            <div className="mt-2 h-3" style={{ width: `${60 + i * 12}%`, background: i === 2 ? p.accent : alpha(p.ink, "30") }} />
          </div>
        ))}
      </div>
      <div className="border p-4" style={{ borderColor: alpha(p.ink, "1e"), background: p.soft }}>
        <div className="flex items-end gap-1.5 h-28 sm:h-36">
          {bars.map((h, i) => (
            <div key={i} className="flex-1" style={{ height: `${h}%`, background: i === 7 ? p.accent : alpha(p.ink, "28") }} />
          ))}
        </div>
        <div className="flex justify-between mt-2 font-mono text-[8px]" style={{ color: alpha(p.ink, "45") }}>
          <span>MEASURED</span><span style={{ color: p.accent }}>PROJECTED</span>
        </div>
      </div>
      <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
        AI · Data Visualization
      </span>
    </div>
  );
};

const Voice = ({ p }) => {
  const waves = [22, 40, 58, 34, 72, 48, 90, 62, 38, 66, 30, 52, 78, 44, 26, 56, 36, 18];
  return (
    <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between" style={{ background: p.bg }}>
      <div className="space-y-3 max-w-[80%]">
        <div className="border p-3 w-4/5" style={{ borderColor: alpha(p.ink, "22"), background: p.soft }}>
          <Block p={p} h={5} w="85%" /><Block p={p} h={5} w="55%" className="mt-1.5" />
        </div>
        <div className="p-3 w-3/5 ml-auto" style={{ background: p.accent }}>
          <Block p={{ ...p, ink: "#FFFFFF" }} h={5} w="90%" /><Block p={{ ...p, ink: "#FFFFFF" }} h={5} w="60%" className="mt-1.5" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-[3px] h-20 sm:h-28">
          {waves.map((h, i) => (
            <span key={i} className="wave-bar w-[3px] rounded-full" style={{ height: `${h}%`, background: i % 4 === 0 ? p.accent : alpha(p.ink, "55"), animationDelay: `${i * 90}ms` }} />
          ))}
        </div>
        <p className="text-center font-mono text-[9px] tracking-[0.3em] uppercase mt-2" style={{ color: alpha(p.ink, "5a") }}>
          Listening · Intent · Confirm
        </p>
      </div>
      <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
        Voice UX · GCP
      </span>
      <style>{`.wave-bar{animation:wavepulse 2.6s ease-in-out infinite}@keyframes wavepulse{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.05)}}@media (prefers-reduced-motion: reduce){.wave-bar{animation:none}}`}</style>
    </div>
  );
};

const Editorial = ({ p }) => (
  <div className="relative w-full h-full p-6 sm:p-10" style={{ background: p.bg }}>
    <div className="grid grid-cols-5 gap-4 h-full">
      <div className="col-span-3 flex flex-col justify-center space-y-3">
        <Block p={p} h={18} w="90%" accent />
        <Block p={p} h={18} w="70%" />
        <div className="pt-3 space-y-2">
          <Block p={p} h={5} /><Block p={p} h={5} w="85%" /><Block p={p} h={5} w="60%" />
        </div>
        <Block p={p} h={12} w="36%" accent className="mt-2" />
      </div>
      <div className="col-span-2 border" style={{ borderColor: alpha(p.ink, "22"), background: `linear-gradient(160deg, ${p.soft}, ${p.bg})` }}>
        <div className="p-3 space-y-2">
          <Block p={p} h={40} className="w-full" />
          <Block p={p} h={5} w="70%" /><Block p={p} h={5} w="50%" />
        </div>
      </div>
    </div>
    <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
      Cultural · Editorial
    </span>
  </div>
);

const Mobile = ({ p }) => (
  <div className="relative w-full h-full p-6 sm:p-10 flex items-center justify-center gap-6" style={{ background: p.bg }}>
    {[0, 1].map((n) => (
      <Phone key={n} p={p} className={`w-[30%] ${n === 1 ? "mt-10" : "-mt-6"}`}>
        <Block p={p} h={12} w="65%" accent className="mb-2" />
        <div className="space-y-1.5">
          <Block p={p} h={4} /><Block p={p} h={4} w="80%" /><Block p={p} h={4} w="65%" />
        </div>
        <div className="flex gap-1.5 mt-3">
          <Block p={p} h={16} className="flex-1" /><Block p={p} h={16} className="flex-1" />
        </div>
        <Block p={p} h={12} accent className="mt-3" />
      </Phone>
    ))}
    <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
      Mobile Product
    </span>
  </div>
);

const Web = ({ p }) => (
  <div className="relative w-full h-full p-6 sm:p-10" style={{ background: p.bg }}>
    <Browser p={p} className="w-[86%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Block p={p} h={8} w="20%" accent />
        <div className="flex gap-2"><Block p={p} h={5} w={28} /><Block p={p} h={5} w={28} /><Block p={p} h={5} w={28} /></div>
      </div>
      <Block p={p} h={16} w="70%" className="mb-2" /><Block p={p} h={16} w="45%" accent />
      <div className="flex gap-2 mt-4">
        <Block p={p} h={20} className="flex-1" /><Block p={p} h={20} className="flex-1" /><Block p={p} h={20} className="flex-1" />
      </div>
    </Browser>
    <span className="absolute left-6 top-5 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: alpha(p.ink, "55") }}>
      Web Experience
    </span>
  </div>
);

const VARIANTS = { ecosystem: Ecosystem, ops: Ops, dataviz: Dataviz, voice: Voice, editorial: Editorial, mobile: Mobile, web: Web };

export default function ProjectVisual({ variant = "web", palette, slug, ratio = "aspect-[16/10]" }) {
  const media = PROJECT_MEDIA[slug];
  if (media?.card) {
    return (
      <div data-testid={`project-visual-${slug}`} className={`overflow-hidden ${ratio}`}>
        <img
          src={media.card}
          alt={`Real project screens from the Figma source — ${slug}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }
  const V = VARIANTS[variant] || Web;
  return (
    <div data-testid={`project-visual-${slug}`} className={`overflow-hidden ${ratio}`} role="img" aria-label="Illustrative project composition (placeholder for Figma export)">
      <V p={palette} />
    </div>
  );
}
