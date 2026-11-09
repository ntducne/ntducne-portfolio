import dynamic from "next/dynamic";
import Header from "@/components/Header";
import UserInfo from "@/components/user-info";
import RightSideBar from "@/components/RightSideBar";
import Introduce from "@/components/sections/introduce";

const About = dynamic(() => import("@/components/sections/about"));
const Resume = dynamic(() => import("@/components/sections/resume"));
const Skills = dynamic(() => import("@/components/sections/skills"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Contact = dynamic(() => import("@/components/sections/contact"));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Ultra-lightweight CSS Ambient 3D Depth Lights (0% CPU/GPU overhead) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Mobile Top Navigation */}
      <Header />

      {/* Main 3D Layout */}
      <main className="flex flex-col lg:flex-row w-full max-w-[1540px] mx-auto relative mt-4 lg:mt-0 z-10 px-3 sm:px-6 lg:px-8">
        {/* Left Sticky Profile Card with 3D Tilt */}
        <aside className="w-full lg:w-[380px] xl:w-[420px] shrink-0 lg:h-dvh lg:sticky lg:top-0 flex justify-center items-center py-6 lg:py-0">
          <UserInfo />
        </aside>

        {/* Center Content Scroll Area */}
        <div className="flex-1 w-full pt-8 lg:pt-16 px-2 sm:px-6 lg:px-10 xl:px-14 max-w-[960px] mx-auto space-y-24 sm:space-y-32 pb-28">
          <div id="introduce" className="scroll-mt-24 sm:scroll-mt-32">
            <Introduce />
          </div>

          <div id="about" className="scroll-mt-24 sm:scroll-mt-32">
            <About />
          </div>

          <div id="resume" className="scroll-mt-24 sm:scroll-mt-32">
            <Resume />
          </div>

          <div id="skill" className="scroll-mt-24 sm:scroll-mt-32">
            <Skills />
          </div>

          <div id="project" className="scroll-mt-24 sm:scroll-mt-32">
            <Projects />
          </div>

          <div id="contact" className="scroll-mt-24 sm:scroll-mt-32">
            <Contact />
          </div>
        </div>

        {/* Right Sticky 3D HUD Navigation Bar */}
        <aside className="hidden lg:flex w-[90px] shrink-0 h-dvh sticky top-0 justify-center items-center">
          <RightSideBar />
        </aside>
      </main>
    </div>
  );
}
