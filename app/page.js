import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import OurTeam from "./components/OurTeam";
import Navbar from "./components/Navbar";
// pages/index.js

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <WhyChoose />
      <OurTeam />
      <Footer />
    </>
  );
}
