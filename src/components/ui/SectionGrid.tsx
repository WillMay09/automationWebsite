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
  // Use glassmorphism section backgrounds
  const bgClass = bg === "dark" ? "section-dark" : "section-light";
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
    <section className={`relative w-full ${bgClass} py-24 overflow-hidden ${className}`}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <div className={`${title && subtitle ? 'mx-auto max-w-3xl text-center mb-20' : 'text-center mb-16'}`}>
            <h2 className={`${titleClass} text-4xl font-medium tracking-tight sm:text-5xl mb-4`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`${subtitleClass} text-xl font-light mt-6`}>
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