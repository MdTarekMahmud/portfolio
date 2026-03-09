"use client";

export default function Contact() {
  return (
   <section id="contact" className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}