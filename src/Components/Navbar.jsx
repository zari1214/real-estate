import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      {/* Desktop and Mobile Navbar */}
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a className='cursor-pointer hover:text-gray-400' href="#Header">Home</a>
          <a className='cursor-pointer hover:text-gray-400' href="#About">About</a>
          <a className='cursor-pointer hover:text-gray-400' href="#Projects">Projects</a>
          <a className='cursor-pointer hover:text-gray-400' href="#Testimonials">Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img
          onClick={() => setShowMobileMenu(true)}
          className='md:hidden w-7 cursor-pointer'
          src={assets.menu_icon}
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          showMobileMenu ? 'bg-white opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <div className='flex justify-end px-6 pt-6 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            className='w-6 hover:scale-110 transition-transform duration-300'
            src={assets.cross_icon}
            alt="Close Menu"
          />
        </div>

        {/* Menu Items */}
        <ul className='flex flex-col items-center gap-4 mt-12 mx-5 text-lg font-medium text-gray-800'>
          <a
            onClick={() => setShowMobileMenu(false)}
            className='px-6 py-3 rounded-full inline-block hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className='px-6 py-3 rounded-full inline-block hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className='px-6 py-3 rounded-full inline-block hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className='px-6 py-3 rounded-full inline-block hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
