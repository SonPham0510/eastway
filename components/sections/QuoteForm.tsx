"use client";

import { useState } from "react";

const modes = ["Ocean", "Air", "Road", "Rail", "Project"];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="scroll-mt-24 bg-white">
      <span id="track" className="block scroll-mt-24" aria-hidden="true" />
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 rounded-[6px] bg-surface p-6 md:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
              Get a quote
            </p>
            <h2 className="mt-4 text-[28px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[34px]">
              Tell us what you ship
              <br /> and where it needs to go
            </h2>
            <p className="mt-4 max-w-[380px] text-[14px] leading-[1.75] text-muted">
              Send the lane, cargo details and target transit. A freight specialist
              replies within one business day — or call the number below for
              time-critical freight.
            </p>
            <dl className="mt-8 space-y-4 text-[14px]">
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1 text-muted">
                  <a href="tel:+902120000000" className="hover:text-brand">
                    +90 212 000 00 00
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1 text-muted">
                  <a href="mailto:hello@eastway.com" className="hover:text-brand">
                    hello@eastway.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Operations</dt>
                <dd className="mt-1 text-muted">24/7 control tower, Istanbul HQ</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="grid gap-4"
          >
            <fieldset>
              <legend className="text-[13px] font-semibold text-ink">Mode</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {modes.map((mode, index) => (
                  <label
                    key={mode}
                    className="cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-muted transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white"
                  >
                    <input
                      type="radio"
                      name="mode"
                      value={mode}
                      defaultChecked={index === 0}
                      className="sr-only"
                    />
                    {mode}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[13px] font-semibold text-ink">Full name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-11 w-full rounded-[3px] border border-line bg-white px-3 text-[14px] text-ink outline-none placeholder:text-[#9aa0a6] focus:border-brand"
                  placeholder="Jane Cooper"
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-semibold text-ink">Work email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-[3px] border border-line bg-white px-3 text-[14px] text-ink outline-none placeholder:text-[#9aa0a6] focus:border-brand"
                  placeholder="jane@company.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[13px] font-semibold text-ink">Origin</span>
                <input
                  name="origin"
                  className="mt-2 h-11 w-full rounded-[3px] border border-line bg-white px-3 text-[14px] text-ink outline-none placeholder:text-[#9aa0a6] focus:border-brand"
                  placeholder="Shanghai, CN"
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-semibold text-ink">Destination</span>
                <input
                  name="destination"
                  className="mt-2 h-11 w-full rounded-[3px] border border-line bg-white px-3 text-[14px] text-ink outline-none placeholder:text-[#9aa0a6] focus:border-brand"
                  placeholder="Rotterdam, NL"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[13px] font-semibold text-ink">Shipment details</span>
              <textarea
                name="details"
                rows={4}
                className="mt-2 w-full resize-y rounded-[3px] border border-line bg-white px-3 py-3 text-[14px] text-ink outline-none placeholder:text-[#9aa0a6] focus:border-brand"
                placeholder="2 x 40HC, 18,000 kg total, ready from Nov 12"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-[3px] bg-brand px-7 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request quote
              </button>
              <p aria-live="polite" className="text-[13px] text-muted">
                {sent
                  ? "Thanks — a specialist will reply within one business day."
                  : ""}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
