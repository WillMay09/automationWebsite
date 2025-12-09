"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

interface SectionGridProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  bg?: "light" | "dark";
  columns: 2 | 3 | 4;
}

export function SectionGrid({
  title,
  subtitle,
  children,
  bg = "light",
  columns = 3,
}: SectionGridProps) {
  return (
    <section
      className={`py-20 px-6 ${bg === "light" ? "bg-white" : "bg-zinc-900"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.25 } }}
        >
          <h2
            className={`mb-4 ${
              bg === "light" ? "text-zinc-900" : "text-white"
            }`}
          >
            {title}
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              bg === "light" ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        <div
          className={`grid gap-8 ${columns === 2 && "grid-cols-2"} ${
            columns === 3 && "grid-cols-3"
          } ${columns === 4 && "grid-cols-4"}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
