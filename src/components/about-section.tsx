"use client";

import { m, type Variants } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code2,
  Gauge,
  Palette,
  Rocket,
} from "lucide-react";
import type { ReactNode } from "react";
import { personalInfo, aboutInfo } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

// Ikon per highlight (urutan mengikuti aboutInfo.highlights)
const highlightIcons: ReactNode[] = [
  <Code2 key="code" size={18} />,
  <Gauge key="gauge" size={18} />,
  <Palette key="palette" size={18} />,
  <Rocket key="rocket" size={18} />,
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-[var(--container-max)]">
        <SectionHeading
          title={aboutInfo.title}
          subtitle={aboutInfo.subtitle}
        />

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Kiri: cerita singkat, minat, pendidikan */}
          <m.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-foreground-muted leading-relaxed">
                {aboutInfo.description}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {aboutInfo.journey}
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-foreground-subtle">
                <MapPin size={14} aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Minat */}
            <div>
              <h3 className="mb-3 font-sans text-xs font-semibold tracking-wider text-foreground-subtle uppercase">
                Minat
              </h3>
              <ul className="flex flex-wrap gap-2">
                {aboutInfo.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pendidikan */}
            <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                <GraduationCap size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {aboutInfo.education.institution}
                </p>
                <p className="mt-0.5 text-xs text-foreground-muted">
                  {aboutInfo.education.major} — {aboutInfo.education.period}
                </p>
              </div>
            </div>
          </m.div>

          {/* Kanan: highlight, kartu sama tinggi */}
          <m.ul
            variants={itemVariants}
            className="grid auto-rows-fr gap-4 sm:grid-cols-2"
          >
            {aboutInfo.highlights.map((highlight, i) => (
              <li
                key={highlight.title}
                className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-border-hover hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                  {highlightIcons[i % highlightIcons.length]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {highlight.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                    {highlight.description}
                  </p>
                </div>
              </li>
            ))}
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}
