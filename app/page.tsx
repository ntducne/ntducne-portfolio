import RightSideBar from "@/components/RightSideBar";
import Introduce from "@/components/sections/introduce";
import UserInfo from "@/components/user-info";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/about"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Resume = dynamic(() => import("@/components/sections/resume"));
const Skills = dynamic(() => import("@/components/sections/skills"));

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row w-full max-w-[1500px] mx-auto relative mt-5 lg:mt-0">
        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 lg:h-dvh lg:sticky lg:top-0 flex justify-center items-center px-4 lg:px-8">
          <UserInfo />
        </div>
        <div className="flex-1 w-full pt-10 lg:pt-20 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[900px] mx-auto">
          <div id="introduce" className="scroll-mt-32">
            <Introduce />
          </div>
          <div className="mb-[14%]"></div>
          
          <div id="about" className="scroll-mt-32">
            <About />
          </div>
          <div className="mb-[14%]"></div>
          
          <div id="resume" className="scroll-mt-32">
            <Resume />
          </div>
          <div className="mb-[17%]"></div>
          
          <div id="skill" className="scroll-mt-32">
            <Skills />
          </div>
          <div className="mb-[14%]"></div>
          
          <div id="project" className="scroll-mt-32">
            <Projects />
          </div>
          <div className="mb-[14%]"></div>
          
          <div id="contact" className="scroll-mt-32">
            <Contact />
          </div>
          <div className="mb-[14%]"></div>
        </div>
        <div className="hidden lg:flex w-[100px] shrink-0 h-dvh sticky top-0 justify-center items-center">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}
