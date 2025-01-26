"use client";

import React from "react";
import { Link } from "react-scroll";
import ComputersCanvas from "./canvas/Computers";

export default function Hero() {
  return (
    
    <section
      id="hero"
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100 relative"
    >
      {/* 3D Canvas */}
      <div className="w-full h-full" style={{ marginTop: "-400px"}}>
      <ComputersCanvas />
      </div>

      {/* Introduction */}
      <div className="absolute bottom-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Bexzod!</h1>
        <p className="text-lg text-gray-400 mb-6">
          I build interactive 3D experiences for the web.
        </p>
        <div className="flex space-x-4">
          <Link
           to="projects"
           smooth={true}
           duration={700}
           className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-4 animate-bounce">
        <Link 
        to="about"
        smooth={true}
        duration={700}
        >
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </Link>
      </div>
    </section>
  );
}
