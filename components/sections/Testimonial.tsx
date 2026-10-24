import Image from "next/image";

const clients = [
  { name: "amazon", className: "text-[22px] font-black tracking-[-0.03em] lowercase" },
  { name: "Creative Market", className: "text-[15px] font-semibold tracking-[0.02em]" },
  { name: "airbnb", className: "text-[20px] font-black tracking-[-0.02em] lowercase" },
  { name: "shopify", className: "text-[20px] font-black tracking-[-0.02em] lowercase" },
];

export default function Testimonial() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] md:items-center md:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] md:aspect-[5/4]">
            <Image
              src="/images/port-aerial.jpg"
              alt="Aerial view of a container terminal with cranes and vessels"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>

          <figure>
            <blockquote className="text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-ink md:text-[24px]">
              “EASTWAY has consistently delivered above and beyond our
              expectations. A brilliant logistics operation, incredible response
              time and a genuinely friendly team to work with.”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
              <div>
                <p className="text-[15px] font-bold text-ink">Alen Dennis</p>
                <p className="mt-1 text-[13px] text-muted">
                  VP Supply Chain, global retail group
                </p>
              </div>
              <p className="text-[15px] font-bold lowercase tracking-[-0.02em] text-muted">
                amazon
              </p>
            </figcaption>
          </figure>
        </div>

        <ul className="mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className={`text-center text-[#5f6673] ${client.className}`}
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
