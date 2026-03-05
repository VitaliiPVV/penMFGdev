import type { Metadata } from "next";
import About from "./About";
import Certifications from "./Certifications";
import CTA from "./CTA";
import Form from "../home/Form";
import Hero from "./Hero";
import Industries from "./Industries";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Gallery } from "./Gallery";

export const metadata: Metadata = {
  title: "Landing - PEN Manufacturing",
  description:
    "Your trusted partner in high-precision machining for the aerospace and medical industries. Get experts on-site for your manufacturing needs.",
  alternates: {
    canonical: "/landing",
  },
  openGraph: {
    title: "PEN Manufacturing - High-Precision Machining",
    description:
      "Transforming complex blueprints into high-precision parts for critical applications in aerospace and medical industries.",
    url: "/landing",
  },
};

export default function LandingPage() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 pb-12 md:pb-16">
      <Hero />
      <Gallery />
      <CTA />
      <Services />
      <Industries />
      <About />
      <Certifications />
      <Testimonials />
      <Form />
    </section>
  );
}
