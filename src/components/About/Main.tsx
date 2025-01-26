"use client";

import React from "react";
import AnimatedSphere from "./AnimatedSphere";

const Main = () => {
  return (
    <section id="about" className="w-full h-screen bg-gray-950 text-gray-100 flex items-center">
      {/* Left Section: 3D Object or Animation */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <AnimatedSphere />
      </div>

      {/* Right Section: About Text */}
      <div className="w-1/2 h-full flex flex-col justify-center px-12">
        <h1 className="text-5xl font-bold text-indigo-500 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Hey there! I'm <span className="text-indigo-400">Bexzod Axmadjonov</span>, a
          creative and dedicated developer with a passion for building immersive
          web applications. I specialize in technologies like React, Next.js, and
          Three.js to craft interactive and responsive designs.
        </p>
        <p className="text-lg text-gray-300">
          Beyond coding, I enjoy exploring new frameworks, contributing to open
          source, and working on projects that push the boundaries of web
          technology.
        </p>
      </div>
    </section>
  );
};

export default Main;
