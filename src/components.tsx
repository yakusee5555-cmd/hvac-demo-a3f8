import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/* ---------------- data ---------------- */

export const BUSINESS = {
  name: "Plumbera",
  tagline: "#1 HVAC & Plumbing Services",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  email: "hello@plumbera.co",
  address: "2323 Dancing Dove Lane, Long Island City, NY 11101",
  mapQuery: "2323 Dancing Dove Lane, Long Island City, NY 11101",
  hours: [
    { d: "Mon – Fri", t: "8:00 AM – 6:00 PM" },
    { d: "Sat", t: "9:00 AM – 3:00 PM" },
    { d: "Sun", t: "Closed / Emergency Only" },
  ],
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "FAQ", to: "/faq" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    slug: "commercial-hvac",
    img: "/img/svc-commercial.jpg",
    title: "Commercial HVAC Services",
    desc: "From small offices to large facilities, we provide complete HVAC solutions for business. Our team ensures reliable performance and minimal downtime for your commercial space.",
    points: ["Rooftop units & package systems", "Preventive maintenance contracts", "Tenant improvement build-outs", "24/7 priority service for businesses"],
    tags: ["#HVACServices", "#CommercialHVAC"],
  },
  {
    slug: "heating-installation-repair",
    img: "/img/svc-heating.jpg",
    title: "Heating Installation & Repair",
    desc: "Stay warm during the cold months with our professional heating services. We install, repair, and maintain furnaces and heating systems to ensure your home stays cozy.",
    points: ["Furnace & boiler repair", "High-efficiency system installs", "Heat pump services", "Carbon monoxide safety checks"],
    tags: ["#HVACServices", "#HeatingAndCooling"],
  },
  {
    slug: "hvac-maintenance",
    img: "/img/svc-maintenance.jpg",
    title: "HVAC Maintenance",
    desc: "Prevent costly breakdowns and extend your system lifespan with routine maintenance plans. Our expert technicians ensure your HVAC system operates efficiently all year round.",
    points: ["21-point precision tune-ups", "Filter & coil cleaning", "Refrigerant level checks", "Priority scheduling for members"],
    tags: ["#HVACServices", "#HVACTechnicians"],
  },
];

export const FAQS = [
  {
    q: "How often should I service my HVAC system?",
    a: "Twice a year is the sweet spot — once in spring before cooling season and once in fall before heating season. Regular tune-ups catch small issues early, keep your warranty valid, and can cut energy bills by up to 15%.",
  },
  {
    q: "Why is my air conditioner not cooling properly?",
    a: "If your AC isn't cooling as it should, it may be due to clogged filters, low refrigerant levels, or dirty coils. Our technicians can diagnose it the same day and usually fix it in a single visit.",
  },
  {
    q: "How can I lower my energy bills with my HVAC system?",
    a: "Start with a clean filter, a programmable thermostat, and sealed ductwork. Upgrading to a high-efficiency unit can slash cooling costs by 20–40%. We'll give you an honest assessment of what your system is costing you.",
  },
  {
    q: "What size HVAC system do I need for my home?",
    a: "It depends on square footage, insulation, window placement, and local climate — not just tonnage. We run a proper load calculation so you never overpay for an oversized unit or suffer with an undersized one.",
  },
  {
    q: "Do you offer emergency HVAC services?",
    a: "Yes — 24/7. No heat in a cold snap or no AC in a heatwave can't wait until morning. Call anytime and a real technician answers, with same-night dispatch across our service area.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Bradley Lawlor",
    text: "The technicians were on time, explained everything clearly, and completed the job without any mess. Our home feels so much more comfortable now.",
  },
  {
    name: "Rhonda Rhodes",
    text: "Our AC broke down in the middle of summer, and their team arrived the same day. They fixed the issue quickly and even gave maintenance tips.",
  },
  {
    name: "John Dukes",
    text: "It's rare to find a company that truly cares about its customers. They didn't try to upsell — just fixed what was needed and explained everything clearly.",
  },
  {
    name: "Patricia Sanders",
    text: "Our furnace stopped working at night, and they arrived within an hour. Excellent communication, professional service — truly lifesavers!",
  },
  {
    name: "Stephanie Sharkey",
    text: "Their team inspected our old HVAC system and recommended a new energy-efficient model. The installation was smooth and our energy bills have dropped.",
  },
  {
    name: "Kimberly Mastrangelo",
    text: "Our business needed a full HVAC replacement, and their commercial team handled it efficiently and professionally. Couldn't be happier with the results!",
  },
];

export const POSTS = [
  {
    img: "/img/blog-1.jpg",
    date: "Oct 8, 2026",
    author: "Eddie Lake",
    title: "Top 5 Signs Your HVAC System Needs Maintenance",
    excerpt: "Is your HVAC system making strange noises or struggling to maintain temperature? Here are the warning signs to watch for.",
  },
  {
    img: "/img/blog-2.jpg",
    date: "Oct 25, 2026",
    author: "James Hall",
    title: "Choosing the Right HVAC for Your Home",
    excerpt: "Learn how to choose the perfect unit based on your home's size, climate, and budget — without the sales pressure.",
  },
];

/* ---------------- shared bits ---------------- */

export function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${
        dark ? "border-white/30 text-white/90" : "border-navy/25 text-navy"
      }`}
    >
      {children}
    </span>
  );
}

export function Stars() {
  return (
    <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 12.2l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function FanWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none absolute text-navy/[0.05] ${className}`} aria-hidden>
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="100" cy="52" rx="26" ry="48" transform={`rotate(${r} 100 100)`} />
        ))}
      </g>
      <circle cx="100" cy="100" r="18" fill="currentColor" />
    </svg>
  );
}

export function useRevealRoot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 fill-none stroke-brand ${className}`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---------------- logo / header ---------------- */

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#FFC400" strokeWidth="2.4" strokeLinecap="round">
          <path d="M12 3v10" />
          <path d="M12 13c-3.5 0-6 2.6-6 5.5V21h12v-2.5C18 15.6 15.5 13 12 13z" />
          <path d="M9.5 3h5" />
        </svg>
      </span>
      <span className={`font-display text-2xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Plumbera
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              className={({ isActive }) =>
                `text-[15px] font-semibold transition hover:text-navy ${isActive ? "text-navy underline decoration-brand decoration-2 underline-offset-8" : "text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brand" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-none stroke-navy" strokeWidth="2.2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold text-muted">Call Or Chat</span>
            <a href={BUSINESS.phoneHref} className="font-display text-base font-extrabold text-navy">
              {BUSINESS.phone}
            </a>
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 lg:hidden"
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-navy" strokeWidth="2.2" fill="none" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy/10 bg-white px-4 py-3 lg:hidden">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-3 font-display text-sm font-bold uppercase tracking-widest hover:bg-mist ${isActive ? "text-navy bg-mist" : "text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 flex min-h-[52px] items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold uppercase tracking-widest text-navy"
          >
            Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy/10 bg-white/98 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex min-h-[60px] items-center justify-center gap-2 bg-navy font-display text-sm font-extrabold uppercase tracking-widest text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex min-h-[60px] items-center justify-center bg-brand font-display text-sm font-extrabold uppercase tracking-widest text-navy"
      >
        Free Quote
      </Link>
    </div>
  );
}

/* ---------------- page hero / CTA band ---------------- */

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <FanWatermark className="-right-16 -top-10 h-72 w-72 !text-white/[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Pill dark>{eyebrow}</Pill>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">{sub}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-white">
      <FanWatermark className="-left-10 top-6 h-52 w-52" />
      <FanWatermark className="-right-8 bottom-0 h-64 w-64" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="reveal font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
          Need Fast HVAC Service? We&rsquo;re Ready 24/7!
        </h2>
        <p className="reveal mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Don&rsquo;t let a broken AC or heater ruin your comfort. Our emergency technicians are
          available day and night to get your system running again. Call now for immediate assistance!
        </p>
        <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-[54px] items-center rounded-full bg-brand px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_10px_28px_rgba(255,196,0,0.4)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Call Now
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-[54px] items-center gap-2 rounded-full bg-[#1256d6] px-9 font-display text-sm font-extrabold uppercase tracking-widest text-white transition hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- contact form ---------------- */

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "AC Repair", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const input =
    "w-full rounded-2xl border border-navy/15 bg-white px-5 py-4 text-[15px] text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";
  if (sent) {
    return (
      <div className="rounded-3xl bg-navy p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-navy" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold uppercase text-white">Request received!</h3>
        <p className="mx-auto mt-2 max-w-sm text-white/70">
          Thanks, {form.name.split(" ")[0] || "friend"}. We&rsquo;ll call you back shortly to schedule your service.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className={`rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(10,31,77,0.10)] md:p-8 ${compact ? "" : ""}`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name" value={form.name} onChange={set("name")} className={input} />
        <input required placeholder="Phone number" type="tel" value={form.phone} onChange={set("phone")} className={input} />
        <input placeholder="Email (optional)" type="email" value={form.email} onChange={set("email")} className={`${input} sm:col-span-2`} />
        <select value={form.service} onChange={set("service")} className={`${input} sm:col-span-2`} aria-label="Service needed">
          {["AC Repair", "Heating Repair", "New Installation", "Maintenance Plan", "Commercial Service", "Something else"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <textarea
          placeholder="Tell us what's going on…"
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${input} resize-none sm:col-span-2`}
        />
      </div>
      <button
        type="submit"
        className="mt-5 flex min-h-[56px] w-full items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_10px_28px_rgba(255,196,0,0.4)] transition hover:bg-brand-dark"
      >
        Request Service
      </button>
      <p className="mt-3 text-center text-xs text-muted">Prefer to talk? Call <a href={BUSINESS.phoneHref} className="font-bold text-navy">{BUSINESS.phone}</a> — 24/7.</p>
    </form>
  );
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-[0_16px_50px_rgba(10,31,77,0.10)]">
      <iframe
        title="Plumbera location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&output=embed`}
        className="h-[320px] w-full border-0 md:h-[420px]"
        loading="lazy"
      />
    </div>
  );
}

/* ---------------- footer ---------------- */

export function Footer() {
  const insta = ["/img/why-1.jpg", "/img/svc-heating.jpg", "/img/blog-1.jpg", "/img/why-2.jpg", "/img/svc-maintenance.jpg", "/img/blog-2.jpg"];
  return (
    <footer className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <h3 className="mt-6 font-display text-sm font-extrabold uppercase tracking-widest text-navy">Working Hours</h3>
            <ul className="mt-3 space-y-2.5 rounded-2xl bg-white p-5 shadow-sm">
              {BUSINESS.hours.map((h) => (
                <li key={h.d} className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-bold text-navy">{h.d}</span>
                  <span className="text-right text-muted">{h.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-navy">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((q) => (
                <li key={q.label}>
                  <Link to={q.to} className="text-[15px] font-medium text-muted transition hover:text-navy">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-navy">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-muted">
              <li>
                <a href={BUSINESS.phoneHref} className="font-bold text-navy hover:underline">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>{BUSINESS.address}</li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-navy">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2.5">
              {["f", "in", "yt", "x"].map((s) => (
                <span key={s} className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-xs font-extrabold text-white">
                  {s === "yt" ? "▶" : s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-navy">Instagram Post</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {insta.map((src, i) => (
                <img key={i} src={src} alt="Plumbera Instagram post" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy/10 pt-6 text-sm text-muted md:flex-row">
          <p>© Copyright 2026 Plumbera. All Right Reserved</p>
          <p className="flex gap-4">
            <Link to="/" className="hover:text-navy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/" className="hover:text-navy">Terms Of Condition</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
