import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm active:bg-primary",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-hover",
  outline:
    "border border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary active:bg-primary/15",
  ghost: "text-foreground-muted hover:bg-surface-hover hover:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[36px] px-3.5 py-1.5 text-xs rounded-[var(--radius-md)] tracking-wide font-medium",
  md: "min-h-[44px] px-5 py-2.5 text-sm rounded-[var(--radius-lg)] tracking-wide font-medium",
  lg: "min-h-[48px] px-7 py-3 text-base rounded-[var(--radius-xl)] tracking-wide font-medium",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center font-medium",
          "transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:scale-[0.98]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
