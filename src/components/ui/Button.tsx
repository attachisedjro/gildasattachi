import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white hover:bg-secondary transition-colors duration-500",
      secondary: "bg-secondary text-white hover:bg-accent transition-colors duration-500",
      ghost: "bg-transparent text-text-secondary hover:bg-accent/5 transition-colors",
      outline: "bg-transparent border border-border text-accent hover:bg-accent hover:text-white transition-all duration-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold",
      md: "px-8 py-4 text-xs uppercase tracking-[0.3em] font-bold",
      lg: "px-10 py-5 text-sm uppercase tracking-[0.4em] font-bold",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-btn transition-all active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(props.children)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const child = props.children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ...props,
        className: cn(classes, child.props.className),
        ref,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
