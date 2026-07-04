"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Legacy", href: "#legacy", index: "01" },
  { label: "Practice", href: "#practice", index: "02" },
  { label: "Philosophy", href: "#philosophy", index: "03" },
  { label: "Advocates", href: "#advocates", index: "04" },
  { label: "Capabilities", href: "#capabilities", index: "05" },
  { label: "Insights", href: "#insights", index: "06" },
  { label: "Careers", href: "#careers", index: "07" },
  { label: "Contact", href: "#contact", index: "08" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--parchment)]/85 backdrop-blur-md border-b border-[var(--ink)]/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="group flex items-baseline gap-2"
            aria-label="S & S Law Firm — home"
          >
            <span className="font-display text-2xl tracking-tight text-[var(--ink)]">
              S <span className="text-[var(--oxblood)]">&amp;</span> S
            </span>
            <span className="hidden font-mono-label text-[10px] text-[var(--slate)] sm:inline">
              Law Firm
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-reveal font-mono-label text-[11px] text-[var(--ink)]/80 hover:text-[var(--oxblood)]"
              >
                <span className="text-[var(--slate)]/60 mr-1">§{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded-full border border-[var(--ink)]/30 px-5 py-2 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--oxblood)] hover:bg-[var(--oxblood)] hover:text-[var(--parchment)] md:inline-flex"
            >
              Engage the Firm
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink)]/20 text-[var(--ink)] lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[var(--ink)] text-[var(--parchment)] lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-2xl">
                S <span className="text-[var(--brass)]">&amp;</span> S
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--parchment)]/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-6 pt-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline gap-4 border-b border-[var(--parchment)]/10 py-5"
                >
                  <span className="font-mono-label text-[11px] text-[var(--brass)]">
                    §{item.index}
                  </span>
                  <span className="font-display text-3xl text-[var(--parchment)] group-hover:text-[var(--brass-bright)]">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="hairline-light mb-5" />
              <p className="font-mono-label text-[10px] text-[var(--parchment)]/50">
                Est. 1990 · Diwakar Sinha, Advocate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
