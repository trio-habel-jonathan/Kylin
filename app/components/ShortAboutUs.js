// components/AnimatedAboutUs.js
"use client";
import { motion } from "framer-motion";

export default function AnimatedAboutUs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const statCounterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  // Stats data for animation
  const stats = [
    { value: "3", label: "Team Members" },
    { value: "10+", label: "Our Client" },
    { value: "85%", label: "Client Satisfication" },
    { value: "5+", label: "Project" },
  ];

  return (
    <motion.section
      className="w-full py-20 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto space-y-6 flex items-center flex-col justify-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h6
              className="montserrat-font font-semibold text-lg"
              variants={textRevealVariants}
            >
              About Us
            </motion.h6>
            <motion.h1
              className="text-teal-500 bebas-neue-regular text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full"
              variants={itemVariants}
            >
              <motion.span
                className="text-black dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Transforming
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ideas into Digital Reality
              </motion.span>
            </motion.h1>
          </motion.div>
          <motion.p
            variants={textRevealVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:divide-x-2 devide-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2 p-2"
              custom={index}
              variants={statCounterVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <motion.p
                className="montserrat-font font-bold text-4xl text-teal-500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1 + 0.5,
                }}
              >
                {stat.value}
              </motion.p>
              <motion.p
                className="montserrat-font font-medium text-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.7,
                }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
