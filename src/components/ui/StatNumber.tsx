"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StatNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  className?: string;
}

export function StatNumber({ value, suffix, prefix, label, decimals = 0, className }: StatNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("p-8", className)}>
      <div className="font-mono text-6xl md:text-8xl font-bold text-accent mb-4 tracking-tighter">
        {isInView ? (
          <CountUp
            start={0}
            end={value}
            duration={3}
            separator=" "
            decimals={decimals}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          <span>{prefix}0{suffix}</span>
        )}
      </div>
      <p className="text-[10px] md:text-[11px] font-bold text-text-muted uppercase tracking-[0.3em]">
        {label}
      </p>
    </div>
  );
}
