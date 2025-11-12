import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-4">
          Get in <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I would love to hear from you! Whether you have a question or just
          want to say hi, feel free to reach out.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mask-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:outline-none focus:border-purple"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:outline-none focus:border-purple"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg focus:outline-none focus:border-purple"
                  id="message"
                  name="message"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple font-medium rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Location: </h3>
                <p className="text-gray-400">New Delhi, Ashok Nagar</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Email: </h3>
                <p className="text-gray-400">naren@example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Phone: </h3>
                <p className="text-gray-400">+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full justify-center bg-dark-300 flex items-center text-purple hover:bg-blue hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full justify-center bg-dark-300 flex items-center text-purple hover:bg-blue hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full justify-center bg-dark-300 flex items-center text-purple hover:bg-dark hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full justify-center bg-dark-300 flex items-center text-pink hover:bg-pink hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
