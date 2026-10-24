import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import GlobalReach from "@/components/sections/GlobalReach";
import Testimonial from "@/components/sections/Testimonial";
import Insights from "@/components/sections/Insights";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "EASTWAY — Global logistics & freight solutions",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <Services />
        <GlobalReach />
        <Testimonial />
        <Insights />
        <Faq />
        <CtaBanner />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
