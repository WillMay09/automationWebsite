"use client";
import { motion } from "framer-motion";

import {
  Zap,
  Globe,
  Code2,
  Brain,
  BarChart3,
  Plug,
  Cloud,
  Sparkles,
  ArrowRight,
  Database,
} from "lucide-react";

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ProjectCard({ icon, title, description, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative glass-card-dark rounded-2xl p-8 cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/*Content */}
      <div className="relative z-10">
        {/*Icon*/}
        <div className="glass-icon-dark w-12 h-12 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        
        {/*Title */}
        <h3 className="text-primary-dark text-xl font-medium mb-3 tracking-tight">
          {title}
        </h3>
        
        {/*Description*/}
        <p className="text-secondary-dark leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Ambient glow effect */}
      <div className="glass-glow-dark"></div>
    </motion.div>
  );
}

export default function Services() {
  const projects = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description:
        "End-to-end automation for repetitive tasks. Connect your apps and let our AI agents handle the busy work autonomously.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Scraping",
      description:
        "Extract valuable data from any website at scale with our advanced scraping tools and APIs.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Custom web and mobile applications built with modern frameworks and best practices for scalability.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom LLM Agents",
      description:
        "Tailored large language models trained on your proprietary data to handle customer support and internal queries.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description:
        "Turn historical data into future insights. Our algorithms forecast trends, optimize inventory, and identify opportunities.",
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: "API Development",
      description:
        "Build robust, scalable APIs that seamlessly connect your systems and third-party services.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Edge Deployment",
      description:
        "Run powerful AI models directly on user devices for zero-latency performance and enhanced privacy compliance.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description:
        "Design and optimize databases for performance, scalability, and data integrity across all major platforms.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Security",
      description:
        "Protect your models and data infrastructure with proprietary adversarial defense systems and auditing tools.",
    },
  ];

  return (
    <section className="section-dark relative w-full py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/*Section Header */}
        <div className="mb-16 max-w-2xl">
          <motion.h2
            className="text-primary-dark text-3xl font-semibold tracking-tight sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Intelligence as a Service
          </motion.h2>
          <motion.p
            className="text-secondary-dark text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our suite of AI solutions is designed to integrate seamlessly into your existing infrastructure, providing immediate value and long-term scalability.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              description={project.description}
              title={project.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}