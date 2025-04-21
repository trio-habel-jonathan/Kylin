import { useEffect, useRef } from "react";

const HeroSection = () => {
  // Create refs for the elements we want to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Function to handle the fade-in animation
    const animateElements = () => {
      // Animate heading immediately
      if (headingRef.current) {
        headingRef.current.style.opacity = "0";
        headingRef.current.style.transform = "translateY(20px)";

        setTimeout(() => {
          headingRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          headingRef.current.style.opacity = "1";
          headingRef.current.style.transform = "translateY(0)";
        }, 100);
      }

      // Animate paragraph with delay
      if (paragraphRef.current) {
        paragraphRef.current.style.opacity = "0";
        paragraphRef.current.style.transform = "translateY(20px)";

        setTimeout(() => {
          paragraphRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          paragraphRef.current.style.opacity = "1";
          paragraphRef.current.style.transform = "translateY(0)";
        }, 600); // Delay for paragraph
      }

      // Animate button with longer delay
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "0";
        buttonRef.current.style.transform = "translateY(20px)";

        setTimeout(() => {
          buttonRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          buttonRef.current.style.opacity = "1";
          buttonRef.current.style.transform = "translateY(0)";
        }, 1200); // Longer delay for button
      }
    };

    // Initialize the animation
    animateElements();

    // Clean up function (optional)
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array means this runs once on mount

  // Create particles effect
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = particlesContainerRef.current;
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
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="relative h-screen w-full flex items-center pl-8 md:pl-20 overflow-hidden">
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#00e4a1]/50 bg-opacity-60 blur-[80px] animate-float"></div>

      <div className="absolute -bottom-36 -left-24 w-[400px] h-[400px] rounded-full bg-[#00e4a1]/50 bg-opacity-60 blur-[80px] animate-float-reverse"></div>

      <div className="absolute top-48 right-72 w-[450px] h-[450px] rounded-full bg-[#5eead4]/50 bg-opacity-60 blur-[80px] animate-float-delay"></div>

      <div
        id="particles"
        ref={particlesContainerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>
      <div className="block lg:hidden bg-gradient-to-t from-black/75 via-black/50 to-black/75 absolute top-0 left-0 w-full h-full z-30"></div>
      <div className="relative z-30 w-full lg:w-1/2 max-w-7xl">
        <h1
          ref={headingRef}
          className="bebas-neue-regular text-[80px] md:text-[130px] lg:text-[200px] leading-[0.9] tracking-[-2px] mb-8"
        >
          It Starts with Kylin
        </h1>
        <p
          ref={paragraphRef}
          className="text-xl font-medium leading-relaxed mb-8 max-w-[80%]"
        >
          A unified ecosystem built to power the next generation of digital
          experiences.
        </p>
        <button
          ref={buttonRef}
          className="bg-gradient-kylin text-black border-0 py-4 px-8 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Explore Ecosystem
        </button>
      </div>

      <img
        src="./image/tiketta.png"
        className="h-full object-cover absolute top-0 -right-72 z-20"
        alt="Kylin logo"
      />
      <img
        src="./image/jovarental.png"
        className="h-full object-cover absolute top-0 -right-24 z-10"
        alt="Kylin logo"
      />
    </section>
  );
};

export default HeroSection;
