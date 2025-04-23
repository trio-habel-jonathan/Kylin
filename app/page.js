"use client";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import OurTeam from "./components/OurTeam";
// pages/index.js

export default function Home() {
  return (
    <>
      <HeroSection />

      <WhyChoose />
      <OurTeam />
      <Footer />
    </>
  );
}
