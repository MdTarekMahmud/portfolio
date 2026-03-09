export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm">
          © 2026 Your Name. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://github.com/yourusername"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-white"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}