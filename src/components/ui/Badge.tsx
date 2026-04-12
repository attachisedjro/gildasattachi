import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "outline", className }: BadgeProps) {
  const variants = {
    primary: "bg-accent text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent-light text-accent-dark",
    outline: "border border-border text-text-muted bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-bold rounded-badge whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
