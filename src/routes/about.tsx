import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ArrowRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — CloudShield Africa" },
      { name: "description", content: "CloudShield Africa is a youth-driven IT services company reducing unemployment while securing South African SMEs in the cloud." },
      { property: "og:title", content: "About CloudShield Africa" },
      { property: "og:description", content: "Youth-driven IT services: our story, mission and vision for a digitally secure Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">About Us</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Our story
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            CloudShield Africa was born from a simple observation: South Africa's small and medium
            businesses are moving to the cloud faster than ever, but few can afford enterprise-grade
            security — and thousands of talented young people can't get a foot in the door of the IT
            industry.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We decided to solve both problems at once. We train young South Africans in certified
            Microsoft 365 security, compliance and identity management, then put those skills to
            work protecting SMEs at prices small businesses can actually afford. Every project our
            youth technicians deliver builds their careers while it builds your defences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Our mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To reduce unemployment by training and hiring the next generation of IT
              professionals — delivering affordable, certified cloud security and compliance to the
              SMEs that power Africa's economy.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Our vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A digitally secure Africa — where every small and medium business can embrace cloud
              technology with confidence, protected by homegrown talent.
            </p>
          </div>
        </div>

        <div className="hero-gradient relative mt-12 overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div className="circuit-dots absolute inset-0 opacity-60" />
          <div className="relative">
            <ShieldCheck className="mx-auto h-10 w-10 text-secondary" />
            <h2 className="mt-4 font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
              Your trusted partner in Microsoft 365 protection
            </h2>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.03]"
            >
              Work with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
