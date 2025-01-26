"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col items-center justify-between lg:flex-row">
        {/* Navigation Links */}
        <nav className="cursor-pointer flex space-x-6 text-sm mb-4 lg:mb-0">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-100 transition"
          >      
             Home 
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-100 transition"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-gray-100 transition"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-100 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <motion.a
            href="https://github.com/bexzodaxmadjonov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-100 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bexzod-axmadjonov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-100 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/bexzod_x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-100 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="mailto:BexzodAxmadjonovX@gmail.com"
            className="text-xl hover:text-gray-100 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
