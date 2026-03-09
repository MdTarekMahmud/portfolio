"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    // <nav className="fixed top-0 w-full bg-black text-white border-b border-gray-800">
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-black dark:text-white">
  MyPortfolio
</h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-300">
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#skills" className="hover:text-white">Skills</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}