"use client";

import { useRef, useCallback } from "react";
import { motion, useSpring, type SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  magneticStrength?: number;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-teal/30 to-violet/20 border border-white/20 text-mist hover:border-white/35 hover:from-teal/40",
  ghost:
    "bg-white/[0.04] border border-white/10 text-mist/80 hover:bg-white/[0.08] hover:border-white/18 hover:text-mist",
  outline:
    "bg-transparent border border-white/20 text-mist hover:bg-white/[0.04] hover:border-white/30",
};

export default function GlassButton({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  type = "button",
  disabled = false,
  magneticStrength = 0.35,
}: GlassButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * magneticStrength);
      y.set((e.clientY - cy) * magneticStrength);
    },
    [x, y, magneticStrength, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const sharedStyles = cn(
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5",
    "rounded-xl font-medium text-sm tracking-wide",
    "backdrop-filter backdrop-blur-xl",
    "transition-colors duration-200",
    "select-none outline-none",
    "shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    variantStyles[variant],
    className
  );

  const springTransition: SpringOptions = { stiffness: 400, damping: 30 };

  const motionProps = {
    style: { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 as number },
    transition: { type: "spring" as const, ...springTransition },
  };

  const innerContent = (
    <>
      {/* Shine sweep on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
      >
        <span
          className="absolute -inset-full top-0 block h-full w-1/3 -skew-x-12"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
            animation: "shine 3s ease-in-out infinite",
          }}
        />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <style>{`
        @keyframes shine {
          0%   { transform: translateX(-200%) skewX(-12deg); }
          60%  { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={sharedStyles}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        {...motionProps}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={sharedStyles}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {innerContent}
    </motion.button>
  );
}
