"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  variant?: "solid" | "outline" | "ghost";
  ariaLabel?: string;
};

/**
 * Magnetic, slightly spring-tracked CTA.
 * Used for hero and contact calls to action.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 18,
  variant = "solid",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 will-change-transform";

  const variantClasses = {
    solid:
      "bg-[var(--oxblood)] text-[var(--parchment)] hover:bg-[var(--ink)] border border-transparent",
    outline:
      "bg-transparent text-[var(--ink)] border border-[var(--ink)]/30 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--parchment)]",
    ghost:
      "bg-transparent text-[var(--ink)] border border-transparent hover:text-[var(--oxblood)]",
  };

  const content = (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
}
