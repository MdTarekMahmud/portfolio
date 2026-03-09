// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import GithubStats from "@/components/GithubStats";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero/>
//       <GithubStats/>
//       <Skills/>
//       <Projects/>
      
//       <Contact/>
//       <Footer/>
  

//       <main className="flex min-h-screen items-center justify-center bg-black text-white pt-24">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold">Hello, I'm Tarek 👋</h1>

//           <p className="mt-4 text-xl text-gray-400">
//             Full Stack Developer | Next.js Developer
//           </p>

//           <button className="mt-6 rounded-xl bg-white px-6 py-3 text-black hover:bg-gray-300">
//             View My Projects
//           </button>
//         </div>
//       </main>
//     </>
//   );
// }


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubStats from "@/components/GithubStats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GithubStats />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}