"use client";

import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiCplusplus, SiKalilinux } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },

  { name: "Python", icon: <FaPython size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "Kali Linux", icon: <SiKalilinux size={40} /> },

  { name: "MATLAB", icon: <span className="text-2xl">📊</span> },
  { name: "Problem Solving", icon: <span className="text-2xl">🧠</span> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              {skill.icon}
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
