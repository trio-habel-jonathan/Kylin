"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {

  return (
    <div className="relative h-[34rem] w-full bg-slate-50 dark:bg-black text-black dark:text-white overflow-hidden flex flex-col items-center justify-center py-10">
      {/* Background glow effect */}
      <motion.div 
        className="absolute w-full h-full opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Static teal glow circles */}
        <motion.div 
          className="absolute rounded-full w-[22rem] h-[22rem] bg-teal-400 blur-3xl"
          style={{ 
            top: '1%', 
            left: '30%',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute rounded-full w-64 h-64 bg-teal-500 blur-3xl"
          style={{ 
            bottom: '20%', 
            right: '20%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Content container */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="bebas-neue-regular text-6xl md:text-7xl lg:text-8xl  mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Us
        </motion.h1>
        
        <motion.div 
          className="h-1 w-24 bg-teal-400 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.p 
          className="text-black dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          We are passionate about creating innovative solutions that make a difference.
          Our team is dedicated to excellence and continuous improvement.
        </motion.p>
  
      </motion.div>
      
    
    </div>
  );
}