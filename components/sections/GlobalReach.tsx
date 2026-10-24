import Image from "next/image";

const stats = [
  {
    value: "$5b+",
    label: "Freight value moved",
    body: "Annual cargo value handled across our ocean, air and road network for enterprise shippers.",
  },
  {
    value: "932",
    label: "Ventures",
    body: "Active shipper accounts and long-term supply chain partnerships across five continents.",
  },
  {
    value: "81%",
    label: "Successful projects",
    body: "Projects delivered on or ahead of the agreed transit window over the last 12 months.",
  },
  {
    value: "85+",
    label: "Fortune 500 partners",
    body: "Trusted by the world's largest manufacturers, retailers and energy companies.",
  },
];

const hubs = [
  { label: "Rotterdam", x: 47, y: 34 },
  { label: "Singapore", x: 76, y: 57 },
  { label: "Dubai", x: 61, y: 46 },
  { label: "Shanghai", x: 81, y: 40 },
];

export default function GlobalReach() {
  return (
    <section id="strength" className="scroll-mt-24 bg-brand text-white">
      <div className="container-page py-20 md:py-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/80">
          Industry knowledge
        </p>
        <h2 className="mt-4 max-w-[560px] text-[32px] font-black leading-[1.15] tracking-[-0.02em] md:text-[40px]">
          Powering innovation
          <br /> across industries, globally.
        </h2>

        <div className="relative mt-10 w-full">
          <Image
            src="/images/world-map.png"
            alt=""
            aria-hidden="true"
            width={1340}
            height={612}
            sizes="(min-width: 1240px) 1160px, 100vw"
            className="h-auto w-full select-none opacity-90"
          />
          <div className="pointer-events-none absolute inset-0">
            {hubs.map((hub) => (
              <span
                key={hub.label}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-white/30" />
                  <span className="relative inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-brand" />
                </span>
                <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-white/80">
                  {hub.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-[34px] font-black leading-none tracking-[-0.02em] md:text-[38px]">
                {stat.value}
              </p>
              <p className="mt-4 text-[14px] font-bold">{stat.label}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/80">{stat.body}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
