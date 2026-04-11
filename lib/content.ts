// All site copy and data

export const SITE_META = {
  name: "Aivora Jobs",
  tagline: "Launch Your Career with Strategy",
  email: "service@aivorajobs.com",
  phone: "+1 (212) 555-0198",
  address: "Tech Plaza, Suite 400, New York, NY 10001",
};

export const HERO = {
  headline: "Launch Your Career with Strategy",
  sub: "Resume revamp, interview prep, and end-to-end placement support — engineered for tech professionals targeting Fortune 500 roles.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "See Our Process",
};

export const SERVICES = [
  {
    slug: "resume",
    title: "Resume Revamp",
    description:
      "We refresh your resume with clear structure, strong keywords, and compelling language so you can confidently stand out.",
    icon: "FileText",
  },
  {
    slug: "interview-prep",
    title: "Interview Preparation",
    description:
      "Technical interview prep step by step — concepts, practice questions, and mock sessions so you walk in ready.",
    icon: "MessageSquare",
  },
  {
    slug: "full-placement",
    title: "Full Placement Support",
    description:
      "End-to-end pipeline from profile building to onboarding day.",
    icon: "Rocket",
  },
];

// ── Deep service page content (mirrors competitor's per-service depth) ────────
export const SERVICE_PAGES: Record<
  string,
  {
    slug: string;
    title: string;
    tagline: string;
    hero: string;
    sub: string;
    whatWeOffer: { title: string; description: string }[];
    howItWorks: { step: string; title: string; description: string }[];
    outcomes: string[];
    faq: { question: string; answer: string }[];
  }
> = {
  resume: {
    slug: "resume",
    title: "Resume Revamp",
    tagline: "Your Resume. Rebuilt to Win.",
    hero: "Stop being filtered out before the first conversation.",
    sub: "Most resumes never reach a human. We rebuild yours with ATS-optimised structure, targeted keywords, and compelling language — so recruiters at Google, Microsoft, and Amazon actually see it.",
    whatWeOffer: [
      {
        title: "ATS Keyword Optimisation",
        description:
          "We analyse job descriptions at your target companies and engineer your resume to pass their applicant tracking systems before a recruiter ever reads a word.",
      },
      {
        title: "Achievement-First Rewriting",
        description:
          "Weak duty bullets become quantified impact statements. We translate what you did into what you delivered — the language hiring managers respond to.",
      },
      {
        title: "LinkedIn Profile Alignment",
        description:
          "Your LinkedIn is your living resume. We align both documents so recruiters find a consistent, credible, compelling story no matter where they look.",
      },
      {
        title: "Personal Brand Positioning",
        description:
          "We define your professional identity and weave it through your resume, LinkedIn headline, about section, and summary so you attract the right opportunities.",
      },
      {
        title: "One-on-One Review Sessions",
        description:
          "Work directly with an Aivora career strategist. We review, revise, and refine until you're proud of every line — no templates, no generic advice.",
      },
      {
        title: "Ongoing Format Iterations",
        description:
          "Different roles may need a different angle. We provide multiple format iterations so you have the right version for every application.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Discovery Call",
        description:
          "We start with a 30-minute call to understand your target roles, career history, and gaps. This shapes every decision we make about your resume.",
      },
      {
        step: "02",
        title: "Deep-Dive Audit",
        description:
          "Our strategist audits your current resume against ATS requirements and hiring criteria at your target companies. We identify every gap and opportunity.",
      },
      {
        step: "03",
        title: "Complete Rebuild",
        description:
          "We rewrite your resume from scratch — structure, language, keywords, and design — aligned to the roles you're targeting.",
      },
      {
        step: "04",
        title: "Review & Refine",
        description:
          "You review the draft. We iterate based on your feedback until every section is exactly right. Unlimited revisions within the engagement.",
      },
      {
        step: "05",
        title: "Final Delivery",
        description:
          "You receive your finalised resume in PDF and Word formats, plus an aligned LinkedIn rewrite and a brief strategy guide for submitting it effectively.",
      },
    ],
    outcomes: [
      "ATS-optimised resume that passes automated filters",
      "Recruiter-ready LinkedIn profile",
      "Quantified achievement statements throughout",
      "Role-specific keyword alignment",
      "Clean, professional format that renders on every device",
      "Multiple format versions for different role types",
    ],
    faq: [
      {
        question: "How long does the resume revamp take?",
        answer:
          "Most resume rebuilds are completed within 3–5 business days from the discovery call. Complex career histories or executive-level roles may take up to 7 days.",
      },
      {
        question: "Do you write resumes for all experience levels?",
        answer:
          "Yes — from recent graduates to senior engineers and director-level professionals. Our approach is tailored to your experience level and target role.",
      },
      {
        question: "Will my resume actually pass ATS filters?",
        answer:
          "Yes. We test every resume against common ATS systems used by Fortune 500 companies and iterate until it passes before final delivery.",
      },
    ],
  },

  "interview-prep": {
    slug: "interview-prep",
    title: "Interview Preparation",
    tagline: "Walk In Ready. Walk Out with an Offer.",
    hero: "The interview is where most prepared candidates still fail.",
    sub: "Technical knowledge isn't enough. You need structure, confidence, and real-time support. Our personalised interview prep — including live on-call assistance during your actual interviews — gives you every advantage.",
    whatWeOffer: [
      {
        title: "Personalised Prep Plan",
        description:
          "We study your target companies' interview formats, difficulty levels, and favourite question types — then build a prep plan tailored specifically to those interviews.",
      },
      {
        title: "Concept Drills & Mock Sessions",
        description:
          "Structured drills covering data structures, algorithms, system design, and behavioural frameworks. Full mock interviews with detailed feedback after each session.",
      },
      {
        title: "Real-Time On-Call Support",
        description:
          "Our most powerful differentiator. During your actual interview, our expert is on standby via call — ready to guide you through a difficult problem in real time.",
      },
      {
        title: "Behavioural Coaching",
        description:
          "We coach you on STAR-format answers, executive presence, and how to tell your career story compellingly to any interviewer at any level.",
      },
      {
        title: "Virtual Workshops & Resources",
        description:
          "Access to our library of interview prep resources: video walkthroughs, concept articles, live webinars, and interactive workshops — available on demand.",
      },
      {
        title: "Post-Interview Debrief",
        description:
          "Every interview — pass or fail — gets a full debrief. We identify what worked, what didn't, and recalibrate your prep for the next round.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Role & Company Analysis",
        description:
          "We map out the exact interview structure at your target company — rounds, question types, difficulty, and what interviewers actually care about.",
      },
      {
        step: "02",
        title: "Custom Prep Schedule",
        description:
          "Based on your timeline, we build a day-by-day prep schedule with specific topics, drills, and mock sessions paced for your interview date.",
      },
      {
        step: "03",
        title: "Daily Drills & Weekly Mocks",
        description:
          "Daily concept work plus weekly full mock interview sessions with real feedback — mirroring the actual interview environment as closely as possible.",
      },
      {
        step: "04",
        title: "Live Support on Interview Day",
        description:
          "On the day of your interview, our expert is on standby. If you hit a hard problem, a quick break gives you access to real-time guidance.",
      },
      {
        step: "05",
        title: "Debrief & Next Steps",
        description:
          "After every interview we debrief within 24 hours, update your prep plan, and prepare you for the next round or next company.",
      },
    ],
    outcomes: [
      "Deep familiarity with your target company's interview format",
      "Structured approach to any technical problem",
      "Confident, well-practised behavioural answers",
      "Real-time on-call support during live interviews",
      "Post-interview debrief and iteration after every round",
      "95% success rate among clients who complete full prep",
    ],
    faq: [
      {
        question: "How does real-time on-call support work during my interview?",
        answer:
          "You keep a secondary device handy. If you hit a problem that stumps you, request a comfort break and connect with your Aivora expert via call for immediate guidance — without the interviewer knowing.",
      },
      {
        question: "How far in advance should I start prep?",
        answer:
          "Ideally 4–6 weeks before your target interview date. However, we can run an accelerated programme in as little as 2 weeks for candidates with a strong technical baseline.",
      },
      {
        question: "Do you cover system design interviews?",
        answer:
          "Yes. System design is a dedicated module — covering distributed systems, scalability, database design, and API architecture — for senior and staff-level roles.",
      },
    ],
  },

  "full-placement": {
    slug: "full-placement",
    title: "Full Placement Support",
    tagline: "Your Confidant, Coach, Mentor & Agent.",
    hero: "We're not just a placement service — we're your career partner.",
    sub: "From the moment you join to the day you walk into your new office, Aivora is with you at every step. Resume, LinkedIn, applications, interview prep, offer negotiation, BGV, documentation, and onboarding — zero gaps.",
    whatWeOffer: [
      {
        title: "End-to-End Pipeline Management",
        description:
          "We manage your entire job search pipeline — from identifying the right roles and companies to submitting optimised applications and tracking every opportunity.",
      },
      {
        title: "Profile Building & LinkedIn Exposure",
        description:
          "Complete resume rebuild, LinkedIn optimisation, and personal brand alignment to attract inbound interest from recruiters at your target companies.",
      },
      {
        title: "Interview Prep & Live Support",
        description:
          "Full interview preparation programme including mock sessions, concept drills, behavioural coaching, and real-time on-call support during live interviews.",
      },
      {
        title: "Offer Negotiation Coaching",
        description:
          "We coach you through salary negotiation, equity discussions, and benefits evaluation — ensuring you maximise every offer you receive.",
      },
      {
        title: "BGV & Documentation Support",
        description:
          "Background verification preparation, documentation checklist, and step-by-step guidance through every onboarding requirement until your joining date.",
      },
      {
        title: "Dedicated Career Strategist",
        description:
          "A single Aivora strategist manages your entire journey — available via call, chat, and email. Not a ticketing system. A real person who knows your case.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Comprehensive Profile Assessment",
        description:
          "We begin with a deep assessment of your experience, skills, target roles, and market positioning to define a precise placement strategy.",
      },
      {
        step: "02",
        title: "Resume & LinkedIn Rebuild",
        description:
          "Complete profile rebuild — ATS-optimised resume, aligned LinkedIn, and a personal brand that attracts the right opportunities before you apply to a single role.",
      },
      {
        step: "03",
        title: "Targeted Application Campaign",
        description:
          "We identify and prioritise roles at your target companies, optimise every application, and track your pipeline to ensure consistent forward momentum.",
      },
      {
        step: "04",
        title: "Interview Prep & Live Support",
        description:
          "Tailored interview preparation for every role in your pipeline, plus real-time on-call support on the day of each interview.",
      },
      {
        step: "05",
        title: "Offer to Onboarding",
        description:
          "From the moment you receive an offer to your first day on the job — negotiation, BGV, documentation, and onboarding support so the transition is completely stress-free.",
      },
    ],
    outcomes: [
      "Complete end-to-end management from profile to offer",
      "ATS-optimised resume and LinkedIn profile",
      "Targeted applications to Fortune 500 companies",
      "Mock interviews and real-time on-call support",
      "Offer negotiation coaching",
      "BGV prep, documentation support, and onboarding check-ins",
    ],
    faq: [
      {
        question: "What makes Full Placement Support different from the other packages?",
        answer:
          "Full Placement is a done-with-you engagement that covers everything from day one to joining day. You have a dedicated strategist, we manage your pipeline, and support continues through BGV and onboarding — not just until you get an offer.",
      },
      {
        question: "Do you work with candidates who are currently employed?",
        answer:
          "Absolutely. Many of our clients are employed and seeking a strategic move. We work around your schedule and ensure complete discretion throughout the process.",
      },
      {
        question: "Is there a job guarantee?",
        answer:
          "Our Elite plan includes a placement commitment. See our Pricing page for full details on each plan's guarantee terms.",
      },
    ],
  },
};

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Profile Building & LinkedIn Exposure",
    description:
      "We craft impactful resumes, optimize your LinkedIn, and align your personal brand to attract the right opportunities.",
  },
  {
    step: 2,
    title: "Interview Prep & Support",
    description:
      "Personalized prep plus real-time on-call support during tough questions and critical moments.",
  },
  {
    step: 3,
    title: "From Offer to Onboarding",
    description:
      "BGV, documentation, follow-ups, continuous assistance until your joining date — stress-free transition.",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Professionals Placed" },
  { value: 50, suffix: "+", label: "Companies Hired Our Candidates" },
  { value: 95, suffix: "%", label: "Interview Success Rate After Prep" },
];

export const COMPANIES = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Nvidia",
  "Spotify",
  "PayPal",
  "Visa",
  "Mastercard",
  "American Express",
  "Chase Bank",
  "Bank of America",
  "Goldman Sachs",
  "Walmart",
  "Home Depot",
  "CVS Health",
  "Cardinal Health",
  "TCS",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "EPAM",
  "Accenture",
];

export const TESTIMONIALS = [
  {
    name: "A.K.",
    role: "Software Engineer @ Google",
    quote:
      "Aivora completely transformed my resume and got me past the ATS wall I'd been hitting for months. Landed my dream role in 6 weeks.",
  },
  {
    name: "P.M.",
    role: "Data Analyst @ Microsoft",
    quote:
      "The mock interviews were incredibly realistic. The real-time support during my panel interview was a game-changer I didn't know I needed.",
  },
  {
    name: "S.R.",
    role: "Product Manager @ Amazon",
    quote:
      "End-to-end support that actually means end-to-end. They helped me even after the offer — BGV, docs, joining day. Stress-free.",
  },
  {
    name: "J.T.",
    role: "DevOps Engineer @ Accenture",
    quote:
      "I had two failed attempts before Aivora. Their structured prep and LinkedIn optimization made all the difference. Highly recommend.",
  },
];

// ── Extended stories for /stories page ───────────────────────────────────────
export const STORIES = [
  {
    initials: "A.K.",
    role: "Software Engineer",
    company: "Google",
    timeline: "6 weeks",
    service: "Resume Revamp + Interview Prep",
    quote:
      "Aivora completely transformed my resume and got me past the ATS wall I'd been hitting for months. Landed my dream role in 6 weeks.",
    color: "#7afcff",
    glowRgb: "122,252,255",
  },
  {
    initials: "P.M.",
    role: "Data Analyst",
    company: "Microsoft",
    timeline: "8 weeks",
    service: "Full Placement Support",
    quote:
      "The mock interviews were incredibly realistic. The real-time support during my panel interview was a game-changer I didn't know I needed.",
    color: "#c4a7ff",
    glowRgb: "196,167,255",
  },
  {
    initials: "S.R.",
    role: "Product Manager",
    company: "Amazon",
    timeline: "5 weeks",
    service: "Full Placement Support",
    quote:
      "End-to-end support that actually means end-to-end. They helped me even after the offer — BGV, docs, joining day. Stress-free.",
    color: "#ffd6a5",
    glowRgb: "255,214,165",
  },
  {
    initials: "J.T.",
    role: "DevOps Engineer",
    company: "Accenture",
    timeline: "10 weeks",
    service: "Interview Prep",
    quote:
      "I had two failed attempts before Aivora. Their structured prep and LinkedIn optimization made all the difference.",
    color: "#a8c5b5",
    glowRgb: "168,197,181",
  },
  {
    initials: "R.N.",
    role: "Senior Software Engineer",
    company: "Meta",
    timeline: "7 weeks",
    service: "Full Placement Support",
    quote:
      "The on-call support during my Meta system design round was the edge I needed. My Aivora strategist was on the line the whole time. Passed all four rounds.",
    color: "#7afcff",
    glowRgb: "122,252,255",
  },
  {
    initials: "D.L.",
    role: "Data Engineer",
    company: "Goldman Sachs",
    timeline: "9 weeks",
    service: "Resume Revamp",
    quote:
      "I was getting zero callbacks with my old resume. After the Aivora revamp I had three first-round interviews within two weeks. The keyword strategy is real.",
    color: "#c4a7ff",
    glowRgb: "196,167,255",
  },
];

// ── Pricing tiers ─────────────────────────────────────────────────────────────
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Build your foundation",
    price: null, // Contact for pricing
    guarantee: null,
    highlight: false,
    description:
      "Perfect for professionals who need a strong resume and LinkedIn presence to start generating interviews independently.",
    features: [
      "ATS-optimised resume rebuild",
      "LinkedIn profile optimisation",
      "Personal brand positioning",
      "1 round of revisions",
      "PDF + Word delivery",
      "Email support",
    ],
    notIncluded: [
      "Interview prep sessions",
      "On-call interview support",
      "Application pipeline management",
      "Offer negotiation coaching",
      "BGV & onboarding support",
    ],
    cta: "Get Started",
    color: "#a8c5b5",
    glowRgb: "168,197,181",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Prep and place",
    price: null,
    guarantee: "Placement support commitment",
    highlight: true,
    description:
      "Our most popular plan. Resume + LinkedIn rebuild combined with full interview prep, mock sessions, and on-call support on interview day.",
    features: [
      "Everything in Starter",
      "Personalised interview prep plan",
      "5 mock interview sessions",
      "Real-time on-call interview support",
      "Behavioural coaching (STAR framework)",
      "Post-interview debrief after every round",
      "Access to video & workshop library",
      "Priority email + chat support",
    ],
    notIncluded: [
      "Application pipeline management",
      "Offer negotiation coaching",
      "BGV & onboarding support",
    ],
    cta: "Most Popular — Start Here",
    color: "#c4a7ff",
    glowRgb: "196,167,255",
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "End-to-end, zero gaps",
    price: null,
    guarantee: "Placement guarantee included",
    highlight: false,
    description:
      "Full end-to-end placement pipeline. We manage everything — from profile to offer letter to first day — with a dedicated career strategist.",
    features: [
      "Everything in Pro",
      "Dedicated career strategist",
      "End-to-end application pipeline management",
      "Unlimited mock interview sessions",
      "Offer negotiation coaching",
      "BGV preparation & documentation support",
      "Onboarding check-ins until joining date",
      "Priority phone + chat support",
      "Placement guarantee",
    ],
    notIncluded: [],
    cta: "Apply for Elite",
    color: "#7afcff",
    glowRgb: "122,252,255",
  },
];

// ── Refer & Earn ──────────────────────────────────────────────────────────────
export const REFER = {
  headline: "Refer a Friend. Earn a Reward.",
  sub: "Know someone who's job hunting? Refer them to Aivora and earn a bonus when they get placed. It's that simple.",
  howItWorks: [
    {
      step: "01",
      title: "Share Your Referral",
      description:
        "Fill out the referral form below with your friend's name and email, or share your personal referral link. We'll reach out to them within 24 hours.",
    },
    {
      step: "02",
      title: "They Enroll in a Plan",
      description:
        "Your referred friend books a free consultation and enrolls in any paid Aivora plan (Starter, Pro, or Elite).",
    },
    {
      step: "03",
      title: "They Get Placed. You Get Paid.",
      description:
        "Once your referred friend successfully lands their role, your referral bonus is credited within 15 business days of placement confirmation.",
    },
  ],
  terms: [
    "Referral bonus is credited within 15 business days of the referred candidate's successful placement confirmation.",
    "Eligible for referrals who enrol in Starter, Pro, or Elite plans.",
    "The referred candidate must complete their placement through Aivora for the bonus to apply.",
    "There is no limit to the number of friends you can refer.",
    "Bonus amount will be confirmed at the time of referral registration.",
    "Aivora reserves the right to modify the referral programme terms with 30 days' notice.",
  ],
  faq: [
    {
      question: "When do I receive my referral bonus?",
      answer:
        "Your bonus is credited within 15 business days of your referred friend's successful placement confirmation. You'll receive a notification when it's processed.",
    },
    {
      question: "Is there a limit on how many friends I can refer?",
      answer:
        "No limit. Refer as many friends as you like — each successful placement earns you a bonus.",
    },
    {
      question: "Does my friend need to get placed for me to earn the bonus?",
      answer:
        "Yes. The referral bonus applies upon successful placement. If your friend enrolls but doesn't complete the programme, the bonus does not apply.",
    },
    {
      question: "Can I refer someone who is already an Aivora client?",
      answer:
        "No. Referrals must be new clients who have not previously engaged with Aivora's services.",
    },
  ],
};

export const FAQS = [
  {
    question: "How long does the placement process take?",
    answer:
      "The timeline varies based on your target roles and interview readiness. On average, clients land their target role within 4–8 weeks of starting our process.",
  },
  {
    question: "Do you only help with tech roles?",
    answer:
      "We specialize in tech and tech-adjacent roles at Fortune 500 companies — software engineering, data, product, DevOps, IT consulting, and more.",
  },
  {
    question: "What if I fail an interview during the process?",
    answer:
      "We debrief every interview, identify gaps, and re-calibrate your prep. Our 95% success rate reflects persistent, iterative improvement — not a one-shot approach.",
  },
  {
    question: "Is the Free Consultation actually free?",
    answer:
      "100% free, no obligation. It's a 30-minute strategy call where we assess your profile, goals, and fit for our programs.",
  },
  {
    question: "Do you offer support after I receive an offer?",
    answer:
      "Yes. Our Full Placement Support package covers BGV assistance, documentation, negotiation guidance, and check-ins until your joining date.",
  },
  {
    question: "Do you work with candidates who are already employed?",
    answer:
      "Absolutely. Many of our clients are strategically transitioning from one role to another. We work around your schedule with complete discretion.",
  },
  {
    question: "Which industries and sectors do you focus on?",
    answer:
      "We focus on technology, finance, and Fortune 500 companies across all sectors. Our clients land roles at companies including Google, Microsoft, Amazon, Goldman Sachs, Accenture, and more.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask that you discuss any concerns with your dedicated strategist first — we can almost always find a resolution. Cancellation terms vary by plan and are detailed in your service agreement.",
  },
];
