export default function GithubStats() {
  const username = "MdTarekMahmud";

  return (
    <section className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          GitHub Activity
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GitHub Stats */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
              alt="GitHub Stats"
              className="w-full"
            />
          </div>

          {/* GitHub Streak (NEW WORKING URL) */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight`}
              alt="GitHub Streak"
              className="w-full"
            />
          </div>

          {/* Top Languages */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
              alt="Top Languages"
              className="w-full"
            />
          </div>

          {/* Contribution Graph */}
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`}
              alt="Contribution Graph"
              className="w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
