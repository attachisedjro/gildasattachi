import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16 md:mb-24", centered && "text-center", className)}>
      {label && (
        <span className={cn(
          "inline-block text-secondary font-bold tracking-[0.3em] uppercase mb-6 text-[10px]",
          centered && "mx-auto"
        )}>
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-8 leading-[1.1] tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-body",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
