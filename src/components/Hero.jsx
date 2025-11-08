import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex item-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row item-center justify-between">
        {/*  Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi I'm <span className="text-purple">Narendra Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer
          </h2>
          <p className="text-lg text-grey-300 mb-8">
            I am a passionate developer with experience in building web
            applications using the latest technologies.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/*  Right Content - Placeholder for Image or Graphic */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-purple/20 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                src={assets.profileImg}
                alt="Narendra Kumar"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
