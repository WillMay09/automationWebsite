"use client";

import { motion } from "framer-motion";

import {
  Brain,
  TrendingUp,
  Zap,
  Target,
  Shield,
  Clock,
  DollarSign,
  Users,
  Cpu,
  LineChart,
  Boxes,
  MessageSquare,
  Eye,
  Code,
  Database,
  Workflow,
  ChartBar,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type IconName = keyof typeof iconMap;

const iconMap = {
  Code,
  Boxes,
  TrendingUp,
  Shield,
  DollarSign,
  Zap,
};

interface SoftwareBenefitsProps {
  iconName: IconName;
  title: string;
  description: string;
  index: number;
}

function CustomSoftwareCard({
  iconName,
  title,
  description,
  index,
}: SoftwareBenefitsProps) {
  const Icon = iconMap[iconName];
  return (
    <motion.div
      className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-all duration-300 p-8 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, borderColor: "#f97316" }}
    >
      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex justify-center items-center mb-6">
        {Icon ? (
          <Icon className="text-white w-7 h-7" />
        ) : (
          <Cpu className="text-white w-7 h-7" />
        )}
      </div>
      <h3 className="text-white mb-3">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
}

export function CustomSoftware() {
  const benefits: { iconName: IconName; title: string; description: string }[] =
    [
      {
        iconName: "Code",
        title: "Tailored Solutions",
        description:
          "Off-the-shelf software forces you to adapt. Custom solutions adapt to you, fitting your exact workflows and requirements.",
      },
      {
        iconName: "Boxes",
        title: "Seamless Integration",
        description:
          "Connect all your systems, databases, and tools into a unified ecosystem without compatibility issues.",
      },
      {
        iconName: "TrendingUp",
        title: "Scalability",
        description:
          "Grow without limits. Custom software scales with your business, adding features and capacity as needed.",
      },
      {
        iconName: "Shield",
        title: "Enhanced Security",
        description:
          "Protect sensitive data with security measures designed specifically for your business and industry requirements.",
      },
      {
        iconName: "DollarSign",
        title: "Long-term ROI",
        description:
          "Eliminate recurring licensing fees and reduce technical debt while increasing operational efficiency.",
      },
      {
        iconName: "Zap",
        title: "Competitive Edge",
        description:
          "Stand out with unique capabilities that competitors using generic solutions simply cannot replicate.",
      },
    ];
  return (
    <section className="bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-4">
            Transform Every Aspect of Your Business
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            AI delivers measurable impact across all business functions
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <CustomSoftwareCard
              key={benefit.iconName || index}
              iconName={benefit.iconName}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
