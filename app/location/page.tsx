import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/sections/CtaBanner";
import SearchBar from "@/components/SearchBar";
import { PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Find EASTWAY locations worldwide",
  description:
    "EASTWAY gateway offices, air cargo stations and bonded warehouses across 120+ countries.",
};

const locations = [
  {
    id: "sea",
    title: "Gateway offices",
    image: "/images/port-aerial.jpg",
    alt: "Aerial view of a container terminal",
    body: "Port-side teams in 48 gateways handling documentation, customs and terminal coordination.",
    points: [
      "Rotterdam · Antwerp · Hamburg",
      "Shanghai · Ningbo · Shenzhen",
      "Singapore · Port Klang · Jebel Ali",
      "Istanbul · Mersin · Izmir",
    ],
  },
  {
    id: "air",
    title: "Air cargo stations",
    image: "/images/air-cargo.jpg",
    alt: "Cargo aircraft being loaded",
    body: "19 airfreight stations with bonded transit sheds and 24/7 build-up capability.",
    points: [
      "IST · FRA · AMS · LHR",
      "PVG · HKG · SIN · DXB",
      "JFK · ORD · LAX · ATL",
      "Screening and X-ray on site",
    ],
  },
  {
    id: "warehouse",
    title: "Warehouse network",
    image: "/images/warehouse.jpg",
    alt: "Warehouse racking filled with palletised freight",
    body: "Bonded and free-zone warehousing with pick, pack and cross-dock services.",
    points: [
      "Cross-dock and transload",
      "Bonded storage and customs holds",
      "Pick, pack and kitting",
      "Inventory visibility via portal",
    ],
  },
];

export default function LocationPage() {
  return (
    <>
      <Header active="Locations" />
      <main id="main">
        <section className="bg-brand">
          <div className="container-page flex flex-col items-center py-16 text-center md:py-20">
            <h1 className="text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white md:text-[46px]">
              Find EASTWAY locations
              <br className="hidden sm:block" /> around the world
            </h1>
            <div className="mt-9 w-full max-w-[600px]">
              <SearchBar placeholder="Find location near" />
            </div>
            <p className="mt-5 text-[13px] text-white/70">
              120+ countries · 48 gateway ports · 19 air cargo stations
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page py-16 md:py-20">
            <h2 className="text-center text-[26px] font-black tracking-[-0.02em] text-ink md:text-[32px]">
              In-store shipping services near you
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-center text-[15px] leading-[1.7] text-muted">
              We are here to help with packing, documentation and door-to-door
              freight. Find the EASTWAY team closest to your cargo.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <article key={location.id} id={location.id} className="scroll-mt-24">
                  <div className="relative aspect-[364/220] w-full overflow-hidden rounded-[3px]">
                    <Image
                      src={location.image}
                      alt={location.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 text-[19px] font-bold text-ink">
                    <PinIcon className="h-4 w-4 text-brand" />
                    {location.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                    {location.body}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-[14px] leading-[1.5] text-muted">
                    {location.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-muted"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
