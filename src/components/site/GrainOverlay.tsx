"use client";

/**
 * Paper / parchment grain texture overlay.
 * Fixed, full viewport, non-interactive.
 * Renders two layers — light and dark — toggled via a body[data-grain-theme="dark"] attribute.
 */
export function GrainOverlay() {
  return (
    <>
      <div
        aria-hidden="true"
        className="grain-overlay grain-overlay--light"
      />
      <div
        aria-hidden="true"
        className="grain-overlay grain-overlay--dark"
      />
      <style>{`
        .grain-overlay--dark { display: none; }
        body[data-grain-theme="dark"] .grain-overlay--light { display: none; }
        body[data-grain-theme="dark"] .grain-overlay--dark { display: block; }
      `}</style>
    </>
  );
}
