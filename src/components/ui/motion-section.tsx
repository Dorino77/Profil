"use client";

import { m, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export function MotionSection({
  id,
  children,
  className,
  delay = 0,
}: MotionSectionProps) {
  return (
    <m.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      className={cn(className)}
    >
      {children}
    </m.section>
  );
}
