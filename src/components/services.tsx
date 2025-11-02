import { motion } from "motion/react";

import {
  Zap,
  Globe,
  Code2,
  Brain,
  BarChart3,
  Plug,
  Cloud,
  Sparkles,
  ArrowRight,
  Database,
} from "lucide-react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
function ProjectCard({ icon, title, description, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-zinc-900 rounded-2xl p-8 cursor-pointer overflow-hidden border border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whiteInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, borderColor: "#f97316" }}
    >
      {/*Gradient background on hover */}
      <motion.div classname="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Services() {
  return <></>;
}
