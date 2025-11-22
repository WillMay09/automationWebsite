import { Zap, TrendingUp, DollarSign, Users, Sparkles } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AdvantageCardProps {
  iconName: string;
  description: string;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap />,
  TrendingUp: <TrendingUp />,
  Users: <Users />,
  Sparkles: <Sparkles />,
};

function AdvantageCard({ iconName, description, index }: AdvantageCardProps) {
  const IconToRender = iconMap[iconName.toLowerCase()];
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-8 cursor-pointer overflow-hidden border border-zinc-200 hover:shadow-xl text-center hover:border-amber-500 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="w-16 h-16 bg-gradient-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
        {IconToRender ?? <Sparkles size={32} />}
        {/* fallback icon */}
      </div>
      <p className="text-zinc-600 mb-2">{description}</p>
    </motion.div>
  );
}

export function Advantage() {
  const stats = [
    { iconName: "Zap", description: "Increase in Productivity" },
    { iconName: "TrendingUp", description: "Faster Decision Making" },
    { iconName: "DollarSign", description: "Cost Reduction" },
    { iconName: "Users", description: "Customer Satisfaction" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-zinc-900 mb-4">The AI Advantage in Numbers</h2>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto">
            Results from businesses that embraced AI transformation
          </p>
        </motion.div>
        {stats.map((stat, index) => (
          <AdvantageCard
            key={stat.iconName || index}
            iconName={stat.iconName}
            description={stat.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
