import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-border bg-surface p-6",
        "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]",
        hover &&
          "[@media(hover:hover)]:hover:border-primary/40 [@media(hover:hover)]:hover:shadow-[var(--shadow-md)] [@media(hover:hover)]:hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
