// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  // Create particles when component mounts
  useEffect(() => {
    createParticles();
  }, []);

  // Create particles function
  const createParticles = () => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-white bg-opacity-50";

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      // Random size
      const size = Math.random() * 2 + 1;

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.2;

      // Random animation duration
      const duration = Math.random() * 20 + 10;

      // Apply styles
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      particle.style.animation = `float ${duration}s linear infinite`;

      particlesContainer.appendChild(particle);
    }
  };

  return (
    <>
      <Head>
        <title>Kylin Modern Web3 Hero Section</title>
        <meta name="description" content="Kylin Modern Web3 Hero Section" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-black text-white font-sans overflow-x-hidden">
        <section className="relative h-screen w-full flex items-center pl-8 md:pl-20 overflow-hidden">
          {/* Blobs */}
          <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-kylin-primary bg-opacity-60 blur-[80px] animate-float"></div>

          <div className="absolute -bottom-36 -left-24 w-[400px] h-[400px] rounded-full bg-kylin-primary bg-opacity-60 blur-[80px] animate-float-reverse"></div>

          <div className="absolute top-48 right-72 w-[450px] h-[450px] rounded-full bg-kylin-secondary bg-opacity-60 blur-[80px] animate-float-delay"></div>

          {/* Particles Container */}
          <div
            id="particles"
            className="absolute top-0 left-0 w-full h-full z-0"
          ></div>

          <div className="block lg:hidden bg-gradient-to-t from-black/75 via-black/50 to-black/75 absolute top-0 left-0 w-full h-full z-30"></div>

          {/* Content */}
          <div className="relative z-30 w-full lg:w-1/2 max-w-7xl">
            <h1 className="font-display text-[80px] md:text-[130px] lg:text-[200px] leading-[0.9] tracking-[-2px] mb-8 animate-fade-in">
              It Starts with Kylin
            </h1>
            <p className="text-xl font-medium leading-relaxed mb-8 max-w-[80%] opacity-0 animate-fade-in-delay-1">
              A unified ecosystem built to power the next generation of digital
              experiences.
            </p>
            <button className="bg-gradient-kylin text-black border-0 py-4 px-8 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fade-in-delay-2">
              Explore Ecosystem
            </button>
          </div>

          <div className="relative h-full">
            {/* Using Next.js Image component for better performance */}
            <div className="absolute top-0 -right-72 z-20 h-full">
              <Image
                src="/images/tiketta.png"
                alt="Tiketta"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="absolute top-0 -right-24 z-10 h-full">
              <Image
                src="/images/jovarental.png"
                alt="Jovarental"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
