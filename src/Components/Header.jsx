import React from 'react';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: "url(/header_img.png)" }}
      id="Header"
    >
      <motion.div
      initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      
      className="container text-center mx-auto px-4 sm:px-6 lg:px-12 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-tight sm:leading-snug md:leading-normal font-semibold pt-12 sm:pt-16 md:pt-20">
          Explore homes that <br /> fit your dreams
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-10 sm:mt-16">
          <a
            className="border border-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded hover:bg-white hover:text-blue-500 transition duration-300"
            href="#Projects"
          >
            Projects
          </a>
          <a
            className="bg-blue-500 px-6 sm:px-8 py-3 text-sm sm:text-base rounded hover:bg-blue-600 transition duration-300"
            href="#Contact"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
