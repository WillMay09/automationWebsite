"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

interface SectionGridProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  bg?: "light" | "dark";
  columns: 1 | 2 | 3 | 4;
  className?: string;
}

export function SectionGrid({
  title,
  subtitle,
  children,
  bg = "light",
  columns = 3,
  className = "",
}: SectionGridProps) {
  ///after
  const bgClass = bg === "dark" ? "bg-zinc-900" : "bg-white";
  const gridCols =
    columns === 1
      ? "grid-col-1"
      : columns === 2
      ? "grid-col-2"
      : columns === 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <section className={`${bgClass} py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-10">
            <h2
              className={
                bg === "dark"
                  ? "text-white text-2xl md:text-3xl"
                  : "text-zinc-900 text-2xl md:text-3xl"
              }
            >
              {title}
            </h2>
            {subtitle && (
              <p className={bg === "dark" ? "text-zinc-400" : "text-zinc-600"}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={`grid gap-6 ${gridCols}`}>{children}</div>
      </div>
    </section>
  );
}
