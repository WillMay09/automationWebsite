"use client";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { SectionGrid } from "./ui/SectionGrid";
import { UniversalCard } from "./ui/UniversalCard";

export function IndustriesChanged() {
  const industries = [
    {
      name: "Healthcare",
      impact: "Diagnostic accuracy improved by 60%",
      use_cases: [
        "Patient diagnosis",
        "Treatment optimization",
        "Administrative automation",
      ],
    },
    {
      name: "Finance",
      impact: "Fraud detection rate increased to 99.7%",
      use_cases: [
        "Risk assessment",
        "Algorithmic trading",
        "Customer insights",
      ],
    },
    {
      name: "Retail",
      impact: "Inventory costs reduced by 45%",
      use_cases: [
        "Demand forecasting",
        "Personalization",
        "Supply chain optimization",
      ],
    },
    {
      name: "Manufacturing",
      impact: "Production efficiency up 40%",
      use_cases: [
        "Predictive maintenance",
        "Quality control",
        "Process optimization",
      ],
    },
    {
      name: "Logistics",
      impact: "Delivery times cut by 35%",
      use_cases: [
        "Route optimization",
        "Demand planning",
        "Warehouse automation",
      ],
    },
    {
      name: "Marketing",
      impact: "Campaign ROI increased 3.2x",
      use_cases: [
        "Customer segmentation",
        "Content optimization",
        "Attribution modeling",
      ],
    },
  ];
  
  return (
    <SectionGrid
      title="AI is transforming Every Industry"
      subtitle="See how businesses across sectors are leveraging AI to outperform competitors"
      bg="light"
      columns={3}
    >
      {industries.map((industry, index) => (
        <UniversalCard
          key={index}
          index={index}
          variant="light"
          interactive={true}
        >
          {/* Header with status dot */}
          <div className="flex items-center gap-3 mb-8">
            <div className="status-dot" />
            <h3 className="text-lg font-medium text-primary-light tracking-tight">
              {industry.name}
            </h3>
          </div>

          {/* Impact metric */}
          <div className="mb-8 flex items-start gap-2 text-sm font-medium text-success">
            <TrendingUp className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{industry.impact}</span>
          </div>

          {/* Use cases list */}
          <ul className="space-y-3">
            {industry.use_cases.map((uc) => (
              <li key={uc} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-secondary-light">{uc}</span>
              </li>
            ))}
          </ul>
        </UniversalCard>
      ))}
    </SectionGrid>
  );
}