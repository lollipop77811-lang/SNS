"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "li" | "p" | "h2" | "h3";
  once?: boolean;
};

/**
 * Wrap any content for a soft, editorial scroll-linked reveal.
 * Honors prefers-reduced-motion via Framer Motion's defaults.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}
