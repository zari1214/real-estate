import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}

      className="flex flex-col items-center w-full overflow-hidden justify-center container mx-auto p-14 md:px-20 lg:px-32"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Left Side */}
        <img
          className="w-full sm:w-1/2 max-w-lg"
          src={assets.brand_img}
          alt="Brand"
        />
        {/* Right Side */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Mn. sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            With over 5 years of experience, we take pride in delivering
            exceptional projects that redefine excellence. Our team has
            successfully completed over 10 projects, delivering more than 15
            million square feet of real estate. Currently, we are working on 10+
            ongoing projects, ensuring quality and satisfaction at every step.
            Let us help you turn your dream home into reality!
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
