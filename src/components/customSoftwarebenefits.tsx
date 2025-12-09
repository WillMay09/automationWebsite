"use client";

import { motion } from "framer-motion";
import { UniversalCard } from "./ui/UniversalCard";
import { SectionGrid } from "./ui/SectionGrid";
import { iconMap, IconName } from "./ui/icons";

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
    <SectionGrid
      title="Transform Every Aspect of Your Business"
      subtitle="AI delivers measurable impact across all business functions"
      bg="dark"
      columns={3}
    >
      {benefits.map((benefit, index) => (
        <UniversalCard
          key={index}
          icon={iconMap[benefit.iconName]}
          title={benefit.title}
          description={benefit.description}
          variant="dark"
          index={index}
        />
      ))}
    </SectionGrid>
  );
}
