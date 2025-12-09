"use client";

import { SectionGrid } from "./ui/SectionGrid";
import { UniversalCard } from "./ui/UniversalCard";
import { iconMap, IconName } from "./ui/icons";
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
