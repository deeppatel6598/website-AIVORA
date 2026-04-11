"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, MessageSquare } from "lucide-react";
import GlassButton from "@/components/glass/GlassButton";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_TO_EXPECT = [
  {
    icon: Clock,
    title: "30 minutes, no pressure",
    description:
      "This is a relaxed strategy call — not a sales pitch. We listen first and give you honest feedback on where you stand.",
  },
  {
    icon: MessageSquare,
    title: "We assess your profile",
    description:
      "Share your current situation, target roles, and timeline. We'll identify the gaps and outline what it would take to close them.",
  },
  {
    icon: Calendar,
    title: "You leave with a roadmap",
    description:
      "By the end of the call you'll have a clear next-step plan — whether or not you decide to work with us.",
  },
];

const TRUST_POINTS = [
  "100% free — zero obligation",
  "No credit card required",
  "Speaks to a real career strategist",
  "Personalised advice in 30 minutes",
  "Slots available within 48 hours",
];

export default function BookPage() {
  return (
    <div className="flex flex-col pt-28">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Free Strategy Session
          </motion.p>
          <motion.h1
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          >
            Book your free{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              30-minute call
            </span>
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          >
            Talk to a real career strategist about your goals, your gaps, and
            the fastest path to your next role — no commitment required.
          </motion.p>
        </div>
      </section>

      {/* ── Calendar + sidebar ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Cal.com embed placeholder */}
          <motion.div
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              minHeight: 520,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {/* Replace this placeholder with <Cal namespace="30min" .../> once Cal.com is configured */}
            <div className="flex flex-col items-center justify-center h-full gap-6 py-20 px-8 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(196,167,255,0.12)",
                  border: "1px solid rgba(196,167,255,0.25)",
                }}
              >
                <Calendar size={28} style={{ color: "#c4a7ff" }} />
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className="text-base font-semibold"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Calendar booking coming soon
                </p>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "rgba(232,240,238,0.5)" }}
                >
                  Reach out directly and we&apos;ll schedule your session
                  within 24 hours — no waiting.
                </p>
              </div>
              <GlassButton
                href="/contact"
                variant="primary"
                className="px-7 py-3 font-semibold"
              >
                Contact us to book
              </GlassButton>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          >
            {/* What to expect */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <h3
                className="text-base font-semibold mb-6"
                style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
              >
                What to expect
              </h3>
              <div className="flex flex-col gap-6">
                {WHAT_TO_EXPECT.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(122,252,255,0.1)",
                        border: "1px solid rgba(122,252,255,0.2)",
                      }}
                    >
                      <Icon size={15} style={{ color: "#7afcff" }} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#e8f0ee" }}
                      >
                        {title}
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(232,240,238,0.55)" }}
                      >
                        {description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "rgba(122,252,255,0.05)",
                border: "1px solid rgba(122,252,255,0.12)",
              }}
            >
              <div className="flex flex-col gap-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} style={{ color: "#7afcff" }} />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(232,240,238,0.65)" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
