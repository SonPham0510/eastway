import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-surface">
      <div className="container-page pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-start lg:gap-16">
          <div>
            <h1 className="max-w-[640px] text-[34px] font-black leading-[1.12] tracking-[-0.02em] text-ink sm:text-[42px] md:text-[50px] lg:text-[54px]">
              We provide logistics
              <br className="hidden sm:block" /> solution tailor-made
              <br className="hidden sm:block" /> for individual customer!
            </h1>
          </div>

          <div className="lg:pt-3">
            <p className="max-w-[340px] text-[15px] leading-[1.75] text-muted">
              EASTWAY provides customized logistics services for customers around
              the world from 50+ leading industries. For more information please
              contact our team.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                50+ industries served
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                24/7 operations
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[4px] sm:aspect-[16/8] lg:mt-12 lg:aspect-[16/6]">
          <Image
            src="/images/hero-containers.jpg"
            alt="Stacked shipping containers at a container terminal"
            fill
            priority
            sizes="(min-width: 1240px) 1160px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 hidden items-center gap-3 rounded-[3px] bg-white/95 px-4 py-3 backdrop-blur sm:flex md:bottom-6 md:left-6">
            <span className="text-[26px] font-black leading-none text-ink">24/7</span>
            <span className="text-[12px] leading-tight text-muted">
              Global operations
              <br />
              monitoring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
