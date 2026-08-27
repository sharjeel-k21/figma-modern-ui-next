"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Antibody",
    category: "Healthcare Platform",
    description:
      "AI-powered diagnostic platform processing 10M+ health records with 99.8% accuracy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    color: "#F5F2E4",
  },
  {
    id: 2,
    name: "NeoFinance",
    category: "FinTech Dashboard",
    description:
      "Real-time trading platform handling $2B+ in daily transactions",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    color: "#DE3737",
  },
  {
    id: 3,
    name: "Vertex",
    category: "E-commerce Engine",
    description: "Lightning-fast shopping experience with 300ms page loads",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    color: "#F5F2E4",
  },
];

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const current = projects[activeProject];
  const next = projects[(activeProject + 1) % projects.length];

  return (
    <section id="work" className="relative overflow-hidden px-6 py-32">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-acid-lime/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 text-5xl font-black">
            <span className="text-white">Featured</span>{" "}
            <span className="text-acid-lime">Projects</span>
          </h2>
          <p className="max-w-2xl text-xl text-gray-400">
            Crafting digital experiences that push boundaries
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
              <div className="absolute left-1/2 top-0 z-10 h-6 w-40 -translate-x-1/2 rounded-b-2xl bg-black" />

              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-black">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 opacity-20 blur-3xl"
                    style={{
                      background: `radial-gradient(circle at center, ${current.color}, transparent 70%)`,
                    }}
                  />

                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={activeProject === 0}
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-12">
                    <div>
                      <p
                        className="mb-2 text-sm font-bold"
                        style={{ color: current.color }}
                      >
                        {current.category}
                      </p>
                      <h3 className="mb-4 text-5xl font-black text-white">
                        {current.name}
                      </h3>
                      <p className="mb-6 max-w-2xl text-xl text-gray-300">
                        {current.description}
                      </p>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                      >
                        View Case Study
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-1 h-2 rounded-b-2xl bg-gradient-to-b from-gray-700 to-gray-800" />
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.6 }}
              className="absolute -right-20 top-1/2 hidden h-64 w-80 -translate-y-1/2 cursor-pointer overflow-hidden rounded-xl transition-opacity hover:opacity-100 lg:block"
              onClick={() =>
                setActiveProject((activeProject + 1) % projects.length)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject((activeProject + 1) % projects.length);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Show next project"
            >
              <Image
                src={next.image}
                alt="Next project"
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center">
                  <ArrowRight className="mx-auto mb-2 h-12 w-12 text-white" />
                  <p className="font-bold text-white">Next Project</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === activeProject
                  ? "w-12 bg-gradient-to-r from-cyber-cyan to-acid-lime"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`View project ${project.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
