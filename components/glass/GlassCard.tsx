"use client";

import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEnabled?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  tiltEnabled = true,
  glowColor = "rgba(13,79,92,0.3)",
  onClick,
}: GlassCardProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`;
    }
  };

  const card = (
    <motion.div
      className={cn(
        "glass-surface rounded-2xl p-6 cursor-default select-none",
        "transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (glowRef.current) glowRef.current.style.background = "transparent";
      }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Light refraction glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ zIndex: 0 }}
      />
      {/* Inner highlight line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  if (!tiltEnabled) return card;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.08}
      glareColor="#7afcff"
      glarePosition="all"
      glareBorderRadius="16px"
      transitionSpeed={600}
      scale={1.02}
      className="group"
    >
      {card}
    </Tilt>
  );
}
