import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-foreground-muted leading-relaxed",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 flex items-center gap-3",
          isCenter ? "justify-center" : "justify-start"
        )}
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
        <span className="inline-block h-1.5 w-1.5 rotate-45 border border-primary bg-primary/30" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
    </div>
  );
}
