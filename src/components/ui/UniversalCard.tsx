import { motion } from "framer-motion";

interface UniversalCardProps {
  icon: React.ElementType;
  title?: string;
  description: string;
  variant?: "light" | "dark";
  index: number;
}

export function UniversalCard({
  icon: Icon,
  title,
  description,
  variant = "dark",
  index,
}: UniversalCardProps) {
  const isLight = variant === "light";

  return (
    <motion.div
      className={`rounded-xl overflow-hidden p-8 cursor-pointer border transition-all duration-300
        ${
          isLight
            ? "bg-white border-x-zinc-200 hover:border-amber-500"
            : "bg-zinc-800 border-zinc-700 hover:border-orange-500"
        }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex justify-center items-center mb-6">
        <Icon className="text-white w-7 h-7" />
      </div>
      {title && (
        <h3 className={`mb-3 ${isLight ? "text-black" : "text-white"}`}>
          {title}
        </h3>
      )}

      <p className={isLight ? "text-zinc-600" : "text-zinc-400"}>
        {description}
      </p>
    </motion.div>
  );
}
