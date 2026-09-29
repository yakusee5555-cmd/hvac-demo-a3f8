import { useState } from "react";
import {
  BUSINESS, FAQS, POSTS, SERVICES, TESTIMONIALS,
  FanWatermark, Footer, Header, MobileCallBar, Pill, Stars, useRevealRoot,
} from "./components";

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <FanWatermark className="-left-16 top-10 h-64 w-64" />
      <FanWatermark className="-right-10 bottom-0 h-80 w-80" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-2">
        <div>
          <div className="hero-in hero-in-1">
            <Pill>{BUSINESS.tagline}</Pill>
          </div>
          <h1 className="hero-in hero-in-2 mt-5 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-navy md:text-6xl">
            Fast, Affordable &amp; Energy Efficient{" "}
            <span className="relative inline-block">
              HVAC Services
              <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-12 bg-brand/70 md:h-4" aria-hidden />
            </span>
          </h1>
          <p className="hero-in hero-in-3 mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            We&rsquo;re your local HVAC experts dedicated to keeping your family comfortable through
            every season. With same-day service, honest pricing, and guaranteed results, you can
            trust us to handle it all.
          </p>
          <div className="hero-in hero-in-4 mt-8">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-[56px] items-center rounded-full bg-brand px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_10px_28px_rgba(255,196,0,0.45)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Request HVAC Service
            </a>
          </div>
          <dl className="hero-in hero-in-4 mt-10 grid max-w-lg grid-cols-3 divide-x divide-navy/10">
            {[
              { v: "4.5K+", l: "Projects Done" },
              { v: "13K+", l: "Satisfied Customers" },
              { v: "10+", l: "Years of Experience" },
            ].map((s) => (
              <div key={s.l} className="px-4 first:pl-0">
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-display text-2xl font-extrabold text-navy md:text-3xl">{s.v}</dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-in hero-in-3 relative">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.5rem] bg-navy md:-right-6" aria-hidden />
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2.5rem] bg-brand/60 md:-left-6" aria-hidden />
          <img
            src="/img/hvac-hero.jpg"
            alt="Plumbera technician servicing an AC unit"
            className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl md:aspect-[5/5]"
          />
          <div className="floaty absolute -left-3 bottom-10 rounded-2xl bg-white p-4 shadow-xl md:-left-8">
            <p className="font-display text-xl font-extrabold text-navy">24/7</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- about ---------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div>
          <div className="reveal"><Pill>About Us</Pill></div>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
            Trusted HVAC Expert You Can Count On
          </h2>
          <div className="reveal mt-7">
            <a
              href="#contact"
              className="inline-flex min-h-[54px] items-center rounded-full bg-brand px-8 font-display text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_10px_28px_rgba(255,196,0,0.4)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Learn More About Us
            </a>
          </div>
          <p className="reveal mt-7 max-w-lg text-[15px] leading-relaxed text-muted">
            At Plumbera, your comfort comes first. We take pride in offering fast, friendly, and
            affordable HVAC solutions designed to keep your home or business comfortable through
            every season. Our skilled technicians are always ready to go the extra mile for you.
            We&rsquo;re a team of licensed HVAC professionals dedicated to providing reliable
            heating and cooling services.
          </p>
        </div>
        <div className="reveal relative grid grid-cols-2 gap-4">
          <img src="/img/hvac-about-1.jpg" alt="Technician repairing an AC unit" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
          <div className="flex flex-col gap-4">
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-navy font-display text-[10px] font-bold uppercase tracking-[0.22em]">
                  <textPath href="#circ">Trusted brand • Since 2015 •&#160;</textPath>
                </text>
              </svg>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-navy" strokeWidth="2.5">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <img src="/img/hvac-about-2.jpg" alt="Technicians installing HVAC equipment" loading="lazy" className="aspect-[3/4] w-full flex-1 rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */
function Services() {
  return (
    <section id="services" className="bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <div className="reveal"><Pill dark>Our HVAC Services</Pill></div>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            Comprehensive HVAC Services
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`reveal relative overflow-hidden rounded-3xl p-6 md:p-10 ${
                s.highlight ? "bg-[#1256d6]" : "bg-navy-card"
              }`}
            >
              <span className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white md:right-10 md:top-10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-navy" strokeWidth="2.5">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="grid items-center gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                <div className="relative">
                  <div className="absolute -bottom-2 -left-2 h-full w-full rounded-[1.75rem] bg-brand/70" aria-hidden />
                  <img src={s.img} alt={s.title} loading="lazy" className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover" />
                </div>
                <div className="pr-0 md:pr-16">
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-white md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/80">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold text-white/90">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- why choose us ---------- */
function WhyUs() {
  const cells = [
    { type: "img" as const, src: "/img/why-1.jpg", alt: "Technician servicing a wall AC unit" },
    { type: "text" as const, t: "Experience Comfort Like Never", d: "We specialize in providing top-quality HVAC solutions tailored to your needs. From expert installation to fast repair." },
    { type: "img" as const, src: "/img/why-2.jpg", alt: "Technicians reviewing work by an AC condenser" },
    { type: "text" as const, t: "Your Comfort, Our Commitment", d: "We're dedicated to keeping your indoor environment perfectly comfortable. Our experienced HVAC team provides fast, reliable service." },
    { type: "img" as const, src: "/img/why-3.jpg", alt: "Happy technician with customer" },
    { type: "text" as const, t: "Smart Comfort for Every Season", d: "Experience the difference of expertly installed, maintained, and repaired HVAC systems. We focus on energy efficiency." },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      <FanWatermark className="right-10 top-10 h-56 w-56" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <div className="reveal"><Pill>Why Choose Us</Pill></div>
            <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-5xl">
              Why Homeowners Trust Our HVAC Experts
            </h2>
          </div>
          <p className="reveal text-[15px] leading-relaxed text-muted">
            Our licensed technicians provide fast, reliable, and affordable HVAC services, ensuring
            your home or business stays comfortable year-round. With 24/7 support, energy-efficient
            solutions, and a satisfaction guarantee — we&rsquo;re the team to call.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cells.map((c, i) =>
            c.type === "img" ? (
              <img key={i} src={c.src} alt={c.alt} loading="lazy" className="reveal aspect-[4/3] w-full rounded-3xl object-cover shadow-md" />
            ) : (
              <div key={i} className="reveal flex flex-col justify-center rounded-3xl bg-mist p-8">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- specialist CTA ---------- */
function SpecialistCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <FanWatermark className="-left-16 bottom-0 h-96 w-96 !text-white/[0.04]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <div className="reveal"><Pill dark>HVAC Specialists</Pill></div>
          <h2 className="reveal mt-5 font-display text-2xl font-extrabold uppercase leading-snug tracking-tight text-white md:text-4xl">
            We are HVAC specialists providing top-notch heating, ventilation, &amp; air conditioning
            services tailored to your unique needs.
          </h2>
          <div className="reveal mt-8">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-[54px] items-center rounded-full bg-brand px-9 font-display text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_10px_28px_rgba(255,196,0,0.4)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Schedule Now
            </a>
          </div>
        </div>
        <div className="reveal mx-auto w-full max-w-sm">
          <div className="rounded-3xl bg-white p-3 shadow-2xl">
            <img src="/img/ceo.jpg" alt="Plumbera CEO and founder" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <div className="px-3 py-4 text-center">
              <p className="font-display text-base font-extrabold uppercase tracking-widest text-navy">Autumn Phillips</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div>
          <div className="reveal"><Pill>FAQ</Pill></div>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl">
            Have Questions? We&rsquo;ve Got Answers
          </h2>
          <div className="reveal mt-8 rounded-3xl bg-white p-7 shadow-md">
            <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-navy">
              Still have questions? We&rsquo;re here to help
            </h3>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-brand px-7 font-display text-xs font-extrabold uppercase tracking-widest text-navy transition hover:bg-brand-dark"
              >
                Contact Us
              </a>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth="2.2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold text-muted">Call Or Chat</span>
                  <span className="font-display text-sm font-extrabold text-navy">{BUSINESS.phone}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`reveal overflow-hidden rounded-2xl transition ${
                  isOpen ? "bg-[#1256d6] shadow-lg" : "bg-white shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-display text-sm font-extrabold uppercase tracking-wide ${isOpen ? "text-white" : "text-navy"}`}>
                    {f.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 shrink-0 fill-none transition ${isOpen ? "rotate-180 stroke-white" : "stroke-navy"}`}
                    strokeWidth="2.5"
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && <p className="px-6 pb-6 text-[15px] leading-relaxed text-white/85">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */
function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <div className="reveal"><Pill>Testimonials</Pill></div>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-navy md:text-5xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="masonry mt-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="reveal rounded-3xl border border-navy/10 bg-white p-7 shadow-[0_10px_36px_rgba(10,31,77,0.07)]">
              <Stars />
              <p className="mt-4 text-[15px] leading-relaxed text-ink">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span className="font-display text-sm font-extrabold uppercase tracking-wide text-navy">{t.name}</span>
                </div>
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#1256d6]/15">
                  <path d="M10 8c-3 1-5 3.5-5 7v1h5v-6H7.5C8 9 9 8.5 10 8.2V8zm9 0c-3 1-5 3.5-5 7v1h5v-6h-2.5c.5-1 1.5-1.5 2.5-1.8V8z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- blog ---------- */
function Blog() {
  return (
    <section id="blog" className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <div className="reveal"><Pill>Latest HVAC Tips &amp; Insights</Pill></div>
          <h2 className="reveal mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl">
            Stay Ahead with Smart HVAC Advice from Industry Experts
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <article key={p.title} className="reveal overflow-hidden rounded-3xl bg-white shadow-[0_10px_36px_rgba(10,31,77,0.07)]">
              <img src={p.img} alt={p.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-7 md:p-8">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy font-display text-[9px] font-extrabold text-white">
                      {p.author[0]}
                    </span>
                    {p.author}
                  </span>
                </p>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase leading-snug tracking-wide text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
                <span className="mt-5 inline-flex min-h-[46px] items-center rounded-full bg-brand px-7 font-display text-xs font-extrabold uppercase tracking-widest text-navy">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- pre-footer CTA ---------- */
function CtaBand() {
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

/* ---------- app ---------- */
export default function App() {
  const ref = useRevealRoot();
  return (
    <div ref={ref} className="min-h-screen bg-white pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <SpecialistCta />
        <Faq />
        <Testimonials />
        <Blog />
        <CtaBand />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
