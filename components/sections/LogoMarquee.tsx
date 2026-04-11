"use client";

import { COMPANIES } from "@/lib/content";

// Split companies into two rows for visual interest
const ROW_1 = COMPANIES.slice(0, 12);
const ROW_2 = COMPANIES.slice(12);

function MarqueeRow({
  items,
  reverse = false,
  speed = 35,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden" aria-hidden>
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-${reverse ? "reverse" : "forward"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((company, i) => (
          <div
            key={`${company}-${i}`}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {/* Generic dot icon */}
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background:
                  i % 3 === 0
                    ? "#7afcff"
                    : i % 3 === 1
                    ? "#c4a7ff"
                    : "#a8c5b5",
              }}
            />
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: "rgba(232,240,238,0.55)" }}
            >
              {company}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-forward {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-16 overflow-hidden">
      {/* Section label */}
      <p
        className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-10"
        style={{ color: "rgba(232,240,238,0.35)" }}
      >
        500+ placed with leading companies
      </p>

      {/* Marquee wrapper with blur-mask on both edges */}
      <div
        className="relative flex flex-col gap-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <MarqueeRow items={ROW_1} speed={38} />
        <MarqueeRow items={ROW_2} reverse speed={44} />
      </div>
    </section>
  );
}
