// pages/index.js
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import OurTeam from "./components/OurTeam";
import Navbar from "./components/Navbar";
import ShortAboutUs from "./components/ShortAboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShortAboutUs />
      <WhyChoose />
      <OurTeam />

      <section className="w-full bg-white dark:bg-gray-900">
        <div className="p-12 montserrat-font flex flex-col items-center justicy-center gap-6 w-full">
          <h1 className="text-2xl font-bold">Want to Work Together?</h1>
          <p>
            We are currently available for freelance projects and open to
            discussing new opportunities.
          </p>
          <a
            href="/contactus"
            className="group relative flex items-center rounded-full bg-teal-500 px-6 py-3 font-bold text-md text-white transition-all duration-300 ease-in-out hover:opacity-85 active:opacity-100"
          >
            <span className="montserrat-font">Let's Connect</span>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
