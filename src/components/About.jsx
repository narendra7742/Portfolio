import React from 'react'
import {motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-grey-300 mb-8">
          I am a dedicated developer with a passion for creating dynamic and
          responsive web applications. My expertise lies in both front-end and
          back-end development, allowing me to build complete solutions.
        </p>
      </div>
    </motion.div>
  )
}

export default About