import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./partials/Hero";
import { motion } from "framer-motion";
import OurProjects from "./partials/OurProjects";
import {
  TrendingUp,
  Globe2,
  Zap,
  Users,
  Percent,
  BarChart3,
} from "lucide-react";

export default function AboutUs() {
  const statistics = [
    {
      icon: <Globe2 className="w-10 h-10 text-blue-500" />,
      title: "Web2 Dominance",
      percentage: "~99%",
      description:
        "Nearly all websites on the internet still use Web2 technologies, including platforms like Google, Facebook, and Amazon that dominate daily usage.",
      color: "blue",
      trend: "stable",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Web3 Adoption",
      percentage: "~1%",
      description:
        "Although still small, Web3 is experiencing rapid growth with 10 million daily active users and a projected market CAGR of 49.3% by 2030.",
      color: "purple",
      trend: "growing",
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: "User Engagement",
      percentage: "33%",
      description:
        "Among those familiar with Web3, 33% have used a Web3 wallet, indicating significant adoption among early adopters.",
      color: "green",
      trend: "increasing",
    },
  ];

  const marketData = [
    {
      title: "Web3 Market Size",
      value: "$2.25B",
      subtitle: "2023",
      projection: "$33.53B by 2030",
    },
    {
      title: "Daily Active Users",
      value: "10M",
      subtitle: "Web3 (2024)",
      projection: "1B expected by 2025",
    },
    {
      title: "Enterprise Adoption",
      value: "25%",
      subtitle: "by 2027",
      projection: "Using Web3 services",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <OurProjects />

      <div className=" bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-gray-900 px-6 lg:px-15 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="bebas-neue-regular text-teal-400 text-5xl lg:text-5xl font-bold">
              Web2 vs Web3 Statistics
            </h2>
            <p className="montserrat-font text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comparison of adoption and the latest statistics between Web2
              and Web3 around the globe.
            </p>
          </div>

          {/* Main Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20 border border-${stat.color}-200 dark:border-${stat.color}-700/30 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="absolute top-4 right-4">
                  {stat.trend === "growing" && (
                    <TrendingUp className="w-5 h-5 text-green-500 animate-pulse" />
                  )}
                  {stat.trend === "increasing" && (
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                  )}
                  {stat.trend === "stable" && (
                    <Percent className="w-5 h-5 text-gray-500" />
                  )}
                </div>

                <div className="mb-6">
                  <div
                    className={`p-3 rounded-xl bg-${stat.color}-100 dark:bg-${stat.color}-900/40 w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`text-4xl lg:text-5xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 bebas-neue-regular`}
                  >
                    {stat.percentage}
                  </span>
                </div>

                <h3 className="montserrat-font text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {stat.title}
                </h3>

                <p className="montserrat-font text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
