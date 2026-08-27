"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, User, Building } from "lucide-react";

const GRAIN =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial-contact blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-black md:text-6xl">
            <span className="text-white">Let&apos;s Build Something</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-cyan to-acid-lime bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Ready to transform your digital presence? Start the conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyber-cyan/5 to-acid-lime/5" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <User
                  className={`h-5 w-5 transition-colors ${
                    focusedField === "name" || formData.name
                      ? "text-cyber-cyan"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-14 py-5 text-white placeholder-transparent transition-all focus:border-cyber-cyan focus:outline-none"
                placeholder="Your Name"
                required
              />
              <label
                htmlFor="name"
                className={`pointer-events-none absolute left-14 transition-all ${
                  focusedField === "name" || formData.name
                    ? "top-2 text-xs text-cyber-cyan"
                    : "top-1/2 -translate-y-1/2 text-base text-gray-400"
                }`}
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <Building
                  className={`h-5 w-5 transition-colors ${
                    focusedField === "company" || formData.company
                      ? "text-acid-lime"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-14 py-5 text-white placeholder-transparent transition-all focus:border-acid-lime focus:outline-none"
                placeholder="Company"
                required
              />
              <label
                htmlFor="company"
                className={`pointer-events-none absolute left-14 transition-all ${
                  focusedField === "company" || formData.company
                    ? "top-2 text-xs text-acid-lime"
                    : "top-1/2 -translate-y-1/2 text-base text-gray-400"
                }`}
              >
                Company
              </label>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                <Mail
                  className={`h-5 w-5 transition-colors ${
                    focusedField === "email" || formData.email
                      ? "text-cyber-cyan"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-14 py-5 text-white placeholder-transparent transition-all focus:border-cyber-cyan focus:outline-none"
                placeholder="Email"
                required
              />
              <label
                htmlFor="email"
                className={`pointer-events-none absolute left-14 transition-all ${
                  focusedField === "email" || formData.email
                    ? "top-2 text-xs text-cyber-cyan"
                    : "top-1/2 -translate-y-1/2 text-base text-gray-400"
                }`}
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={6}
                className="peer w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder-transparent transition-all focus:border-acid-lime focus:outline-none"
                placeholder="Your Message"
                required
              />
              <label
                htmlFor="message"
                className={`pointer-events-none absolute left-6 transition-all ${
                  focusedField === "message" || formData.message
                    ? "top-2 text-xs text-acid-lime"
                    : "top-5 text-base text-gray-400"
                }`}
              >
                Tell us about your project
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyber-cyan to-acid-lime py-5 text-lg font-black text-deep-slate shadow-lg"
              style={{
                boxShadow: "0 10px 40px rgba(0, 240, 255, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-acid-lime opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

              <span className="relative flex items-center justify-center gap-3">
                Start a Project
                <Send className="h-5 w-5" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
