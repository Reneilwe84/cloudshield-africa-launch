import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

import { CONTACT, whatsappLink } from "../lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — CloudShield Africa" },
      { name: "description", content: "Book your free security check. Reach CloudShield Africa via the contact form, WhatsApp or email." },
      { property: "og:title", content: "Contact CloudShield Africa" },
      { property: "og:description", content: "Get your free security check — via form, WhatsApp or email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30";

function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hi CloudShield Africa! I'd like a free security check.",
      "",
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.email && `Email: ${form.email}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  };

  return (
    <div>
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Get Your Free Security Check
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Fill in the form and we'll continue on WhatsApp — or reach out to us directly. No
            obligation, no jargon, just a clear picture of where you stand.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                Your name *
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Thandi Mokoena"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-semibold text-foreground">
                Company
              </label>
              <input
                id="company"
                value={form.company}
                onChange={update("company")}
                placeholder="Your business name"
                className={inputClass}
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.co.za"
              className={inputClass}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
              What would you like help with?
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="e.g. We use Microsoft 365 and want to make sure we're POPIA compliant…"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Send via WhatsApp
          </button>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Submitting opens WhatsApp with your message pre-filled — nothing is stored on this
            website.
          </p>
        </form>

        {/* Direct channels */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-xl font-semibold">Reach us directly</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={whatsappLink("Hi CloudShield Africa! I'd like a free security check.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-2xl bg-accent p-4 text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    <span className="block font-semibold">WhatsApp us</span>
                    <span className="block opacity-80">{CONTACT.whatsappDisplay}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 px-4 py-2">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>
                  <span className="block font-semibold text-foreground">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="block text-muted-foreground hover:text-secondary">
                    {CONTACT.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 px-4 py-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>
                  <span className="block font-semibold text-foreground">Location</span>
                  <span className="block text-muted-foreground">{CONTACT.location}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 px-4 py-2">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>
                  <span className="block font-semibold text-foreground">Hours</span>
                  <span className="block text-muted-foreground">Mon–Fri, 08:00–17:00 SAST</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="hero-gradient relative overflow-hidden rounded-3xl p-8">
            <div className="circuit-dots absolute inset-0 opacity-60" />
            <div className="relative">
              <h2 className="font-display text-lg font-bold text-primary-foreground">
                Prefer LinkedIn?
              </h2>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Connect with us and follow our youth training journey.
              </p>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.03]"
              >
                CloudShield Africa on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
