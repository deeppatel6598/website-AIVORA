"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { STORIES, STATS } from "@/lib/content";
import GlassButton from "@/components/glass/GlassButton";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function StoriesPage() {
  return (
    <div className="flex flex-col pt-28">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            Success Stories
          </motion.p>
          <motion.h1 className="display-lg" style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: EASE }}>
            Real people,{" "}
            <span style={{ background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              real results
            </span>
          </motion.h1>
          <motion.p className="text-base leading-relaxed max-w-xl" style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: EASE }}>
            Over 500 professionals have used Aivora&apos;s placement pipeline to land roles at
            Fortune 500 companies. Here are a few of their stories.
          </motion.p>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)", backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 py-8 px-6 text-center">
                  <span className="font-bold" style={{
                    fontSize: "clamp(2rem,5vw,3rem)", fontFamily: "'Inter Tight', sans-serif",
                    background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(232,240,238,0.55)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Placement cards grid ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STORIES.map((story, i) => (
              <motion.div
                key={story.initials}
                className="relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)", backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: `0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(${story.glowRgb},0.06)`,
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
              >
                {/* Accent top border */}
                <div aria-hidden className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${story.color}, transparent)`, opacity: 0.6 }} />

                {/* Corner glow */}
                <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, rgba(${story.glowRgb},0.15) 0%, transparent 70%)`, filter: "blur(20px)" }} />

                <Quote size={24} style={{ color: story.color, opacity: 0.5 }} strokeWidth={1.5} />

                <blockquote className="text-sm leading-relaxed flex-1 italic"
                  style={{ color: "rgba(232,240,238,0.82)" }}>
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: `rgba(${story.glowRgb},0.18)`, border: `1px solid rgba(${story.glowRgb},0.3)`, color: story.color }}>
                    {story.initials}
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-sm font-semibold" style={{ color: "#e8f0ee" }}>
                      {story.role} @ {story.company}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(232,240,238,0.4)" }}>
                      Placed in {story.timeline} · {story.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carousel (reuses Testimonials component) ─────────────────────── */}
      <Testimonials />

      {/* ── Referral nudge ──────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-2xl mx-auto text-center rounded-2xl px-8 py-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-sm mb-4" style={{ color: "rgba(232,240,238,0.55)" }}>
            Had a great experience with Aivora? Refer a friend and earn a reward when they get placed.
          </p>
          <GlassButton href="/refer" variant="ghost" className="px-7 py-3 text-sm">
            Learn about Refer & Earn <ArrowRight size={14} />
          </GlassButton>
        </div>
      </section>

      <CTA />
    </div>
  );
}
