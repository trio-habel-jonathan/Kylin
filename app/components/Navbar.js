"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track window resize and close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Close mobile menu if screen width is larger than md breakpoint (768px)
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const urlNavbar = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/aboutus",
    },
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "Contact",
      url: "/contactus",
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "backdrop-blur-sm bg-white/10 dark:bg-black/10"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="bebas-neue-regular text-4xl tracking-wider text-gray-900 dark:text-white">
            KYLIN<span className="text-teal-500 dark:text-teal-400">.</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-base montserrat-font font-medium">
            {urlNavbar.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.url}
                  className="py-1 text-gray-800 dark:text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 transition-colors duration-200 rounded hover:bg-gray-200 dark:hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="flex flex-col w-6 gap-1.5"
            >
              <motion.span
                className="h-0.5 w-6 bg-gray-800 dark:bg-white origin-left"
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 45, y: -2 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-gray-800 dark:bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-gray-800 dark:bg-white origin-left"
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: -45, y: 2 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-4 py-3 backdrop-blur-md bg-white/20 dark:bg-black/20">
          <ul className="flex flex-col gap-4 text-base montserrat-font font-medium">
            {urlNavbar.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: mobileMenuOpen ? 0 : -20,
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.url}
                  className="block py-2 px-2 border-l-2 border-transparent text-gray-800 dark:text-white hover:border-teal-500 dark:hover:border-teal-400 opacity-80 hover:opacity-100 transition-all duration-200"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Minimalist Web3 Line Accent */}
      <motion.div
        className={`h-0.5 w-full bg-gradient-to-r from-transparent via-teal-500/30 dark:via-teal-400/30 to-transparent ${
          scrolled || mobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled || mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  );
}
