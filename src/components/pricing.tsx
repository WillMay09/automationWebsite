"use client";
import { useRef } from "react";
import { useNodeGraphAnimation } from "../app/hooks/useNodeGraphAnimation";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import  Link  from "next/link";
// Icons
const Zap = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3l1.545 4.635L18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L6 9.18l4.635-1.545L12 3zM6 17l.727 2.182L9 20l-2.182.727L6 23l-.727-2.182L3 20l2.182-.727L6 17z"
    />
  </svg>
);

// Reusable Step Card Component
interface StepCardProps {
  step: number;
  title: string;
  description: string;
  index: number;
}

function StepCard({ step, title, description, index }: StepCardProps) {
  return (
    <motion.div
      className="group relative z-10 cursor-pointer hover:shadow-xl hover-border-accent rounded-xl border border-dark bg-card-dark/20 p-5 overflow-hidden transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <p className="text-[10px] uppercase tracking-wider font-semibold text-accent mb-2">
        Step {step}
      </p>
      <h4 className="text-base font-medium text-primary-dark mb-2">{title}</h4>
      <p className="text-sm text-secondary-dark leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Main Pricing Section
export default function PricingSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraphAnimation(canvasRef);
  {
    /*Neural Network Background */
  }

  const steps = [
    {
      step: 1,
      title: "Diagnose",
      description:
        "We ask a few plain questions to see where the bottlenecks live and identify opportunities.",
    },
    {
      step: 2,
      title: "Scope",
      description:
        "We agree on one clear win, what it does, and exactly when you will have it ready.",
    },
    {
      step: 3,
      title: "Build",
      description:
        "We build the bot fast, plug it into the apps you already use, and show daily progress.",
    },
    {
      step: 4,
      title: "Optimize",
      description:
        "We launch, watch the numbers, and tweak the bot until your team is comfy running it solo.",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full py-32 overflow-hidden bg-[#050505] border-t border-dark"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-primary-dark mb-4">
            Pricing
          </h2>
          <p className="text-secondary-dark">
            Transparent value-based engagement
          </p>
        </div>

        {/* Pricing Card Container */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-dark bg-card-dark/30 p-2 shadow-2xl backdrop-blur-sm">
          {/* Inner Card Content */}
          <div className="rounded-2xl border border-dark bg-card-dark/50 px-8 py-10 sm:p-12 relative overflow-hidden">
            {/* Top Radial Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Card Header */}
            <div className="relative z-10 mb-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent glow-accent-subtle">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark tracking-tight mb-2">
                Custom AI Project
              </h3>
              <p className="text-lg font-medium text-accent mb-4">
                Double your ROI in 90 days—or it's free.
              </p>
              <p className="text-base text-secondary-dark leading-relaxed max-w-2xl">
                We learn how you work, then build the AI solutions that save
                time and grow revenue fast. No bloat, just results.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {steps.map((step, index) => (
                <StepCard
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  index={index}
                />
              ))}
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-dark bg-card-dark/20 p-4 sm:p-6">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card-dark/50 text-primary-dark">
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-dark">
                    Custom pricing
                  </p>
                  <p className="text-xs text-secondary-dark mt-0.5">
                    Based on value generated
                  </p>
                </div>
              </div>
              <Link href="/strategy-call">
                <Button
                  variant="accent"
                  className="w-full sm:w-auto glow-accent-strong hover:opacity-90 transition-opacity"
                >
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
