"use client";

import { motion } from "motion/react";
import { Code2, RefreshCw, Gauge, HeadphonesIcon } from "lucide-react";

const GRAIN =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')";

const services = [
  {
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Bespoke applications tailored to your unique business needs. From concept to deployment.",
    color: "#00F0FF",
    gradient: "from-cyber-cyan/20 to-transparent",
  },
  {
    icon: RefreshCw,
    title: "Legacy Code Refactoring",
    description:
      "Modernize outdated systems. Breathe new life into aging codebases with clean architecture.",
    color: "#CCFF00",
    gradient: "from-acid-lime/20 to-transparent",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times. We shave milliseconds off every interaction for peak UX.",
    color: "#00F0FF",
    gradient: "from-cyber-cyan/20 to-transparent",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Maintenance",
    description:
      "Round-the-clock monitoring and support. Your site stays secure, fast, and bug-free.",
    color: "#CCFF00",
    gradient: "from-acid-lime/20 to-transparent",
  },
];

export function BentoServices() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-black">
            <span className="text-white">Premium</span>{" "}
            <span className="text-cyber-cyan">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Comprehensive solutions for modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300"
                    style={{
                      backgroundColor: `${service.color}20`,
                      boxShadow: `0 0 30px ${service.color}20`,
                    }}
                  >
                    <service.icon
                      className="h-8 w-8 transition-colors duration-300"
                      style={{ color: service.color }}
                    />
                  </motion.div>

                  <h3 className="mb-4 text-2xl font-black text-white transition-colors duration-300 group-hover:text-opacity-100">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-2 font-bold"
                    style={{ color: service.color }}
                  >
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
