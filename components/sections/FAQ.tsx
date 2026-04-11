"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/content";

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: isOpen
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.03)",
          border: isOpen
            ? "1px solid rgba(255,255,255,0.14)"
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: isOpen
            ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "none",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Question row */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span
            className="font-medium text-base"
            style={{
              color: isOpen ? "#e8f0ee" : "rgba(232,240,238,0.78)",
              fontFamily: "'Inter Tight', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {question}
          </span>

          <motion.div
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
            animate={{
              background: isOpen
                ? "rgba(122,252,255,0.15)"
                : "rgba(255,255,255,0.06)",
              borderColor: isOpen
                ? "rgba(122,252,255,0.3)"
                : "rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.2 }}
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 0 : 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              {isOpen ? (
                <Minus size={13} style={{ color: "#7afcff" }} />
              ) : (
                <Plus size={13} style={{ color: "rgba(232,240,238,0.5)" }} />
              )}
            </motion.div>
          </motion.div>
        </button>

        {/* Answer — animated height */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-6 pb-6"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "1.25rem",
                }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232,240,238,0.58)" }}
                >
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="px-6 lg:px-12 py-28">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#a8c5b5" }}
          >
            FAQ
          </p>
          <h2 className="display-lg" style={{ color: "#e8f0ee" }}>
            Questions{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              answered
            </span>
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions nudge */}
        <motion.p
          className="text-center text-sm mt-10"
          style={{ color: "rgba(232,240,238,0.35)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Still have questions?{" "}
          <a
            href="/contact"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#a8c5b5" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f0ee")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a8c5b5")}
          >
            Get in touch
          </a>
        </motion.p>
      </div>
    </section>
  );
}
