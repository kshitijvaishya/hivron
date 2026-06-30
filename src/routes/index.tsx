import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Zap, Droplet, Hexagon, ArrowRight, Check, X, Minus, Tag, Rocket, Award, Gift,
  Mail, Phone, MapPin, User, Lock, Instagram, Youtube, Activity, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hiveron-hero-img.png";
import athleteImg from "@/assets/problem.jpg";
import problemImg from "@/assets/hiveron-problem-img.png";
import formulaImg from "@/assets/hiveron-formula-img.png";
import waitlistImg from "@/assets/hiveron-waitlist-img.png";
import logoImg from "@/assets/logo/hiveron-logo.png";
import productImg from "@/assets/hiveron-product-img.png";
import energyDrinkImg from "@/assets/energy-drink.png";
import hiveronCompareImg from "@/assets/hiveron-compare.png";
import artificialIcon from "@/assets/icons/artifical_icon.png";
import energyIcon from "@/assets/icons/energy_icon.png";
import stomachIcon from "@/assets/icons/stomach_icon.png";
import rawHoneyIcon from "@/assets/icons/raw-honey-icon.png";
import electrolyteIcon from "@/assets/icons/electrolytes-icon.png";
import caffineIcon from "@/assets/icons/caffine-icon.png";
import { postJson } from "@/lib/api";
import clsx from "clsx";

export const Route = createFileRoute("/")({
  component: HiveronHome,
});

/* Lightweight IntersectionObserver hook — fires once when element enters viewport */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView } as const;
}

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "PRODUCT", href: "#product" },
  { label: "WAITLIST", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <img src={logoImg} alt="Hiveron" className="h-12 w-24" width={48} height={48} />
      <span
        className="text-2xl font-medium tracking-wide text-honey"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Hiveron
      </span>
    </a>
  );
}

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cream/5 bg-ink/60 px-6 py-5 md:px-12 anim-slide-down">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:items-center md:justify-between">
        <Logo />
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className="text-xs lg:text-sm font-semibold tracking-[0.15em] text-cream/90 hover:text-honey transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center bg-transparent p-1 text-cream transition-colors hover:text-honey md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={clsx(
          "mx-auto max-w-7xl overflow-hidden px-6 transition-[max-height,opacity] duration-200 ease-out md:hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mt-4 rounded-2xl border border-cream/10 bg-ink/95 p-4 shadow-2xl backdrop-blur-md">
          <ul className="grid gap-2">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm font-semibold tracking-[0.18em] text-cream/90 transition-colors hover:border-cream/10 hover:bg-cream/5 hover:text-honey"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function HiveronHome() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Product />
      <Waitlist />
      <Compare />
      <Formula />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-ink overflow-hidden">
      {/* Hero image right side */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 honeycomb-pattern opacity-40" />
        <img
          src={heroImg}
          alt="Hiveron honey fuel sachet"
          className="absolute right-0 top-0 h-full w-full md:w-[60%] object-cover object-center anim-zoom-fade"
          style={{ animationDelay: "200ms" }}
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent md:via-ink/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black anim-fade-left" style={{ animationDelay: "100ms" }}>
            BUILT <br /> TO <span className="text-honey">WIN</span>
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-cream/70 leading-relaxed anim-fade-up" style={{ animationDelay: "320ms" }}>
            Functional honey energy gel for runners, cyclists and endurance athletes. Three purposeful ingredients.
            Nothing unnecessary. 
          </p>
          <div className="mt-10 flex flex-wrap gap-4 anim-fade-up" style={{ animationDelay: "520ms" }}>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center bg-honey px-7 py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey"
            >
              JOIN THE HIVE
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-sm font-bold tracking-[0.15em] text-cream hover:border-honey hover:text-honey transition-colors"
            >
              LEARN MORE <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function BarItem({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <span className="flex items-center gap-2">
      {icon && <span className="text-honey">{icon}</span>}
      {text}
    </span>
  );
}

/* ─────────────────────── PROBLEM ─────────────────────── */
function Problem() {
  const { ref, inView } = useInView();
  return (
    <section id="problem" className="relative bg-[#f5f0e8] text-ink overflow-hidden">
      <div ref={ref} className="flex flex-col md:flex-row min-h-[700px] lg:min-h-[800px]">

        {/* LEFT — full-bleed dark athlete photo, ~38% width */}
        <div
          className={`relative w-full md:w-[38%] shrink-0 min-h-[320px] md:min-h-full ${inView ? "anim-fade-left" : "anim-hidden"}`}
        >
          <img
            src={athleteImg}
            alt="Exhausted athlete surrounded by energy drink cans"
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
            width={800}
            height={1200}
          />
        </div>

        {/* RIGHT — cream panel with all content */}
        <div
          className={`relative flex-1 flex flex-col justify-between px-8 md:px-10 lg:px-14 py-10 md:py-12 overflow-hidden ${inView ? "anim-fade-right" : "anim-hidden"}`}
          style={{ animationDelay: "150ms" }}
        >

          {/* ── Label + Headline ── */}
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-[#e07a20] uppercase">THE PROBLEM</p>
            <h2 className="text-display mt-3 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.02] text-ink">
              ENERGY SHOULD<br />NOT COME WITH<br />A CRASH<span className="text-[#e07a20]">.</span>
            </h2>
            <p className="mt-4 text-sm text-ink/60 leading-relaxed">
              Most energy products create a spike.<br />The crash is the price you pay later.
            </p>
          </div>

          {/* ── Graph + Legend (side by side) ── */}
          <div className="mt-6 flex items-end gap-4">
            <div className="flex-1 min-w-0">
              <img
                src={problemImg}
                alt="Energy level comparison chart over time"
                className="w-full object-contain"
                loading="lazy"
              />

            </div>

            <div className="shrink-0 flex flex-col items-end gap-5 pb-1">
              <div className="space-y-2">
                {[
                  { color: "#1a1a1a", dash: false, label: "ENERGY DRINKS" },
                  { color: "#888", dash: true, label: "COFFEE" },
                  { color: "#e07a20", dash: false, label: "HIVERON" },
                ].map(({ color, dash, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <svg width="32" height="10" className="shrink-0">
                      <line x1="0" y1="5" x2="32" y2="5" stroke={color} strokeWidth="2" strokeDasharray={dash ? "5 3" : "none"} />
                    </svg>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-ink whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Three comparison cards ── */}
          <div className="mt-6 grid grid-cols-1 border border-ink/10 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Energy Drinks */}
            <div
              className={`px-4 py-6 bg-[#f5f0e8] ${inView ? "anim-pop-in" : "anim-hidden"}`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-ink/20 mb-4 mx-auto">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink/70" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M13 2v4M13 6l4 4H7l6-4M7 10l-2 10h14L17 10H7Z" />
                </svg>
              </div>
              <h3 className="text-center text-[10px] font-black tracking-[0.2em] text-ink mb-2 uppercase">Energy Drinks</h3>
              <div className="mx-auto w-8 h-0.5 bg-ink/20 mb-3" />
              <p className="text-center text-xs text-ink/60 leading-relaxed">High spike.<br />Hard crash.</p>
            </div>

            {/* Coffee */}
            <div
              className={`px-4 py-6 bg-[#f5f0e8] ${inView ? "anim-pop-in" : "anim-hidden"}`}
              style={{ animationDelay: "430ms" }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-ink/20 mb-4 mx-auto">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-ink/70" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 2c0 0 1 1 1 2s-1 2-1 2M10 2c0 0 1 1 1 2s-1 2-1 2M17 10H5a1 1 0 000 1l1 8a1 1 0 001 1h8a1 1 0 001-1l1-8a1 1 0 000-1zM17 12h1a2 2 0 000-4h-1" />
                </svg>
              </div>
              <h3 className="text-center text-[10px] font-black tracking-[0.2em] text-ink mb-2 uppercase">Coffee</h3>
              <div className="mx-auto w-8 h-0.5 bg-ink/20 mb-3" />
              <p className="text-center text-xs text-ink/60 leading-relaxed">Quick boost.<br />Short-lived.</p>
            </div>

            {/* Hiveron */}
            <div
              className={`px-4 py-6 bg-[#f5f0e8] ${inView ? "anim-pop-in" : "anim-hidden"}`}
              style={{ animationDelay: "560ms" }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#e07a20] mb-4 mx-auto">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e07a20]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l1.8 3.6L18 7.5l-3 2.9.7 4.1L12 12.6l-3.7 1.9.7-4.1L6 7.5l4.2-.9z" />
                </svg>
              </div>
              <h3 className="text-center text-[10px] font-black tracking-[0.2em] text-[#e07a20] mb-2 uppercase">Hiveron</h3>
              <div className="mx-auto w-8 h-0.5 bg-[#e07a20] mb-3" />
              <p className="text-center text-xs text-ink/60 leading-relaxed">
                Designed for <br />Sustained energy.<br />  
              </p>
            </div>
          </div>

          {/* ── Bottom tagline banner ── */}
          <div
            className={`mt-4 flex items-center gap-4 bg-[#ede8de] border border-ink/10 px-6 py-4 ${inView ? "anim-fade-up" : "anim-hidden"}`}
            style={{ animationDelay: "680ms" }}
          >
            <div className="shrink-0">
              <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#e07a20]" fill="currentColor">
                <polygon points="14,4 22,4 26,11 22,18 14,18 10,11" />
                <polygon points="26,4 34,4 38,11 34,18 26,18 22,11" />
                <polygon points="20,18 28,18 32,25 28,32 20,32 16,25" />
              </svg>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed">
              Hiveron delivers clean, functional energy that performs with you,{" "}
              <strong className="text-ink">not against you.</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold tracking-[0.25em] text-honey">{children}</p>
      <div className="mt-3 h-0.5 w-12 bg-honey" />
    </div>
  );
}

/* ─────────────────────── PRODUCT ─────────────────────── */
function Product() {
  const { ref, inView } = useInView();
  return (
    <section id="product" className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      <div ref={ref} className="relative grid md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        <div className={`flex flex-col justify-center py-24 md:py-32 px-6 md:px-10 ${inView ? "anim-fade-left" : "anim-hidden"}`}>
          <div className="ml-auto w-full max-w-xs md:max-w-sm pr-2 md:pr-4">
            <SectionLabel>MEET HIVERON</SectionLabel>
            <h2 className="text-display mt-6 text-5xl md:text-6xl lg:text-7xl font-black">
              BUILT FOR<br />EVERY ATHLETE<span className="text-honey">.</span>
            </h2>
            <p className="mt-8 text-lg text-cream/70">
             Designed for athletes who want energy without relying on sugary drinks and overloaded formulas.
            </p>
            <div className="mt-10 h-px w-40 bg-honey" />
            <ul className="mt-8 space-y-4">
              {["Fast fuel.", "Steady performance.", "No crash."].map((t, i) => (
                <li
                  key={t}
                  className={`flex items-center gap-4 text-xl text-cream ${inView ? "anim-fade-up" : "anim-hidden"}`}
                  style={{ animationDelay: `${280 + i * 130}ms` }}
                >
                  <span className="text-honey font-bold">/</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`relative min-h-[400px] md:min-h-full ${inView ? "anim-zoom-fade" : "anim-hidden"}`}
          style={{ animationDelay: "180ms" }}
        >
          <img
            src={productImg}
            alt="Hiveron honey fuel product"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── COMPARE ─────────────────────── */
const ROWS = [
  [
    "Easy to carry",
    "Bulky cans or bottles, hard to carry during exercise.",
    "Slim, pocket-friendly squeeze packs for on-the-go fueling."
  ],
  [
    "Workout focused",
    "High carbonation and volume cause bloating and stomach cramps.",
    "Non-carbonated, smooth gel consistency that is easy on the gut."
  ],
  [
    "Natural ingredients",
    "Synthetic chemicals, artificial sweeteners, and preservatives.",
    "100% natural raw honey base."
  ],
  [
    "Electrolytes included",
    "Lacks proper sodium-to-potassium ratios for hydration.",
    "Himalayan Pink Salt supplies optimal essential electrolytes."
  ],
  [
    "Designed for endurance",
    "High sugar spike followed by a severe energy crash.",
    "Dual-source carbs (fructose & glucose) for sustained energy."
  ]
];

function Compare() {
  const { ref, inView } = useInView();
  return (
    <section id="compare" className="bg-white text-ink py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div className={inView ? "anim-fade-left" : "anim-hidden"}>
            <SectionLabel>WHY WE BUILT HIVERON</SectionLabel>
             <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
              A Better Way to Fuel Your Ambition<span className="text-honey">.</span>
            </h2> 
          </div>
          <div
            className={`space-y-4 text-ink/80 text-lg ${inView ? "anim-fade-right" : "anim-hidden"}`}
            style={{ animationDelay: "160ms" }}
          >
            <p>Athletes deserve better than sugary energy drinks and overpriced imported gels.</p>
            <p>
            We created HIVERON to deliver simple, {" "}
              <strong className="text-ink">effective fuel using ingredients people actually recognize.</strong>
            </p>
          </div>
        </div>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[800px] border-separate border-spacing-0">
            <thead>
              <tr className={`align-bottom ${inView ? "anim-fade-up" : "anim-hidden"}`} style={{ animationDelay: "200ms" }}>
                <th className="bg-cream text-left p-5 text-sm font-bold tracking-[0.15em] text-ink/60 align-bottom w-1/4">WHAT MATTERS</th>
                <th className="bg-cream p-5 text-center text-sm font-bold tracking-[0.15em] text-ink/60 align-bottom w-[37.5%]">
                  <div className="flex flex-col items-center gap-3">
                    <img src={energyDrinkImg} alt="Energy drink can" className="h-20 w-auto object-contain" />
                    <span>ENERGY DRINKS</span>
                  </div>
                </th>
                <th className="bg-ink p-5 text-center text-sm font-bold tracking-[0.15em] text-honey rounded-t-lg align-bottom w-[37.5%]">
                  <div className="flex flex-col items-center gap-3">
                    <img src={hiveronCompareImg} alt="Hiveron honey fuel gel" className="h-24 w-auto object-contain drop-shadow-2xl" />
                    <span>HIVERON</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, energyDrinkText, hiveronText], i) => (
                <tr
                  key={label}
                  className={`${i % 2 ? "bg-ink/[0.03]" : ""} ${inView ? "anim-fade-up" : "anim-hidden"}`}
                  style={{ animationDelay: `${280 + i * 55}ms` }}
                >
                  <td className="p-5 font-semibold text-ink align-middle border-b border-ink/5">{label}</td>
                  <td className="p-5 text-ink/70 align-middle border-b border-ink/5">
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <span>{energyDrinkText}</span>
                    </div>
                  </td>
                  <td className="bg-ink p-5 text-cream align-middle border-b border-cream/5">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <span className="font-semibold">{hiveronText}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className={`mt-12 flex justify-center ${inView ? "anim-fade-up" : "anim-hidden"}`}
          style={{ animationDelay: "660ms" }}
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-3 bg-honey px-8 py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey"
          >
            SECURE YOUR SPOT <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: artificialIcon, t: "No Artificial Flavors", s: "Just real ingredients." },
            { icon: energyIcon, t: "Clean Energy That Lasts", s: "Perform longer." },
            { icon: stomachIcon, t: "Easy on Your Stomach", s: "Fuel without discomfort." },
          ].map((b, i) => (
            <div
              key={b.t}
              className={`flex items-start gap-5 ${inView ? "anim-pop-in" : "anim-hidden"}`}
              style={{ animationDelay: `${720 + i * 100}ms` }}
            >
              <img src={b.icon} alt={b.t} className="h-16 w-16 shrink-0 object-contain" />
              <div>
                <h4 className="font-bold text-ink">{b.t}</h4>
                <p className="mt-1 text-sm text-ink/60">{b.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HexBadge({ children }: { children?: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center mx-auto md:mx-0">
      <svg viewBox="0 0 40 44" className="h-12 w-12 text-honey">
        <polygon
          points="20,2 38,12 38,32 20,42 2,32 2,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
      {children && <div className="absolute">{children}</div>}
    </div>
  );
}

/* ─────────────────────── FORMULA ─────────────────────── */
function Formula() {
  const { ref, inView } = useInView();
  return (
    <section id="formula" className="bg-white text-ink overflow-hidden">
      <div ref={ref} className="grid md:grid-cols-2 min-h-[700px]">
        <div
          className={`relative min-h-[400px] md:min-h-full ${inView ? "anim-fade-left" : "anim-hidden"}`}
        >
          <img
            src={formulaImg}
            alt="Hiveron formula — raw honey, coffee beans"
            className="absolute inset-0 h-full w-full object-contain object-right"
            loading="lazy"
            width={1024}
            height={1280}
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28">
          <div className={inView ? "anim-fade-up" : "anim-hidden"}>
            <SectionLabel>THE FORMULA</SectionLabel>
            <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
              THREE INGREDIENTS.<br />ONE UNFAIR<br />ADVANTAGE<span className="text-honey">.</span>
            </h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              { icon: rawHoneyIcon, t: "RAW HONEY", s: "Naturally occurring carbohydrates that help fuel \ntraining,racing, and long-duration efforts." },
              { icon: electrolyteIcon, t: "ELECTROLYTES", s: "Provides sodium to support hydration and  help \n maintain performance during extended activity." },
              { icon: caffineIcon, t: "50MG CAFFEINE", s: "A moderate caffeine dose designed to support \n alertness, focus, and endurance performance." },
            ].map((f, i) => (
              <div
                key={f.t}
                className={`flex gap-5 ${inView ? "anim-fade-right" : "anim-hidden"}`}
                style={{ animationDelay: `${180 + i * 150}ms` }}
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center">
                  <img src={f.icon} alt={f.t} className="h-24 w-24 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold tracking-wider text-ink">{f.t}</h4>
                  <p className="mt-1 text-ink/70 whitespace-pre-line">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`mt-10 h-px w-40 bg-honey ${inView ? "anim-fade-in" : "anim-hidden"}`}
            style={{ animationDelay: "660ms" }}
          />
          <p
            className={`text-display mt-8 text-2xl md:text-3xl font-black text-ink leading-tight ${inView ? "anim-fade-up" : "anim-hidden"}`}
            style={{ animationDelay: "760ms" }}
          >
            ONE SACHET.<br />ONE DECISION.<br />YOUR BEST RUN.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
const FAQS = [
  {
    q: "What exactly is Hiveron?",
    a: "Hiveron is a functional honey fuel sachet designed for runners, cyclists, and high performers. Each 20g sachet contains raw honey, essential electrolytes, and 50mg of precision-dosed caffeine — clean energy from nature, optimised for endurance.",
  },
  {
    q: "How is Hiveron different from regular energy gels?",
    a: "Most gels are built on artificial sweeteners, synthetic stimulants, and hidden ingredient blends. Hiveron uses raw honey as its base — nature's original performance fuel — paired with electrolytes for hydration and just 50mg caffeine to sharpen focus without the spike and crash.",
  },
  {
    q: "Will I get a caffeine crash after using it?",
    a: "No. The 50mg dose is intentionally calibrated — enough to deliver mental clarity and physical drive, but not so much that it over-stimulates your system. Paired with honey's natural energy curve, there's no sharp drop afterwards.",
  },
  {
    q: "Is Hiveron suitable for people with sensitive stomachs?",
    a: "Yes. Raw honey is gentle on the gut and absorbs quickly. We've specifically avoided artificial preservatives, synthetic flavours, and heavy carb blends that commonly cause GI distress during exercise. Hiveron is light, smooth, and gut-friendly.",
  },
  {
    q: "Is Hiveron available to buy now?",
    a: "Hiveron is currently in its founding-member phase — not yet on shelves. Join the waitlist today to secure early access, lock in your 25% launch discount, and be among the first to receive your sachets when we launch.",
  },
  {
    q: "What sports or activities is Hiveron best suited for?",
    a: "Hiveron is built for endurance. Running, cycling, triathlon, hiking, and any high-output activity that demands sustained energy and mental focus. If your sport requires you to push through, Hiveron is made for that moment.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useInView();
  const half = Math.ceil(FAQS.length / 2);

  return (
    <section id="faq" className="bg-[#f4f3f0] text-ink py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-12">

        {/* ── Header ── */}
        <div className={`text-center mb-14 ${inView ? "anim-fade-up" : "anim-hidden"}`}>
          <p className="text-xs font-bold tracking-[0.32em] text-honey uppercase mb-5">QUESTIONS & ANSWER</p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-[3.25rem] font-black text-ink leading-[1.08]">
            Got questions?<br />We have answers<span className="text-honey">.</span>
          </h2>
        </div>

        {/* ── Two-column card grid ── */}
        <div className="grid md:grid-cols-2 gap-3">

          {/* Left column */}
          <div className="space-y-3">
            {FAQS.slice(0, half).map((item, i) => (
              <div
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                role="button"
                aria-expanded={open === i}
                className={`rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                  open === i
                    ? "border-honey/35 bg-white shadow-honey"
                    : "border-transparent bg-white hover:border-honey/25"
                } ${inView ? "anim-fade-up" : "anim-hidden"}`}
                style={{ animationDelay: `${200 + i * 85}ms` }}
              >
                <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5">
                  <span
                    className={`font-bold text-[0.95rem] leading-snug transition-colors duration-200 ${
                      open === i ? "text-honey" : "text-ink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-full border text-lg leading-none transition-all duration-200 ${
                      open === i
                        ? "border-honey bg-honey/10 text-honey"
                        : "border-ink/20 text-ink/40 hover:border-honey/50 hover:text-honey"
                    }`}
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-ink/55 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3">
            {FAQS.slice(half).map((item, i) => {
              const idx = i + half;
              return (
                <div
                  key={idx}
                  onClick={() => setOpen(open === idx ? null : idx)}
                  role="button"
                  aria-expanded={open === idx}
                  className={`rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                    open === idx
                      ? "border-honey/35 bg-white shadow-honey"
                      : "border-transparent bg-white hover:border-honey/25"
                  } ${inView ? "anim-fade-up" : "anim-hidden"}`}
                  style={{ animationDelay: `${200 + idx * 85}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5">
                    <span
                      className={`font-bold text-[0.95rem] leading-snug transition-colors duration-200 ${
                        open === idx ? "text-honey" : "text-ink"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-full border text-lg leading-none transition-all duration-200 ${
                        open === idx
                          ? "border-honey bg-honey/10 text-honey"
                          : "border-ink/20 text-ink/40 hover:border-honey/50 hover:text-honey"
                      }`}
                    >
                      {open === idx ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === idx ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-ink/55 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WAITLIST ─────────────────────── */
function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, inView } = useInView();

  return (
    <section id="waitlist" className="relative min-h-screen bg-ink text-cream overflow-hidden flex items-center">
      <img
        src={waitlistImg}
        alt="Runner heading toward sunrise in the mountains"
        className={`absolute inset-0 h-full w-full object-cover object-center ${inView ? "anim-ken-burns" : ""}`}
        loading="lazy"
        width={1600}
        height={1067}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-transparent to-transparent" />

      <div ref={ref} className="relative w-full mx-auto max-w-7xl pl-6 md:pl-12 pr-0 py-24 md:py-32 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className={`max-w-md flex-1 ${inView ? "anim-fade-up" : "anim-hidden"}`}>
          <SectionLabel>FOUNDING MEMBER ACCESS</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-6xl lg:text-7xl font-black text-cream leading-none">
            THE HIVE IS{" "}<br /><span className="text-honey">FORMING.</span>
          </h2>
          <p className="mt-6 max-w-sm text-cream/80 text-lg leading-relaxed">
            Join before launch and unlock exclusive founding member benefits.
          </p>

          <p className="mt-10 text-sm font-bold tracking-[0.2em] text-honey">WHY JOIN EARLY?</p>
          <ul className="mt-5 space-y-5">
            {[
              { icon: <Tag className="h-5 w-5" />, t: "25% LAUNCH DISCOUNT", s: "Get founder pricing before public launch." },
              { icon: <Rocket className="h-5 w-5" />, t: "PRIORITY ACCESS", s: "Be the first to get your hands on Hiveron." },
              { icon: <Award className="h-5 w-5" />, t: "FOUNDING MEMBER BADGE", s: "Exclusive status. Limited to early members." },
              { icon: <Gift className="h-5 w-5" />, t: "EXCLUSIVE PRODUCT DROPS", s: "Special editions. Members only." },
            ].map((b, i) => (
              <li
                key={b.t}
                className={`flex items-start gap-4 ${inView ? "anim-fade-up" : "anim-hidden"}`}
                style={{ animationDelay: `${280 + i * 100}ms` }}
              >
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                  <svg viewBox="0 0 40 44" className="absolute inset-0 h-11 w-11 text-honey" fill="none">
                    <polygon points="20,2 38,12 38,32 20,42 2,32 2,12" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  <span className="relative text-honey">{b.icon}</span>
                </div>
                <div>
                  <p className="font-bold tracking-wider text-cream text-sm">{b.t}</p>
                  <p className="text-sm text-cream/60 mt-0.5">{b.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`ml-auto w-full max-w-sm lg:w-[400px] shrink-0 rounded-2xl border border-honey/30 bg-ink/85 backdrop-blur-md p-8 shadow-deep ${inView ? "anim-fade-right" : "anim-hidden"}`}
          style={{ animationDelay: "200ms" }}
        >
          <h3 className="text-display text-4xl md:text-5xl font-black text-cream">
            JOIN <span className="text-honey">THE HIVE</span>
          </h3>
          {submitted ? (
            <div className="mt-8 rounded-lg border border-honey/40 bg-honey/10 p-6 text-cream">
              <p className="font-bold">You're in.</p>
              <p className="text-sm text-cream/70 mt-1">
                Welcome to the Hive. We'll be in touch before launch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setError(null);

                try {
                  await postJson("/api/waitlist", form);
                  setSubmitted(true);
                } catch (requestError) {
                  setError(requestError instanceof Error ? requestError.message : "Unable to join the waitlist.");
                } finally {
                  setSubmitting(false);
                }
              }}
              className="mt-8 space-y-4"
            >
              <Field icon={<User className="h-4 w-4" />} placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field icon={<Mail className="h-4 w-4" />} placeholder="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field icon={<Phone className="h-4 w-4" />} placeholder="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-honey py-4 text-sm font-bold tracking-[0.15em] text-ink shadow-honey transition-colors hover:bg-honey-glow disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "SAVING..." : "JOIN THE WAITLIST"} <ArrowRight className="h-4 w-4" />
              </button>
              {error && <p className="text-sm text-red-300">{error}</p>}
              <p className="flex items-center justify-center gap-2 text-xs text-cream/50 pt-2">
                <Lock className="h-3.5 w-3.5" /> No spam. Just product updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  icon, placeholder, value, onChange, type = "text",
}: { icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="flex items-center gap-3 rounded-lg border border-cream/20 bg-transparent px-4 py-3.5 focus-within:border-honey transition-colors">
      <span className="text-cream/50">{icon}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-cream placeholder:text-cream/50 outline-none"
      />
    </label>
  );
}

/* ─────────────────────── CONTACT ─────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="bg-white text-ink py-24 md:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-2">
        <div className={inView ? "anim-fade-left" : "anim-hidden"}>
          <SectionLabel>LET'S TALK</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-6xl font-black text-ink">
            Let's build the future of fuel<span className="text-honey">.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/70 text-lg">
            Partnerships, collaborations, media or any other inquiries — we'd love to hear from you.
          </p>
          <div className="mt-8 h-px w-40 bg-honey" />
          <div className="mt-10 space-y-6">
            <ContactRow icon={<Mail className="h-5 w-5" />} label="EMAIL" value="hiveron@gmail.com" />
            <ContactRow icon={<Phone className="h-5 w-5" />} label="PHONE" value="+91 9530743515" />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="HEADQUARTERS" value="Chandigarh, India" />
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSubmitting(true);
            setError(null);

            try {
              await postJson("/api/contact", form);
              setSubmitted(true);
              setForm({ name: "", email: "", subject: "", message: "" });
            } catch (requestError) {
              setError(requestError instanceof Error ? requestError.message : "Unable to send your message.");
            } finally {
              setSubmitting(false);
            }
          }}
          className={`space-y-4 ${inView ? "anim-fade-right" : "anim-hidden"}`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <LightField placeholder="Full Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} />
            <LightField placeholder="Email Address" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} />
          </div>
          <LightField placeholder="Subject" value={form.subject} onChange={(value) => setForm({ ...form, subject: value })} />
          <textarea
            placeholder="Your Message"
            rows={7}
            required
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="w-full rounded-lg border border-ink/15 bg-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-honey transition-colors"
          />
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-3 bg-honey py-4 text-sm font-bold tracking-[0.15em] text-ink shadow-honey transition-colors hover:bg-honey-glow disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "SENDING..." : "SEND MESSAGE"} <ArrowRight className="h-4 w-4" />
          </button>
          {submitted && <p className="text-sm text-ink/70">Thanks. Your message has been sent.</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-honey text-honey">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold tracking-[0.2em] text-ink">{label}</p>
        <p className="text-ink/70 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
function LightField({
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-ink/15 bg-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-honey transition-colors"
    />
  );
}

/* ─────────────────────── FOOTER ─────────────────────── */
function Footer() {
  const { ref, inView } = useInView();
  return (
    <footer className="bg-ink text-cream/80 py-16">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-5 ${inView ? "anim-fade-up" : "anim-hidden"}`}
      >
        <div className="lg:col-span-2 flex items-start gap-5 border-r border-cream/10 lg:pr-8">
          <img src={logoImg} alt="Hiveron" className="h-14 w-24" width={56} height={56} />
          <p className="text-sm leading-relaxed text-cream/70 max-w-xs">
            Functional honey energy gel for runners, cyclists and endurance athletes. Three purposeful ingredients.
            Nothing unnecessary.
          </p>
        </div>
        <FooterCol
          title="PRODUCT"
          items={[
            { label: "Overview", href: "#compare" },
            { label: "Ingredients", href: "#formula" },
            { label: "FAQ", href: "#faq" },
          ]}
        />
        <FooterCol
          title="COMPANY"
          items={[
            { label: "About Hiveron", href: "#product" },
            { label: "Contact", href: "#contact" },
          ]}
        />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-cream/10 px-6 md:px-12 pt-8 md:flex-row">
        <p className="text-xs text-cream/50">© {new Date().getFullYear()} Hiveron. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p className="text-xs font-bold tracking-[0.2em] text-cream/70">FOLLOW THE HIVE</p>
          {[Instagram, Activity, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream/70 hover:border-honey hover:text-honey transition-colors"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

interface FooterItem {
  label: string;
  href: string;
}

function FooterCol({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold tracking-[0.2em] text-cream">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-cream/60 hover:text-honey transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
