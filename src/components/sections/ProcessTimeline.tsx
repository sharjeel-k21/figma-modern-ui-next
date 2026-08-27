"use client";

import { motion } from "motion/react";
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Audit",
    description:
      "Deep dive into your current tech stack, pain points, and opportunities",
    color: "#F5F2E4",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Craft a roadmap aligned with your business goals and user needs",
    color: "#DE3737",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Build with cutting-edge tech, clean code, and scalable architecture",
    color: "#F5F2E4",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous QA across devices, browsers, and edge cases",
    color: "#DE3737",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Seamless launch with monitoring, optimization, and ongoing support",
    color: "#F5F2E4",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyber-cyan/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl font-black">
            <span className="text-white">Our</span>{" "}
            <span className="text-acid-lime">Process</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyber-cyan via-acid-lime to-cyber-cyan opacity-30" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative mb-16 flex items-center gap-8 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-5/12 ${idx % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <h3 className="mb-3 text-3xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute left-1/2 z-10 -translate-x-1/2">
                <motion.div
                  className="relative flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: step.color }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${step.color}80`,
                      `0 0 40px ${step.color}`,
                      `0 0 20px ${step.color}80`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <step.icon className="h-8 w-8 text-deep-slate" />

                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: step.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: step.color }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
