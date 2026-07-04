import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-[var(--parchment)] py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §404 · Off the file
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-light leading-[0.92] tracking-[-0.03em] text-[var(--ink)]">
              <span className="block">This page is</span>
              <span className="block italic text-[var(--oxblood)]">not on the file.</span>
            </h1>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-[var(--slate)]">
              The page you were looking for does not exist — or has been moved.
              Return to the home page, or use the navigation to find what you
              were after.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--oxblood)] px-6 py-3 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:bg-[var(--ink)]"
              >
                ← Return home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/25 px-6 py-3 font-mono-label text-[11px] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                Write to chambers
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="border-l-2 border-[var(--oxblood)] pl-6">
              <p className="font-mono-label text-[10px] text-[var(--slate)]">
                Common destinations
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  ["/legacy", "§01 · The Legacy"],
                  ["/practice", "§02 · Practice Areas"],
                  ["/philosophy", "§03 · Philosophy"],
                  ["/advocates", "§04 · The Advocates"],
                  ["/contact", "§08 · Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="link-reveal font-display text-lg text-[var(--ink)] hover:text-[var(--oxblood)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
