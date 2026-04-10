"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassButton from "./GlassButton";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Success Stories", href: "/stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide nav on fast scroll down, show on scroll up
      if (y > lastScrollY.current + 8 && y > 120) {
        setHidden(true);
      } else if (y < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4"
        animate={{ y: hidden && !mobileOpen ? "-120%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          className={cn(
            "relative mt-4 w-full max-w-6xl rounded-2xl",
            "transition-all duration-500",
            scrolled
              ? "glass-surface-strong py-3 px-5"
              : "bg-transparent py-5 px-5"
          )}
          layout
        >
          {/* Inner highlight when scrolled */}
          {scrolled && (
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />
          )}

          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="Aivora Jobs — Home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #0d4f5c, #7c5cff)",
                  boxShadow: "0 2px 12px rgba(124,92,255,0.4)",
                }}
              >
                A
              </div>
              <span className="font-semibold text-mist tracking-tight hidden sm:block">
                Aivora Jobs
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium",
                    "text-mist/60 hover:text-mist",
                    "hover:bg-white/[0.06]",
                    "transition-all duration-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <GlassButton
                href="/book"
                variant="primary"
                className="text-xs px-5 py-2.5"
              >
                Book Free Call
              </GlassButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-mist/70 hover:text-mist hover:bg-white/[0.06] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-72 glass-surface-strong flex flex-col pt-24 pb-8 px-6 gap-2"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-mist/70 hover:text-mist hover:bg-white/[0.06] transition-all font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 pt-4 border-t border-white/[0.08]">
                <GlassButton
                  href="/book"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Free Call
                </GlassButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
