"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import GlassInput from "@/components/glass/GlassInput";
import GlassButton from "@/components/glass/GlassButton";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  "Resume Revamp",
  "Interview Prep",
  "Full Placement Support",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col pt-28">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          >
            Let&apos;s talk about{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your career
            </span>
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          >
            Whether you have questions about our services or are ready to start,
            we&apos;d love to hear from you. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Form + info ─────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact form */}
          <motion.div
            className="lg:col-span-3 rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-12 text-center">
                <CheckCircle2 size={48} style={{ color: "#7afcff" }} />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Message received!
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "rgba(232,240,238,0.58)" }}
                >
                  Thank you for reaching out. A member of our team will be in
                  touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="text-xl font-semibold mb-7"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <GlassInput
                      label="Full Name"
                      placeholder="Alex Johnson"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <GlassInput
                      label="Email Address"
                      type="email"
                      placeholder="alex@example.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <GlassInput
                    label="Phone (optional)"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                  />

                  {/* Service dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-medium"
                      style={{ color: "rgba(232,240,238,0.7)" }}
                    >
                      Service Interest
                    </label>
                    <select
                      {...register("service")}
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${errors.service ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: "rgba(232,240,238,0.8)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      <option value="" disabled style={{ background: "#0a1628" }}>
                        Select a service…
                      </option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s} style={{ background: "#0a1628" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs" style={{ color: "rgba(248,113,113,0.8)" }}>
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-medium"
                      style={{ color: "rgba(232,240,238,0.7)" }}
                    >
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your background and what you're looking for…"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${errors.message ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: "rgba(232,240,238,0.8)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    />
                    {errors.message && (
                      <p className="text-xs" style={{ color: "rgba(248,113,113,0.8)" }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <GlassButton
                    type="submit"
                    variant="primary"
                    className="w-full justify-center font-semibold mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Send Message"} <Send size={15} />
                  </GlassButton>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          >
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <h3
                className="text-base font-semibold mb-6"
                style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
              >
                Contact information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "service@aivorajobs.com",
                    href: "mailto:service@aivorajobs.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (212) 555-0198",
                    href: "tel:+12125550198",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Tech Plaza, Suite 400\nNew York, NY 10001",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(122,252,255,0.1)",
                        border: "1px solid rgba(122,252,255,0.2)",
                      }}
                    >
                      <Icon size={16} style={{ color: "#7afcff" }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#a8c5b5" }}
                      >
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm"
                          style={{ color: "rgba(232,240,238,0.7)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <span
                          className="text-sm whitespace-pre-line"
                          style={{ color: "rgba(232,240,238,0.7)" }}
                        >
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 24-hour response badge */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "rgba(122,252,255,0.06)",
                border: "1px solid rgba(122,252,255,0.15)",
              }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#7afcff" }}>
                ⚡ 24-hour response
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(232,240,238,0.55)" }}>
                Every enquiry is read and responded to by a human strategist —
                not an automated system.
              </p>
            </div>

            {/* Book instead */}
            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-sm font-medium mb-3" style={{ color: "rgba(232,240,238,0.6)" }}>
                Prefer to talk directly?
              </p>
              <GlassButton href="/book" variant="ghost" className="w-full justify-center text-sm">
                Book a free 30-min call
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
