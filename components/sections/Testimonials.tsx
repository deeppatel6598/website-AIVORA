"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

// Extend testimonials with extra colour context
const CARDS = [
  { ...TESTIMONIALS[0], color: "#7afcff",  glowRgb: "122,252,255", initials: "AK" },
  { ...TESTIMONIALS[1], color: "#c4a7ff",  glowRgb: "196,167,255", initials: "PM" },
  { ...TESTIMONIALS[2], color: "#ffd6a5",  glowRgb: "255,214,165", initials: "SR" },
  { ...TESTIMONIALS[3], color: "#a8c5b5",  glowRgb: "168,197,181", initials: "JT" },
];

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.96,
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] as [number,number,number,number] },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + CARDS.length) % CARDS.length);
    },
    []
  );

  const card = CARDS[index];

  return (
    <section ref={sectionRef} className="px-6 lg:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#a8c5b5" }}
          >
            Success Stories
          </p>
          <h2 className="display-lg" style={{ color: "#e8f0ee" }}>
            Real people,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              real results
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative select-none">
          {/* Card area */}
          <div
            className="relative overflow-hidden rounded-3xl"
            onPointerDown={(e) => { dragStartX.current = e.clientX; }}
            onPointerUp={(e) => {
              const diff = e.clientX - dragStartX.current;
              if (Math.abs(diff) > 40) go(diff < 0 ? 1 : -1);
            }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={SLIDE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative rounded-3xl p-8 md:p-12 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(${card.glowRgb},0.08), inset 0 1px 0 rgba(255,255,255,0.08)`,
                }}
              >
                {/* Accent top border */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                    opacity: 0.7,
                  }}
                />

                {/* Background glow */}
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, rgba(${card.glowRgb},0.12) 0%, transparent 70%)`,
                    filter: "blur(40px)",
                  }}
                />

                <div className="relative z-10 flex flex-col gap-8 md:gap-10">
                  {/* Quote icon */}
                  <Quote
                    size={32}
                    style={{ color: card.color, opacity: 0.5 }}
                    strokeWidth={1.5}
                  />

                  {/* Quote text */}
                  <blockquote
                    className="text-lg md:text-xl leading-relaxed font-light"
                    style={{
                      color: "rgba(232,240,238,0.88)",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{
                        background: `rgba(${card.glowRgb},0.2)`,
                        border: `1px solid rgba(${card.glowRgb},0.35)`,
                        color: card.color,
                        fontFamily: "'Inter Tight', sans-serif",
                      }}
                    >
                      {card.initials}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#e8f0ee" }}
                      >
                        {card.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "rgba(232,240,238,0.45)" }}
                      >
                        {card.role}
                      </span>
                    </div>

                    {/* Verified badge */}
                    <div
                      className="ml-auto text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `rgba(${card.glowRgb},0.1)`,
                        border: `1px solid rgba(${card.glowRgb},0.2)`,
                        color: card.color,
                      }}
                    >
                      Verified Placement
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {CARDS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === index ? "24px" : "6px",
                    height: "6px",
                    background:
                      i === index
                        ? card.color
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              {[
                { delta: -1, icon: ChevronLeft, label: "Previous" },
                { delta: 1,  icon: ChevronRight, label: "Next" },
              ].map(({ delta, icon: Icon, label }) => (
                <motion.button
                  key={label}
                  onClick={() => go(delta)}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(232,240,238,0.6)",
                  }}
                  whileHover={{
                    background: "rgba(255,255,255,0.09)",
                    color: "#e8f0ee",
                  }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Keyboard hint */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "rgba(232,240,238,0.2)" }}
        >
          Drag or use arrows to navigate
        </p>
      </div>
    </section>
  );
}
