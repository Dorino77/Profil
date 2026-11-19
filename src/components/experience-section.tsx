"use client";

import { m, type Variants } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, CheckCircle2 } from "lucide-react";
import { experienceInfo } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-[var(--container-max)]">
        <SectionHeading
          title={experienceInfo.title}
          subtitle={experienceInfo.subtitle}
        />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <TimelineColumn
            icon={<BriefcaseBusiness size={20} />}
            title="Pengalaman Kerja"
          >
            {experienceInfo.work.map((item) => (
              <TimelineItem key={`${item.company}-${item.period}`}>
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">{item.company}</p>
                <p className="mt-1 text-xs text-foreground-subtle">{item.type}</p>
                <p className="mt-3 text-sm text-foreground-muted">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-2 py-1 text-[11px] text-foreground-subtle"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </TimelineItem>
            ))}
          </TimelineColumn>

          <TimelineColumn
            icon={<GraduationCap size={20} />}
            title="Pendidikan"
          >
            {experienceInfo.education.map((item) => (
              <TimelineItem key={`${item.institution}-${item.period}`}>
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-secondary">{item.institution}</p>
                <p className="mt-3 text-sm text-foreground-muted">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-xs text-foreground-muted"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </TimelineColumn>
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="relative border-l border-border pl-6 sm:pl-8">{children}</div>
    </div>
  );
}

function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <m.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative mb-10 last:mb-0"
    >
      <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary shadow-[0_0_0_3px_var(--primary-light)] sm:-left-[39px]" />
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-border-hover hover:shadow-[var(--shadow-md)]">
        {children}
      </div>
    </m.article>
  );
}
