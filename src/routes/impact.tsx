import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Presentation, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — CloudShield Africa" },
      { name: "description", content: "Youth training programmes, community cyber workshops and testimonials from the businesses we protect." },
      { property: "og:title", content: "CloudShield Africa Impact" },
      { property: "og:description", content: "Training youth, protecting SMEs, building a digitally secure Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { value: "50+", label: "Youth trained & hired" },
  { value: "30+", label: "SMEs protected" },
  { value: "20+", label: "Community workshops held" },
  { value: "100%", label: "Commitment to local talent" },
];

const testimonials = [
  {
    quote:
      "CloudShield got our Microsoft 365 tenant locked down in weeks — and their team's energy is contagious. Best security decision we've made.",
    name: "Operations Manager",
    company: "Gauteng logistics SME",
  },
  {
    quote:
      "The POPIA audit was practical and affordable. We finally know exactly what we need to do to stay compliant.",
    name: "Owner",
    company: "Cape Town accounting firm",
  },
  {
    quote:
      "Responsive, professional support — and knowing every ticket helps train a young professional makes it even better.",
    name: "Director",
    company: "Durban legal practice",
  },
];

function ImpactPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Impact</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Technology that changes two lives at once
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Every client we protect funds the training of a young South African. Here's what that
            looks like on the ground.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-center sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Youth training programme</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We recruit unemployed young people and put them through hands-on training in Microsoft
              365 administration, cloud security fundamentals and POPIA compliance — combining
              certifications, mentorship and real client work from day one.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground">
              {[
                "Microsoft 365 & cloud security fundamentals",
                "POPIA and compliance practice",
                "Mentored, paid client engagements",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Presentation className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Community workshops</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Free cyber-awareness workshops for township and community businesses: spotting phishing
              scams, protecting customer data, and simple steps any small business can take today to
              stay safe online.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground">
              {[
                "Phishing & scam awareness",
                "Small-business data protection basics",
                "Free POPIA starter guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-foreground">What our clients say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className="flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <Quote className="h-6 w-6 text-secondary" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="block text-muted-foreground">{t.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Partner with us — protect your business and create opportunity
        </h2>
        <Link
          to="/contact"
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.03]"
        >
          Get Your Free Security Check
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
