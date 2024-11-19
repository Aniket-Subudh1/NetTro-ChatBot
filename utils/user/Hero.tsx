"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30 sticky top-0">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="Museum Logo" className="flex">
                  <img
                    className="w-auto lg:h-14 h-8"
                    src="/logo.png"
                    alt="Museum Logo"
                  />
                </a>
              </div>
              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title="Exhibitions"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-semibold"
                >
                  Exhibitions
                </a>
                <a
                  href="#"
                  title="Collections"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-semibold"
                >
                  Collections
                </a>
                <a
                  href="#"
                  title="Events"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-semibold"
                >
                  Events
                </a>
                <a
                  href="#"
                  title="Visit Us"
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80 font-semibold"
                >
                  Visit Us
                </a>
              </div>
              <a
                href="#"
                title="Buy Tickets"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </header>
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Start from the left
                animate={{ opacity: 1, x: 0 }} // Slide in to the original position
                transition={{ duration: 1 }}
              >
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  Discover the Wonders of Art & History
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  Explore Our Latest Exhibitions
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Experience the world's finest collections of art and culture.
                </p>
                <a
                  href="#"
                  title="Plan Your Visit"
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Plan Your Visit
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
                <p className="mt-5 text-gray-600">
                  Already have tickets?{" "}
                  <a
                    href="#"
                    title="Log in"
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }} // Start from the right
                animate={{ opacity: 1, x: 0 }} // Slide in to the original position
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  className="w-full"
                  src="/hero.jpg"
                  alt="Museum Exhibition"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
