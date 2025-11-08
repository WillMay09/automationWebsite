import { motion } from "framer-motion";

import {
  Lightbulb,
  Cog,
  Rocket,
  BarChart3,
  Workflow,
  TrendingUp,
} from "lucide-react";

interface RoadmapProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function RoadmapCard({ icon, step, title, description, visual }: RoadmapProps) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-2xl p-8 cursor-pointer"
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
    >
      {/*Header*/}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <span className="text-orange-500">Step {step}</span>
        <h3 className="text-white mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>

      {/*Visual*/}
      <motion.div
        className="bg-zinc-800/50 rounded-xl p-6 min-h-[280px] flex items-center justify-center"
        whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.8" }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
}

export function RoadMap() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/*Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-zinc-900 mb-4">How we Work</h2>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto">
            Our 3 step process to transform your business with AI-powered
            solutions
          </p>
        </div>
      </div>
    </section>
  );
}
