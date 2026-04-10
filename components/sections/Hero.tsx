"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import GlassButton from "@/components/glass/GlassButton";

// Lazy-load the heavy R3F scene
const GlassOrb = dynamic(() => import("@/components/three/GlassOrb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-48 h-48 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.25) 0%, rgba(13,79,92,0.15) 50%, transparent 70%)",
          filter: "blur(20px)",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    </div>
  ),
});

const HEADLINE_LINE1 = "Launch Your";
const HEADLINE_LINE2 = "Career with";
const HEADLINE_LINE3 = "Strategy.";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: EASE },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Two-column layout on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-7rem)]">

          {/* ── Left column — copy ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-8 lg:gap-10">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(13,79,92,0.15)",
                border: "1px solid rgba(13,79,92,0.45)",
                color: "#a8c5b5",
              }}
              {...fadeUp(0.1)}
            >
              <CheckCircle2 size={11} strokeWidth={2.5} />
              500+ professionals placed · Fortune 500 companies
            </motion.div>

            {/* Headline — letter-by-letter reveal */}
            <h1
              className="display-xl"
              style={{ color: "#e8f0ee" }}
              aria-label="Launch Your Career with Strategy."
            >
              <span className="block">
                <TextReveal text={HEADLINE_LINE1} delay={0.15} stagger={0.03} />
              </span>
              <span className="block">
                <TextReveal text={HEADLINE_LINE2} delay={0.35} stagger={0.03} />
              </span>
              <span className="block">
                <TextReveal
                  text={HEADLINE_LINE3}
                  delay={0.55}
                  stagger={0.04}
                  className="iridescent-text"
                />
              </span>
            </h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(232,240,238,0.62)" }}
              {...fadeUp(0.85)}
            >
              Resume revamp, interview prep, and end-to-end placement support —
              engineered for tech professionals targeting Fortune 500 roles.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              {...fadeUp(1.05)}
            >
              <MagneticButton strength={0.3}>
                <GlassButton
                  href="/book"
                  variant="primary"
                  className="px-8 py-4 text-base font-semibold"
                >
                  Book a Free Consultation
                  <ArrowRight size={17} />
                </GlassButton>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <GlassButton
                  href="#process"
                  variant="ghost"
                  className="px-8 py-4 text-base"
                >
                  See Our Process
                </GlassButton>
              </MagneticButton>
            </motion.div>

            {/* Social proof mini-strip */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              {...fadeUp(1.25)}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {["#0d4f5c", "#7c5cff", "#a8c5b5", "#ffd6a5"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full ring-2 ring-navy-950 flex items-center justify-center text-xs font-bold"
                    style={{ background: color, color: "#020b18" }}
                  >
                    {["G", "M", "A", "N"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "rgba(232,240,238,0.5)" }}>
                <span style={{ color: "#a8c5b5", fontWeight: 600 }}>95%</span>{" "}
                success rate after our interview prep
              </p>
            </motion.div>
          </div>

          {/* ── Right column — 3D orb ──────────────────────────────────────── */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Orb glow halo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,92,255,0.18) 0%, rgba(13,79,92,0.1) 50%, transparent 75%)",
                filter: "blur(30px)",
              }}
            />

            {/* Canvas container */}
            <div className="relative w-[480px] h-[480px]">
              <GlassOrb />
            </div>

            {/* Floating stat cards */}
            <FloatCard
              style={{ top: "10%", left: "-8%" }}
              delay={1.2}
              label="Placements"
              value="500+"
            />
            <FloatCard
              style={{ bottom: "16%", right: "-6%" }}
              delay={1.45}
              label="Success Rate"
              value="95%"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs cursor-pointer"
        style={{ color: "rgba(232,240,238,0.35)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}

/* ── Floating stat card ──────────────────────────────────────────────────── */
function FloatCard({
  style,
  delay,
  label,
  value,
}: {
  style: React.CSSProperties;
  delay: number;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      className="absolute px-4 py-3 rounded-2xl flex flex-col gap-0.5"
      style={{
        ...style,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="text-2xl font-bold tracking-tight"
        style={{
          background: "linear-gradient(135deg, #7afcff, #c4a7ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "'Inter Tight', sans-serif",
        }}
      >
        {value}
      </span>
      <span className="text-xs" style={{ color: "rgba(232,240,238,0.55)" }}>
        {label}
      </span>
    </motion.div>
  );
}
