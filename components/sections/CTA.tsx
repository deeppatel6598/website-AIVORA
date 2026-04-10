"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";
import GlassButton from "@/components/glass/GlassButton";

const TRUST_BADGES = [
  { icon: Calendar, label: "Free 30-min call" },
  { icon: Clock,    label: "Response in 24 hrs" },
  { icon: Shield,   label: "No obligation" },
];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 lg:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-[2rem] overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(60px) saturate(200%)",
            WebkitBackdropFilter: "blur(60px) saturate(200%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,92,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          {/* Iridescent top border */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, #7afcff, #c4a7ff, #ffd6a5, transparent)",
              opacity: 0.6,
            }}
          />

          {/* Background orbs */}
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(13,79,92,0.25) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,92,255,0.2) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10 px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Eyebrow */}
            <motion.span
              className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(122,252,255,0.08)",
                border: "1px solid rgba(122,252,255,0.2)",
                color: "#7afcff",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Your next chapter starts here
            </motion.span>

            {/* Headline */}
            <motion.h2
              className="display-lg max-w-2xl"
              style={{ color: "#e8f0ee" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Ready to land your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dream role?
              </span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "rgba(232,240,238,0.58)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Join 500+ professionals who used Aivora&apos;s placement pipeline to
              crack Fortune 500 interviews. Book a free strategy call — no
              strings attached.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(232,240,238,0.5)" }}
                >
                  <Icon size={13} style={{ color: "#a8c5b5" }} />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.48, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton strength={0.28}>
                <GlassButton
                  href="/book"
                  variant="primary"
                  className="px-10 py-4 text-base font-semibold"
                >
                  Book a Free Consultation
                  <ArrowRight size={18} />
                </GlassButton>
              </MagneticButton>

              <MagneticButton strength={0.28}>
                <GlassButton
                  href="/contact"
                  variant="ghost"
                  className="px-8 py-4 text-base"
                >
                  Get in Touch
                </GlassButton>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
