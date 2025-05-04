"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Web3 and how does it differ from Web2?",
      answer:
        "Web3 refers to the next evolution of the internet, built on decentralized technologies like blockchain. Unlike Web2's centralized platforms and data storage, Web3 emphasizes user ownership, permissionless access, and trustless interactions without intermediaries.",
    },
    {
      question: "How do smart contracts work in decentralized applications?",
      answer:
        "Smart contracts are self-executing code that automatically enforce and execute agreements when predetermined conditions are met. They run on blockchain networks, eliminating the need for intermediaries and creating trustless, transparent, and immutable transactions across decentralized applications.",
    },
    {
      question: "What are the benefits of decentralized finance (DeFi)?",
      answer:
        "DeFi offers financial services without centralized authorities, enabling global access, transparency, and user control. Benefits include permissionless access, reduced costs, programmable money, composability between protocols, and innovative financial products like flash loans and yield farming.",
    },
    {
      question: "How do NFTs create value in the digital economy?",
      answer:
        "NFTs (Non-Fungible Tokens) create value by providing verifiable scarcity, provable ownership, and programmable royalties for digital assets. They enable creators to monetize digital works directly, establish provenance, and create unique experiences that bridge digital and physical worlds.",
    },
    {
      question: "What is the role of governance tokens in DAOs?",
      answer:
        "Governance tokens give holders voting rights in Decentralized Autonomous Organizations (DAOs). Token holders can propose and vote on protocol changes, treasury allocations, and strategic decisions. This creates community-driven governance where stakeholders directly influence the organization's future.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const popUpVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="w-full h-full">
          <motion.div
            className="w-full h-full flex flex-col justify-center py-24 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="bebas-neue-regular text-start text-6xl font-bold"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-24">
              <motion.div className="space-y-8" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <h6 className="text-xl font-bold montserrat-font">
                    Send Message
                  </h6>
                  <p className="text-sm text-gray-400 montserrat-font">
                    Have questions, suggestions, or need support? Our team is
                    here to help. Please fill out the form below or reach out
                    through our contact details. We’ll get back to you as soon
                    as possible.
                  </p>
                </motion.div>
                <motion.form
                  className="grid grid-cols-2 gap-4 montserrat-font"
                  variants={containerVariants}
                >
                  <motion.div className="flex flex-col" variants={itemVariants}>
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={itemVariants}>
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={itemVariants}>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={itemVariants}>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </motion.div>
                  <motion.div
                    className="col-span-2 flex flex-col"
                    variants={itemVariants}
                  >
                    <label className="text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </motion.div>
                  <motion.div
                    className="col-span-2 flex flex-col"
                    variants={itemVariants}
                  >
                    <label className="text-sm font-medium">Message</label>
                    <textarea className="border-b-2 h-24 focus:outline-none p-1"></textarea>
                  </motion.div>
                  <motion.div
                    className="col-span-2 flex justify-end"
                    variants={popUpVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="group relative flex items-center rounded-md bg-teal-500 px-6 py-3 font-bold text-md text-white transition-all duration-300 ease-in-out hover:opacity-85 active:opacity-100">
                      <span className="montserrat-font">Send Now</span>
                      <span className="ml-0 w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:ml-4 group-hover:w-6">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M18 6H10M18 6V14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </motion.form>
              </motion.div>
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="space-y-6" variants={itemVariants}>
                  <div className="space-y-2">
                    <h6 className="text-xl font-bold montserrat-font">
                      Call Us
                    </h6>
                    <p className="text-sm text-gray-400 montserrat-font">
                      If you have any questions or require further information,
                      please do not hesitate to get in touch with us through the
                      contact details provided below.
                    </p>
                  </div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-teal-500/20 p-2 flex items-center justify-center rounded-full text-teal-500">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="montserrat-font font-semibold text-teal-500">
                      0812345678
                    </span>
                  </motion.div>
                </motion.div>
                <motion.div className="space-y-6" variants={itemVariants}>
                  <div className="space-y-2">
                    <h6 className="text-xl font-bold montserrat-font">
                      Live Chat
                    </h6>
                    <p className="text-sm text-gray-400 montserrat-font">
                      For faster and more convenient support, we invite you to
                      join our live chat. Our dedicated team is ready to assist
                      you with any inquiries or concerns you may have. Just
                      click the chat button below to begin — we’re only a
                      message away.
                    </p>
                  </div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-teal-500/20 p-2 flex items-center justify-center rounded-full text-teal-500">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="montserrat-font font-semibold text-teal-500">
                      Kepulauan Riau, Indonesia
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="w-full h-full bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-gray-900">
          <motion.div
            className="w-full grid grid-cols-1 lg:grid-cols-2 py-24 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 gap-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="montserrat-font space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h6>FAQ</h6>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Frequently Asked Questions.
              </h1>
            </motion.div>
            <div className="space-y-4 montserrat-font">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h6>All Questions Asked for Us</h6>
                <p>
                  Here you'll find answers to common questions to help you use
                  our platform more easily. If you need more help or can't find
                  what you're looking for, feel free to reach out through our
                  contact page—we're happy to assist!
                </p>
              </motion.div>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <button
                      className="w-full pr-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span className="font-bold">{item.question}</span>
                      <span className="text-teal-500 ml-2">
                        {openIndex === index ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </span>
                    </button>
                    <motion.div
                      className="pr-6 overflow-hidden text-sm"
                      initial={{ height: 0 }}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                        paddingTop: openIndex === index ? 16 : 0,
                        paddingBottom: openIndex === index ? 16 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
