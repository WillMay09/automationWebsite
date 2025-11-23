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

interface BusinessBenefitsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function BusinessBenefitsCard({
  icon,
  title,
  description,
  index,
}: BusinessBenefitsProps) {
  return (
    <motion.div
      className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-all duration-300 p-8 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, borderColor: "#f97316" }}
    >
      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center mx-auto mb-6">
        <Target className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-white mb-3"></h3>
      <p className="text-zinc-400"></p>
    </motion.div>
  );
}

export function BusinessBenfits() {
  const benefits = [
    {
      icon: Target,
      title: "Precision & Accuracy",
      description:
        "AI eliminates human error and delivers consistent, data-driven results across all operations.",
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description:
        "Automated systems work around the clock, ensuring your business never sleeps while maximizing output.",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description:
        "Forecast trends, anticipate market shifts, and make proactive decisions before your competitors.",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description:
        "Identify potential threats, fraud, and anomalies in real-time with advanced AI monitoring.",
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description:
        "Personalize every interaction, understand customer needs, and deliver exceptional service at scale.",
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Free your team from repetitive tasks and redirect talent toward strategic, high-value initiatives.",
    },
  ];
  return <></>;
}
