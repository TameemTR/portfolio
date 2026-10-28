"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="01. About" title="Who I am" />

      <div className="grid gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted md:col-span-3"
        >
          {portfolio.about.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}

          <div className="pt-4">
            <p className="mb-3 font-mono text-sm text-accent">Focus areas</p>
            <div className="flex flex-wrap gap-2">
              {portfolio.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <div className="mb-5 flex items-center gap-2 font-semibold">
            <GraduationCap className="h-5 w-5 text-accent" />
            Education
          </div>

          <ol className="relative space-y-6 border-l border-border pl-6">
            {portfolio.education.map((e) => (
              <li key={e.school} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <p className="mt-1 font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}