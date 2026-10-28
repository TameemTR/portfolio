"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="03. Experience" title="Where I've worked" />

      <div className="space-y-8">
        {portfolio.experience.map((job) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-muted">{job.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
                {job.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-muted">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-background px-3 py-1 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}