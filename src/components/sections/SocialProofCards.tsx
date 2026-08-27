"use client";

import { motion } from "motion/react";
import { TrendingUp, Zap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "88%",
    label: "of users leave after a bad UI",
    color: "#F5F2E4",
  },
  {
    icon: Zap,
    number: "3s",
    label: "Max load time before bounce",
    color: "#DE3737",
  },
  {
    icon: Users,
    number: "200%",
    label: "Average ROI increase for clients",
    color: "#F5F2E4",
  },
  {
    icon: Award,
    number: "99.9%",
    label: "Uptime guaranteed",
    color: "#DE3737",
  },
];

export function SocialProofCards() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-cyan/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-black">
            <span className="text-white">Research-Driven</span>{" "}
            <span className="text-cyber-cyan">Insights</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Data-backed decisions that drive results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div
                  className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon
                      className="h-7 w-7"
                      style={{ color: stat.color }}
                    />
                  </div>

                  <div
                    className="mb-3 text-6xl font-black"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>

                  <p className="text-lg leading-relaxed text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
