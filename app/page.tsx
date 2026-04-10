"use client";

import Hero from "@/components/sections/Hero";
import GlassCard from "@/components/glass/GlassCard";
import GlassButton from "@/components/glass/GlassButton";
import GlassPanel from "@/components/glass/GlassPanel";
import { FileText, MessageSquare, Rocket, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section id="services" className="px-6 lg:px-12 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#a8c5b5" }}
            >
              What We Do
            </p>
            <h2 className="display-lg" style={{ color: "#e8f0ee" }}>
              Three paths to your{" "}
              <span className="iridescent-text">next role</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Resume Revamp",
                description:
                  "We refresh your resume with clear structure, strong keywords, and compelling language so you can confidently stand out.",
                glow: "rgba(13,79,92,0.35)",
                href: "/services/resume",
              },
              {
                icon: MessageSquare,
                title: "Interview Preparation",
                description:
                  "Technical interview prep step by step — concepts, practice questions, and mock sessions so you walk in ready.",
                glow: "rgba(124,92,255,0.3)",
                href: "/services/interview-prep",
              },
              {
                icon: Rocket,
                title: "Full Placement Support",
                description:
                  "End-to-end pipeline from profile building to onboarding day — zero gaps, zero stress.",
                glow: "rgba(168,197,181,0.25)",
                href: "/services/full-placement",
              },
            ].map((service) => (
              <GlassCard key={service.title} glowColor={service.glow} tiltEnabled>
                <div className="flex flex-col gap-5 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: service.glow,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <service.icon size={19} style={{ color: "#e8f0ee" }} />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3
                      className="font-semibold text-lg tracking-tight"
                      style={{ color: "#e8f0ee" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "rgba(232,240,238,0.6)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: "#a8c5b5" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f0ee")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a8c5b5")}
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section id="process" className="px-6 lg:px-12 py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#a8c5b5" }}
            >
              The Process
            </p>
            <h2 className="display-lg" style={{ color: "#e8f0ee" }}>
              From profile to{" "}
              <span className="iridescent-text">offer letter</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0">
            {/* Vertical rail */}
            <div
              className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(124,92,255,0.4), rgba(13,79,92,0.4), transparent)",
              }}
            />

            {[
              {
                step: "01",
                title: "Profile Building & LinkedIn Exposure",
                description:
                  "We craft impactful resumes, optimize your LinkedIn, and align your personal brand to attract the right opportunities.",
                color: "#7afcff",
              },
              {
                step: "02",
                title: "Interview Prep & Support",
                description:
                  "Personalized prep plus real-time on-call support during tough questions and critical moments.",
                color: "#c4a7ff",
              },
              {
                step: "03",
                title: "From Offer to Onboarding",
                description:
                  "BGV, documentation, follow-ups, continuous assistance until your joining date — stress-free transition.",
                color: "#ffd6a5",
              },
            ].map((item, i) => (
              <GlassPanel
                key={item.step}
                variant="subtle"
                rounded="2xl"
                className="flex items-start gap-6 p-6 mb-4"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={false}
              >
                {/* Step number dot */}
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg"
                  style={{
                    background: `rgba(${item.color === "#7afcff" ? "122,252,255" : item.color === "#c4a7ff" ? "196,167,255" : "255,214,165"},0.1)`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                    fontFamily: "'Inter Tight', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.step}
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3
                    className="font-semibold text-base md:text-lg"
                    style={{ color: "#e8f0ee" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(232,240,238,0.58)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <GlassPanel
            variant="default"
            rounded="3xl"
            className="p-10 md:p-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { value: "500+", label: "Professionals Placed" },
                { value: "50+", label: "Companies Hired Our Candidates" },
                { value: "95%", label: "Interview Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span
                    className="font-bold tracking-tight"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Inter Tight', sans-serif",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(232,240,238,0.55)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-28">
        <div className="max-w-3xl mx-auto">
          <GlassPanel
            variant="strong"
            rounded="3xl"
            className="p-12 md:p-16 text-center flex flex-col items-center gap-8"
          >
            {/* Glow dot */}
            <div
              className="w-16 h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,92,255,0.5) 0%, rgba(13,79,92,0.3) 60%, transparent 100%)",
                filter: "blur(12px)",
              }}
            />
            <div className="flex flex-col gap-4 -mt-10">
              <h2 className="display-md" style={{ color: "#e8f0ee" }}>
                Ready to land your{" "}
                <span className="iridescent-text">dream role?</span>
              </h2>
              <p
                className="text-sm leading-relaxed max-w-md mx-auto"
                style={{ color: "rgba(232,240,238,0.58)" }}
              >
                Book a free 30-minute strategy call. No obligation — just a
                clear roadmap to your next opportunity.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton href="/book" variant="primary" className="px-10 py-4 text-base font-semibold">
                Book a Free Consultation
                <ArrowRight size={18} />
              </GlassButton>
              <GlassButton href="/contact" variant="ghost" className="px-8 py-4 text-base">
                Get in Touch
              </GlassButton>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
