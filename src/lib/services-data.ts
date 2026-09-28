import { ShieldCheck, Cloud, Lock, Users } from "lucide-react";

export type Service = {
  icon: typeof ShieldCheck;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    icon: ShieldCheck,
    title: "Microsoft 365 Security & Compliance",
    short: "Harden your M365 tenant against modern threats.",
    description:
      "We configure and manage Microsoft 365 security end-to-end — from Secure Score improvements to threat protection — so your business email, files and collaboration stay safe.",
    deliverables: [
      "Tenant security baseline configuration",
      "Advanced Threat Protection & anti-phishing",
      "Secure Score uplift roadmap",
      "Ongoing compliance monitoring",
    ],
  },
  {
    icon: Lock,
    title: "POPIA Audits & Compliance",
    short: "Meet South Africa's data protection law with confidence.",
    description:
      "A practical, affordable path to POPIA compliance. We assess how your business collects, stores and processes personal information, then help you close the gaps.",
    deliverables: [
      "Full POPIA gap assessment",
      "Data flow & processing inventory",
      "Policy templates and remediation plan",
      "Information Officer support",
    ],
  },
  {
    icon: Cloud,
    title: "Identity & Access Management",
    short: "The right people, the right access — nothing more.",
    description:
      "Multi-factor authentication, conditional access and least-privilege policies that stop credential attacks without slowing your team down.",
    deliverables: [
      "MFA rollout for all users",
      "Conditional Access policies",
      "Privileged access review",
      "Offboarding & access hygiene",
    ],
  },
  {
    icon: Users,
    title: "Hybrid IT Support",
    short: "Responsive, youth-powered support for your whole stack.",
    description:
      "On-site and remote support delivered by our trained young technicians — from helpdesk tickets to cloud migrations, at rates that work for SMEs.",
    deliverables: [
      "Remote & on-site helpdesk",
      "Cloud migration assistance",
      "Device & endpoint management",
      "Proactive monitoring",
    ],
  },
];
