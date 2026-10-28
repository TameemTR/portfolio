"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="02. Skills" title="Technologies I work with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60"
            >
              <h3 className="mb-4 font-semibold">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1 text-sm text-muted transition hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}