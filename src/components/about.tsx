"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, ArrowRight } from "lucide-react";

import { SectionGrid } from "@/src/components/ui/SectionGrid";
import { UniversalCard } from "@/src/components/ui/UniversalCard";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Radical Transparency",
      description: "AI shouldn't be a black box. We prioritize explainability and open documentation in every system we architect.",
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "We build tools to augment human intelligence, not replace it. User experience is as critical as algorithm efficiency.",
    },
    {
      icon: Zap,
      title: "Velocity & Iteration",
      description: "The landscape changes daily. We ship fast, measure impact, and iterate relentlessly to keep you ahead of the curve.",
    },
  ];

  const stats = [
    { value: "500+", label: "Deployments" },
    { value: "98%", label: "Efficiency Gain" },
    { value: "24/7", label: "Autonomous" },
  ];

  return (
    <main className="w-full relative pt-32">
      {/* Background Ambient Lights */}
      <div className="fixed inset-0 bg-[#030303] -z-20"></div>
      <div className="fixed top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px] -z-10"></div>
      <div className="fixed inset-0 bg-grid-light opacity-20 pointer-events-none -z-10"></div>

      {/* Header Section */}
      <section className="relative w-full py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-dark bg-card-dark/50 px-4 py-1.5 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            <span className="text-sm font-medium text-muted-dark">Established 2024</span>
          </motion.div>

          <motion.h1
            className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-primary-dark lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We architect the <br />
            <span className="gradient-accent-strong bg-clip-text text-transparent">
              Cognitive Future
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-xl font-light leading-relaxed text-secondary-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are a collective of researchers, engineers, and dreamers dedicated to bridging the gap between human potential and artificial intelligence.
          </motion.p>
        </div>
      </section>

      {/* The Story / Mission */}
      <section className="relative w-full py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-medium tracking-tight text-primary-dark sm:text-4xl">
                More than code. <br />
                We build understanding.
              </h2>
              <div className="h-1 w-20 rounded-full gradient-accent-strong"></div>
            </div>

            <div className="space-y-6 text-lg font-light leading-relaxed text-secondary-dark">
              <p>
                In a world rapidly accelerated by automation, complexity often outpaces clarity. At SignalStack, we believe that true intelligence isn't just about processing power—it's about relevance, context, and seamless integration.
              </p>
              <p>
                We don't just ship software. We engineer autonomous systems that learn from your data, adapt to your workflows, and evolve with your business. Our approach combines rigorous academic research with pragmatic engineering to deliver solutions that are robust, scalable, and ethically grounded.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-4 flex items-center gap-8 border-t border-dark pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="block text-3xl font-semibold text-primary-dark tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-secondary-dark uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Abstract */}
          <motion.div
            className="relative h-full min-h-[400px] w-full rounded-3xl glass-card-dark overflow-hidden flex items-center justify-center group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 gradient-accent-soft opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent/20 blur-[80px] animate-pulse"></div>

            {/* Floating Cards Grid */}
            <div className="relative grid grid-cols-2 gap-4 rotate-[-12deg] scale-110 opacity-80 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-100">
              <div className="h-32 w-32 rounded-2xl glass-card-dark border-dark backdrop-blur-md"></div>
              <div className="h-32 w-32 rounded-2xl glass-card-dark border-dark backdrop-blur-md translate-y-8"></div>
              <div className="h-32 w-32 rounded-2xl glass-card-dark border-dark backdrop-blur-md -translate-y-8"></div>
              <div className="h-32 w-32 rounded-2xl glass-card-dark border-dark backdrop-blur-md"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section using SectionGrid */}
      <SectionGrid
        title="Our Core Principles"
        subtitle="The foundational axioms that guide every line of code we write."
        bg="dark"
        columns={3}
        className="border-t border-dark bg-card-dark/10"
      >
        {values.map((value, index) => (
          <UniversalCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
            variant="dark"
            index={index}
          />
        ))}
      </SectionGrid>

      {/* CTA Section */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10 pointer-events-none"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.h2
            className="mb-6 text-4xl font-medium tracking-tight text-primary-dark sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to shape the future?
          </motion.h2>

          <motion.p
            className="mb-10 text-xl font-light text-secondary-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether you need a custom LLM, predictive analytics, or a complete digital transformation, our team is ready to engineer your solution.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="rounded-xl bg-light px-8 py-4 text-lg font-medium text-primary-light shadow-lg hover:bg-light/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all">
              Start a Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}