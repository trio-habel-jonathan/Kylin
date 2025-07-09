import React from "react";
import { ArrowRight } from "lucide-react";
import { web2Projects, web3Projects } from "@/services/projectData";
import { Globe, Users, Database } from "lucide-react";

const educationPoints = [
  {
    icon: <Globe className="w-8 h-8 text-teal-400" />,
    title: "Centralized Platform",
    description:
      "Web2 relies on centralized servers controlled by large corporations, giving them full control over user data and content.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-400" />,
    title: "User-Generated Content",
    description:
      "Users can easily create and share content through platforms like Facebook, YouTube, and Instagram.",
  },
  {
    icon: <Database className="w-8 h-8 text-teal-400" />,
    title: "Data Collection",
    description:
      "Platforms extensively collect user data for personalized advertising and service monetization.",
  },
];

const web3EducationPoints = [
  {
    icon: <Globe className="w-8 h-8 text-teal-400" />,
    title: "Decentralized Infrastructure",
    description:
      "Web3 uses blockchain and peer-to-peer networks, reducing reliance on centralized servers and intermediaries.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-400" />,
    title: "Ownership & Control",
    description:
      "Users own their data and digital assets through wallets and smart contracts, giving them full control over their identity.",
  },
  {
    icon: <Database className="w-8 h-8 text-teal-400" />,
    title: "Transparency & Security",
    description:
      "Data is stored on public blockchains, ensuring transparency, immutability, and enhanced security.",
  },
];

export default function Ourprojects() {
  return (
    <section className="bg-slate-50 dark:bg-black w-full">
      <div className="max-w-6xl mx-auto sm:px-5 lg:px-3">
        {/* Web2 Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-cyan-400">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 4a2 2 0 012-2h3v2H4v12h3v2H4a2 2 0 01-2-2V4zM16 2a2 2 0 012 2v12a2 2 0 01-2 2h-3v-2h3V4h-3V2h3zM7 7h6v2H7V7zm0 4h6v2H7v-2z" />
                </svg>
              </div>
              <h3 className="text-xl montserrat-font md:text-2xl font-semibold">
                Web2 Projects
              </h3>
            </div>
            <a
              href="/projects/web2"
              className="montserrat-font text-sm text-cyan-400 hover:underline flex items-center gap-1"
            >
              Lihat Selengkapnya <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {web2Projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 dark:bg-gray-800 rounded-xl flex gap-4 p-5 shadow-lg transition-transform duration-300 ease-in-out hover:shadow-cyan-500/30 cursor-pointer"
              >
                <div className="flex-shrink-0 mt-1">{project.logo}</div>

                <div className="flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-1 montserrat-font">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-400 mb-3">{project.desc}</p>

                  <div className="flex justify-end mt-auto">
                    <button
                      className="text-sm text-cyan-400 flex items-center gap-1 hover:underline focus:outline-none"
                      role="button"
                      aria-label={`Selengkapnya tentang ${project.title}`}
                    >
                      Selengkapnya <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-black  flex gap-8 items-start justify-between my-30 flex-wrap ">
          <div className="flex-[300px] ">
            <div className="flex items-center gap-4 mb-8">
              <h1 className="bebas-neue-regular text-teal-400 text-5xl lg:text-5xl font-bold">
                What Should You Know About Web2.
              </h1>
            </div>

            <div className="min-w-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/image/asiangirl-sit.avif"
                draggable="false"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                alt="Web2 illustration"
              />
            </div>
          </div>

          <div className="flex-[400px] min-w-[350px] space-y-6">
            <div className="space-y-6">
              {educationPoints.map((point, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-teal-400/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40 transition-colors duration-300">
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="montserrat-font text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="montserrat-font text-sm lg:text-base tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-8 flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Web3 Projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-cyan-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1.5 9l10.5 7 10.5-7L12 2zm0 2.4L19.2 9 12 13.8 4.8 9 12 4.4zm0 8.6l10.5-7V18l-10.5 7L1.5 18V6l10.5 7z" />
                </svg>
              </div>
              <h3 className="text-xl montserrat-font md:text-2xl font-semibold">
                Web3 Projects
              </h3>
            </div>
            <a
              href="/projects/web3"
              className="montserrat-font text-sm text-cyan-400  flex items-center gap-1"
            >
              Lihat Selengkapnya <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {web3Projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 dark:bg-gray-800 rounded-xl flex gap-4 p-5 shadow-lg transition-transform duration-300 ease-in-out hover:shadow-cyan-500/30 cursor-pointer"
              >
                <div className="flex-shrink-0 mt-1">{project.logo}</div>

                <div className="flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-1 montserrat-font">
                    {project.title}
                  </h4>

                  <p className="text-sm text-gray-400 mb-3">{project.desc}</p>

                  <div className="flex justify-end mt-auto">
                    <button
                      className="text-sm text-cyan-400 flex items-center gap-1 hover:underline focus:outline-none"
                      role="button"
                      aria-label={`Selengkapnya tentang ${project.title}`}
                    >
                      Selengkapnya <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-black flex gap-8 items-start justify-between my-30 flex-wrap-reverse">
          <div className="flex-[400px] min-w-[350px] space-y-6">
            <div className="space-y-6">
              {web3EducationPoints.map((point, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-teal-400/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40 transition-colors duration-300">
                      {point.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="montserrat-font text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="montserrat-font text-sm lg:text-base tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className=" flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full opacity-60"></div>
            </div>
          </div>

          <div className="flex-[300px]">
            <div className="flex items-center gap-4 mb-8">
              <h1 className="bebas-neue-regular text-teal-400 text-5xl lg:text-5xl font-bold">
                What Should You Know About Web3.
              </h1>
            </div>

            <div className="min-w-[280px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/image/mansitting.avif"
                draggable="false"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                alt="Web3 illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
