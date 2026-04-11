"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, FileText, MessageSquare, Rocket, ChevronRight,
} from "lucide-react";
import { SERVICE_PAGES, SERVICES } from "@/lib/content";
import GlassPanel from "@/components/glass/GlassPanel";
import GlassButton from "@/components/glass/GlassButton";
import CTA from "@/components/sections/CTA";

const ICON_MAP = { FileText, MessageSquare, Rocket };
const SLUG_META: Record<string, { icon: keyof typeof ICON_MAP; color: string; glowRgb: string }> = {
  resume:           { icon: "FileText",     color: "#7afcff", glowRgb: "122,252,255" },
  "interview-prep": { icon: "MessageSquare", color: "#c4a7ff", glowRgb: "196,167,255" },
  "full-placement": { icon: "Rocket",        color: "#ffd6a5", glowRgb: "255,214,165" },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const page = SERVICE_PAGES[slug];
  if (!page) notFound();

  const meta = SLUG_META[slug] ?? SLUG_META["resume"];
  const Icon = ICON_MAP[meta.icon];

  return (
    <div className="flex flex-col pt-28">
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav className="px-6 lg:px-12 mb-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs" style={{ color: "rgba(232,240,238,0.4)" }}>
          <Link href="/" className="hover:text-mist transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/#services" className="hover:text-mist transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span style={{ color: meta.color }}>{page.title}</span>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: `rgba(${meta.glowRgb},0.15)`, border: `1px solid rgba(${meta.glowRgb},0.3)` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Icon size={28} style={{ color: meta.color }} />
          </motion.div>

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
          >
            {page.tagline}
          </motion.p>

          <motion.h1
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {page.hero}
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          >
            {page.sub}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
          >
            <GlassButton href="/book" variant="primary" className="px-8 py-3.5 font-semibold">
              Book a Free Consultation <ArrowRight size={16} />
            </GlassButton>
            <GlassButton href="/pricing" variant="ghost" className="px-8 py-3.5">
              View Pricing
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* ── What We Offer ───────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#a8c5b5" }}>What&apos;s Included</p>
            <h2 className="display-md" style={{ color: "#e8f0ee" }}>What we offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.whatWeOffer.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `rgba(${meta.glowRgb},0.15)`, color: meta.color }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-base" style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,240,238,0.58)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#a8c5b5" }}>The Process</p>
            <h2 className="display-md" style={{ color: "#e8f0ee" }}>How it works</h2>
          </div>
          <div className="flex flex-col gap-4">
            {page.howItWorks.map((step, i) => (
              <GlassPanel
                key={step.step}
                variant="subtle"
                rounded="2xl"
                className="p-6 flex items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                animate={false}
              >
                <div className="shrink-0 font-bold text-2xl leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${meta.color}, rgba(255,255,255,0.5))`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", fontFamily: "'Inter Tight', sans-serif",
                  }}>
                  {step.step}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-base" style={{ color: "#e8f0ee" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,240,238,0.58)" }}>{step.description}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto">
          <GlassPanel variant="default" rounded="3xl" className="p-10 md:p-14">
            <h2 className="display-md mb-8 text-center" style={{ color: "#e8f0ee" }}>
              What you walk away with
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: meta.color }} />
                  <span className="text-sm leading-snug" style={{ color: "rgba(232,240,238,0.72)" }}>{outcome}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* ── Service-specific FAQ ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="display-md text-center mb-10" style={{ color: "#e8f0ee" }}>Common questions</h2>
          <div className="flex flex-col gap-3">
            {page.faq.map((item) => (
              <details key={item.question} className="group rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-base"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}>
                  {item.question}
                  <ChevronRight size={15} className="shrink-0 transition-transform group-open:rotate-90"
                    style={{ color: "rgba(232,240,238,0.4)" }} />
                </summary>
                <div className="px-6 pb-6 pt-2 text-sm leading-relaxed" style={{ color: "rgba(232,240,238,0.58)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ──────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 text-center" style={{ color: "#a8c5b5" }}>
            Explore other services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <span className="font-medium text-sm flex-1" style={{ color: "rgba(232,240,238,0.75)" }}>{s.title}</span>
                <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: "rgba(232,240,238,0.35)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
