"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import ProfilePhoto from "./ProfilePhoto";
import { portfolio } from "@/data/portfolio";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const stats = [
  { value: "98.9%", label: "Image forgery detection accuracy" },
  { value: "93.23%", label: "Federated NIDS accuracy" },
  { value: "4", label: "Projects built" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <ProfilePhoto />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="lg:max-w-[55%]">
          <div className="mt-12 flex justify-center bg-gradient-to-t from-accent/20 to-transparent lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/profile.png"
                alt={portfolio.name}
                draggable={false}
                className="h-80 object-contain object-bottom"
            />
          </div>
          <motion.p {...fade(0)} className="font-mono text-sm text-accent">
            Hi, my name is
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl lg:text-6xl xl:text-7xl"
          >
            {portfolio.name}
          </motion.h1>

          <motion.h2 {...fade(0.2)} className="mt-3 text-2xl font-semibold text-muted sm:text-4xl">
            {portfolio.role}
          </motion.h2>

          <motion.p {...fade(0.3)} className="mt-6 max-w-xl text-lg text-muted">
            {portfolio.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {portfolio.location}
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              View my work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
            <div className="flex items-center gap-3 text-muted">
              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-accent"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-accent"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-14 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-3xl font-bold text-accent">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}