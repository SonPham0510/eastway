import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";

const posts = [
  {
    title: "Red Sea diversions push lead times out for European importers",
    image: "/images/crane-ship.jpg",
    alt: "Container cranes loading a vessel at dusk",
    category: "Ocean",
  },
  {
    title: "Air cargo capacity tightens ahead of the peak season",
    image: "/images/air-cargo.jpg",
    alt: "Aircraft cargo being loaded",
    category: "Air",
  },
  {
    title: "How bonded warehousing cuts landed cost in Southeast Asia",
    image: "/images/warehouse-aisle.jpg",
    alt: "Bonded warehouse aisle with pallet racking",
    category: "Warehousing",
  },
  {
    title: "Cross-border trucking: documentation that keeps freight moving",
    image: "/images/truck-fleet.jpg",
    alt: "Trucks parked in a logistics yard",
    category: "Road",
  },
  {
    title: "Project cargo: planning a route survey before the lift",
    image: "/images/forklift.jpg",
    alt: "Oversize cargo being handled",
    category: "Project",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[520px] text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            The latest articles
            <br /> and industry insights
          </h2>
          <Link
            href="/#insights"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:opacity-75"
          >
            View all
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <Link href="/#insights" className="block">
                <div
                  className={`relative w-full overflow-hidden rounded-[3px] bg-surface ${
                    index < 2 ? "aspect-[16/8]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 rounded-[2px] bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold leading-snug text-ink group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-[12px] text-muted">Article — October 7, 2026</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
