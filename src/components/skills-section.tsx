"use client";

import { m, type Variants } from "framer-motion";
import { Code, Server, Database, Settings, Folder, Palette, Layout, Globe, Users, Shield, Microscope, FolderOpen, UsersRound, Mic, Wrench, Layers } from "lucide-react";
import { skillsInfo } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ReactNode } from "react";

const categoryVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

const techVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const categoryIcons: Record<string, ReactNode> = {
  "Frontend Development": <Code size={20} />,
  "Backend Development": <Server size={20} />,
  Database: <Database size={20} />,
  "Tools & Technologies": <Wrench size={20} />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-[var(--container-max)]">
        <SectionHeading title={skillsInfo.title} />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillsInfo.categories.map((category) => (
            <m.div
              key={category.name}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-border-hover hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                  {categoryIcons[category.name] ?? <Layers size={20} />}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <m.li
                    key={tech.name}
                    variants={techVariants}
                    className="group flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground-muted transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-colors group-hover:bg-primary"
                    />
                    {tech.name}
                  </m.li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between pt-5 text-[11px] text-foreground-subtle">
                <span>{category.technologies.length} teknologi</span>
                <span>{getTopLevel(category.technologies)}</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-[var(--radius-full)] bg-border">
                <div
                  className="h-full rounded-[var(--radius-full)] bg-primary transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]"
                  style={{ width: `${getTopLevelWidth(category.technologies)}%` }}
                />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const levelWeights: Record<string, number> = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

function getTopLevelWidth(technologies: { level: string }[]): number {
  const max = Math.max(...technologies.map((t) => levelWeights[t.level] ?? 0));
  return max;
}

function getTopLevel(technologies: { level: string }[]): string {
  const max = getTopLevelWidth(technologies);
  return Object.keys(levelWeights).find((k) => levelWeights[k] === max) ?? "-";
}