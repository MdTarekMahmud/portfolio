import Image from "next/image";

export default function GithubStats() {
  const username = "MdTarekMahmud"; // your GitHub username

  return (
    <section className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Activity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

          {/* GitHub Stats */}
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
            alt="GitHub Stats"
            width={500}
            height={200}
            unoptimized
          />

          {/* GitHub Streak */}
          <Image
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`}
            alt="GitHub Streak"
            width={500}
            height={200}
            unoptimized
          />

          {/* Top Languages */}
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
            alt="Top Languages"
            width={500}
            height={200}
            unoptimized
          />

          {/* Contribution Graph */}
          <Image
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`}
            alt="Contribution Graph"
            width={500}
            height={200}
            unoptimized
          />

        </div>

      </div>
    </section>
  );
}
