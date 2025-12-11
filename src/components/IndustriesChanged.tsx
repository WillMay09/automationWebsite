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
      subtitle="See how businesses across sectors are leveraging AI to outperform
              competitors"
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
          {/* CUSTOM CHILD CONTENT (instead of icon/title/description props) */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full" />
            <h3 className="text-zinc-900">{industry.name}</h3>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <p className="text-zinc-900">{industry.impact}</p>
          </div>
          {industry.use_cases.map((uc) => (
            <div key={uc} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span className="text-zinc-600 text-sm">{uc}</span>
            </div>
          ))}
        </UniversalCard>
      ))}
    </SectionGrid>
  );
}
