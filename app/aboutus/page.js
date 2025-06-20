import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./partials/Hero";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="bg-slate-50 dark:bg-black w-full">
        <div className="max-w-[1300px] mx-auto p-5 lg:p-10 montserrat-font ">
          <p className="montserrat-font font-bold uppercase text-center mb-3">
            Our Values
          </p>
          <h1 className="bebas-neue-regular text-teal-400 uppercase text-5xl lg:text-6xl font-bold text-center mb-5">
            Opening the Gate to Future Digitalization
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2 space-y-6 flex flex-col justify-start">
              <img
                alt="Unified digital ecosystem driving the future"
                className="rounded-lg w-full object-cover max-h-48 sm:max-h-[23rem] shadow-md"
                src="https://storage.googleapis.com/a1aa/image/88d3f208-d48d-40d7-f835-040cb8c2ae32.jpg"
              />
              <div>
                <h2 className="text-black dark:text-white text-lg sm:text-xl font-semibold leading-tight mb-2 montserrat-font">
                  Building the Future, One Experience at a Time
                </h2>
                <p className="text-black dark:text-white text-sm sm:text-base max-w-xl">
                  At Kylin, we shape tomorrow’s digital landscape by creating a
                  fully connected ecosystem that empowers businesses,
                  communities, and innovators alike.
                </p>
              </div>
              <a
                href="/contactus"
                className="group w-fit relative flex items-center rounded-md bg-teal-500 px-6 py-3 font-bold text-md text-white transition-all duration-300 ease-in-out hover:opacity-85 active:opacity-100"
              >
                <span className="montserrat-font">Contact Us</span>
                <span className="ml-0 w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:ml-4 group-hover:w-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="lg:w-1/2 gap-3 flex flex-col justify-start text-black dark:text-white">
              <div className="rounded-lg p-6 py-7 flex flex-col justify-start">
                <h3 className="text-lg font-semibold mb-2 montserrat-font">
                  Visionary Thinking
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed ">
                  We challenge today’s limits to imagine and build a smarter,
                  more connected digital future for all.
                </p>
              </div>
              <div className="rounded-lg p-6 py-5 flex flex-col justify-start">
                <h3 className="text-lg font-semibold mb-2 montserrat-font">
                  User-First Innovation
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  Every solution we create starts with real user needs —
                  designing intuitive experiences that inspire loyalty and
                  trust.
                </p>
              </div>
              <div className="rounded-lg p-6 py-5 flex flex-col justify-start">
                <h3 className="text-lg font-semibold mb-2 montserrat-font">
                  Seamless Ecosystem
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  We connect platforms, people, and processes into a unified
                  environment built for long-term growth and limitless
                  possibilities.
                </p>
              </div>
              <div className="rounded-lg p-6 py-5 flex flex-col justify-start">
                <h3 className="text-lg font-semibold mb-2 montserrat-font">
                  Relentless Excellence
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  We push boundaries with craftsmanship, precision, and a drive
                  to deliver transformative digital experiences at every
                  touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-gray-900 montserrat-font">
        <div className="w-full max-w-[1300px] mx-auto p-5 lg:p-12 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-teal-500 uppercase montserrat-font">
              Our Key Advantages
            </h2>
            <p className="mt-4 text-black dark:text-white text-base lg:text-lg">
              Discover the core benefits that set our platform apart and drive
              your success.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Illustration Image */}
            <div className="flex justify-center mb-6 lg:mb-0 lg:mr-8">
              <img
                className="w-3/4 lg:w-full rounded-lg shadow-lg"
                src="https://placeholder.pics/svg/400/2d3748-1f2937/FFFFFF"
                alt="Platform Advantages Overview"
              />
            </div>
            {/* End Illustration Image */}
            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              {[
                {
                  title: "Dynamic Personalization",
                  description:
                    "Harness real-time data to deliver customized content and product recommendations, enhancing user engagement and satisfaction across every touchpoint.",
                },
                {
                  title: "Mobile-Optimized Experience",
                  description:
                    "Our mobile-first design ensures a seamless, responsive experience on smartphones, tablets, and desktops, maximizing user retention and satisfaction.",
                },
                {
                  title: "24/7 Dedicated Support",
                  description:
                    "Our expert, U.S.-based support team is available around the clock via email, phone, and live chat, providing fast and reliable assistance whenever you need it.",
                },
                {
                  title: "Secure Payment Processing",
                  description:
                    "We implement advanced encryption technologies and secure protocols to safeguard all customer transactions, ensuring a safe and trustworthy payment environment.",
                },
              ].map((advantage, index) => (
                <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                  <div className="h-full py-6 px-6 border border-teal-500 shadow-md rounded-md bg-white dark:bg-gray-800/50 hover:shadow-lg transition">
                    <h3 className="text-xl lg:text-2xl font-bold text-teal-500 mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-black dark:text-white">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
