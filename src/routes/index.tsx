import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, Droplet, Hexagon, ArrowRight, Check, X, Minus, Tag, Rocket, Award, Gift,
  Mail, Phone, MapPin, User, Lock, Instagram, Youtube, Activity,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import problemImg from "@/assets/problem.jpg";
import formulaImg from "@/assets/formula.jpg";
import waitlistImg from "@/assets/waitlist.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: HiveronHome,
});

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "PRODUCT", href: "#product" },
  { label: "WHY HIVERON", href: "#why" },
  { label: "THE FUEL", href: "#fuel" },
  { label: "WAITLIST", href: "#waitlist" },
  { label: "CONTACT", href: "#contact" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <img src={logoImg} alt="Hiveron" className="h-9 w-9" width={36} height={36} />
      <span
        className={`text-xl font-medium tracking-wide ${dark ? "text-ink" : "text-cream"}`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        hiveron
      </span>
    </a>
  );
}

function Nav({ dark = false }: { dark?: boolean }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo dark={dark} />
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                className={`text-xs lg:text-sm font-semibold tracking-[0.15em] transition-colors ${
                  dark ? "text-ink hover:text-honey" : "text-cream/90 hover:text-honey"
                }`}
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
      <Hero />
      <Problem />
      <Product />
      <Compare />
      <Formula />
      <Waitlist />
      <Contact />
      <Footer />
    </main>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-ink overflow-hidden">
      <Nav />
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

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-honey/30 bg-ink/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 md:px-12 py-4 text-xs font-semibold tracking-[0.15em] text-cream">
          <BarItem icon={<Zap className="h-4 w-4" />} text="NATURAL ENERGY" />
          <BarItem icon={<Droplet className="h-4 w-4" />} text="ELECTROLYTES" />
          <BarItem icon={<Zap className="h-4 w-4" />} text="50MG CAFFEINE" />
          <BarItem icon={<Hexagon className="h-4 w-4" />} text="RAW HONEY SOURCE" />
          <BarItem text="CLEAN. POWERFUL. OPTIMIZED." />
          <BarItem text="TEAR. DRINK. PERFORM." />
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
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 py-24 md:py-32 md:grid-cols-2">
        <div className="relative">
          <div
            className="absolute -inset-10 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--honey) 0%, transparent 60%)" }}
          />
          <img
            src={heroImg}
            alt="Hiveron product"
            className="relative mx-auto max-h-[600px] w-auto object-contain drop-shadow-2xl"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div>
          <SectionLabel>MEET HIVERON</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-6xl lg:text-7xl font-black">
            FUNCTIONAL<br />HONEY FUEL<span className="text-honey">.</span>
          </h2>
          <p className="mt-8 text-lg text-cream/70 max-w-md">
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
    <section id="why" className="bg-cream text-ink py-24 md:py-32">
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

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[800px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="bg-cream text-left p-5 text-sm font-bold tracking-[0.15em] text-ink/60">
                  WHAT MATTERS
                </th>
                <th className="bg-cream p-5 text-center text-sm font-bold tracking-[0.15em] text-ink/60">
                  ENERGY DRINKS
                </th>
                <th className="bg-cream p-5 text-center text-sm font-bold tracking-[0.15em] text-ink/60">
                  OTHER GELS
                </th>
                <th className="bg-ink p-5 text-center text-sm font-bold tracking-[0.15em] text-honey rounded-t-lg">
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

        <div className="mt-12 flex justify-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-3 bg-honey px-8 py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey"
          >
            SECURE YOUR SPOT <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { t: "No Artificial Anything", s: "Just real ingredients." },
            { t: "Clean Energy That Lasts", s: "Perform longer." },
            { t: "Easy on Your Stomach", s: "Fuel without discomfort." },
            { t: "Trusted by Real Athletes", s: "Built for performance." },
            { t: "Tested. Safe. Effective.", s: "Because you deserve better." },
          ].map((b) => (
            <div key={b.t} className="text-center md:text-left">
              <HexBadge />
              <h4 className="mt-4 font-bold text-ink">{b.t}</h4>
              <p className="mt-1 text-sm text-ink/60">{b.s}</p>
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
    <section id="fuel" className="bg-cream text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 py-24 md:py-32 md:grid-cols-2">
        <div>
          <img
            src={formulaImg}
            alt="Hiveron formula — raw honey, coffee beans"
            className="w-full rounded-lg object-cover shadow-deep"
            loading="lazy"
            width={1024}
            height={1280}
          />
        </div>
        <div>
          <SectionLabel>THE FORMULA</SectionLabel>
          <h2 className="text-display mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-ink">
            THREE INGREDIENTS. ONE UNFAIR ADVANTAGE<span className="text-honey">.</span>
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

/* ─────────────────────── WAITLIST ─────────────────────── */
function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="relative bg-ink text-cream overflow-hidden">
      <img
        src={waitlistImg}
        alt="Runner heading toward sunrise"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="lazy"
        width={1600}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <SectionLabel>FOUNDING MEMBER ACCESS</SectionLabel>
          <h2 className="text-display mt-6 text-5xl md:text-6xl lg:text-7xl font-black text-cream">
            THE HIVE IS <span className="text-honey">FORMING.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/80 text-lg">
            Join before launch and unlock exclusive founding member benefits.
          </p>

          <p className="mt-12 text-sm font-bold tracking-[0.2em] text-honey">WHY JOIN EARLY?</p>
          <ul className="mt-6 max-w-md divide-y divide-cream/10">
            {[
              { icon: <Tag className="h-5 w-5" />, t: "25% LAUNCH DISCOUNT", s: "Get founder pricing before public launch." },
              { icon: <Rocket className="h-5 w-5" />, t: "PRIORITY ACCESS", s: "Be the first to get your hands on Hiveron." },
              { icon: <Award className="h-5 w-5" />, t: "FOUNDING MEMBER BADGE", s: "Exclusive status. Limited to early members." },
              { icon: <Gift className="h-5 w-5" />, t: "EXCLUSIVE PRODUCT DROPS", s: "Special editions. Members only." },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-4 py-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-honey text-honey">
                  {b.icon}
                </div>
                <div>
                  <p className="font-bold tracking-wider text-cream text-sm">{b.t}</p>
                  <p className="text-sm text-cream/60">{b.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-cream/10 bg-ink/80 backdrop-blur-md p-8 md:p-10 shadow-deep">
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
                className="mt-2 flex w-full items-center justify-center gap-3 bg-honey py-4 text-sm font-bold tracking-[0.15em] text-ink hover:bg-honey-glow transition-colors shadow-honey"
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
    <section id="contact" className="bg-cream text-ink py-24 md:py-32">
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
