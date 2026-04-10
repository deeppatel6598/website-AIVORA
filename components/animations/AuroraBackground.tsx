"use client";

import { useEffect, useRef, useCallback } from "react";

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    // Smoothly follow mouse position
    currentRef.current.x = lerp(currentRef.current.x, mouseRef.current.x, 0.04);
    currentRef.current.y = lerp(currentRef.current.y, mouseRef.current.y, 0.04);

    const cx = currentRef.current.x;
    const cy = currentRef.current.y;

    if (blob1Ref.current) {
      // Primary teal blob — follows mouse loosely
      blob1Ref.current.style.transform = `translate(${cx * 20 - 10}%, ${cy * 20 - 10}%) scale(1)`;
    }
    if (blob2Ref.current) {
      // Violet blob — counter-moves
      blob2Ref.current.style.transform = `translate(${-cx * 15 + 5}%, ${-cy * 15 + 5}%) scale(1)`;
    }
    if (blob3Ref.current) {
      // Sage blob — subtle drift
      blob3Ref.current.style.transform = `translate(${cx * 10}%, ${cy * 10}%) scale(1)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -10%, #071828 0%, #020b18 60%, #040f1f 100%)",
        }}
      />

      {/* Blob 1 — Teal (bottom-left) */}
      <div
        ref={blob1Ref}
        className="absolute will-change-transform"
        style={{
          width: "70vw",
          height: "70vw",
          bottom: "-20%",
          left: "-15%",
          background:
            "radial-gradient(circle, rgba(13,79,92,0.45) 0%, rgba(13,79,92,0.15) 45%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "aurora-drift-1 18s ease-in-out infinite alternate",
        }}
      />

      {/* Blob 2 — Violet (top-right) */}
      <div
        ref={blob2Ref}
        className="absolute will-change-transform"
        style={{
          width: "60vw",
          height: "60vw",
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0.12) 45%, transparent 70%)",
          filter: "blur(70px)",
          borderRadius: "50%",
          animation: "aurora-drift-2 22s ease-in-out infinite alternate",
        }}
      />

      {/* Blob 3 — Sage (center) */}
      <div
        ref={blob3Ref}
        className="absolute will-change-transform"
        style={{
          width: "50vw",
          height: "50vw",
          top: "30%",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(168,197,181,0.12) 0%, rgba(168,197,181,0.04) 50%, transparent 70%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          animation: "aurora-drift-3 28s ease-in-out infinite alternate",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(2,11,24,0.6) 100%)",
        }}
      />

      <style>{`
        @keyframes aurora-drift-1 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(5%, -8%) scale(1.05); }
          66%  { transform: translate(-3%, 5%) scale(0.95); }
          100% { transform: translate(8%, 3%) scale(1.08); }
        }
        @keyframes aurora-drift-2 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(-6%, 10%) scale(1.1); }
          66%  { transform: translate(4%, -5%) scale(0.92); }
          100% { transform: translate(-8%, -8%) scale(1.05); }
        }
        @keyframes aurora-drift-3 {
          0%   { transform: translate(0%, 0%) scale(1); }
          50%  { transform: translate(10%, 8%) scale(1.15); }
          100% { transform: translate(-5%, -10%) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
