export default function GithubStats() {
  const username = "MdTarekMahmud";

  return (
    <section className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          GitHub Dashboard
        </h2>

        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          View my projects, repositories, and contributions on GitHub.
        </p>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
        >
          Visit My GitHub
        </a>

      </div>
    </section>
  );
}
