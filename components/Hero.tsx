"use client";

import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white px-6">
      

  {/* <ParticleBackground /> */}

  <div className="text-center max-w-3xl relative z-10">

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-500">Md Tarek Mahmud</span>
        </h1>

        {/* Typing animation */}
        <div className="mt-6 text-xl text-gray-500 dark:text-gray-400">
          <ReactTyped
            strings={[
              "ML and Ai Developer",
              "Full Stack Developer",
              "Next.js Developer",
              "Cybersecurity Enthusiast",
              "Problem Solver",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-xl border border-gray-600 px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/yourusername"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-blue-500"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </section>
  );
}
