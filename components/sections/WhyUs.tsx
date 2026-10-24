import Link from "next/link";
import { ArrowRightIcon, RatesIcon, SupportIcon, TeamIcon } from "../icons";

const reasons = [
  {
    icon: TeamIcon,
    title: "Top Team",
    body: "Freight specialists, customs brokers and route engineers working as one dedicated team on every shipment.",
  },
  {
    icon: SupportIcon,
    title: "Customer Support",
    body: "A named account manager and 24/7 control tower keep you updated from booking to final delivery.",
  },
  {
    icon: RatesIcon,
    title: "Competitive Rates",
    body: "Volume-backed carrier contracts and transparent pricing mean predictable costs without surprises.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-surface">
      <div className="container-page pb-20 pt-14 md:pb-24 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[38px]">
              Why choose us?
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {reasons.map(({ icon: Icon, title, body }) => (
              <article key={title}>
                <Icon className="h-9 w-9 text-ink" />
                <h3 className="mt-5 text-[18px] font-bold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted">{body}</p>
                <Link
                  href="/#services"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand transition-opacity hover:opacity-75"
                >
                  Learn more
                  <span className="sr-only"> about {title}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
