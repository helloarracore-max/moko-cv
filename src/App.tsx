import { useState, useEffect } from "react";
import {
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Headset,
  Globe,
  Briefcase,
  SealCheck,
  Pause,
  Star,
  ChatCircleText,
  Sun,
  Moon,
  Envelope,
  List,
  X,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

// ─── Reusable helpers ────────────────────────────────────────────────────────

function AvailableBadge() {
  return (
    <div className="flex items-center gap-2 rounded-none bg-stone-900/40 dark:bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-stone-900 dark:text-white border border-stone-900/20 dark:border-white/20 uppercase tracking-widest">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full bg-olive-500 dark:bg-olive-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 bg-olive-500 dark:bg-olive-400" />
      </span>
      Open to work
    </div>
  );
}

function IconBtn({
  size = "sm",
  onClick,
  ariaLabel = "Open details",
}: {
  size?: "sm" | "md";
  onClick?: () => void;
  ariaLabel?: string;
}) {
  if (!onClick) {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-none border border-stone-300 dark:border-white/20 bg-stone-200/50 dark:bg-white/5 text-stone-700 dark:text-stone-300 ${
          size === "md" ? "h-12 w-12" : "h-8 w-8"
        }`}
      >
        <ArrowUpRight size={size === "md" ? 20 : 16} weight="bold" aria-hidden="true" />
      </span>
    );
  }
  return (
    <Button
      aria-label={ariaLabel}
      variant="outline"
      size="icon"
      onClick={onClick}
      className={`rounded-none border-stone-300 dark:border-white/20 bg-stone-200/50 dark:bg-white/5 hover:bg-stone-300 dark:hover:bg-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all ${
        size === "md" ? "h-12 w-12" : "h-8 w-8"
      }`}
    >
      <ArrowUpRight size={size === "md" ? 20 : 16} weight="bold" aria-hidden="true" />
    </Button>
  );
}

// ─── Section cards ────────────────────────────────────────────────────────────

/** 1. Big Hero (col-span-2, row-span-2) */
function HeroCard() {
  return (
    <article className="relative col-span-1 md:row-span-2 md:col-span-2 overflow-hidden group hover:shadow-2xl transition-all duration-300 rounded-none border border-stone-300 dark:border-white/10 flex flex-col md:flex-row bg-stone-100 dark:bg-stone-800">
      {/* Left Panel: Text & Typography */}
      <div 
        className="@container w-full md:w-1/2 relative p-6 md:p-10 flex flex-col justify-between bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/brutalist-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-200 via-stone-100/90 to-stone-100/50 dark:from-stone-900 dark:via-stone-800/90 dark:to-stone-800/50 -z-10 transition-colors duration-300" />
        
        <div className="flex flex-col items-start gap-4 w-full">
          <AvailableBadge />
          <div className="w-full flex flex-col mt-2">
            <h1 className="w-full text-stone-900 dark:text-white font-heading uppercase font-bold tracking-tighter leading-[0.85] text-[11cqw] md:text-[11cqw] lg:text-[12cqw] xl:text-[13cqw] break-keep">
              Omega<br />Ningthoujam
            </h1>
            <p className="w-full text-olive-600 dark:text-olive-400 mt-2 text-lg lg:text-xl xl:text-2xl font-medium tracking-tight uppercase leading-tight">
              Customer Support Professional
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base font-medium leading-tight border-l-2 border-olive-500 pl-4 mb-8">
            Turning high-emotion interactions into resolved, satisfied
            customers — every single time.
          </p>
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6 uppercase tracking-wider text-xs">
            <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
              <MapPin size={16} weight="bold" />
              <span className="font-bold">India</span>
            </div>
            <div className="flex items-center gap-2 text-olive-600 dark:text-olive-400">
              <SealCheck size={16} weight="fill" />
              <span className="font-bold">BPO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Full Size Profile Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 border-t md:border-t-0 md:border-l border-stone-300 dark:border-white/10 group-hover:border-olive-500 dark:group-hover:border-olive-500 transition-colors duration-500">
        <img 
          src="/profile.image.png" 
          alt="Omega Ningthoujam" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute top-6 right-6 z-10">
          <IconBtn size="md" />
        </div>
      </div>
    </article>
  );
}

/** 2. Core Skills card */
function SkillsCard() {
  const skills = [
    { label: "Inbound Voice Support", color: "bg-olive-500" },
    { label: "Escalation & Dispute", color: "bg-stone-500" },
    { label: "SLA Adherence", color: "bg-olive-500" },
    { label: "Case Documentation", color: "bg-stone-500" },
    { label: "Service Recovery", color: "bg-olive-500" },
  ];
  return (
    <article className="flex flex-col h-full overflow-hidden group relative transition-all duration-300 hover:shadow-lg text-stone-900 dark:text-white bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-none justify-between">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-olive-600 dark:text-olive-400 uppercase tracking-widest">
            Core Skills
          </span>
          <IconBtn />
        </div>
        <h3 className="text-2xl font-bold mb-2 font-heading uppercase tracking-tight">
          Support & Strategy
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 font-medium">
          End-to-end customer interaction ownership
        </p>
        <div className="space-y-4">
          {skills.map((s) => (
            <div key={s.label} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
              <div className={`h-2 w-2 rounded-none ${s.color}`} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/** 3. Experience Card — Senior Role */
function ExperienceCard() {
  return (
    <article className="relative h-full overflow-hidden group hover:border-olive-500 dark:hover:border-olive-500 hover:shadow-lg transition-all duration-300 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-none">
      <div className="relative h-full flex flex-col p-6">
        {/* Header — pinned top */}
        <div className="flex items-center justify-between mb-auto">
          <span className="rounded-none bg-olive-500/10 text-olive-600 dark:text-olive-400 px-3 py-1 text-xs font-bold uppercase tracking-widest border border-olive-500/20">
            Experience
          </span>
          <Button
            aria-label="Experience details"
            variant="ghost"
            size="icon"
            className="rounded-none hover:bg-stone-200 dark:hover:bg-white/10 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white h-8 w-8"
          >
            <Briefcase size={16} weight="bold" aria-hidden="true" />
          </Button>
        </div>
        {/* Main content — pinned bottom */}
        <div className="mt-auto">
          <h3 className="text-3xl mb-2 tracking-tighter text-stone-900 dark:text-white font-heading uppercase font-bold">
            Senior Agent
          </h3>
          <p className="text-xs font-bold text-stone-500 mb-3 uppercase tracking-widest">
            Regional BPO Firm
          </p>
          <p className="text-sm text-stone-600 dark:text-stone-400 font-medium leading-relaxed">
            Led voice queues, resolved escalations & account disputes with
            disciplined SLA adherence and meticulous documentation.
          </p>
        </div>
      </div>
    </article>
  );
}

/** 4. Sabbatical Card */
function SabbaticalCard() {
  return (
    <article className="flex flex-col h-full group hover:shadow-lg transition-all duration-300 text-stone-900 dark:text-white bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-none p-6">
      <div className="flex items-center justify-between mb-auto">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
          Sabbatical
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-none bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
          <Pause size={14} weight="bold" className="text-stone-500 dark:text-stone-400" />
        </div>
      </div>
      <div className="flex flex-col justify-end flex-1 pt-6">
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 font-medium leading-relaxed">
          Intentional pause for personal priorities. Returned with renewed
          professional focus and a reaffirmed commitment to service excellence.
        </p>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-none bg-olive-500" />
          <span className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-widest">
            Ready
          </span>
        </div>
      </div>
    </article>
  );
}

/** 5. Languages Card */
function LanguagesCard() {
  const languages = [
    { name: "English", level: "Fluent", pct: 98 },
    { name: "Manipuri", level: "Native", pct: 100 },
    { name: "Hindi", level: "Conversational", pct: 75 },
  ];
  return (
    <article className="flex flex-col h-full group hover:border-olive-500 dark:hover:border-olive-500 hover:shadow-lg transition-all duration-300 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-none p-6">
      {/* Header — pinned top */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
          Languages
        </span>
        <Globe size={18} weight="bold" className="text-olive-600 dark:text-olive-400" />
      </div>
      {/* Language bars — pushed to bottom */}
      <div className="mt-auto space-y-4">
        {languages.map((l) => (
          <div key={l.name}>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
              <span className="text-stone-900 dark:text-white">{l.name}</span>
              <span className="text-stone-500">{l.level}</span>
            </div>
            <div className="h-1 w-full rounded-none bg-stone-300 dark:bg-stone-700">
              <div
                className="h-1 rounded-none bg-olive-500 transition-all duration-500"
                style={{ width: `${l.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

/** 6. Stats / Impact card */
function ImpactCard() {
  return (
    <article className="flex flex-col h-full group hover:shadow-lg transition-all duration-300 text-stone-900 dark:text-white bg-olive-100 dark:bg-olive-950 border border-olive-300 dark:border-olive-900 rounded-none p-6">
      {/* Header — pinned top */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-olive-700 dark:text-olive-400 uppercase tracking-widest">
          Impact
        </span>
        <ChatCircleText size={18} weight="bold" className="text-olive-700 dark:text-olive-400" />
      </div>
      {/* Stat block — pushed to bottom */}
      <div className="mt-auto">
        <p className="text-xs font-bold text-olive-600 dark:text-olive-500 uppercase tracking-widest mb-2">
          Daily cases
        </p>
        <span className="text-6xl font-black font-heading tracking-tighter">
          100+
        </span>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                weight="fill"
                className="text-stone-400 dark:text-stone-300"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-olive-700 dark:text-olive-300 uppercase tracking-wider">
            Quality Audits
          </span>
        </div>
      </div>
    </article>
  );
}

/** 7. Tools / Soft Skills tags card */
function SoftSkillsCard() {
  const tags = [
    "Active Listening",
    "Empathy",
    "De-escalation",
    "Attention to Detail",
    "Time Management",
    "Calm Under Pressure",
    "CRM Systems",
    "Voice Queue Ops",
  ];
  return (
    <article className="flex flex-col hover:border-olive-500 dark:hover:border-olive-500 hover:shadow-lg transition-all duration-300 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-white/10 rounded-none p-6">
      <div className="w-full flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
          Soft Skills
        </span>
        <Headset size={18} weight="bold" className="text-olive-600 dark:text-olive-400" />
      </div>
      <div className="flex flex-wrap content-start gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-none bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:border-olive-500 dark:hover:border-olive-500 hover:bg-olive-500/10 hover:text-olive-700 dark:hover:text-olive-300 transition-all duration-200 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Nav({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="bg-transparent border-b border-stone-300 dark:border-white/10 relative z-50">
        <nav className="flex max-w-7xl lg:px-8 mx-auto px-4 py-6 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="uppercase text-2xl font-black text-stone-900 dark:text-white tracking-tighter font-heading">
              Omega N.
            </span>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex lg:flex-row gap-8 items-center">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-olive-600 dark:hover:text-olive-400 transition-colors duration-200 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-white/60 hover:underline underline-offset-4"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <Button
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              variant="outline"
              size="icon"
              onClick={toggleDark}
              className="rounded-none border-stone-300 dark:border-white/20 bg-transparent hover:bg-stone-200 dark:hover:bg-white/10 text-stone-900 dark:text-white transition-all"
            >
              {isDark ? <Sun size={18} weight="bold" aria-hidden="true" /> : <Moon size={18} weight="bold" aria-hidden="true" />}
            </Button>

            {/* Hamburger — mobile only */}
            <Button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              variant="outline"
              size="icon"
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden rounded-none border-stone-300 dark:border-white/20 bg-transparent hover:bg-stone-200 dark:hover:bg-white/10 text-stone-900 dark:text-white transition-all"
            >
              {menuOpen
                ? <X size={20} weight="bold" aria-hidden="true" />
                : <List size={20} weight="bold" aria-hidden="true" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* ── Mobile fullscreen overlay menu ────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed inset-0 z-40 flex flex-col
          bg-stone-100 dark:bg-stone-900
          transition-all duration-300 ease-in-out
          lg:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ top: "0", paddingTop: "5rem" }}
      >
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-olive-500" />

        {/* Nav links */}
        <nav className="flex flex-col justify-center flex-1 px-8">
          <ul className="space-y-2">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.label}
                className={`
                  transition-all duration-300
                  ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                `}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  onClick={closeMenu}
                  className="
                    group flex items-center justify-between
                    py-5 border-b border-stone-300 dark:border-white/10
                    text-4xl font-black uppercase tracking-tighter font-heading
                    text-stone-900 dark:text-white
                    hover:text-olive-600 dark:hover:text-olive-400
                    transition-colors duration-200
                  "
                >
                  <span>{l.label}</span>
                  <ArrowUpRight
                    size={24}
                    weight="bold"
                    className="text-stone-400 group-hover:text-olive-500 transition-colors duration-200"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer strip */}
        <div className="px-8 pb-10 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-600">
            © 2026 Omega Ningthoujam
          </span>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-olive-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-olive-600 dark:text-olive-400">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Scroll-to-top FAB ────────────────────────────────────────────────────────

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-12 w-12
        bg-olive-500 hover:bg-olive-600
        text-white
        border-2 border-olive-500 hover:border-olive-600
        shadow-lg hover:shadow-olive-500/30
        transition-all duration-300 ease-in-out
        rounded-none
        ${visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} weight="bold" aria-hidden="true" />
    </button>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-stone-300 dark:border-white/10 bg-stone-200 dark:bg-stone-900 transition-colors duration-300 mt-0 pt-12 pb-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-600 dark:text-stone-400">
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-2xl font-black mb-4 tracking-tighter text-stone-900 dark:text-white font-heading uppercase">
            Let's Connect
          </h4>
          <p className="text-sm font-medium max-w-md leading-relaxed">
            Open to new customer support roles, BPO opportunities, and
            meaningful service work. Strictly professional.
          </p>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-600">
            © 2026 Omega Ningthoujam.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold mb-6 tracking-widest text-stone-900 dark:text-white uppercase">
            Contact
          </h5>
          <a
            href="mailto:omega.ningthoujam@gmail.com"
            className="inline-flex items-center gap-3 rounded-none border border-stone-300 dark:border-white/10 bg-transparent hover:bg-stone-300 dark:hover:bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-all"
          >
            <Envelope size={18} weight="bold" />
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-full antialiased font-sans selection:bg-olive-500 selection:text-white transition-colors duration-300 ${isDark ? 'bg-stone-900 text-stone-300' : 'bg-[#e4e4e0] text-stone-800'}`}>
      <Nav isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

      <main id="home" className="max-w-7xl lg:px-8 mx-auto px-4 pb-12 pt-8">
        <section className="bg-transparent">
          {/*
            Grid layout:
            - 3 cols on md+, 1 col on mobile
            - Rows 1-3: fixed 380px height (bento cells)
            - Row 4: auto height (soft skills tags, no fixed height needed)
          */}
          <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-3 md:[grid-template-rows:380px_380px_380px_auto]">
            {/* Row 1-2 | col 1-2 — hero spans 2 rows + 2 cols */}
            <HeroCard />
            {/* Row 1 | col 3 */}
            <div id="skills" className="md:col-start-3 md:row-start-1"><SkillsCard /></div>
            {/* Row 2 | col 3 */}
            <div id="about" className="md:col-start-3 md:row-start-2"><SabbaticalCard /></div>
            {/* Row 3 | col 1 */}
            <div id="experience" className="md:col-start-1 md:row-start-3"><ExperienceCard /></div>
            {/* Row 3 | col 2 */}
            <div className="md:col-start-2 md:row-start-3"><ImpactCard /></div>
            {/* Row 3 | col 3 */}
            <div className="md:col-start-3 md:row-start-3"><LanguagesCard /></div>
            {/* Row 4 | full width — auto height */}
            <div className="md:col-span-3 md:row-start-4">
              <SoftSkillsCard />
            </div>
          </div>
        </section>
      </main>
      
      <div id="contact"><Footer /></div>
      <ScrollToTop />
    </div>
  );
}

export default App;

