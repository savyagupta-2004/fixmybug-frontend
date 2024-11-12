import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfessionalHeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-white text-gray-900 py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-gray-100 opacity-90"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-10 lg:p-20 rounded-lg shadow-xl bg-white bg-opacity-80 backdrop-blur-lg">
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Fix Your Bugs with Expert Developers
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Join FixMyBug, where skilled experts provide fast and reliable bug
          fixes. Choose your expert, share your problem, and experience seamless
          solutions tailored to your needs.
        </p>

        {/* Features Section with Animated Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center mt-12 gap-8"
        >
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <img
                src={`https://img.icons8.com/ios/50/${
                  isDarkMode ? "FFFFFF" : "000000"
                }$/bug.webp`}
                alt="Bug Fixing"
                className="w-14 h-14 mx-auto transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-2 text-sm font-semibold">Fast Bug Fixing</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 text-lg font-semibold text-gray-900 bg-gradient-to-r from-indigo-400 to-teal-400 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            Get Started with FixMyBug
          </button>
        </div>
      </div>

      {/* Floating Particles for Enhanced Tech Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-3 h-3 bg-teal-300 rounded-full absolute top-1/3 left-1/4 animate-ping opacity-75"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalHeroSection;
