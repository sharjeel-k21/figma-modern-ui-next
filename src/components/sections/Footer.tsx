"use client";

import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 text-2xl font-black tracking-tight">
              <span className="text-white">Flintrr</span>
              
            </div>
            <p className="leading-relaxed text-gray-400">
              Crafting premium web experiences that drive results.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              <a
                href="#work"
                className="block text-gray-400 transition-colors hover:text-cyber-cyan"
              >
                Our Work
              </a>
              <a
                href="#services"
                className="block text-gray-400 transition-colors hover:text-cyber-cyan"
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-400 transition-colors hover:text-cyber-cyan"
              >
                Process
              </a>
              <a
                href="#contact"
                className="block text-gray-400 transition-colors hover:text-cyber-cyan"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-cyber-cyan hover:bg-cyber-cyan/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-cyber-cyan" />
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-cyber-cyan hover:bg-cyber-cyan/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-cyber-cyan" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Flintrr. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-cyber-cyan"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-cyber-cyan"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
