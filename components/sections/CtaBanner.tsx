import Link from "next/link";
import { ArrowRightIcon } from "../icons";

export default function CtaBanner() {
  return (
    <section className="bg-surface">
      <div className="container-page grid items-center gap-8 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <h2 className="max-w-[620px] text-[32px] font-black leading-[1.12] tracking-[-0.02em] text-ink md:text-[42px]">
          Make sure you choose
          <br /> the right expedition
          <br /> services for your delivery
        </h2>
        <Link
          href="/#quote"
          className="inline-flex h-[56px] w-full items-center justify-between gap-8 rounded-[3px] bg-brand pl-7 pr-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark sm:w-[240px]"
        >
          Contact Us
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
