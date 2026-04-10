import AuroraBackground from "@/components/animations/AuroraBackground";
import GlassNav from "@/components/glass/GlassNav";
import GlassCard from "@/components/glass/GlassCard";
import GlassButton from "@/components/glass/GlassButton";
import GlassPanel from "@/components/glass/GlassPanel";
import { FileText, MessageSquare, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <GlassNav />

      <main className="relative z-10">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(13,79,92,0.15)",
                border: "1px solid rgba(13,79,92,0.4)",
                color: "#a8c5b5",
              }}
            >
              <CheckCircle2 size={12} />
              500+ professionals placed at Fortune 500 companies
            </div>

            {/* Headline */}
            <h1 className="display-xl text-center" style={{ color: "#e8f0ee" }}>
              Launch Your Career{" "}
              <span className="iridescent-text">with Strategy</span>
            </h1>

            {/* Sub */}
            <p
              className="max-w-2xl text-lg leading-relaxed text-center"
              style={{ color: "rgba(232,240,238,0.65)" }}
            >
              Resume revamp, interview prep, and end-to-end placement support —
              engineered for tech professionals targeting Fortune 500 roles.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton href="/book" variant="primary" className="text-sm px-8 py-3.5">
                Book a Free Consultation
                <ArrowRight size={16} />
              </GlassButton>
              <GlassButton href="/#process" variant="ghost" className="text-sm px-8 py-3.5">
                See Our Process
              </GlassButton>
            </div>
          </div>
        </section>

        {/* ── Services Preview ─────────────────────────────────────────────── */}
        <section id="services" className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#a8c5b5" }}
              >
                What We Do
              </p>
              <h2
                className="display-lg"
                style={{ color: "#e8f0ee" }}
              >
                Three paths to your{" "}
                <span className="iridescent-text">next role</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Resume Revamp",
                  description:
                    "We refresh your resume with clear structure, strong keywords, and compelling language so you can confidently stand out.",
                  glow: "rgba(13,79,92,0.35)",
                },
                {
                  icon: MessageSquare,
                  title: "Interview Preparation",
                  description:
                    "Technical interview prep step by step — concepts, practice questions, and mock sessions so you walk in ready.",
                  glow: "rgba(124,92,255,0.3)",
                },
                {
                  icon: Rocket,
                  title: "Full Placement Support",
                  description:
                    "End-to-end pipeline from profile building to onboarding day.",
                  glow: "rgba(168,197,181,0.25)",
                },
              ].map((service) => (
                <GlassCard
                  key={service.title}
                  glowColor={service.glow}
                  tiltEnabled
                >
                  <div className="flex flex-col gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: service.glow,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <service.icon size={18} style={{ color: "#e8f0ee" }} />
                    </div>
                    <h3
                      className="font-semibold text-lg tracking-tight"
                      style={{ color: "#e8f0ee" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(232,240,238,0.6)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Preview ──────────────────────────────────────────────── */}
        <section id="process" className="px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#a8c5b5" }}
              >
                The Process
              </p>
              <h2 className="display-lg" style={{ color: "#e8f0ee" }}>
                From profile to{" "}
                <span className="iridescent-text">offer letter</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  step: "01",
                  title: "Profile Building & LinkedIn Exposure",
                  description:
                    "We craft impactful resumes, optimize your LinkedIn, and align your personal brand to attract the right opportunities.",
                },
                {
                  step: "02",
                  title: "Interview Prep & Support",
                  description:
                    "Personalized prep plus real-time on-call support during tough questions and critical moments.",
                },
                {
                  step: "03",
                  title: "From Offer to Onboarding",
                  description:
                    "BGV, documentation, follow-ups, continuous assistance until your joining date — stress-free transition.",
                },
              ].map((item, i) => (
                <GlassPanel
                  key={item.step}
                  variant="subtle"
                  rounded="2xl"
                  className="p-6 flex items-start gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  animate={false}
                >
                  <div
                    className="shrink-0 font-bold text-4xl leading-none"
                    style={{
                      background: "linear-gradient(135deg, #7afcff, #c4a7ff, #ffd6a5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Inter Tight', sans-serif",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "#e8f0ee" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(232,240,238,0.6)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────── */}
        <section className="px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <GlassPanel
              variant="strong"
              rounded="3xl"
              className="p-12 text-center flex flex-col items-center gap-8"
            >
              <div className="flex flex-col gap-4">
                <h2 className="display-md" style={{ color: "#e8f0ee" }}>
                  Ready to land your{" "}
                  <span className="iridescent-text">dream role?</span>
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-md mx-auto"
                  style={{ color: "rgba(232,240,238,0.6)" }}
                >
                  Book a free 30-minute strategy call. No obligation — just a
                  clear roadmap to your next opportunity.
                </p>
              </div>
              <GlassButton href="/book" variant="primary" className="px-10 py-4 text-base">
                Book a Free Consultation
                <ArrowRight size={18} />
              </GlassButton>
            </GlassPanel>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 text-center py-8 px-4 border-t border-white/[0.06]">
        <p className="text-xs" style={{ color: "rgba(232,240,238,0.35)" }}>
          © 2025 Aivora Jobs · service@aivorajobs.com · +1 (212) 555-0198
        </p>
      </footer>
    </div>
  );
}
