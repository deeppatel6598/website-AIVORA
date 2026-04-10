"use client";

import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import { FileText, MessageSquare, Rocket, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accentColor: string;
  glowRgb: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    icon: FileText,
    title: "Resume Revamp",
    description:
      "We refresh your resume with clear structure, strong keywords, and compelling language so you can confidently stand out in every applicant pool.",
    href: "/services/resume",
    accentColor: "#0d4f5c",
    glowRgb: "13,79,92",
    tags: ["ATS Optimized", "Keyword Strategy", "Design Refresh"],
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Technical interview prep step by step — concepts, practice questions, and mock sessions so you walk in ready for anything.",
    href: "/services/interview-prep",
    accentColor: "#7c5cff",
    glowRgb: "124,92,255",
    tags: ["Mock Interviews", "Real-Time Support", "Concept Drills"],
  },
  {
    icon: Rocket,
    title: "Full Placement Support",
    description:
      "End-to-end pipeline from profile building to onboarding day — zero gaps, zero stress, from first application to first day.",
    href: "/services/full-placement",
    accentColor: "#a8c5b5",
    glowRgb: "168,197,181",
    tags: ["Profile Building", "Offer Negotiation", "BGV & Onboarding"],
  },
];

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
      glowRef.current.style.background = `radial-gradient(320px circle at ${x}px ${y}px, rgba(${service.glowRgb},0.18), transparent 65%)`;
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <motion.div
      custom={index}
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Tilt
        tiltMaxAngleX={9}
        tiltMaxAngleY={9}
        glareEnable
        glareMaxOpacity={0.1}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        transitionSpeed={700}
        scale={1.025}
        className="h-full"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-full rounded-[20px] p-7 flex flex-col gap-6 overflow-hidden cursor-default"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Pointer-tracked light refraction */}
          <div
            ref={glowRef}
            aria-hidden
            className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
            style={{ opacity: 0, zIndex: 0 }}
          />

          {/* Top inner highlight */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px rounded-t-[20px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />

          {/* Accent corner glow */}
          <div
            aria-hidden
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(${service.glowRgb},0.25) 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: `rgba(${service.glowRgb},0.15)`,
                border: `1px solid rgba(${service.glowRgb},0.3)`,
              }}
            >
              <service.icon size={20} style={{ color: service.accentColor }} />
            </div>
            <div
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: `rgba(${service.glowRgb},0.1)`,
                border: `1px solid rgba(${service.glowRgb},0.2)`,
                color: service.accentColor,
              }}
            >
              0{index + 1}
            </div>
          </div>

          {/* Copy */}
          <div className="relative z-10 flex flex-col gap-3 flex-1">
            <h3
              className="text-xl font-semibold tracking-tight"
              style={{
                color: "#e8f0ee",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-sm leading-relaxed flex-1"
              style={{ color: "rgba(232,240,238,0.58)" }}
            >
              {service.description}
            </p>
          </div>

          {/* Tags */}
          <div className="relative z-10 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(232,240,238,0.5)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA link */}
          <Link
            href={service.href}
            className="relative z-10 inline-flex items-center gap-2 text-sm font-medium group/link"
            style={{ color: service.accentColor }}
          >
            <span className="border-b border-transparent group-hover/link:border-current transition-colors duration-200">
              Learn more
            </span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="px-6 lg:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Three paths to your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              next role
            </span>
          </motion.h2>
          <motion.p
            className="mt-5 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(232,240,238,0.5)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Every service is designed around one goal — getting you into the
            company you want, as fast as possible.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
