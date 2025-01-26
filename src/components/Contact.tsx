"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5s5pnsh",
        "template_eg69dxq",
        formRef.current,
        "UI3R7gdx44OlXlMmg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-gray-900 text-gray-100 relative py-16">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-lg text-gray-400">
            Have a question or want to work together? Reach out below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition focus:ring-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105 transition">
              <FaEnvelope className="text-3xl text-indigo-500" />
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a href="mailto:BexzodAxmadjonovX@gmail.com" className="text-gray-400 hover:text-gray-100">
                  BexzodAxmadjonovX@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105 transition">
              <FaPhoneAlt className="text-3xl text-green-500" />
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <p className="text-gray-400">+998-94-445-67-78</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105 transition">
              <FaLinkedin className="text-3xl text-blue-600" />
              <div>
                <h4 className="text-lg font-medium">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/bexzod-axmadjonov/" className="text-gray-400 hover:text-gray-100">
                https://www.linkedin.com/in/bexzod-axmadjonov/
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105 transition">
              <FaGithub className="text-3xl text-gray-300" />
              <div>
                <h4 className="text-lg font-medium">GitHub</h4>
                <a href="https://github.com/bexzodaxmadjonov" className="text-gray-400 hover:text-gray-100">
                https://github.com/bexzodaxmadjonov
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-72 h-72 bg-indigo-500 bg-opacity-30 rounded-full blur-3xl absolute top-16 left-16"
          animate={{ scale: [0.9, 1.1], opacity: [0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.div
          className="w-72 h-72 bg-pink-500 bg-opacity-30 rounded-full blur-3xl absolute bottom-16 right-16"
          animate={{ scale: [0.9, 1.1], opacity: [0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
