"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GRAIN =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')";

const slides = [
  {
    title: "We Build Digital",
    highlight: "Ferraris",
    subtitle: "Speed, precision, and luxury in every line of code",
  },
  {
    title: "Performance is",
    highlight: "Everything",
    subtitle: "Milliseconds matter. We make them count.",
  },
  {
    title: "Code That",
    highlight: "Scales",
    subtitle: "From startup to enterprise, built to last",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN }}
      />

      <motion.div
        className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-20"
        style={{ rotateY: rotation, rotateX: rotation / 2 }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <linearGradient
              id="wireframe-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#CCFF00" />
            </linearGradient>
          </defs>
          <g
            stroke="url(#wireframe-gradient)"
            strokeWidth="0.5"
            fill="none"
          >
            <path d="M50 50 L150 50 L150 150 L50 150 Z" />
            <path d="M70 30 L170 30 L170 130 L70 130 Z" />
            <path d="M50 50 L70 30 M150 50 L170 30 M150 150 L170 130 M50 150 L70 130" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="20" />
          </g>
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div className="mb-6">
              <h1 className="text-7xl font-black leading-none tracking-tight md:text-8xl">
                <span className="text-white">{slides[currentSlide].title}</span>
                <br />
                <span className="bg-gradient-to-r from-cyber-cyan to-acid-lime bg-clip-text text-transparent">
                  {slides[currentSlide].highlight}
                </span>
              </h1>
            </motion.div>

            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400 md:text-2xl">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex items-center justify-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-cyan-dark px-8 py-4 text-lg font-bold text-deep-slate shadow-lg shadow-cyber-cyan/30 transition-all hover:shadow-cyber-cyan/60"
              >
                View Our Work
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-cyber-cyan px-8 py-4 text-lg font-bold text-cyber-cyan transition-all hover:bg-cyber-cyan/10"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-cyber-cyan" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? "w-8 bg-cyber-cyan"
                    : "w-2 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-cyber-cyan" />
          </button>
        </div>
      </div>
    </section>
  );
}
