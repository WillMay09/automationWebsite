"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Users,
  Building,
  Building2,
  Bot,
  Code2,
  Server,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { form } from "framer-motion/client";
import { useQualifiedLeadSignup } from "../app/hooks/qualifiedLeadSignup";

// Option Card Component
interface OptionCardProps {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
}

function OptionCard({
  icon: Icon,
  title,
  subtitle,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <motion.div
      className={`
        group relative flex items-center gap-4 rounded-xl border p-4 cursor-pointer
        transition-all duration-300
        ${
          selected
            ? "glass-card-dark border-accent shadow-lg shadow-accent/20"
            : "glass-card-dark border-dark hover:bg-card-dark/60 hover-border-accent"
        }
      `}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`
        flex h-10 w-10 shrink-0 items-center justify-center rounded-lg 
        transition-colors
        ${
          selected
            ? "bg-accent text-primary-dark"
            : "bg-card-dark text-secondary-dark group-hover:text-primary-dark"
        }
      `}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex flex-col flex-1">
        <span
          className={`font-medium ${
            selected
              ? "text-primary-dark"
              : "text-secondary-dark group-hover:text-primary-dark"
          }`}
        >
          {title}
        </span>
        {subtitle && (
          <span className="text-xs text-secondary-dark">{subtitle}</span>
        )}
      </div>

      <div
        className={`
        absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300
        ${selected ? "opacity-100 scale-100" : "opacity-0 scale-50"}
      `}
      >
        <CheckCircle2 className="h-5 w-5 text-accent fill-accent/20" />
      </div>
    </motion.div>
  );
}

// Urgency Option Component
interface UrgencyOptionProps {
  color: "red" | "yellow" | "blue";
  label: string;
  selected: boolean;
  onClick: () => void;
}

function UrgencyOption({
  color,
  label,
  selected,
  onClick,
}: UrgencyOptionProps) {
  const colorClasses = {
    red: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
  };

  return (
    <motion.div
      className={`
        group relative flex items-center justify-between rounded-xl border p-4 cursor-pointer
        transition-all duration-300
        ${
          selected
            ? "glass-card-dark border-accent shadow-lg shadow-accent/20"
            : "glass-card-dark border-dark hover:bg-card-dark/60 hover-border-accent"
        }
      `}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-4">
        <div className={`h-2 w-2 rounded-full ${colorClasses[color]}`}></div>
        <span
          className={`font-medium ${
            selected
              ? "text-primary-dark"
              : "text-secondary-dark group-hover:text-primary-dark"
          }`}
        >
          {label}
        </span>
      </div>

      <div
        className={`
        transition-all duration-300
        ${selected ? "opacity-100 scale-100" : "opacity-0 scale-50"}
      `}
      >
        <CheckCircle2 className="h-5 w-5 text-accent fill-accent/20" />
      </div>
    </motion.div>
  );
}

export default function QualifyPage() {
  const { formData, setFormData, submitFormData, status } =
    useQualifiedLeadSignup();

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    submitFormData();
  };

  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass-navbar">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl gradient-accent-strong glow-accent-subtle group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] transition-all">
              <span className="font-semibold text-primary-dark tracking-tight text-xl">
                AI
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium tracking-tight text-primary-dark leading-none">
                SIGNALSTACK
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-secondary-dark hover-text-accent transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full relative pt-32 pb-24">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[#030303] -z-20"></div>
        <div className="fixed top-[-20%] left-[50%] -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
        <div className="fixed inset-0 bg-grid-light opacity-20 pointer-events-none -z-10"></div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-dark bg-card-dark/50 px-3 py-1 mb-6 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-medium text-muted-dark uppercase tracking-wider">
                Discovery Phase
              </span>
            </div>

            <h1 className="text-4xl font-medium tracking-tight text-primary-dark sm:text-5xl mb-4">
              Let's see if we're a match
            </h1>

            <p className="text-lg text-secondary-dark font-light max-w-xl mx-auto">
              Help us understand your context so we can make our first
              conversation meaningful.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.form
            className="glass-card-dark rounded-3xl p-8 md:p-12 space-y-12"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name and Email */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4 items-start justify-between">
                <label className="text-lg font-medium text-primary-dark">
                  Name and Email Address
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-xl p-4 bg-card-dark/50 border border-dark text-primary-dark placeholder:text-secondary-dark backdrop-blur-sm focus:bg-card-dark focus-border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl p-4 bg-card-dark/50 border border-dark text-primary-dark placeholder:text-secondary-dark backdrop-blur-sm focus:bg-card-dark focus-border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Question 1 */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <label className="text-lg font-medium text-primary-dark">
                  1. What best describes you or your business?
                </label>
                <span className="text-xs text-secondary-dark font-mono mt-1">
                  SELECT ONE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionCard
                  icon={User}
                  title="Solo founder"
                  subtitle="Just you"
                  selected={formData.teamSize === "solo"}
                  onClick={() => updateFormData("teamSize", "solo")}
                />
                <OptionCard
                  icon={Users}
                  title="Startup team"
                  subtitle="2–10 people"
                  selected={formData.teamSize === "startup"}
                  onClick={() => updateFormData("teamSize", "startup")}
                />
                <OptionCard
                  icon={Building}
                  title="Small business"
                  subtitle="10–50 people"
                  selected={formData.teamSize === "smallbiz"}
                  onClick={() => updateFormData("teamSize", "smallbiz")}
                />
                <OptionCard
                  icon={Building2}
                  title="Enterprise"
                  subtitle="Ops team"
                  selected={formData.teamSize === "enterprise"}
                  onClick={() => updateFormData("teamSize", "enterprise")}
                />
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <label className="text-lg font-medium text-primary-dark">
                  2. What's the primary problem you want help with?
                </label>
                <span className="text-xs text-secondary-dark font-mono mt-1">
                  FOCUS AREA
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptionCard
                  icon={Bot}
                  title="Automation / AI"
                  selected={formData.focusArea === "automation"}
                  onClick={() => updateFormData("focusArea", "automation")}
                />
                <OptionCard
                  icon={Code2}
                  title="Web / Software Dev"
                  selected={formData.focusArea === "webdev"}
                  onClick={() => updateFormData("focusArea", "webdev")}
                />

                <OptionCard
                  icon={Server}
                  title="Infrastructure"
                  selected={formData.focusArea === "infrastructure"}
                  onClick={() => updateFormData("focusArea", "infrastructure")}
                />

                <OptionCard
                  icon={HelpCircle}
                  title="I'm not sure yet"
                  selected={formData.focusArea === "not_sure"}
                  onClick={() => updateFormData("focusArea", "not_sure")}
                />
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <label className="text-lg font-medium text-primary-dark">
                  3. What's the urgency?
                </label>
                <span className="text-xs text-secondary-dark font-mono mt-1">
                  TIMELINE
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <UrgencyOption
                  color="red"
                  label="Actively looking to solve this now"
                  selected={formData.urgency === "now"}
                  onClick={() => updateFormData("urgency", "now")}
                />
                <UrgencyOption
                  color="yellow"
                  label="Planning for next 1–3 months"
                  selected={formData.urgency === "1-3_months"}
                  onClick={() => updateFormData("urgency", "1-3_months")}
                />
                <UrgencyOption
                  color="blue"
                  label="Just exploring options"
                  selected={formData.urgency === "exploring"}
                  onClick={() => updateFormData("urgency", "exploring")}
                />
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <label
                  className="text-lg font-medium text-primary-dark"
                  htmlFor="win-def"
                >
                  4. What would make this call a win for you?
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="win-def"
                  rows={4}
                  className="w-full rounded-xl p-4 bg-card-dark/50 border border-dark text-primary-dark placeholder:text-secondary-dark backdrop-blur-sm focus:bg-card-dark focus-border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Tell us what a successful outcome looks like..."
                  value={formData.winDefinition}
                  onChange={(e) =>
                    updateFormData("winDefinition", e.target.value)
                  }
                />
                <div className="absolute bottom-4 right-4 text-xs text-secondary-dark">
                  Short text
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-dark"></div>

            {/* Submit */}
            <div className="flex flex-col items-center gap-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="group w-full bg-light text-primary-light hover:bg-light/80 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-secondary-dark">
                No commitment required.
              </p>
            </div>
          </motion.form>
        </div>
      </main>
    </div>
  );
}
