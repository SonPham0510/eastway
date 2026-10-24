"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "../icons";

const faqs = [
  {
    question: "Which shipping modes does EASTWAY handle?",
    answer:
      "We operate ocean (FCL and LCL), air, rail, road and project cargo under one account. Your account manager combines the modes that meet your transit, cost and handling requirements, and issues one set of documents for the whole journey.",
  },
  {
    question: "Can you clear customs and handle duties for us?",
    answer:
      "Yes. Our licensed brokers file entries, manage duty and VAT deferment, and can act as importer of record where you need it. We also handle bonded storage and post-entry adjustments.",
  },
  {
    question: "How quickly can you provide a quote?",
    answer:
      "Standard lane quotes are returned within one business day. Oversize, temperature-controlled and project cargo typically need 2–3 days so we can confirm equipment availability and route surveys.",
  },
  {
    question: "Do you offer cargo insurance and tracking?",
    answer:
      "Every shipment can be covered under our all-risk cargo policy. Tracking is available through the customer portal, with milestone alerts and exception notifications pushed to your team or ERP.",
  },
  {
    question: "What happens if a shipment is delayed?",
    answer:
      "Our control tower flags the exception as soon as it is detected, proposes recovery options with cost and transit impact, and confirms the plan with you before acting. You always get a named contact.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]">
            Frequently
            <br /> Asked Questions
          </h2>

          <div className="border-t border-line">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.question} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-button-${index}`}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-[16px] font-bold leading-snug text-ink md:text-[17px]">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-brand bg-brand text-white"
                            : "border-line text-ink"
                        }`}
                      >
                        {isOpen ? (
                          <MinusIcon className="h-4 w-4" />
                        ) : (
                          <PlusIcon className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    hidden={!isOpen}
                    className="pb-6 pr-12 text-[14px] leading-[1.75] text-muted"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
