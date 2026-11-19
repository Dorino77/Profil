"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Laptop,
  AudioWaveform,
  X,
  Check,
  Star,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionSection } from "@/components/ui/motion-section";
import { projectsInfo, type ProjectItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const toneGradients: Record<ProjectItem["tone"], string> = {
  gold: "bg-gradient-to-br from-[#B08D4A]/20 via-[#E3C285]/10 to-[#B08D4A]/20",
  copper: "bg-gradient-to-br from-[#8F5A2E]/20 via-[#B08D4A]/10 to-[#8F5A2E]/20",
  champagne: "bg-gradient-to-br from-[#F5E9D3]/30 via-[#E8DDCA]/15 to-[#F5E9D3]/30",
  emerald: "bg-gradient-to-br from-[#2F6B4A]/20 via-[#5FB38E]/10 to-[#2F6B4A]/20",
  "rose-gold": "bg-gradient-to-br from-[#C58A5B]/20 via-[#D4AF6A]/10 to-[#C58A5B]/20",
};

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectIcon({ name, size = 32 }: { name: string; size?: number }) {
  switch (name) {
    case "Layers":
      return <Layers size={size} />;
    case "Sparkles":
      return <Sparkles size={size} />;
    case "TrendingUp":
      return <TrendingUp size={size} />;
    case "Laptop":
      return <Laptop size={size} />;
    case "AudioWaveform":
      return <AudioWaveform size={size} />;
    default:
      return <Layers size={size} />;
  }
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === "Semua"
    ? projectsInfo.projects
    : projectsInfo.projects.filter((p) => p.category === activeCategory);

  return (
    <MotionSection id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-[var(--container-max)]">
        <SectionHeading
          title={projectsInfo.title}
          subtitle={projectsInfo.subtitle}
        />

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {projectsInfo.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-surface text-foreground-muted hover:bg-surface-hover hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <m.div
          layout
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface shadow-xs transition-all duration-[var(--duration-normal)] hover:-translate-y-1 hover:border-border-hover hover:shadow-[var(--shadow-lg)]"
              >
                {/* Visual Mockup Preview */}
                <div
                  className={cn(
                    "relative flex aspect-[16/10] min-h-52 w-full flex-col justify-between overflow-hidden border-b border-border p-4",
                    toneGradients[project.tone]
                  )}
                >
                  {project.previewImage && (
                    <>
                      <Image
                        src={project.previewImage}
                        alt={`Preview ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-[var(--duration-normal)] group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
                    </>
                  )}

                  {/* Browser top chrome dots */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-amber-500 dark:text-amber-400">
                          <Star size={10} className="fill-current" />
                          Unggulan
                        </span>
                      )}
                      <span className="rounded-full bg-surface/80 px-2.5 py-0.5 text-[10px] font-medium text-foreground-muted backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Centered Decorative Icon & Visual Pattern */}
                  <div className="flex flex-1 w-full items-center justify-center my-2 min-h-0">
                    {project.previewImage ? null : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface/85 text-primary shadow-xs backdrop-blur-xs transition-transform duration-[var(--duration-normal)] group-hover:scale-110">
                        <ProjectIcon name={project.iconName} size={28} />
                      </div>
                    )}
                  </div>

                  {/* Bottom preview metadata banner */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-foreground-muted">
                    <span className="font-mono">{project.id}.app</span>
                    {project.metric && (
                      <span className="rounded-md bg-surface/80 px-2 py-0.5 font-medium text-foreground backdrop-blur-xs">
                        {project.metric}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-surface-hover/70 px-2 py-0.5 text-[11px] font-medium text-foreground-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="mt-auto pt-6 flex items-center justify-between gap-2 border-t border-border/60">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      <Info size={14} />
                      Detail Proyek
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Lihat kode sumber ${project.title} di GitHub`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface text-foreground-muted transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-foreground"
                        >
                          <GithubIcon size={15} />
                        </a>
                      ) : (
                        <span
                          aria-disabled="true"
                          title="Private repository"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface text-foreground-subtle cursor-not-allowed opacity-50"
                        >
                          <GithubIcon size={15} />
                        </span>
                      )}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Kunjungi live demo ${project.title}`}
                          className="inline-flex items-center gap-1 rounded-[var(--radius-md)] bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                        >
                          <span>Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span
                          aria-disabled="true"
                          title="Segera hadir"
                          className="inline-flex items-center gap-1 rounded-[var(--radius-md)] bg-primary/50 px-3 py-1.5 text-xs font-medium text-primary-foreground cursor-not-allowed opacity-50"
                        >
                          <span>Demo</span>
                          <ArrowUpRight size={13} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              onClick={() => setSelectedProject(null)}
            >
              <m.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-2xl)] border border-border bg-surface p-6 shadow-2xl md:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Tutup detail proyek"
                  className="absolute right-5 top-5 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  <X size={16} />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {selectedProject.category}
                  </span>
                  {selectedProject.metric && (
                    <span className="rounded-full border border-border bg-surface-hover px-3 py-1 text-xs font-medium text-foreground-muted">
                      {selectedProject.metric}
                    </span>
                  )}
                </div>

                <h3
                  id="modal-project-title"
                  className="mt-3 text-2xl font-bold text-foreground"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  {selectedProject.longDescription}
                </p>

                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                    Fitur & Sorotan Utama
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {selectedProject.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                          <Check size={11} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[var(--radius-md)] border border-border bg-surface-hover px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-6">
                  {selectedProject.githubUrl ? (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
                    >
                      <GithubIcon size={16} />
                      <span>Lihat di GitHub</span>
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Private repository"
                      className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground-subtle cursor-not-allowed opacity-50"
                    >
                      <GithubIcon size={16} />
                      <span>Lihat di GitHub</span>
                    </span>
                  )}
                  {selectedProject.demoUrl ? (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover"
                    >
                      <span>Kunjungi Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Segera hadir"
                      className="inline-flex items-center gap-2 rounded-[var(--radius-lg)] bg-primary/50 px-5 py-2.5 text-sm font-medium text-primary-foreground cursor-not-allowed opacity-50"
                    >
                      <span>Kunjungi Live Demo</span>
                      <ExternalLink size={15} />
                    </span>
                  )}
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}