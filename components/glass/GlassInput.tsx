"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-mist/70">{label}</label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mist/40 pointer-events-none">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-xl text-sm",
              "bg-white/[0.04] backdrop-blur-xl",
              "border border-white/10",
              "text-mist placeholder:text-mist/30",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
              "outline-none transition-all duration-200",
              "focus:border-teal-light/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(13,79,92,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]",
              icon && "pl-10",
              error && "border-red-400/50 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.25)]",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400/80">{error}</p>}
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";
export default GlassInput;
