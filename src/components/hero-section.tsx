"use client";

import { m, type Variants } from "framer-motion";
import { ArrowRight, Mail, Sparkles, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { HeroPortrait } from "@/components/hero-portrait";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background ambient decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Availability Badge */}
            <m.div variants={itemVariants} className="mb-6 inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span>{personalInfo.availabilityText}</span>
              </div>
            </m.div>

            {/* Role & Name */}
            <m.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider text-primary uppercase">
                <Sparkles size={16} />
                {personalInfo.role}
              </span>
              <h1 className="mt-2 text-foreground font-extrabold tracking-tight">
                {personalInfo.name}
              </h1>
            </m.div>

            {/* Headline */}
            <m.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-foreground-muted"
            >
              {personalInfo.headline}
            </m.h2>

            {/* Bio Description */}
            <m.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base sm:text-lg text-foreground-muted"
            >
              {personalInfo.bio}
            </m.p>

            {/* Location */}
            <m.div
              variants={itemVariants}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-foreground-subtle"
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </m.div>

            {/* Action Buttons */}
            <m.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="gap-2"
              >
                <span>Lihat Proyek</span>
                <ArrowRight size={16} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="gap-2"
              >
                <Mail size={16} />
                <span>Hubungi Saya</span>
              </Button>
            </m.div>
          </m.div>

          {/* Right Column: Portrait */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <HeroPortrait />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
