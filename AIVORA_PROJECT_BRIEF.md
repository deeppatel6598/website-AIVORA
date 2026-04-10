# AIVORA JOBS — New Website Project Brief
> Hand this file to Claude Code inside your repo. It contains the full business audit, design system, and build plan.

---

## 1. BUSINESS OVERVIEW

**Name:** Aivora Jobs
**Tagline:** Launch Your Career with Strategy
**Type:** US-based career services / placement consultancy (tech-focused)
**What they do:** Help job seekers land roles at major tech and Fortune 500 companies through resume revamp, interview prep, and end-to-end placement support.

### Contact
- **Email:** service@aivorajobs.com
- **Phone:** +1 (212) 555-0198
- **Address:** Tech Plaza, Suite 400, New York, NY 10001

---

## 2. CORE SERVICES

### 2.1 Revamp Your Resume
Refresh resumes with clear structure, strong keywords, and compelling language so candidates stand out.

### 2.2 Interview Preparation
Step-by-step technical interview prep covering concepts, practice questions, and mock sessions.

### 2.3 The Process (End-to-End Placement Pipeline)
Aivora's proprietary pipeline with three stages:

1. **Profile Building & LinkedIn Exposure** — Impactful resumes, LinkedIn optimization, personal branding to attract recruiters.
2. **Interview Prep & Support** — Personalized prep + real-time on-call support during tough interview moments.
3. **From Offer to Onboarding Support** — BGV (background verification), documentation, follow-ups, continuous assistance until joining date.

---

## 3. SOCIAL PROOF — "Placed With Leading Companies"

Logos displayed on current site:
Google, Microsoft, Amazon, Meta, Apple, Nvidia, Spotify, PayPal, Visa, Mastercard, American Express, Chase Bank, Bank of America, Goldman Sachs, Walmart, Home Depot, CVS Health, Cardinal Health, TCS, Wipro, Cognizant, Capgemini, EPAM, Accenture.

---

## 4. CURRENT SITE AUDIT

**Built on:** Zyro (template-based site builder)
**URL:** https://aivorajobs.com/

**Structure:**
- Single-page with anchor nav: Home / Resume / Interview / Process / Contact
- Hero with image + headline + Contact CTA
- 3 service cards with stock images
- Process section with 3 steps
- Logo marquee
- Contact form (Name, Email*, Location, Phone*, Message*)
- Footer with support/address

**Weaknesses:**
- Generic Zyro template look
- Zero animation or interactivity
- No story flow or scroll narrative
- No named testimonials or case studies
- No pricing or packages
- No booking calendar
- Weak CTA hierarchy
- Mobile-mediocre

---

## 5. NEW SITE — DESIGN VISION

### Theme: "Liquid Glass / iPhone visionOS"
Apple visionOS + iOS 26 Liquid Glass aesthetic. Every surface is a frosted glass pane that refracts what's behind it. Every tap, hover, and scroll has a buttery spring animation. Dark luxury base with iridescent accents.

### Visual Language
| Element | Spec |
|---|---|
| **Base background** | Deep navy → black gradient mesh with slow-moving aurora blobs |
| **Aurora colors** | Teal `#0d4f5c`, violet `#7c5cff`, sage `#a8c5b5` |
| **Glass effect** | `backdrop-filter: blur(40px) saturate(180%)` + 1px inner highlight border + subtle noise texture |
| **Heading font** | SF Pro Display or Inter Tight (huge, -2% tracking) |
| **Body font** | Inter |
| **Accent palette** | Deep teal `#0d4f5c`, sage `#a8c5b5`, pale mist `#e8f0ee` |
| **Iridescent gradient** | `#7afcff → #c4a7ff → #ffd6a5` |
| **Cursor** | Custom glass orb that morphs on hover |

### Animation Stack
- **Framer Motion** — page transitions, spring physics, layout animations
- **GSAP + ScrollTrigger** — pinned scroll storytelling
- **Lenis** — buttery smooth scroll
- **React Three Fiber + drei** — hero 3D glass orb (optional wow moment)
- **react-parallax-tilt** — glass card tilt with light refraction

### Signature Interactions
1. Glass cards tilt on cursor with light refraction following pointer
2. Magnetic buttons pull toward cursor like iOS
3. Scroll-triggered text reveal — letter-by-letter mask animation
4. Logo marquee with infinite seamless scroll and glass-blur edges
5. Glass morph wipe page transitions between routes
6. Haptic-style spring micro-bounces on every click (spring stiffness 400, damping 30)
7. Glass nav bar that shrinks and intensifies blur on scroll
8. Aurora background that subtly responds to mouse position

---

## 6. RECOMMENDED STACK

```
Framework:    Next.js 15 (App Router) + TypeScript
Styling:      Tailwind CSS v4 + shadcn/ui
Animation:    Framer Motion + GSAP + Lenis
3D:           React Three Fiber + drei (hero only)
Tilt:         react-parallax-tilt
Icons:        Lucide React
Forms:        React Hook Form + Zod
Email:        Resend (contact form)
Booking:      Cal.com embed
Deploy:       Vercel
Analytics:    Vercel Analytics + Plausible
```

---

## 7. SITE MAP

1. **Home** (`/`) — Hero, services preview, process, stats, logos, testimonials, CTA
2. **Services**
   - `/services/resume`
   - `/services/interview-prep`
   - `/services/full-placement`
3. **Process** (`/process`) — Animated 3-step scroll story
4. **Success Stories** (`/stories`) — Testimonials + anonymized placement cards
5. **Pricing** (`/pricing`) — Tiered glass cards
6. **Book a Call** (`/book`) — Cal.com embed
7. **Contact** (`/contact`)

---

## 8. HOMEPAGE SECTIONS (in order)

1. **Hero** — Full viewport. Aurora background. Massive headline "Launch Your Career with Strategy." Glass orb floating right (Three.js). Two CTAs: glass-primary "Book Free Consultation" + glass-ghost "See Our Process"
2. **Trust strip** — "500+ placed at" caption above glass-blur logo marquee
3. **Services** — 3 large tilt-on-hover glass cards
4. **The Process** — Pinned scroll story: 3 stages animate in, giant step numbers, glass timeline rail
5. **Stats counter** — 500+ placements / 50+ companies / 95% success rate (animated count-up on view)
6. **Testimonials** — Glass quote carousel
7. **FAQ** — Glass accordion
8. **Final CTA** — Big glass panel with booking button
9. **Footer** — Glass footer with newsletter signup

---

## 9. FILE STRUCTURE

```
/app
  layout.tsx
  page.tsx                     ← Home
  /services/[slug]/page.tsx
  /process/page.tsx
  /stories/page.tsx
  /pricing/page.tsx
  /book/page.tsx
  /contact/page.tsx
  /api/contact/route.ts        ← Resend handler

/components
  /ui                          ← shadcn primitives
  /glass
    GlassCard.tsx              ← reusable glass surface
    GlassButton.tsx            ← magnetic + spring
    GlassNav.tsx               ← shrinks on scroll
    GlassPanel.tsx
    GlassInput.tsx
  /animations
    AuroraBackground.tsx       ← animated gradient mesh
    MagneticButton.tsx
    TextReveal.tsx             ← letter-by-letter
    TiltCard.tsx
    SmoothScroll.tsx           ← Lenis wrapper
    PageTransition.tsx
  /sections
    Hero.tsx
    Services.tsx
    Process.tsx
    Stats.tsx
    LogoMarquee.tsx
    Testimonials.tsx
    FAQ.tsx
    CTA.tsx
    Footer.tsx
  /three
    GlassOrb.tsx               ← R3F hero element

/lib
  utils.ts
  content.ts                   ← all copy and data
  resend.ts

/public
  /logos                       ← company logos (svg/png)
  /images
  /fonts
```

---

## 10. BUILD PHASES (give to Claude Code one phase at a time)

### Phase 1 — Foundation
- Init Next.js 15 + TypeScript + Tailwind v4
- Install Framer Motion, GSAP, Lenis, react-parallax-tilt, lucide-react
- Set up shadcn/ui
- Build `SmoothScroll` Lenis wrapper in `layout.tsx`
- Build `AuroraBackground` (animated gradient mesh, fixed behind everything)
- Build glass primitives: `GlassCard`, `GlassButton`, `GlassPanel`, `GlassNav`
- Set up Tailwind theme tokens for the color palette and glass utilities

### Phase 2 — Hero + Shell
- `GlassNav` with scroll-shrink behavior
- `Hero` section with TextReveal headline, magnetic CTAs, optional R3F glass orb
- `Footer` with glass treatment and newsletter input
- Get this looking AAA before moving on

### Phase 3 — Story Sections
- `Services` — 3 tilt cards with hover light refraction
- `Process` — GSAP ScrollTrigger pinned section, 3 stages reveal as you scroll
- `Stats` — animated count-up on viewport enter

### Phase 4 — Trust + Conversion
- `LogoMarquee` — infinite scroll, mask edges with blur
- `Testimonials` — glass carousel
- `FAQ` — glass accordion
- `CTA` — final booking panel

### Phase 5 — Pages + Forms
- Sub-pages: services, process, stories, pricing, contact, book
- Contact form with React Hook Form + Zod + Resend API route
- Cal.com embed on /book

### Phase 6 — Polish + Ship
- Image optimization (next/image, AVIF)
- Lazy load Three.js
- Lighthouse pass — target 95+ on all metrics
- SEO meta + Open Graph + sitemap
- Deploy to Vercel
- Hook up analytics

---

## 11. COPY (ready to use)

### Hero
- **Headline:** Launch Your Career with Strategy
- **Sub:** Resume revamp, interview prep, and end-to-end placement support — engineered for tech professionals targeting Fortune 500 roles.
- **Primary CTA:** Book a Free Consultation
- **Secondary CTA:** See Our Process

### Services
- **Resume Revamp** — We refresh your resume with clear structure, strong keywords, and compelling language so you can confidently stand out.
- **Interview Preparation** — Technical interview prep step by step — concepts, practice questions, and mock sessions so you walk in ready.
- **Full Placement Support** — End-to-end pipeline from profile building to onboarding day.

### Process
1. **Profile Building & LinkedIn Exposure** — We craft impactful resumes, optimize your LinkedIn, and align your personal brand to attract the right opportunities.
2. **Interview Prep & Support** — Personalized prep plus real-time on-call support during tough questions and critical moments.
3. **From Offer to Onboarding** — BGV, documentation, follow-ups, continuous assistance until your joining date — stress-free transition.

### Stats
- 500+ professionals placed
- 50+ companies hired our candidates
- 95% interview success rate after prep

---

## 12. PERFORMANCE TARGETS
- Lighthouse Performance: 95+
- LCP < 2.0s
- CLS < 0.05
- INP < 200ms
- Bundle: lazy-load Three.js + GSAP, keep initial JS under 150KB

---

## 13. WHAT TO TELL CLAUDE CODE FIRST

> "Read PROJECT_BRIEF.md. We're building the new Aivora Jobs site as a Next.js 15 + Tailwind v4 project with a Liquid Glass / visionOS aesthetic. Start with Phase 1: scaffold the project, install dependencies, set up Lenis smooth scroll, build the AuroraBackground component, and build the glass primitives (GlassCard, GlassButton, GlassPanel, GlassNav). Show me the result before moving to Phase 2."
