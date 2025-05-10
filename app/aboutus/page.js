import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./partials/Hero";
import { motion } from 'framer-motion';


export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="py-10 px-10 flex justify-center flex-wrap gap-10 max-w-[1300px] mx-auto">
        <div className="flex-1 min-w-[300px] flex flex-col justify-center">
          <p className="crimson-font uppercase text-center mb-3">Our Value.</p>

          <p className="montserrat-font text-4xl font-bold text-center mb-5">
            Powering the Future of Digital Experiences
          </p>

          <p className="text-xl tracking-wide text-justify">
            We create a unified digital ecosystem to turn visionary ideas into reality, enabling the next generation of immersive, seamless, and future-ready digital experiences.
          </p>
        </div>

        <div className="flex-1 min-w-[300px] h-auto max-h-[400px]">
          <img src="/image/dev-team.jpg" className="w-full h-full object-cover rounded-lg" alt="aboutus-1" />
        </div>
      </div>


      <Footer />
    </>
  );
}
