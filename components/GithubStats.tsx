export default function GithubStats() {
  const username = "MdTarekMahmud"; // change this

  return (
    <section className="py-24 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Activity
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">

          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
            alt="GitHub stats"
          />

          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`}
            alt="GitHub streak"
          />

        </div>

      </div>
    </section>
  );
}