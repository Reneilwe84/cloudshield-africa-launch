import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Lock, Cloud, Users, GraduationCap, HandHeart, Quote, CheckCircle2 } from "lucide-react";

import heroArt from "../assets/hero-africa.png";
import { services } from "../lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CloudShield Africa — Empowering Africa's SMEs through secure cloud innovation" },
      { name: "description", content: "Youth-driven Microsoft 365 security, POPIA compliance, identity management and hybrid IT support for South African SMEs. Get your free security check." },
      { property: "og:title", content: "CloudShield Africa — Secure cloud innovation for African SMEs" },
      { property: "og:description", content: "Powered by Youth. Securing Africa's Future. Affordable compliance and cloud security for SMEs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const impactStats = [
  { value: "50+", label: "Youth trained & hired" },
  { value: "30+", label: "SMEs protected" },
  { value: "20+", label: "Community workshops held" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="circuit-dots absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              Powered by Youth. Securing Africa's Future.
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Empowering Africa's SMEs through{" "}
              <span className="text-gradient-brand">secure cloud innovation</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              CloudShield Africa is a youth-driven IT services company dedicated to protecting small
              and medium enterprises across South Africa. We combine certified expertise in Microsoft
              365 security, compliance, and identity management with a mission to reduce unemployment
              by training and hiring the next generation of IT professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.03]"
              >
                Get Your Free Security Check
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore our services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-secondary/10 blur-2xl" />
            <img
              src={heroArt}
              alt="Circuit Africa illustration flowing into the cloud"
              width={1024}
              height={1024}
              className="relative w-full rounded-[2rem] border border-primary-foreground/15 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Trust bar / stats */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-3 sm:px-6">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Enterprise-grade security, sized for SMEs
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
          >
            See all services in detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why CloudShield */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why CloudShield</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Security that builds a future
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every engagement does double duty: it protects your business and creates paid,
              certified work for talented young South Africans. You get affordable, certified
              Microsoft 365 expertise — and South Africa gets a stronger digital workforce.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Certified Microsoft 365 security expertise",
                "Practical, affordable POPIA compliance",
                "Responsive hybrid support from trained youth technicians",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            <div className="rounded-2xl border border-border bg-card p-7">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Our mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To reduce youth unemployment by training and hiring the next generation of IT
                professionals — and putting their skills to work protecting South African businesses.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <HandHeart className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 font-display text-lg font-semibold">Our vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A digitally secure Africa — where every small and medium business can embrace the
                cloud without fear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="circuit-dots absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to secure your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Start with a free, no-obligation security check. We'll show you exactly where your risks
            are and how to fix them — affordably.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition-transform hover:scale-[1.03]"
          >
            Get Your Free Security Check
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
