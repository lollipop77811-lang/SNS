"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type DuotoneMediaProps = {
  src: string;
  alt: string;
  /** Priority for above-the-fold images (passed to next/image). Ignored for video. */
  priority?: boolean;
  /** sizes attribute for next/image. Ignored for video. */
  sizes?: string;
};

/**
 * Renders a media element inside the .duotone treatment.
 * Automatically detects .mp4 / .webm / .mov sources and renders a
 * muted, looping, autoplaying <video> instead of an <Image>.
 *
 * Browsers block autoplay until a user gesture has occurred on the page.
 * The disclaimer modal dismissal counts as that gesture, so by the time
 * the visitor reaches the advocate section, play() will succeed. We also
 * attempt play() on mount and on document visibility change as a fallback.
 */
export function DuotoneMedia({
  src,
  alt,
  priority = false,
  sizes,
}: DuotoneMediaProps) {
  const isVideo = /\.(mp4|webm|mov|m4v)(\?|$)/i.test(src);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo) return;
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* Autoplay blocked — will retry on next user gesture. */
        });
      }
    };

    // Try immediately on mount.
    tryPlay();

    // Retry on any user interaction (covers the case where the
    // video mounted before the first user gesture).
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture, true);
    };
    window.addEventListener("pointerdown", onFirstGesture, { once: true });
    window.addEventListener("keydown", onFirstGesture, { once: true });
    window.addEventListener("scroll", onFirstGesture, { once: true, capture: true });

    // Retry when the tab becomes visible again.
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture, true);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isVideo]);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
        preload="metadata"
        // Disable context menu / download prompt on the ambient video.
        onContextMenu={(e) => e.preventDefault()}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      priority={priority}
    />
  );
}
