"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_TIERS, FAQS } from "@/lib/content";
import GlassButton from "@/components/glass/GlassButton";
import GlassPanel from "@/components/glass/GlassPanel";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const COMPARISON_ROWS = [
  { feature: "Resume rebuild (ATS optimised)",      starter: true,  pro: true,  elite: true  },
  { feature: "LinkedIn optimisation",               starter: true,  pro: true,  elite: true  },
  { feature: "Personal brand positioning",          starter: true,  pro: true,  elite: true  },
  { feature: "Interview prep plan",                 starter: false, pro: true,  elite: true  },
  { feature: "Mock interview sessions",             starter: false, pro: true,  elite: true  },
  { feature: "Real-time on-call interview support", starter: false, pro: true,  elite: true  },
  { feature: "Behavioural coaching (STAR)",         starter: false, pro: true,  elite: true  },
  { feature: "Post-interview debrief",              starter: false, pro: true,  elite: true  },
  { feature: "Application pipeline management",     starter: false, pro: false, elite: true  },
  { feature: "Dedicated career strategist",         starter: false, pro: false, elite: true  },
  { feature: "Offer negotiation coaching",          starter: false, pro: false, elite: true  },
  { feature: "BGV & documentation support",         starter: false, pro: false, elite: true  },
  { feature: "Onboarding check-ins",                starter: false, pro: false, elite: true  },
  { feature: "Placement guarantee",                 starter: false, pro: false, elite: true  },
];

const PRICING_FAQS = [
  {
    question: "What does 'Contact for pricing' mean?",
    answer: "Pricing is personalised based on your experience level, target roles, and timeline. Book a free consultation and we'll provide a clear quote within 24 hours — no hidden fees.",
  },
  {
    question: "Can I upgrade my plan mid-engagement?",
    answer: "Yes. If you start on Starter and decide you want interview prep added, you can upgrade at any time. We'll prorate the difference.",
  },
  {
    question: "What does the Elite placement guarantee cover?",
    answer: "The Elite plan includes a placement commitment: if you complete all programme requirements and don't receive a job offer within the agreed timeframe, we continue working with you at no additional cost until you do.",
  },
  {
    question: "Are there payment plans available?",
    answer: "Yes. We offer instalment options for all tiers. Your payment structure will be confirmed during the consultation.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Refund eligibility depends on the plan and stage of engagement. Details are outlined in your service agreement. We encourage any concerns to be raised with your strategist first — we almost always find a resolution.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col pt-28">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
            Plans & Pricing
          </motion.p>
          <motion.h1 className="display-lg" style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: EASE }}>
            Choose the right{" "}
            <span style={{ background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              plan for you
            </span>
          </motion.h1>
          <motion.p className="text-base leading-relaxed max-w-xl" style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: EASE }}>
            All plans start with a free 30-minute strategy consultation. Pricing is personalised
            — book a call and we&apos;ll provide a transparent quote within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Tier cards ──────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                className={`relative rounded-3xl flex flex-col overflow-hidden ${tier.highlight ? "ring-1 ring-violet/40" : ""}`}
                style={{
                  background: tier.highlight ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: `1px solid ${tier.highlight ? "rgba(196,167,255,0.25)" : "rgba(255,255,255,0.09)"}`,
                  boxShadow: tier.highlight ? "0 20px 60px rgba(124,92,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 8px 32px rgba(0,0,0,0.3)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
              >
                {/* Accent top border */}
                <div aria-hidden className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`, opacity: 0.7 }} />

                {/* Popular badge */}
                {tier.highlight && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(196,167,255,0.15)", border: "1px solid rgba(196,167,255,0.3)", color: "#c4a7ff" }}>
                    <Sparkles size={11} /> Most Popular
                  </div>
                )}

                <div className="p-7 flex flex-col gap-6 flex-1">
                  {/* Tier name */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: tier.color }}>
                      {tier.name}
                    </span>
                    <p className="text-sm" style={{ color: "rgba(232,240,238,0.55)" }}>{tier.tagline}</p>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(232,240,238,0.62)" }}>{tier.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="py-4 border-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <p className="text-sm font-medium" style={{ color: "#e8f0ee" }}>Pricing</p>
                    <p className="text-base mt-1" style={{ color: "rgba(232,240,238,0.5)" }}>
                      Contact us for a personalised quote
                    </p>
                    {tier.guarantee && (
                      <p className="text-xs mt-2 font-medium" style={{ color: tier.color }}>✓ {tier.guarantee}</p>
                    )}
                  </div>

                  {/* Included features */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span className="text-sm" style={{ color: "rgba(232,240,238,0.72)" }}>{f}</span>
                      </div>
                    ))}
                    {tier.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <X size={14} className="shrink-0 mt-0.5" style={{ color: "rgba(232,240,238,0.2)" }} />
                        <span className="text-sm" style={{ color: "rgba(232,240,238,0.28)" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <GlassButton
                    href="/book"
                    variant={tier.highlight ? "primary" : "ghost"}
                    className="w-full justify-center font-semibold"
                  >
                    {tier.cta} <ArrowRight size={15} />
                  </GlassButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-md text-center mb-12" style={{ color: "#e8f0ee" }}>Full comparison</h2>
          <GlassPanel variant="subtle" rounded="3xl" className="overflow-hidden" animate={false}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th className="text-left px-6 py-4 font-medium" style={{ color: "rgba(232,240,238,0.45)" }}>Feature</th>
                  {PRICING_TIERS.map((t) => (
                    <th key={t.id} className="px-4 py-4 font-semibold text-center" style={{ color: t.color, fontFamily: "'Inter Tight', sans-serif" }}>
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < COMPARISON_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td className="px-6 py-3.5" style={{ color: "rgba(232,240,238,0.65)" }}>{row.feature}</td>
                    {(["starter", "pro", "elite"] as const).map((key) => (
                      <td key={key} className="px-4 py-3.5 text-center">
                        {row[key]
                          ? <CheckCircle2 size={15} className="inline" style={{ color: PRICING_TIERS.find(t => t.id === key)!.color }} />
                          : <X size={14} className="inline" style={{ color: "rgba(232,240,238,0.18)" }} />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassPanel>
        </div>
      </section>

      {/* ── Trust strip ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "Free 30-min consultation", color: "#7afcff" },
            { label: "No hidden fees", color: "#c4a7ff" },
            { label: "Personalised quote in 24hrs", color: "#ffd6a5" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium" style={{ color }}>
              <CheckCircle2 size={14} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing FAQ ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="display-md text-center mb-10" style={{ color: "#e8f0ee" }}>Pricing questions</h2>
          <div className="flex flex-col gap-3">
            {PRICING_FAQS.map((item) => (
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
