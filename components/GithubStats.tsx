export default function GithubStats() {
  const username = "MdTarekMahmud";

  return (
    <section className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Activity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

          {/* GitHub Stats */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
            alt="GitHub Stats"
            className="w-full max-w-[500px]"
          />

          {/* GitHub Streak */}
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`}
            alt="GitHub Streak"
            className="w-full max-w-[500px]"
          />

          {/* Top Languages */}
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
            alt="Top Languages"
            className="w-full max-w-[500px]"
          />

          {/* Contribution Graph */}
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`}
            alt="Contribution Graph"
            className="w-full max-w-[500px]"
          />

        </div>

      </div>
    </section>
  );
}
