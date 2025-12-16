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
      className="group relative bg-app-dark border border-dark rounded-2xl p-8 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, borderColor: "#f97316" }}
     
    >
      {/*Gradient background on hover */}
      <motion.div className="absolute inset-0 gradient-accent-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/*Content */}
      <div className="relative z-10">
        {/*Icon*/}
        <motion.div
          className="w-16 bg-card-dark rounded-xl flex items-center group-hover-gradient-accent-strong justify-center mb-6 transition-all duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-accent group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
        {/*title */}
        <h3 className="text-primary-dark mb-3 hover-text-accent transition-colors duration-300">
          {title}
        </h3>
        {/*Description*/}
        <p className="text-secondary-dark mb-6 group-hover:text-muted-dark transition-colors duration-300">
          {description}
        </p>
        {/*Arrow*/}
        <motion.div
          className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm">Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 gradient-accent-soft to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Services() {
  const projects = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description:
        "Streamline workflows and eliminate repetitive tasks with intelligent automation solutions that boost productivity",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Scraping",
      description:
        "Extract valuable data from any website at scale with our advanced scraping tools and APIs",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web and mobile application development",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML integration",
      description:
        "Deploy cutting-edge machine learning models and AI solutions tailored to your bussiness needs",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics and visualization dashboards",
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: "API Development",
      description:
        "Build robust, scalable APIs that seemlessly connect your systems and third-party services",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Deploy and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description:
        "Design and optimize databases for performance, scalability, and data integrity",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Custom Software",
      description:
        "Bespoke software solutions engineered to solve your unique business challenges",
    },
  ];
  return (
    <section className="bg-gradient-to-b bg-app-dar py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/*Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-wider">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2
            className="text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What We Build
          </motion.h2>
          <motion.p
            className="text-secondary-dark text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From intelligent automation to full-stack applications, we deliver
            AI-powered solutions that transform how you do business
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      {/*Project Section*/}
    </section>
  );
}
