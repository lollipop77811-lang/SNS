"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const CHAMBERS = [
  {
    city: "New Delhi",
    role: "Registered Office",
    address: "Chambers No. 14, Lawyers' Chambers\nSupreme Court of India\nNew Delhi — 110001",
    phone: "+91 11 2338 XXXX",
  },
  {
    city: "Patna",
    role: "Founding Chambers",
    address: "Sinha Advocates Building\nBeerchand Patel Path\nPatna — 800001",
    phone: "+91 612 220 XXXX",
  },
  {
    city: "Ranchi",
    role: "Jharkhand Chambers",
    address: "Advocates' Chambers\nHigh Court of Jharkhand\nRanchi — 834001",
    phone: "+91 651 249 XXXX",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[var(--parchment)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 border-b border-[var(--ink)]/15 pb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono-label text-[11px] text-[var(--oxblood)]">
                §08 · Contact
              </span>
              <span className="h-px w-16 bg-[var(--oxblood)]/40" />
            </div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Begin a{" "}
              <span className="italic text-[var(--oxblood)]">conversation.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[15px] leading-relaxed text-[var(--slate)]">
              The firm does not accept engagements through advertising or
              solicitation. If you have arrived here of your own accord, write
              to us — a brief note on the matter is sufficient.
            </p>
          </div>
        </div>

        {/* Two-column: form + chambers */}
        <div className="mt-12 grid grid-cols-12 gap-8 md:gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              // Demo: in a real build this would POST to an API route.
              alert(
                "Thank you. The firm will respond to your note within two working days."
              );
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Full name" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
              <Field
                label="Phone (optional)"
                name="phone"
                type="tel"
                placeholder="+91"
              />
              <Field
                label="Organisation (optional)"
                name="org"
                placeholder="Company / firm"
              />
            </div>

            <div className="mt-6">
              <label className="font-mono-label text-[10px] text-[var(--slate)]">
                Nature of the matter
              </label>
              <select
                name="nature"
                className="mt-2 w-full border-b border-[var(--ink)]/25 bg-transparent py-3 text-[15px] text-[var(--ink)] outline-none transition-colors focus:border-[var(--oxblood)]"
              >
                <option value="">Select an area (if known)</option>
                <option>Civil &amp; Commercial Litigation</option>
                <option>Corporate &amp; Commercial Advisory</option>
                <option>Arbitration &amp; ADR</option>
                <option>Real Estate, Land &amp; Revenue</option>
                <option>Banking, Finance &amp; Insolvency</option>
                <option>Constitutional &amp; Administrative</option>
                <option>Other / Not sure</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="font-mono-label text-[10px] text-[var(--slate)]">
                A brief note
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="A short, factual description of the matter — no confidential information at this stage."
                className="mt-2 w-full resize-none border-b border-[var(--ink)]/25 bg-transparent py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--slate)]/60 outline-none transition-colors focus:border-[var(--oxblood)]"
              />
            </div>

            <p className="mt-4 max-w-md text-[12px] leading-relaxed text-[var(--slate)]">
              Submitting this form does not establish an advocate-client
              relationship. Please do not include confidential information
              until the firm has confirmed engagement in writing.
            </p>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--oxblood)] px-7 py-3.5 font-mono-label text-[11px] text-[var(--parchment)] transition-colors hover:bg-[var(--ink)]"
            >
              Send the note
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.form>

          {/* Chambers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <p className="font-mono-label text-[10px] text-[var(--slate)]">
              Chambers
            </p>
            <div className="mt-4 space-y-8">
              {CHAMBERS.map((c) => (
                <div
                  key={c.city}
                  className="border-b border-[var(--ink)]/10 pb-6"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-[var(--ink)]">
                      {c.city}
                    </h3>
                    <span className="font-mono-label text-[10px] text-[var(--oxblood)]">
                      {c.role}
                    </span>
                  </div>
                  <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-[var(--slate)]">
                    {c.address}
                  </p>
                  <p className="mt-2 font-mono text-[12px] text-[var(--ink)]">
                    {c.phone}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-8 space-y-3 border-t border-[var(--ink)]/15 pt-6">
              <a
                href="mailto:counsel@sslaw.in"
                className="flex items-center gap-3 text-[14px] text-[var(--ink)] transition-colors hover:text-[var(--oxblood)]"
              >
                <Mail className="h-4 w-4 text-[var(--oxblood)]" />
                counsel@sslaw.in
              </a>
              <p className="flex items-center gap-3 text-[14px] text-[var(--slate)]">
                <Clock className="h-4 w-4 text-[var(--oxblood)]" />
                Mon — Fri · 10:00 to 18:00 IST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono-label text-[10px] text-[var(--slate)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-[var(--ink)]/25 bg-transparent py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--slate)]/60 outline-none transition-colors focus:border-[var(--oxblood)]"
      />
    </div>
  );
}
