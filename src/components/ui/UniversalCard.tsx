"use client";


import React from "react"
import { motion } from "framer-motion";
import { cardVariants } from "@/src/app/hooks/motionVariants";

export type CardVariant = "light" | "dark";

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
  
  // Build glass morphism classes based on variant
  const glassClasses = isLight 
    ? "glass-card-light" 
    : "glass-card-dark";
  
  return (
    <motion.div
      className={[
        "group relative flex flex-col p-8 rounded-3xl h-full overflow-hidden transition-all duration-500",
        glassClasses,
        interactive ? "cursor-pointer" : "",
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
        <div className={[
          "flex h-14 w-14 items-center justify-center rounded-xl mb-8",
          isLight 
            ? "bg-accent text-primary-dark" 
            : "bg-accent text-primary-dark glow-accent-subtle"
        ].join(" ")}>
          <Icon className="w-7 h-7" strokeWidth={2} />
        </div>
      )}

      {title && (
        <h3 className={[
          "mb-3 text-xl font-medium tracking-tight",
          isLight ? "text-primary-light" : "text-primary-dark"
        ].join(" ")}>
          {title}
        </h3>
      )}
      
      {description && (
        <p className={[
          "text-lg font-light leading-relaxed",
          isLight ? "text-secondary-light" : "text-secondary-dark"
        ].join(" ")}>
          {description}
        </p>
      )}
      
      {children}
      
      {/* Ambient glow for dark variant only */}
      {!isLight && <div className="glass-glow-dark"></div>}
    </motion.div>
  );
}