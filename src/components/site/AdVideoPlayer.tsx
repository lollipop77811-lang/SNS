"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Ad-style popup video player.
 *
 * Plays a fixed sequence of videos as floating side popups (like ads).
 * The close button only appears after ALL videos in the sequence have
 * been watched to completion. Plays once per browser session (using
 * sessionStorage), so it triggers on the first visit/reload of a session.
 *
 * Sequence (as specified):
 *   1. chadda
 *   2. gun_vid
 *   3. date_pe_date
 *   4. gun_vid
 *   5. llb2
 *   6. gun_vid
 *   7. kaun hai
 *   8. gun_vid
 */

const VIDEO_SEQUENCE = [
  { src: "/videos/chadda.mp4", label: "Chadda" },
  { src: "/videos/gun_vid.mp4", label: "Gun" },
  { src: "/videos/date_pe_date.mp4", label: "Date Pe Date" },
  { src: "/videos/gun_vid.mp4", label: "Gun" },
  { src: "/videos/llb2.mp4", label: "LLB 2" },
  { src: "/videos/gun_vid.mp4", label: "Gun" },
  { src: "/videos/kaun_hai.mp4", label: "Kaun Hai" },
  { src: "/videos/gun_vid.mp4", label: "Gun" },
];

const SESSION_KEY = "ss-law-ad-videos-played-2026";
const DISCLAIMER_KEY = "ss-law-disclaimer-ack-2026";

export function AdVideoPlayer() {
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allWatched, setAllWatched] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Trigger once per session, but ONLY after the disclaimer is acknowledged.
  // The disclaimer click provides the user gesture needed for autoplay.
  useEffect(() => {
    try {
      const played = sessionStorage.getItem(SESSION_KEY);
      if (played) return; // Already played this session.

      // Poll for disclaimer acknowledgment.
      const check = () => {
        const ack = sessionStorage.getItem(DISCLAIMER_KEY);
        if (ack) {
          // Disclaimer dismissed — small delay so the modal finishes closing.
          setTimeout(() => setActive(true), 600);
          return true; // Stop polling.
        }
        return false;
      };

      // Check immediately (in case disclaimer was already ack'd in a prior load).
      if (check()) return;

      // Otherwise poll every 400ms until ack'd (max ~60s).
      const interval = setInterval(() => {
        if (check()) clearInterval(interval);
      }, 400);

      const timeout = setTimeout(() => clearInterval(interval), 60000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } catch {
      // sessionStorage unavailable — show after a delay.
      const t = setTimeout(() => setActive(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  // Lock body scroll while the player is active.
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Attempt to play the current video whenever the index changes.
  useEffect(() => {
    if (!active) return;
    const v = videoRef.current;
    if (!v) return;
    // Reset and attempt play.
    v.currentTime = 0;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        /* Autoplay may be blocked until user gesture — the disclaimer
           modal click counts as that gesture. Retry on click. */
      });
    }
  }, [active, currentIndex]);

  const advanceToNext = useCallback(() => {
    setVideoError(false);
    if (currentIndex < VIDEO_SEQUENCE.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // All watched — reveal close button.
      setAllWatched(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, [currentIndex]);

  const handleVideoEnded = useCallback(() => {
    advanceToNext();
  }, [advanceToNext]);

  // Fallback: the `ended` event is unreliable in some browsers/encodings.
  // Watch `timeupdate` and advance when the video is within 0.3s of the end.
  // Use a ref guard so we don't advance twice for the same video.
  const advancedRef = useRef(false);
  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || advancedRef.current) return;
    if (v.duration && v.currentTime >= v.duration - 0.3) {
      advancedRef.current = true;
      advanceToNext();
    }
  }, [advanceToNext]);

  // Reset the advance guard whenever the index changes (new video loaded).
  useEffect(() => {
    advancedRef.current = false;
  }, [currentIndex, active]);

  const handleClose = useCallback(() => {
    if (!allWatched) return;
    setActive(false);
  }, [allWatched]);

  // Allow user gesture to unblock autoplay if needed.
  const handlePlayerClick = () => {
    const v = videoRef.current;
    if (v && v.paused) {
      v.play().catch(() => {});
    }
  };

  const current = VIDEO_SEQUENCE[currentIndex];
  const progress = ((currentIndex + (allWatched ? 1 : 0)) / VIDEO_SEQUENCE.length) * 100;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
        >
          {/* Dimmed backdrop — prevents interaction with the site behind */}
          <div className="absolute inset-0 bg-[var(--ink)]/85 backdrop-blur-sm" />

          {/* Floating ad-style video popup — positioned to the side on desktop */}
          <motion.div
            initial={{ x: 60, y: 30, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            exit={{ x: 60, y: 30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex w-full max-w-md flex-col overflow-hidden bg-[var(--ink)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] md:max-w-lg"
            onClick={handlePlayerClick}
          >
            {/* Top bar — label + counter (no close until all watched) */}
            <div className="flex items-center justify-between border-b border-[var(--parchment)]/15 bg-[var(--ink)] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="font-mono-label text-[10px] text-[var(--brass-bright)]">
                  Ad
                </span>
                <span className="font-display text-sm italic text-[var(--parchment)]">
                  {current.label}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono-label text-[10px] text-[var(--parchment)]/50">
                  {allWatched
                    ? "Complete"
                    : `${currentIndex + 1} / ${VIDEO_SEQUENCE.length}`}
                </span>
                {allWatched ? (
                  <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--parchment)]/30 text-[var(--parchment)] transition-colors hover:border-[var(--brass)] hover:bg-[var(--brass)] hover:text-[var(--ink)]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <span className="inline-flex h-7 w-7 items-center justify-center">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--oxblood)]" />
                  </span>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-0.5 w-full bg-[var(--parchment)]/10">
              <motion.div
                className="h-full bg-[var(--oxblood)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Video */}
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src={current.src}
                onEnded={handleVideoEnded}
                onTimeUpdate={handleTimeUpdate}
                onError={() => setVideoError(true)}
                className="h-full w-full object-contain"
                playsInline
                controls={false}
                preload="auto"
              />
              {videoError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--ink)] p-6 text-center">
                  <p className="font-mono-label text-[10px] text-[var(--brass-bright)]">
                    Video file missing
                  </p>
                  <p className="text-[13px] leading-relaxed text-[var(--parchment)]/70">
                    {current.src}
                  </p>
                  <p className="text-[12px] text-[var(--parchment)]/50">
                    Add the video file to /public/videos/ to play it.
                  </p>
                  <button
                    onClick={advanceToNext}
                    className="mt-3 rounded-full border border-[var(--parchment)]/30 px-5 py-2 font-mono-label text-[10px] text-[var(--parchment)] transition-colors hover:bg-[var(--parchment)] hover:text-[var(--ink)]"
                  >
                    Skip this video →
                  </button>
                </div>
              )}
            </div>

            {/* Bottom bar — messaging */}
            <div className="flex items-center justify-between border-t border-[var(--parchment)]/15 bg-[var(--ink)] px-4 py-3">
              <p className="font-mono-label text-[9px] text-[var(--parchment)]/40">
                {allWatched
                  ? "Thank you for watching — you may close now."
                  : "Please watch all videos to continue."}
              </p>
              {!allWatched && (
                <span className="font-mono-label text-[9px] text-[var(--parchment)]/40">
                  {VIDEO_SEQUENCE.length - currentIndex - 1} remaining
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
