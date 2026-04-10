"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    number: "01",
    title: "Profile Building & LinkedIn Exposure",
    description:
      "We craft impactful resumes, optimize your LinkedIn, and align your personal brand to attract the right opportunities — before you send a single application.",
    detail: "Includes: Resume revamp · LinkedIn headline & about · Keyword alignment · Portfolio framing",
    color: "#7afcff",
    glowRgb: "122,252,255",
    accent: "#0d4f5c",
  },
  {
    number: "02",
    title: "Interview Prep & On-Call Support",
    description:
      "Personalized prep covering the exact concepts your target companies test — plus real-time on-call support during the interview when the pressure spikes.",
    detail: "Includes: Concept drills · Mock interviews · Behavioral coaching · Live support hotline",
    color: "#c4a7ff",
    glowRgb: "196,167,255",
    accent: "#7c5cff",
  },
  {
    number: "03",
    title: "From Offer to Onboarding",
    description:
      "BGV assistance, documentation, salary negotiation guidance, follow-ups — continuous support until your first day on the job, stress-free.",
    detail: "Includes: BGV prep · Offer negotiation · Joining docs · Onboarding check-ins",
    color: "#ffd6a5",
    glowRgb: "255,214,165",
    accent: "#c8873a",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railProgressRef = useRef<HTMLDivElement>(null);
  const progressDotRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !stickyRef.current) return;

      // ── Pin the sticky container ────────────────────────────────────────
      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
      });

      // ── Animate each step as its scroll zone enters ─────────────────────
      STEPS.forEach((step, i) => {
        const el = stepsRef.current[i];
        const numEl = numberRefs.current[i];
        const dot = progressDotRef.current[i];
        if (!el) return;

        const startPct = i / STEPS.length;
        const endPct = (i + 1) / STEPS.length;

        // Each step content: fade + slide in, fade + slide out
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${startPct * 100}% top`,
              end: `${Math.min((startPct + 0.25) * 100, endPct * 100)}% top`,
              scrub: 1.2,
            },
          }
        );

        // Exit animation — fade the step out as the next one starts
        if (i < STEPS.length - 1) {
          gsap.to(el, {
            opacity: 0,
            y: -30,
            filter: "blur(4px)",
            ease: "power2.in",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${(endPct - 0.08) * 100}% top`,
              end: `${endPct * 100}% top`,
              scrub: 0.8,
            },
          });
        }

        // Giant number parallax
        if (numEl) {
          gsap.fromTo(
            numEl,
            { y: 60, opacity: 0 },
            {
              y: -60,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: `${startPct * 100}% top`,
                end: `${endPct * 100}% top`,
                scrub: true,
              },
            }
          );
        }

        // Activate timeline dot
        if (dot) {
          gsap.to(dot, {
            scale: 1.5,
            backgroundColor: step.color,
            boxShadow: `0 0 16px rgba(${step.glowRgb},0.8)`,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${startPct * 100}% top`,
              end: `${(startPct + 0.1) * 100}% top`,
              scrub: true,
            },
          });
        }
      });

      // ── Rail progress fill ──────────────────────────────────────────────
      if (railProgressRef.current) {
        gsap.fromTo(
          railProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }

      return () => {
        pinTrigger.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative"
      // Each step gets 100vh of scroll room
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
      >
        {/* Section background shimmer */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(124,92,255,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section label */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-12"
            style={{ color: "#a8c5b5" }}
          >
            The Process
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 lg:gap-20 items-start">
            {/* ── Left: vertical timeline rail ─────────────────────────── */}
            <div className="hidden lg:flex flex-col items-center gap-0 pt-2">
              {/* Rail */}
              <div
                className="relative flex flex-col items-center gap-0"
                style={{ minHeight: "280px" }}
              >
                {/* Grey rail */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-px top-0 bottom-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                {/* Coloured progress fill */}
                <div
                  ref={railProgressRef}
                  className="absolute left-1/2 -translate-x-1/2 w-0.5 top-0 bottom-0 origin-top"
                  style={{
                    background:
                      "linear-gradient(to bottom, #7afcff, #c4a7ff, #ffd6a5)",
                    transform: "scaleY(0)",
                  }}
                />

                {/* Dots */}
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className="relative z-10 flex flex-col items-center"
                    style={{ marginTop: i === 0 ? 0 : "auto", flex: 1 }}
                  >
                    <div
                      ref={(el) => { progressDotRef.current[i] = el; }}
                      className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        marginBlock: "80px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: step content ───────────────────────────────────── */}
            <div className="relative min-h-[70vh] flex items-center">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[i] = el; }}
                  className="absolute inset-0 flex flex-col justify-center gap-8"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {/* Giant number */}
                  <div
                    ref={(el) => { numberRefs.current[i] = el; }}
                    className="font-bold leading-none select-none"
                    style={{
                      fontSize: "clamp(7rem, 18vw, 14rem)",
                      background: `linear-gradient(135deg, rgba(${step.glowRgb},0.35) 0%, rgba(${step.glowRgb},0.06) 60%, transparent 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Inter Tight', sans-serif",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.85,
                      marginBottom: "-0.1em",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step card */}
                  <div
                    className="relative rounded-3xl p-8 max-w-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(40px) saturate(180%)",
                      WebkitBackdropFilter: "blur(40px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(${step.glowRgb},0.08), inset 0 1px 0 rgba(255,255,255,0.08)`,
                    }}
                  >
                    {/* Accent top border */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                        opacity: 0.6,
                      }}
                    />

                    <div className="flex flex-col gap-5">
                      {/* Step label */}
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.18em]"
                        style={{ color: step.color }}
                      >
                        Step {step.number}
                      </span>

                      <h3
                        className="text-2xl lg:text-3xl font-bold tracking-tight"
                        style={{
                          color: "#e8f0ee",
                          fontFamily: "'Inter Tight', sans-serif",
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "rgba(232,240,238,0.62)" }}
                      >
                        {step.description}
                      </p>

                      {/* Detail pills */}
                      <div
                        className="pt-4 border-t flex flex-wrap gap-2"
                        style={{ borderColor: "rgba(255,255,255,0.07)" }}
                      >
                        {step.detail.split(" · ").map((d) => (
                          <span
                            key={d}
                            className="text-xs px-3 py-1.5 rounded-full"
                            style={{
                              background: `rgba(${step.glowRgb},0.08)`,
                              border: `1px solid rgba(${step.glowRgb},0.2)`,
                              color: step.color,
                            }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glow blob behind card */}
                  <div
                    aria-hidden
                    className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, rgba(${step.glowRgb},0.12) 0%, transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
