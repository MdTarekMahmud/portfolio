"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio built with Next.js and Tailwind.",
    image: "/projects/project1.png",
    tech: ["Next.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Air Defence System",
    description: "A productivity app for managing daily tasks.",
    image: "/projects/project2.png",
    tech: ["React", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Cybersecurity Toolkit",
    description: "Security tools built for penetration testing practice.",
    image: "/projects/project3.png",
    tech: ["Python", "Kali Linux"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}