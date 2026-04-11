"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Process from "@/components/sections/Process";
import GlassPanel from "@/components/glass/GlassPanel";
import GlassButton from "@/components/glass/GlassButton";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const GUARANTEES = [
  { label: "48-hour profile review", description: "After your consultation we review and return your profile assessment within 48 hours." },
  { label: "Dedicated strategist", description: "One person owns your entire journey — no handoffs, no ticket queues." },
  { label: "Transparent timeline", description: "You always know exactly where you are in the process and what comes next." },
  { label: "Iteration until placed", description: "We debrief every interview, recalibrate, and keep going until you land the role." },
];

const PROCESS_FAQS = [
  {
    question: "How quickly can we start after the consultation?",
    answer: "Immediately. Resume work begins within 24 hours of your consultation, and your interview prep plan is delivered within 48 hours.",
  },
  {
    question: "Do I need to prepare anything before the consultation?",
    answer: "Just bring your current resume (if you have one) and a list of 3–5 target companies or role types. We handle the rest.",
  },
  {
    question: "What happens if I don't pass an interview?",
    answer: "We debrief within 24 hours, identify the gaps, recalibrate your prep plan, and get you ready for the next opportunity. Every failure is data.",
  },
  {
    question: "How does BGV support work?",
    answer: "We provide a detailed BGV preparation guide, help you gather required documentation, and stay on hand to answer questions from the verification team until the process is complete.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col pt-28">
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            How Aivora Works
          </motion.p>
          <motion.h1
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          >
            From profile to{" "}
            <span style={{
              background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              offer letter
            </span>
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          >
            A structured, three-stage pipeline that takes you from wherever you are today to an
            accepted offer at your target company — with Aivora alongside you at every step.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
          >
            <GlassButton href="/book" variant="primary" className="px-8 py-3.5 font-semibold">
              Start the Process <ArrowRight size={16} />
            </GlassButton>
            <GlassButton href="/pricing" variant="ghost" className="px-8 py-3.5">
              View Plans
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* ── Pinned GSAP scroll story (reuses Process component) ─────────── */}
      <Process />

      {/* ── Our commitments ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#a8c5b5" }}>Our Commitments</p>
            <h2 className="display-md" style={{ color: "#e8f0ee" }}>What you can count on</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {GUARANTEES.map((g, i) => (
              <motion.div
                key={g.label}
                className="rounded-2xl p-6 flex items-start gap-4"
                style={{
                  background: "rgba(255,255,255,0.04)", backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              >
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#7afcff" }} />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm" style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}>{g.label}</span>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(232,240,238,0.55)" }}>{g.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process FAQ ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="display-md text-center mb-10" style={{ color: "#e8f0ee" }}>Process questions</h2>
          <div className="flex flex-col gap-3">
            {PROCESS_FAQS.map((item) => (
              <details key={item.question} className="group rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium"
                  style={{ color: "#e8f0ee" }}>
                  {item.question}
                </summary>
                <div className="px-6 pb-6 pt-2 text-sm leading-relaxed"
                  style={{ color: "rgba(232,240,238,0.58)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
