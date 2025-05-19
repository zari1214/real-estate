import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container flex flex-col mx-auto md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Discover your dream property with ease. We're dedicated to helping you find the perfect home or investment opportunity.
                </p>
            </div>


            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a className='hover:text-white' href="#Home">Home</a>
                    <a className='hover:text-white' href="#About">About Us</a>
                    <a className='hover:text-white' href="#Contact">Contact Us</a>
                    <a className='hover:text-white' href="#">Privacy</a>
                </ul>
            </div>

            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Stay updated with the latest listings, market trends, and exclusive deals. Subscribe to our newsletter today!
            </p>
            <div className='flex gap-2'>
                <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' type="email" placeholder='Enter your email' />
                <button className='px-4 py-2 text-white rounded bg-blue-500'>Subscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2025 &copy; Real-Estate. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer
