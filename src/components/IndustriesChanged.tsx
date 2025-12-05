"use client";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
interface IndustriesChangedProps {
  name: string;
  impact: string;
  use_cases: string[];
  index: number;
}

function IndustriesChangedCard({
  name,
  impact,
  use_cases,
  index,
}: IndustriesChangedProps) {
  return (
    <motion.div
      className="flex flex-col p-6 rounded-2xl bg-white border border-zinc-200 h-full hover:border-amber-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, borderColor: "#f97316" }}
    >
      {" "}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full" />
        <h3 className="text-zinc-900">{name}</h3>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <p className="text-zinc-900">{impact}</p>
      </div>
      <div className="space-y-2">
        {use_cases.map((use_case, index) => (
          <div key={use_case} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span className="text-zinc-600 text-sm">{use_case}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

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
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>AI is transforming Every Industry</h2>
            <p>
              See how businesses across sectors are leveraging AI to outperform
              competitors
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustriesChangedCard
                key={industry.name || index}
                name={industry.name}
                impact={industry.impact}
                use_cases={industry.use_cases}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
