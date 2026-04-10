"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type PanelVariant = "default" | "strong" | "subtle";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: PanelVariant;
  animate?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const variantClasses: Record<PanelVariant, string> = {
  default: "glass-surface",
  strong: "glass-surface-strong",
  subtle:
    "bg-white/[0.02] backdrop-blur-2xl border border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
};

const roundedClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

export default function GlassPanel({
  children,
  className,
  variant = "default",
  animate: shouldAnimate = true,
  rounded = "2xl",
  ...motionProps
}: GlassPanelProps) {
  return (
    <motion.div
      className={cn(
        variantClasses[variant],
        roundedClasses[rounded],
        "relative overflow-hidden",
        className
      )}
      initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {/* Top inner highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
        }}
      />
      {children}
    </motion.div>
  );
}
