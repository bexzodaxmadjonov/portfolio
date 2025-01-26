"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGitAlt 
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-indigo-400" />, experience: "3+ years" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, experience: "2+ years" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, experience: "3+ years" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, experience: "3+ years" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, experience: "3+ years" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, experience: "2+ years" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" />, experience: "2+ years" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, experience: "2+ years" },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, experience: "3+ years" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, experience: "2+ years" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group w-full h-28 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Skill Icon */}
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-lg font-medium">{skill.name}</h3>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ willChange: "opacity" }}
              >
                <p className="text-sm text-gray-100 text-center px-4">
                  {`Experience: ${skill.experience}`}
                </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
