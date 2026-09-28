import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Gauge, Lightbulb, Printer, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — CloudShield Africa" },
      { name: "description", content: "Free POPIA compliance checklist, Microsoft Secure Score guide and practical cyber tips for South African SMEs." },
      { property: "og:title", content: "Free Security Resources — CloudShield Africa" },
      { property: "og:description", content: "POPIA checklist, Secure Score guide and cyber tips — free for African SMEs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const popiaChecklist = [
  "Register your Information Officer with the Regulator",
  "Map what personal information you collect, where it's stored, and who has access",
  "Get lawful consent (or another lawful basis) before processing personal data",
  "Publish a plain-language privacy notice on your website",
  "Secure devices and accounts with strong passwords and multi-factor authentication",
  "Put written contracts in place with anyone who processes data on your behalf",
  "Have a process to handle data subject access and correction requests",
  "Know how to report a breach to the Regulator within the required timeframe",
  "Train staff annually on POPIA responsibilities and phishing awareness",
  "Review and securely dispose of personal information you no longer need",
];

const secureScoreSteps = [
  {
    title: "Check your Secure Score",
    body: "In the Microsoft 365 Defender portal, open 'Secure Score' to see your percentage and how you compare to similar organisations.",
  },
  {
    title: "Enable MFA everywhere",
    body: "Multi-factor authentication is the single biggest score booster and blocks the vast majority of account takeover attacks.",
  },
  {
    title: "Set up Conditional Access",
    body: "Require MFA for risky sign-ins, block legacy authentication, and restrict access by location and device compliance.",
  },
  {
    title: "Turn on anti-phishing and Safe Links",
    body: "Defender for Office 365 policies protect email and Teams from malicious links and impersonation attempts.",
  },
  {
    title: "Review admin roles quarterly",
    body: "Remove standing admin rights you don't need — least privilege keeps a single compromised account from becoming a breach.",
  },
];

const cyberTips = [
  {
    title: "Think before you click",
    body: "Hover over links to preview the real destination. Urgent requests from 'the boss' are the oldest phishing trick in the book — verify on a second channel.",
  },
  {
    title: "Use a password manager",
    body: "Unique, long passwords for every account beat a 'clever' reused one every time. A password manager means you only remember one.",
  },
  {
    title: "Back up the 3-2-1 way",
    body: "Three copies of important data, on two different types of storage, with one copy off-site or in the cloud. Ransomware can't encrypt what it can't reach.",
  },
  {
    title: "Update everything, automatically",
    body: "Most attacks exploit known, already-patched vulnerabilities. Turn on automatic updates for every device and app your business runs.",
  },
];

function ResourcesPage() {
  return (
    <div>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Resources</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Free tools to get you started
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Practical, jargon-free guidance for small and medium businesses — no email required.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6">
        {/* POPIA checklist */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Free POPIA compliance checklist</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ten essential steps every South African business should have in place under the
              Protection of Personal Information Act. Work through them one by one.
            </p>
            <button
              onClick={() => window.print()}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Printer className="h-4 w-4" />
              Print / save as PDF
            </button>
          </div>
          <ol className="space-y-3 rounded-3xl border border-border bg-card p-7 sm:p-8">
            {popiaChecklist.map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Secure Score guide */}
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Gauge className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-semibold">Microsoft Secure Score guide</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Five moves that measurably harden your Microsoft 365 tenant, in the order we recommend
            doing them.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {secureScoreSteps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-2xl font-bold text-secondary">0{i + 1}</span>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cyber tips */}
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-semibold">Cyber tips for your team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {cyberTips.map((tip) => (
              <div key={tip.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-gradient relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div className="circuit-dots absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
              Want help working through this?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
              Our free security check turns this checklist into a personal action plan for your
              business.
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
