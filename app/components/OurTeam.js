import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former tech executive with 15+ years experience in the industry.",
    image:
      "https://i.pinimg.com/736x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
  },
  {
    id: 2,
    name: "Michael Chang",
    role: "CTO",
    bio: "Software architect with a passion for innovative solutions.",
    image:
      "https://i.pinimg.com/736x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Design Lead",
    bio: "Award-winning designer focused on creating delightful user experiences.",
    image:
      "https://i.pinimg.com/736x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function TeamPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeQuery.matches);

      const handleChange = (e) => {
        setIsDarkMode(e.matches);
      };

      darkModeQuery.addEventListener("change", handleChange);
      return () => darkModeQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <main className="py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <section className="mb-16">
            <div className="text-center space-y-4 mb-16 flex items-center justify-center flex-col">
              <h1 className="text-2xl bebas-neue-regular md:text-3xl font-bold text-teal-500">
                Our Amazing Team
              </h1>
              <div className="w-48 h-[2px] rounded-full bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500"></div>
              <div>
                <h2 className="text-3xl md:text-4xl montserrat-font mb-2 font-bold text-gray-800 dark:text-white">
                  Meet The People Behind Our Success
                </h2>
                <p className="max-w-2xl montserrat-font mx-auto text-gray-600 dark:text-gray-300">
                  Our diverse team brings together expertise from different
                  backgrounds to create innovative solutions for our clients.
                </p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square rounded-md object-cover "
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
