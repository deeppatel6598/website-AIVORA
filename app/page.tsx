"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import GlassButton from "@/components/glass/GlassButton";
import GlassPanel from "@/components/glass/GlassPanel";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Process />
      <Stats />

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-28">
        <div className="max-w-3xl mx-auto">
          <GlassPanel
            variant="strong"
            rounded="3xl"
            className="p-12 md:p-16 text-center flex flex-col items-center gap-8"
          >
            {/* Decorative glow */}
            <div
              aria-hidden
              className="w-20 h-20 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,92,255,0.5) 0%, rgba(13,79,92,0.3) 60%, transparent 100%)",
                filter: "blur(16px)",
              }}
            />

            <div className="flex flex-col gap-4 -mt-12">
              <h2
                className="display-md"
                style={{ color: "#e8f0ee" }}
              >
                Ready to land your{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  dream role?
                </span>
              </h2>
              <p
                className="text-base leading-relaxed max-w-md mx-auto"
                style={{ color: "rgba(232,240,238,0.58)" }}
              >
                Book a free 30-minute strategy call. No obligation — just a
                clear roadmap to your next opportunity.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton
                href="/book"
                variant="primary"
                className="px-10 py-4 text-base font-semibold"
              >
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
