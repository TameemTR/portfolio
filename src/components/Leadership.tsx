"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="06. Leadership" title="Beyond the code" />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.leadership.map((l, i) => (
            <motion.div
              key={l.role + l.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{l.role}</h3>
              <p className="mt-1 text-sm text-muted">{l.org}</p>
              <p className="mt-4 font-mono text-xs text-accent">{l.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}