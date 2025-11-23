"use client";

import {
  Target,
  Shield,
  Clock,
  LineChart,
  Users,
  Workflow,
  Boxes,
  Cpu,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

type IconName = keyof typeof iconMap;

interface BusinessBenefitsProps {
  iconName: IconName;
  title: string;
  description: string;
  index: number;
}

const iconMap = {
  Target,
  Shield,
  Clock,
  LineChart,
  Users,
  Workflow,
  Boxes,
  Cpu,
  MessageSquare,
};

export function BusinessBenefitsCard({
  iconName,
  title,
  description,
  index,
}: BusinessBenefitsProps) {
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

export function BusinessBenfits() {
  const benefits: { iconName: IconName; title: string; description: string }[] =
    [
      {
        iconName: "Target",
        title: "Precision & Accuracy",
        description:
          "AI eliminates human error and delivers consistent, data-driven results across all operations.",
      },
      {
        iconName: "Clock",
        title: "24/7 Operation",
        description:
          "Automated systems work around the clock, ensuring your business never sleeps while maximizing output.",
      },
      {
        iconName: "LineChart",
        title: "Predictive Analytics",
        description:
          "Forecast trends, anticipate market shifts, and make proactive decisions before your competitors.",
      },
      {
        iconName: "Shield",
        title: "Risk Mitigation",
        description:
          "Identify potential threats, fraud, and anomalies in real-time with advanced AI monitoring.",
      },
      {
        iconName: "Users",
        title: "Enhanced Customer Experience",
        description:
          "Personalize every interaction, understand customer needs, and deliver exceptional service at scale.",
      },
      {
        iconName: "Workflow",
        title: "Process Automation",
        description:
          "Free your team from repetitive tasks and redirect talent toward strategic, high-value initiatives.",
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
            <BusinessBenefitsCard
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
