"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function KylinFeatures() {
  // Features data for easier management
  const features = [
    {
      icon: "lightbulb",
      title: "Deep Expertise & Vision",
      description: "Our team combines years of hands-on experience with a passion for solving real-world problems through technology. From startups to enterprises, we build solutions that scale."
    },
    {
      icon: "cube",
      title: "Web3-Ready Approach",
      description: "We're not just keeping up — we're leading. By embracing cutting-edge technologies like blockchain and decentralized systems, we prepare your business for what's next."
    },
    {
      icon: "code",
      title: "End-to-End Developer Services",
      description: "Every project is unique. That's why we offer end-to-end development services designed to match your goals, timeline, and vision — with clean code and smart architecture."
    },
    {
      icon: "network-wired",
      title: "Connected Digital Ecosystem",
      description: "We go beyond development. We create digital ecosystems that connect users, platforms, and services — designed for long-term growth and impact."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <motion.div 
          className="flex items-center justify-center flex-col gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-slate-100 to-white dark:from-gray-800 dark:to-gray-700 
                       border border-slate-200 dark:border-gray-600 w-fit py-2 px-6 rounded-full 
                       text-slate-800 dark:text-white shadow-sm dark:shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated gradient accent */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent w-3/4 h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            <h6 className="font-medium relative z-10 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
              Why Choose Kylin
            </h6>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-medium text-center text-slate-800 dark:text-white">
            Unlock the Full Potential of{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400 dark:from-teal-400 dark:to-emerald-300">Your Business</span>
          </h1>
          
          <p className="text-center text-slate-600 dark:text-gray-300 max-w-2xl">
            Choosing the right partner for your digital journey matters — and
            we're here to make a real difference. With a unique blend of
            innovation, technical expertise, and a user-first mindset, we help
            businesses unlock their full digital potential.
          </p>
        </motion.div>

        {/* Features Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 
                         border border-slate-100 dark:border-gray-700/50 
                         shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-teal-500/5 
                         transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 228, 161, 0.1)",
                borderColor: 'rgba(0, 228, 161, 0.3)', 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex flex-col space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg 
                                bg-teal-50 dark:bg-gray-800 text-teal-500 dark:text-teal-400 
                                relative overflow-hidden group">
                  {/* Animated gradient on icon hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-500/5 
                                  dark:from-teal-500/20 dark:to-teal-500/5 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <i className={`fas fa-${feature.icon} text-xl relative z-10`}></i>
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-2">
                  <span className="inline-block w-12 h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}