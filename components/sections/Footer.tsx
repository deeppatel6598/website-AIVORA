"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import GlassInput from "@/components/glass/GlassInput";

const FOOTER_LINKS = {
  Services: [
    { label: "Resume Revamp", href: "/services/resume" },
    { label: "Interview Prep", href: "/services/interview-prep" },
    { label: "Full Placement", href: "/services/full-placement" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "Our Process", href: "/process" },
    { label: "Success Stories", href: "/stories" },
    { label: "Refer & Earn", href: "/refer" },
    { label: "Book a Call", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Phase 5 will wire this to Resend; for now just show success state
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative z-10 mt-8">
      {/* Top border glow */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,92,255,0.4), rgba(13,79,92,0.4), transparent)",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      >
        {/* Subtle aurora behind footer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 100%, rgba(13,79,92,0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124,92,255,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Brand column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 self-start">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #0d4f5c, #7c5cff)",
                    boxShadow: "0 4px 16px rgba(124,92,255,0.4)",
                    color: "#e8f0ee",
                  }}
                >
                  A
                </div>
                <span
                  className="text-lg font-semibold tracking-tight"
                  style={{ color: "#e8f0ee" }}
                >
                  Aivora Jobs
                </span>
              </Link>

              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(232,240,238,0.5)" }}>
                Helping tech professionals land roles at Fortune 500 companies through
                strategic resume revamp, interview prep, and end-to-end placement support.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: Mail, text: "service@aivorajobs.com", href: "mailto:service@aivorajobs.com" },
                  { icon: Phone, text: "+1 (212) 555-0198", href: "tel:+12125550198" },
                  { icon: MapPin, text: "Tech Plaza, Suite 400, New York, NY 10001", href: null },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <Icon size={14} className="mt-0.5 shrink-0" style={{ color: "#a8c5b5" }} />
                    {href ? (
                      <a
                        href={href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(232,240,238,0.5)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f0ee")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,240,238,0.5)")}
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "rgba(232,240,238,0.5)" }}>
                        {text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-2">
                <p className="text-sm font-medium mb-3" style={{ color: "#e8f0ee" }}>
                  Career tips, direct to your inbox
                </p>
                {submitted ? (
                  <motion.div
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: "#a8c5b5" }}
                  >
                    <Send size={14} />
                    You&apos;re on the list — watch your inbox.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                    <GlassInput
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email for newsletter"
                      required
                    />
                    <button
                      type="submit"
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, rgba(13,79,92,0.6), rgba(124,92,255,0.4))",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#e8f0ee",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      aria-label="Subscribe"
                    >
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group} className="flex flex-col gap-4">
                <h3
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#a8c5b5" }}
                >
                  {group}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(232,240,238,0.5)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e8f0ee")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,240,238,0.5)")}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-xs" style={{ color: "rgba(232,240,238,0.3)" }}>
              © 2025 Aivora Jobs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "rgba(232,240,238,0.3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(232,240,238,0.6)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,240,238,0.3)")}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
