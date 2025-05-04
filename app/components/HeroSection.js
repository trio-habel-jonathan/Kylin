"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const particlesContainerRef = useRef(null);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Create particles effect - keeping this as it was in the original
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = particlesContainerRef.current;
      if (!particlesContainer) return;

      const particleCount = 200;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute rounded-full bg-black dark:bg-white bg-opacity-50";

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

    // Create particles when component mounts
    createParticles();

    // Clean up function to remove particles when component unmounts
    return () => {
      if (particlesContainerRef.current) {
        while (particlesContainerRef.current.firstChild) {
          particlesContainerRef.current.removeChild(
            particlesContainerRef.current.firstChild
          );
        }
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center pl-8 md:pl-20 overflow-hidden z-10">
      {/* Background gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#00e4a1]/50 bg-opacity-60 blur-[80px] animate-float"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-48 right-72 w-[360px] h-[360px] rounded-full bg-[#5eead4]/50 bg-opacity-60 blur-[80px] animate-float-delay"
      ></motion.div>

      {/* Particles container */}
      <div
        id="particles"
        ref={particlesContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>

      {/* Mobile gradient overlay */}
      <div className="block lg:hidden bg-gradient-to-t backdrop-blur-xs from-white/25 dark:from-black/75 via-white/0 dark:via-black/50 to-white/25 dark:to-black/75 absolute top-0 left-0 w-full h-full z-30"></div>

      {/* Content container with staggered animations */}
      <motion.div
        className="relative z-30 w-full md:w-1/2 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="bebas-neue-regular text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-2px] mb-8"
        >
          It Starts with Kylin
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl font-medium leading-relaxed mb-8 max-w-[80%]"
        >
          A unified ecosystem built to power the next generation of digital
          experiences.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -4,
            boxShadow: "0 10px 25px -5px rgba(94, 234, 212, 0.3)",
          }}
          className="bg-gradient-kylin z-10 text-black border-0 py-4 px-8 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Explore Ecosystem</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>

      {/* Images with entrance animations */}
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        src="./image/tiketta.png"
        className="h-full object-cover absolute top-0 -right-64 z-20"
        alt="Kylin logo"
      />

      <motion.img
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        src="./image/jovarental.png"
        className="h-full object-cover absolute top-0 -right-24 z-10"
        alt="Kylin logo"
      />
    </section>
  );
};

export default HeroSection;
