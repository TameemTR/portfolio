"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable, the mailto link still works */
    }
  };

  const phoneHref = `tel:${portfolio.phone.replace(/[^\d+]/g, "")}`;

  const cards = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: portfolio.phone,
      href: phoneHref,
    },
    {
      icon: <LinkedInIcon className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Tameem Rahman",
      href: portfolio.socials.linkedin,
    },
    {
      icon: <GitHubIcon className="h-5 w-5" />,
      label: "GitHub",
      value: "TameemTR",
      href: portfolio.socials.github,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: portfolio.location,
      href: "",
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="07. Contact" title="Let's work together" />

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I'm open to software engineering, machine learning, and full-stack roles. If you
            have an opportunity or a question, my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Say hello
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : portfolio.email}
            </button>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => {
            const inner = (
              <>
                <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  {c.icon}
                </div>
                <p className="font-mono text-xs text-accent">{c.label}</p>
                <p className="mt-1 break-words text-sm">{c.value}</p>
              </>
            );
            const base =
              "rounded-2xl border border-border bg-card p-5 transition hover:border-accent/60";

            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`${base} block hover:-translate-y-1`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={base}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}