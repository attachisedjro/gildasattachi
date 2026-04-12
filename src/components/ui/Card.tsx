import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <div
      className={cn(
        "p-6 md:p-8 bg-background-secondary rounded-card border border-border",
        hoverEffect && "hover:border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
