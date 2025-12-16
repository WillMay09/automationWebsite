"use client";


import React from "react"
import { motion } from "framer-motion";
import { cardVariants } from "@/src/app/hooks/motionVariants";

export type CardVariant = "light" | "dark"

interface UniversalCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  variant?: CardVariant;
  index: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean; // toggle hover effects
}

export function UniversalCard({
  icon: Icon,
  title,
  description,
  variant = "light",
  index = 0,
  children,
  className = "",
  onClick,
  interactive = true,
}: UniversalCardProps) {
  const isLight = variant === "light";
  
  return (
    <motion.div
      className={[
        "flex flex-col p-6 rounded-2xl h-full transition-all duration-200 overflow-hidden",
        isLight ? "bg-light border border-light" : "bg-app-dark border border-dark",
        interactive ? "hover:shadow-xl focus:shadow-xl hover-border-accent focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]" : "",
        className,
      ].join(" ")}
      role={onClick ? "button" : undefined}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      initial="offscreen"
      whileInView="onscreen"
      whileHover={interactive ? "hover" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={cardVariants}
    >
      {Icon && (
        <div className="w-14 h-14 gradient-accent-strong rounded-2xl flex justify-center items-center mb-6">
          <Icon className="text-primary-dark w-7 h-7" />
        </div>
      )}

      {title && (
        <h3 className={`mb-3 ${isLight ? "text-primary-light" : "text-primary-dark"}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={isLight ? "text-secondary-light" : "text-secondary-dark"}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}