import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { services } from "../lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CloudShield Africa" },
      { name: "description", content: "Microsoft 365 Security & Compliance, POPIA audits, Identity & Access Management and Hybrid IT Support for South African SMEs." },
      { property: "og:title", content: "CloudShield Africa Services" },
      { property: "og:description", content: "Microsoft 365 security, POPIA audits, identity management and hybrid IT support — affordable, certified, youth-powered." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Services</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Everything your business needs to work securely in the cloud
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Four core services, delivered by certified professionals and trained youth technicians —
            at rates built for small and medium businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-16 sm:px-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-start"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <service.icon className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                0{index + 1}
              </span>
              <h2 className="mt-1 font-display text-2xl font-semibold text-foreground">
                {service.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
            <ul className="space-y-3 rounded-2xl bg-muted p-6">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="hero-gradient relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div className="circuit-dots absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
              Take the free security check and we'll map your gaps to the right service.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.03]"
            >
              Get Your Free Security Check
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
