"use client";

import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1 · Hero */}
      <Hero />

      {/* 2 · Trust strip — logo marquee */}
      <LogoMarquee />

      {/* 3 · Services — tilt cards */}
      <Services />

      {/* 4 · Process — pinned GSAP scroll story */}
      <Process />

      {/* 5 · Stats — count-up */}
      <Stats />

      {/* 6 · Testimonials — glass carousel */}
      <Testimonials />

      {/* 7 · FAQ — glass accordion */}
      <FAQ />

      {/* 8 · Final CTA */}
      <CTA />
    </div>
  );
}
