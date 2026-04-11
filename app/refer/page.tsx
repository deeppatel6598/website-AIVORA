"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Gift, CheckCircle2, ArrowRight, Send, AlertCircle } from "lucide-react";
import { REFER } from "@/lib/content";
import GlassInput from "@/components/glass/GlassInput";
import GlassButton from "@/components/glass/GlassButton";
import CTA from "@/components/sections/CTA";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const schema = z.object({
  referrerName: z.string().min(2, "Your name must be at least 2 characters"),
  referrerEmail: z.string().email("Please enter your email"),
  friendName: z.string().min(2, "Friend's name must be at least 2 characters"),
  friendEmail: z.string().email("Please enter your friend's email"),
});

type FormValues = z.infer<typeof schema>;

const STEP_COLORS = ["#7afcff", "#c4a7ff", "#ffd6a5"];
const STEP_GLOW = ["122,252,255", "196,167,255", "255,214,165"];

export default function ReferPage() {
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
      body: JSON.stringify({ type: "referral", ...data }),
    });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col pt-28">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(255,214,165,0.12)",
              border: "1px solid rgba(255,214,165,0.25)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Gift size={28} style={{ color: "#ffd6a5" }} />
          </motion.div>

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#a8c5b5" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
          >
            Refer &amp; Earn
          </motion.p>
          <motion.h1
            className="display-lg"
            style={{ color: "#e8f0ee" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {REFER.headline.split(".")[0]}.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {REFER.headline.split(".")[1]?.trim()}
            </span>
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(232,240,238,0.62)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          >
            {REFER.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
          >
            <GlassButton
              href="#referral-form"
              variant="primary"
              className="px-8 py-3.5 font-semibold"
            >
              Refer a Friend Now <ArrowRight size={16} />
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#a8c5b5" }}
            >
              The Process
            </p>
            <h2 className="display-md" style={{ color: "#e8f0ee" }}>
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REFER.howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                className="relative rounded-3xl p-7 flex flex-col gap-4 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
              >
                {/* Accent top border */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${STEP_COLORS[i]}, transparent)`,
                    opacity: 0.6,
                  }}
                />
                {/* Corner glow */}
                <div
                  aria-hidden
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, rgba(${STEP_GLOW[i]},0.15) 0%, transparent 70%)`,
                    filter: "blur(16px)",
                  }}
                />

                <span
                  className="text-4xl font-bold leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${STEP_COLORS[i]}, rgba(255,255,255,0.4))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Inter Tight', sans-serif",
                  }}
                >
                  {item.step}
                </span>
                <h3
                  className="font-semibold text-base"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232,240,238,0.58)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral form ────────────────────────────────────────────────── */}
      <section id="referral-form" className="px-6 lg:px-12 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div
            className="rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <CheckCircle2 size={48} style={{ color: "#7afcff" }} />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Referral submitted!
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "rgba(232,240,238,0.58)" }}
                >
                  We&apos;ll reach out to your friend within 24 hours. Your bonus
                  will be credited within 15 business days of their successful
                  placement.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Submit a referral
                </h2>
                <p
                  className="text-sm mb-7"
                  style={{ color: "rgba(232,240,238,0.5)" }}
                >
                  Fill in your details and your friend&apos;s — we&apos;ll handle
                  the rest.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="pb-4 mb-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-4"
                      style={{ color: "#a8c5b5" }}
                    >
                      Your details
                    </p>
                    <div className="flex flex-col gap-4">
                      <GlassInput
                        label="Your Name"
                        placeholder="Your full name"
                        error={errors.referrerName?.message}
                        {...register("referrerName")}
                      />
                      <GlassInput
                        label="Your Email"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.referrerEmail?.message}
                        {...register("referrerEmail")}
                      />
                    </div>
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-4"
                      style={{ color: "#a8c5b5" }}
                    >
                      Friend&apos;s details
                    </p>
                    <div className="flex flex-col gap-4">
                      <GlassInput
                        label="Friend's Name"
                        placeholder="Their full name"
                        error={errors.friendName?.message}
                        {...register("friendName")}
                      />
                      <GlassInput
                        label="Friend's Email"
                        type="email"
                        placeholder="friend@email.com"
                        error={errors.friendEmail?.message}
                        {...register("friendEmail")}
                      />
                    </div>
                  </div>

                  <GlassButton
                    type="submit"
                    variant="primary"
                    className="w-full justify-center font-semibold mt-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting…" : "Submit Referral"}{" "}
                    <Send size={15} />
                  </GlassButton>
                </form>
              </>
            )}
          </motion.div>

          {/* Terms + FAQ */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          >
            {/* Terms */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <AlertCircle size={16} style={{ color: "#ffd6a5" }} />
                <h3
                  className="text-base font-semibold"
                  style={{ color: "#e8f0ee", fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Programme terms
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {REFER.terms.map((term) => (
                  <li key={term} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ background: "rgba(255,214,165,0.6)" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(232,240,238,0.58)" }}
                    >
                      {term}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Refer FAQ */}
            <div className="flex flex-col gap-3">
              {REFER.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-sm"
                    style={{ color: "#e8f0ee" }}
                  >
                    {item.question}
                  </summary>
                  <div
                    className="px-6 pb-5 pt-2 text-sm leading-relaxed"
                    style={{
                      color: "rgba(232,240,238,0.58)",
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
