"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const STATS: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Professionals Placed",
    description: "Across tech, finance, and Fortune 500 companies",
    color: "#7afcff",
  },
  {
    value: 50,
    suffix: "+",
    label: "Companies",
    description: "From Google and Meta to Goldman Sachs and Accenture",
    color: "#c4a7ff",
  },
  {
    value: 95,
    suffix: "%",
    label: "Interview Success Rate",
    description: "Among candidates who completed our full prep program",
    color: "#ffd6a5",
  },
];

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, 1800 + index * 200, inView);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 px-6 py-2"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Big number */}
      <div
        className="font-bold leading-none"
        style={{
          fontSize: "clamp(3rem, 7vw, 5rem)",
          fontFamily: "'Inter Tight', sans-serif",
          letterSpacing: "-0.03em",
          background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.8))`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="flex flex-col gap-1">
        <span
          className="text-base font-semibold tracking-tight"
          style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
        >
          {stat.label}
        </span>
        <span
          className="text-sm leading-snug max-w-[200px] mx-auto"
          style={{ color: "rgba(232,240,238,0.45)" }}
        >
          {stat.description}
        </span>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true, margin: "-80px" });

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={wrapperRef}
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Inner highlight */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />

          {/* Background iridescent glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,92,255,0.06) 0%, rgba(13,79,92,0.04) 50%, transparent 100%)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] py-14">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
