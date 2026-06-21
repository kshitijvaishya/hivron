import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, Droplet, Hexagon, ArrowRight, Check, X, Minus, Tag, Rocket, Award, Gift,
  Mail, Phone, MapPin, User, Lock, Instagram, Youtube, Activity, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hiveron-hero-img.png";
import problemImg from "@/assets/problem.jpg";
import formulaImg from "@/assets/hiveron-formula-img.png";
import waitlistImg from "@/assets/hiveron-waitlist-img.png";
import logoImg from "@/assets/logo/hiveron-logo.png";
import productImg from "@/assets/hiveron-product-img.png";
import energyDrinkImg from "@/assets/energy-drink.png";
import otherGelsImg from "@/assets/other-gels.png";
import hiveronCompareImg from "@/assets/hiveron-compare.png";
import artificialIcon from "@/assets/icons/artifical_icon.png";
import energyIcon from "@/assets/icons/energy_icon.png";
import stomachIcon from "@/assets/icons/stomach_icon.png";

export const Route = createFileRoute("/")({
  component: HiveronHome,
});

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
      <img src={logoImg} alt="Hiveron" className="h-9 w-9" width={36} height={36} />
      <span
        className="text-xl font-medium tracking-wide text-honey"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        hiveron
      </span>
    </a>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 bg-ink/60 border-b border-cream/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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
          className="absolute right-0 top-0 h-full w-full md:w-[60%] object-cover object-center"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent md:via-ink/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black">
            NATURE'S MOST<br />POWERFUL FUEL.<br />
            <span className="text-honey">FINALLY</span> IN<br />YOUR HANDS.
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-cream/70 leading-relaxed">
            Functional Honey Fuel designed for runners, cyclists and high performers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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
  return (
    <section id="problem" className="relative bg-cream text-ink">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[400px] md:min-h-[700px]">
          <img
            src={problemImg}
            alt="Exhausted athlete surrounded by energy drink cans"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1280}
          />
        </div>
        <div className="relative px-6 md:px-16 lg:px-20 py-20 md:py-32">
          <div className="honeycomb-pattern absolute right-0 bottom-0 h-80 w-80 opacity-30 pointer-events-none" />
          <div className="relative max-w-xl">
            <SectionLabel>THE PROBLEM</SectionLabel>
            <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ink">
              ENERGY SHOULD NOT COME WITH A CRASH<span className="text-honey">.</span>
            </h2>
            <div className="mt-10 space-y-4 text-lg text-ink/80">
              <p>Artificial stimulants.</p>
              <p>Sugar crashes.</p>
              <p>Temporary energy.</p>
              <p>Most products solve one problem and create another.</p>
            </div>
            <div className="mt-10 h-px w-40 bg-honey" />
            <p className="mt-8 text-xl font-bold text-ink">Hiveron was built differently.</p>
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
  return (
    <section id="product" className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      <div className="relative grid md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Text — left column: ml-auto pushes text block to the right (close to image), leaving natural left margin */}
        <div className="flex flex-col justify-center py-24 md:py-32 px-6 md:px-10">
          <div className="ml-auto w-full max-w-xs md:max-w-sm pr-2 md:pr-4">
            <SectionLabel>MEET HIVERON</SectionLabel>
            <h2 className="text-display mt-6 text-5xl md:text-6xl lg:text-7xl font-black">
              FUNCTIONAL<br />HONEY FUEL<span className="text-honey">.</span>
            </h2>
            <p className="mt-8 text-lg text-cream/70">
              Built using nature's most effective energy source.
            </p>
            <div className="mt-10 h-px w-40 bg-honey" />
            <ul className="mt-8 space-y-4">
              {["Fast fuel.", "Steady performance.", "No crash."].map((t) => (
                <li key={t} className="flex items-center gap-4 text-xl text-cream">
                  <span className="text-honey font-bold">/</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Image — full-bleed right column */}
        <div className="relative min-h-[400px] md:min-h-full">
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
  ["Sustained Energy", "Quick spike, quick drop", "Somewhat sustained", "Steady energy that lasts"],
  ["Natural Ingredients", "Artificial everything", "Some natural, some not", "100% natural. Nothing artificial."],
  ["Electrolytes", "Minimal or none", "Some include", "Essential electrolytes for performance"],
  ["Caffeine (Optimal Dose)", "Too much (80–160mg)", "Varies (20–100mg)", "Optimal 50mg caffeine"],
  ["No Sugar Crash", "High sugar, hard crash", "Better carbs, still a crash", "No sugar. No crash."],
  ["Easy on Stomach", "Often heavy & acidic", "Sometimes cause issues", "Light, smooth & gut-friendly"],
  ["Clean & Transparent", "Hidden blends", "Not always clear", "Full transparency. Always."],
];

function Compare() {
  return (
    <section id="why" className="bg-white text-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <SectionLabel>NOT ALL FUEL</SectionLabel>
            <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
              NOT ALL FUEL IS CREATED EQUAL<span className="text-honey">.</span>
            </h2>
          </div>
          <div className="space-y-4 text-ink/80 text-lg">
            <p>Most energy products give you a quick high and an even harder low.</p>
            <p>
              Hiveron delivers clean, functional energy that performs{" "}
              <strong className="text-ink">with you, not against you.</strong>
            </p>
          </div>
        </div>

        {/* Outer wrapper is relative so the Hiveron image can escape the overflow-x-auto container */}
        <div className="relative mt-16">
          {/* Hiveron image — absolutely positioned ABOVE the table, outside the overflow container */}
          <div
            className="absolute right-[6%] bottom-[calc(100%+0.75rem)] z-20 flex flex-col items-center rounded-t-lg px-6 pt-5 pb-0"
            style={{ width: "clamp(130px, 12vw, 160px)" }}
          >
            <img
              src={hiveronCompareImg}
              alt="Hiveron honey fuel gel"
              className="w-full max-h-52 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-separate border-spacing-0">
              <thead>
                <tr className="align-bottom">
                  {/* WHAT MATTERS — plain label */}
                  <th className="bg-cream text-left p-5 text-sm font-bold tracking-[0.15em] text-ink/60 align-bottom">
                    WHAT MATTERS
                  </th>

                  {/* ENERGY DRINKS — can icon above label */}
                  <th className="bg-cream p-5 text-center text-sm font-bold tracking-[0.15em] text-ink/60 align-bottom">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={energyDrinkImg}
                        alt="Energy drink can"
                        className="h-20 w-auto object-contain"
                      />
                      <span>ENERGY DRINKS</span>
                    </div>
                  </th>

                  {/* OTHER GELS — gel packet icon above label */}
                  <th className="bg-cream p-5 text-center text-sm font-bold tracking-[0.15em] text-ink/60 align-bottom">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={otherGelsImg}
                        alt="Other gels packet"
                        className="h-20 w-auto object-contain"
                      />
                      <span>OTHER GELS</span>
                    </div>
                  </th>

                  {/* HIVERON — plain dark label bar, image lives above via absolute positioning */}
                  <th className="bg-ink p-5 text-center text-sm font-bold tracking-[0.15em] text-honey rounded-t-lg align-bottom">
                    HIVERON
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, a, b, c], i) => (
                  <tr key={label} className={i % 2 ? "bg-ink/[0.03]" : ""}>
                    <td className="p-5 font-semibold text-ink">{label}</td>
                    <td className="p-5 text-ink/70">
                      <div className="flex items-center gap-3">
                        <X className="h-5 w-5 text-ink/40 shrink-0" /> {a}
                      </div>
                    </td>
                    <td className="p-5 text-ink/70">
                      <div className="flex items-center gap-3">
                        <Minus className="h-5 w-5 text-ink/40 shrink-0" /> {b}
                      </div>
                    </td>
                    <td className="bg-ink p-5 text-cream">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-honey shrink-0" />
                        <span className="font-semibold">{c}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
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
          ].map((b) => (
            <div key={b.t} className="flex items-start gap-5">
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
  return (
    <section id="fuel" className="bg-white text-ink overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[700px]">
        {/* Image — full-bleed left column, no padding */}
        <div className="relative min-h-[400px] md:min-h-full">
          <img
            src={formulaImg}
            alt="Hiveron formula — raw honey, coffee beans"
            className="absolute inset-0 h-full w-full object-contain object-right"
            loading="lazy"
            width={1024}
            height={1280}
          />
        </div>
        {/* Content — right column with padding */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28">
          <SectionLabel>THE FORMULA</SectionLabel>
          <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
            THREE INGREDIENTS.<br />ONE UNFAIR<br />ADVANTAGE<span className="text-honey">.</span>
          </h2>
          <div className="mt-12 space-y-8">
            {[
              { icon: <Hexagon className="h-6 w-6" />, t: "RAW HONEY", s: "Nature's original performance fuel. Fast energy from the purest source." },
              { icon: <Droplet className="h-6 w-6" />, t: "ELECTROLYTES", s: "Hydration support when every kilometre matters." },
              { icon: <Zap className="h-6 w-6" />, t: "50MG CAFFEINE", s: "Focused energy without overstimulation. Precision dose for endurance and clarity." },
            ].map((f) => (
              <div key={f.t} className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 border-honey text-honey">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold tracking-wider text-ink">{f.t}</h4>
                  <p className="mt-1 text-ink/70">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 h-px w-40 bg-honey" />
          <p className="text-display mt-8 text-2xl md:text-3xl font-black text-ink leading-tight">
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
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-white text-ink py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="text-center mb-16">
          <SectionLabel>GOT QUESTIONS?</SectionLabel>
          <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
            WE HAVE<br />ANSWERS<span className="text-honey">.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="border border-ink/15 hover:border-honey/50 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-bold tracking-wide text-ink text-base md:text-lg">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-honey transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-ink/60 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WAITLIST ─────────────────────── */
function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="relative min-h-screen bg-ink text-cream overflow-hidden flex items-center">
      {/* Full-bleed background — sun sits centre-right, keep it unobscured */}
      <img
        src={waitlistImg}
        alt="Runner heading toward sunrise in the mountains"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        width={1600}
        height={1067}
      />
      {/* Thin dark fade only on left edge so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />
      {/* Thin dark fade on right edge so form card blends in */}
      <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-transparent to-transparent" />

      <div className="relative w-full mx-auto max-w-7xl pl-6 md:pl-12 pr-0 py-24 md:py-32 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* LEFT — content */}
        <div className="max-w-md flex-1">
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
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-4">
                {/* Hexagon icon badge */}
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

        {/* RIGHT — form card pinned to right so the sun stays visible in the centre */}
        <div className="ml-auto w-full max-w-sm lg:w-[400px] shrink-0 rounded-2xl border border-honey/30 bg-ink/85 backdrop-blur-md p-8 shadow-deep">
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
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 space-y-4"
            >
              <Field icon={<User className="h-4 w-4" />} placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field icon={<Mail className="h-4 w-4" />} placeholder="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field icon={<Phone className="h-4 w-4" />} placeholder="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-3 bg-honey py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey rounded-lg"
              >
                JOIN THE WAITLIST <ArrowRight className="h-4 w-4" />
              </button>
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
  return (
    <section id="contact" className="bg-white text-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <SectionLabel>LET'S TALK</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-6xl font-black text-ink">
            Let's build the future of fuel<span className="text-honey">.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/70 text-lg">
            Partnerships, collaborations, media or any other inquiries — we'd love to hear from you.
          </p>
          <div className="mt-8 h-px w-40 bg-honey" />
          <div className="mt-10 space-y-6">
            <ContactRow icon={<Mail className="h-5 w-5" />} label="EMAIL" value="hello@hiveron.com" />
            <ContactRow icon={<Phone className="h-5 w-5" />} label="PHONE" value="+91 98765 43210" />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="HEADQUARTERS" value="Bengaluru, Karnataka, India" />
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <LightField placeholder="Full Name" />
            <LightField placeholder="Email Address" type="email" />
          </div>
          <LightField placeholder="Subject" />
          <textarea
            placeholder="Your Message"
            rows={7}
            className="w-full rounded-lg border border-ink/15 bg-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-honey transition-colors"
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 bg-honey py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey"
          >
            SEND MESSAGE <ArrowRight className="h-4 w-4" />
          </button>
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
function LightField({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-ink/15 bg-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-honey transition-colors"
    />
  );
}

/* ─────────────────────── FOOTER ─────────────────────── */
function Footer() {
  return (
    <footer className="bg-ink text-cream/80 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-5">
        <div className="lg:col-span-2 flex items-start gap-5 border-r border-cream/10 lg:pr-8">
          <img src={logoImg} alt="Hiveron" className="h-12 w-12" width={48} height={48} />
          <p className="text-sm leading-relaxed text-cream/70 max-w-xs">
            Functional Honey Fuel for runners, cyclists and high performers.
          </p>
        </div>
        <FooterCol title="PRODUCT" items={["Overview", "Ingredients", "How It Works", "FAQ"]} />
        <FooterCol title="COMPANY" items={["About Hiveron", "Careers", "Press", "Contact"]} />
        <FooterCol title="SUPPORT" items={["Help Center", "Shipping", "Returns", "Terms & Privacy"]} />
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

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold tracking-[0.2em] text-cream">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm text-cream/60 hover:text-honey transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
