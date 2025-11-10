"use client";

import { motion } from "framer-motion";

import {
  Lightbulb,
  Cog,
  Rocket,
  BarChart3,
  Workflow,
  TrendingUp,
  Icon,
} from "lucide-react";

interface RoadmapProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function RoadmapCard({ icon, step, title, description, visual }: RoadmapProps) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-2xl p-8 cursor-pointer"
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
    >
      {/*Header*/}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
            {icon}
          </div>
          <span className="text-orange-500">Step {step}</span>
        </div>
        <h3 className="text-white mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>

      {/*Visual*/}
      <motion.div
        className="bg-zinc-800/50 rounded-xl p-6 min-h-[280px] flex items-center justify-center"
        style={{ backgroundColor: "rgba(39, 39, 42, 0.5)" }}
        whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.8" }}
        transition={{ duration: 0.3 }}
      >
        {visual}
      </motion.div>
    </motion.div>
  );
}

export function RoadMap() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/*Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-zinc-900 mb-4">How we Work</h2>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto">
            Our 3 step process to transform your business with AI-powered
            solutions
          </p>
        </div>
      </div>

      {/*Roadmap cards grid*/}
      <div className="grid md:grid-cols-3 gap-8">
        {/*Discover and Analysis*/}
        <RoadmapCard
          step={1}
          title="Discovery & Analysis"
          icon={<Lightbulb className="w-6 h-6 text-white" />}
          description="We anaylze your business processes, identify inefficiences, and map out AI oppurnities that deliver real ROI"
          visual={
            <div className="w-full space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-zinc-700 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>

                <div className="flex-1 space-y-2">
                  {[100, 80, 60].map((width, i) => (
                    <motion.div
                      key={i}
                      className="h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {["Data", "Process", "Goals"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="bg-zinc-700 rounded-lg p-3 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                    </div>
                    <span className="text-zinc-300 text-xs">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          }
        />
        {/*Step 2: Custom AI Development */}
        <RoadmapCard
          step={2}
          title="Custom AI Development"
          description="Our team builds and deploys tailored AI solutions, seamlessly integrating with your existing systems and workflows."
          icon={<Cog className="w-8 h-8 text-white" />}
          visual={
            <div className="w-full space-y-10 flex flex-col items-center justify-center">
              <div className="relative">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center"
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Workflow className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-zinc-900"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <div className="w-full space-y-6">
                {["Training Model", "Integration", "Testing"].map(
                  (label, i) => (
                    <motion.div
                      key={label}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          }
        />
        {/*Step 3: Scale and Optimize*/}
        <RoadmapCard
          step={3}
          title="Scale & Optimize"
          description="We continuously monitor performance, optimize algorithms, and scale your AI infrastructure to maximize business impact."
          icon={<Rocket className="w-8 h-8 text-white" />}
          visual={
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <div className="relative w-full">
                <svg viewBox="0 0 200 120" className="w-full">
                  <motion.path
                    d="M 20 100 Q 60 80, 100 40 T 180 20"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                  <motion.circle
                    cx="180"
                    cy="20"
                    r="6"
                    fill="#f97316"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.3 }}
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="grid grid-cols-3 gap-3 w-full">
                  {[
                    { label: "Revenue", value: "+250%" },
                    { label: "Efficiency", value: "+100%" },
                    { label: "ROI", value: "+150%" },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      className="bg-zinc-700 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-4 h-4 text-green-500 mx-auto mb-1" />
                      <div className="text-orange-500">{metric.label}</div>
                      <div className="text-zinc-400">{metric.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
