"use client";

import { motion } from "motion/react";

export function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2"
    >
      <div className="rounded-2xl border border-white/10 bg-surface-card/40 px-8 py-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-2xl font-black tracking-tight">
              <span className="text-white">Flintrr</span>
              
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#work"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-cyan"
              >
                Work
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-cyan"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-cyan"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-cyan"
              >
                Contact
              </a>
            </div>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-cyber-cyan to-acid-lime px-6 py-3 text-sm font-bold text-deep-slate shadow-lg shadow-cyber-cyan/30 transition-shadow hover:shadow-cyber-cyan/50"
          >
            Book an Audit
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
