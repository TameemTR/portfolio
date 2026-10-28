"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="04. Projects" title="Things I've built" />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/60 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  {p.type}
                </span>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold transition group-hover:text-accent">
                {p.title}
              </h3>

              <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>

              {p.highlights.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-background px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(p.github || p.live) && (
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
                    >
                      <GitHubIcon className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" /> Live demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}