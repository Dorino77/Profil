"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 24]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[9/10] w-full max-w-[420px] lg:max-w-[480px]"
    >
      {/* Background radial gold spotlight */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full blur-2xl opacity-60 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--primary-light, rgba(212, 175, 106, 0.25)) 0%, transparent 70%)",
        }}
      />

      {/* Decorative gold outline frame */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/40 dark:border-primary/30" />

      {/* Image container */}
      <m.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-background/50 shadow-xl"
      >
        <Image
          src="/fotoptfl.png"
          alt="Foto profil Aldorino Sofian" // TODO(isi): ganti ke profile.webp
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 480px"
          className="object-cover object-bottom"
        />
      </m.div>
    </div>
  );
}
