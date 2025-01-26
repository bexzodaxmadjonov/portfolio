"use client";

import React from "react";
import { Link } from 'react-scroll' // Import Link from react-scroll

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-950 shadow-md px-20 py-4">
      <div className="container mx-auto flex justify-between items-center px-20 py-4">
        {/* Logo */}
        <Link 
        to="hero"
        smooth={true}
        duration={700}
        >
        <div className="text-xl font-bold text-gray-100 cursor-pointer">
          Bexzod
        </div>        
        </Link>


        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-gray-100 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-gray-100 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-gray-100 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-gray-100 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
