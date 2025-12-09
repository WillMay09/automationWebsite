"use client";

import { motion } from "framer-motion";

interface UniversalCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  variant?: "light" | "dark";
  index: number;
  children?: React.ReactNode;
}

export function UniversalCard({
  icon: Icon,
  title,
  description,
  variant = "light",
  index = 0,
  children,
}: UniversalCardProps) {
  const isLight = variant === "light";
  return (
    <motion.div
      className={`flex flex-col p-8 rounded-xl h-full transition-all duration-300 overflow-hidden cursor-pointer
        ${
          isLight
            ? "bg-white border border-x-zinc-200 hover:border-amber-500"
            : "bg-zinc-800 border border-zinc-700 hover:border-orange-500"
        }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      {Icon && (
        <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex justify-center items-center mb-6">
          <Icon className="text-white w-7 h-7" />
        </div>
      )}

      {title && (
        <h3 className={`mb-3 ${isLight ? "text-black" : "text-white"}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={isLight ? "text-zinc-600" : "text-zinc-400"}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
