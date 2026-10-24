import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Ocean freight", href: "/#services" },
      { label: "Air freight", href: "/#services" },
      { label: "Road & rail", href: "/#services" },
      { label: "Project cargo", href: "/#services" },
      { label: "Warehousing", href: "/#services" },
      { label: "Customs brokerage", href: "/#quote" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Our Strength", href: "/#strength" },
      { label: "Insights", href: "/#insights" },
      { label: "Locations", href: "/location" },
      { label: "Careers", href: "/#quote" },
      { label: "Contact", href: "/#quote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="container-page">
        <div className="border-t border-line pt-14 pb-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <div>
              <Logo />
              <p className="mt-6 max-w-[330px] text-[14px] leading-[1.75] text-muted">
                EASTWAY provides customized logistics services for customers
                around the world from 50+ leading industries. Beyond borders,
                beyond expectations.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="mailto:hello@eastway.com"
                  className="inline-flex h-9 items-center rounded-[3px] border border-line bg-white px-4 text-[13px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  hello@eastway.com
                </a>
              </div>
            </div>

            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-[15px] font-bold leading-none text-ink">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] leading-none text-muted transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-[15px] font-bold leading-none text-ink">Office</h2>
              <p className="mt-5 text-[14px] leading-[1.7] text-muted">
                Ataturk Cad. Istanbul St.
                <br />
                Turkey
              </p>
              <h2 className="mt-7 text-[15px] font-bold leading-none text-ink">
                Contact
              </h2>
              <p className="mt-5 text-[14px] leading-[1.7] text-muted">
                <a href="tel:+902120000000" className="hover:text-brand">
                  +90 212 000 00 00
                </a>
                <br />
                <a href="mailto:hello@eastway.com" className="hover:text-brand">
                  hello@eastway.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-line py-8 sm:flex-row">
          <p className="text-[13px] text-[#5f6673]">
            © 2026 All rights reserved — EASTWAY
          </p>
          <div className="flex items-center gap-6 text-[#5f6673]">
            <a href="#" aria-label="Instagram" className="hover:text-ink">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ink">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]">
                <path d="M4.9 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.1 9.2h3.6V21H3.1zM9.4 9.2h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.3 4.3 5.3V21h-3.6v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.4z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="hover:text-ink">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[16px] w-[16px]">
                <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3H8.5l4.4 5.8zm-1.1 16.1h1.7L7.7 4.8H5.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
