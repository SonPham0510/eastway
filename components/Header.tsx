"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Location", href: "/location", hasMenu: true },
  { label: "Our Strength", href: "/#strength" },
  { label: "Customer Care", href: "/#faq" },
];

const locationMenu = [
  { label: "Find a location", href: "/location" },
  { label: "Sea freight hubs", href: "/location#sea" },
  { label: "Air cargo stations", href: "/location#air" },
  { label: "Warehouse network", href: "/location#warehouse" },
];

export default function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="EASTWAY home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {navLinks.map((item) =>
            item.hasMenu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <Link
                  href={item.href}
                  aria-current={active === item.label ? "page" : undefined}
                  className={`inline-flex items-center gap-1.5 py-2 text-[15px] font-medium leading-none transition-colors hover:text-brand ${
                    active === item.label ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3 w-3">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 transition ${
                    locationsOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="rounded-lg border border-line bg-white p-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
                    {locationMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-md px-3 py-2 text-[14px] text-muted transition-colors hover:bg-brand-soft hover:text-brand"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active === item.label ? "page" : undefined}
                className={`text-[15px] font-medium leading-none transition-colors hover:text-brand ${
                  active === item.label ? "text-brand" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/#quote"
            className="text-[15px] font-medium leading-none text-ink transition-colors hover:text-brand"
          >
            Track
          </Link>
          <Link
            href="/#quote"
            className="inline-flex h-10 items-center justify-center rounded-[3px] bg-brand px-6 text-[15px] font-semibold leading-none text-white transition-colors hover:bg-brand-dark"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3.5 7h17M3.5 12h17M3.5 17h17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-black/5 bg-surface transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-[16px] font-medium text-ink hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 text-[16px] font-medium text-ink hover:bg-white"
          >
            Track
          </Link>
          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-[3px] bg-brand px-6 text-[15px] font-semibold text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
