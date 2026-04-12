"use client";

import { StatNumber } from "@/components/ui/StatNumber";

const stats = [
  { value: 10, suffix: " ans+", label: "d'expérience en communications" },
  { value: 86, prefix: "+", suffix: " %", label: "croissance followers SOBEBRA" },
  { value: 50, prefix: "+", suffix: " %", label: "augmentation engagement Yellowbet" },
  { value: 95, suffix: " %", label: "fidélisation client SPIRO" },
];

export function KeyStats() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary border-t border-border/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <StatNumber
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              className="p-0 text-left items-start flex flex-col"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
