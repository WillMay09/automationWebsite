"use client";

import { Zap, TrendingUp, DollarSign, Users, Sparkles } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type IconName = keyof typeof iconMap;

interface AdvantageCardProps {
  iconName: IconName;
  description: string;
  index: number;
}

const iconMap = {
  Zap,
  TrendingUp,
  Users,
  DollarSign,
};

function AdvantageCard({ iconName, description, index }: AdvantageCardProps) {
  //mapping string to component
  const IconToRender = iconMap[iconName];
  console.log(IconToRender);
  return (
    <motion.div
      className="group relative bg-light rounded-2xl p-8 cursor-pointer overflow-hidden border border-light hover:shadow-xl text-center hover-border-accent transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="w-16 h-16 gradient-accent-strong rounded-2xl flex items-center justify-center mx-auto mb-6">
        {IconToRender ? (
          <IconToRender className="text-primary-dark w-8 h-8" />
        ) : (
          <Sparkles className="text-primary-dark w-8 h-8" />
        )}
        {/* fallback icon */}
      </div>
      <p className="text-secondary-light mb-2">{description}</p>
    </motion.div>
  );
}

export function Advantage() {
  const stats: { iconName: IconName; description: string }[] = [
    { iconName: "Zap", description: "Increase in Productivity" },
    { iconName: "TrendingUp", description: "Faster Decision Making" },
    { iconName: "DollarSign", description: "Cost Reduction" },
    { iconName: "Users", description: "Customer Satisfaction" },
  ];

  return (
    <section className="bg-light py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary-light mb-4">The AI Advantage in Numbers</h2>
          <p className="text-secondary-light text-xl max-w-2xl mx-auto">
            Results from businesses that embraced AI transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AdvantageCard
              key={stat.iconName || index}
              iconName={stat.iconName}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}