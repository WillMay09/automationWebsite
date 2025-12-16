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
  const bgClass = bg === "dark" ? "bg-app-dark" : "bg-light";
  const titleClass = bg === "dark" ? "text-primary-dark" : "text-primary-light";
  const subtitleClass = bg === "dark" ? "text-secondary-dark" : "text-secondary-light";
  
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  
  return (
    <section className={`${bgClass} py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-10">
            <h2 className={`${titleClass} text-2xl md:text-3xl`}>
              {title}
            </h2>
            {subtitle && (
              <p className={subtitleClass}>
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