import Link from "next/link";
import {
  CarIcon,
  ContainerIcon,
  HeavyIcon,
  PlaneIcon,
  ShipIcon,
  TruckIcon,
} from "../icons";

const services = [
  {
    icon: ShipIcon,
    title: "Marine Cargo Services",
    body: "FCL and LCL ocean freight with weekly sailings, port-to-door handling and full customs coordination.",
  },
  {
    icon: PlaneIcon,
    title: "Air Cargo Services",
    body: "Time-critical airfreight, charter capacity and temperature-controlled options for high-value cargo.",
  },
  {
    icon: TruckIcon,
    title: "Inland Cargo Services",
    body: "Domestic road haulage and cross-border trucking with live tracking and scheduled milk runs.",
  },
  {
    icon: HeavyIcon,
    title: "Heavy Equipment Services",
    body: "Oversize and project cargo moved with route surveys, escorts and engineered lifting plans.",
  },
  {
    icon: CarIcon,
    title: "Car Shipping Services",
    body: "RoRo, container and enclosed transport for vehicles — inspected, insured and documented.",
  },
  {
    icon: ContainerIcon,
    title: "Container Sea Cargo",
    body: "Container leasing, stuffing and consolidation backed by real-time vessel and demurrage visibility.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="container-page pb-20 pt-16 md:pb-24 md:pt-20">
        <h2 className="max-w-[640px] text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
          The tools you need to win
          <br className="hidden md:block" /> and keep more clients
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon className="h-9 w-9 text-ink" />
              <h3 className="mt-5 text-[18px] font-bold leading-snug text-ink">
                <Link href="/#quote" className="hover:text-brand">
                  {title}
                </Link>
              </h3>
              <p className="mt-2 max-w-[330px] text-[14px] leading-[1.7] text-muted">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
