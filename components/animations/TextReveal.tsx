"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  /** "chars" — animates each character; "words" — animates each word */
  mode?: "chars" | "words";
  /** Delay before animation triggers (seconds) */
  delay?: number;
  /** Stagger between each token (seconds) */
  stagger?: number;
  /** Trigger once when in view, or every time */
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

const CHAR_VARIANTS: Variants = {
  hidden: { y: "110%", opacity: 0, rotateX: -30 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WORD_VARIANTS: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TextReveal({
  text,
  className,
  mode = "chars",
  delay = 0,
  stagger = 0.025,
  once = true,
  as: Tag = "span",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-40px" });

  const tokens = useMemo(() => {
    if (mode === "words") {
      return text.split(" ").map((word) => ({ token: word, space: true }));
    }
    // chars mode — split into chars but preserve word groups for spacing
    return text.split("").map((char) => ({ token: char, space: char === " " }));
  }, [text, mode]);

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.span;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLSpanElement>}
      className={cn("inline", className)}
      aria-label={text}
    >
      {tokens.map(({ token, space }, i) => {
        if (space && mode === "chars") {
          return (
            <span key={i} className="inline-block">
              &nbsp;
            </span>
          );
        }
        return (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ perspective: "600px" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              custom={delay + i * stagger}
              variants={mode === "chars" ? CHAR_VARIANTS : WORD_VARIANTS}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {token}
              {mode === "words" && i < tokens.length - 1 && "\u00a0"}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
