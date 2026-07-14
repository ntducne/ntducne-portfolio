'use client'
import RightSideBar from "@/components/RightSideBar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Introduce from "@/components/sections/introduce";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import { Button } from "@/components/ui/button";
import UserInfo from "@/components/user-info";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useRef, useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { config } from "@/config";
import { AlignJustify } from "lucide-react";

export default function Home() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const introduce = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const resume = useRef<HTMLDivElement>(null);
  const skill = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const { section } = config();
  const item = section();

  const scrollToElement = (section: string) => {
    switch (section) {
      case "introduce":
        introduce.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "about":
        about.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "resume":
        resume.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "skill":
        skill.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "project":
        project.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "contact":
        contact.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  const [activeSection, setActiveSection] = useState("introduce");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'introduce', ref: introduce },
        { id: 'about', ref: about },
        { id: 'resume', ref: resume },
        { id: 'skill', ref: skill },
        { id: 'project', ref: project },
        { id: 'contact', ref: contact },
      ];

      let current = "";
      sections.forEach(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            current = section.id;
          }
        }
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white/80 dark:bg-black/40 backdrop-blur-md border-b dark:border-white/10 text-sm py-4 sticky top-0 z-50 sm:hidden">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link href="https://ntducc.id.vn" className="flex-none text-xl font-semibold dark:text-white">
              Portfolio
            </Link>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Drawer>
                <DrawerTrigger className="dark:text-white">
                  {
                    openDrawer ? <AlignJustify size={24} /> : <AlignJustify size={24} />
                  }
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerFooter>
                    {
                      item.map((value: any, index: number) => (
                        <DrawerClose key={index}>
                          <div className="w-full grid grid-cols-2 py-3 border rounded-xl" onClick={() => scrollToElement(value.scroll)}>
                            <div className="flex justify-end items-center mr-6">
                            {value.icon}
                            </div>
                            <div className="text-left -ml-3">
                            {value.name}
                            </div>
                          </div>
                        </DrawerClose>
                      ))
                    }
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex flex-col lg:flex-row w-full max-w-[1500px] mx-auto relative mt-5 lg:mt-0">
        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 lg:h-dvh lg:sticky lg:top-0 flex justify-center items-center px-4 lg:px-8">
          <UserInfo />
        </div>
        <div className="flex-1 w-full pt-10 lg:pt-20 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[900px] mx-auto">
          <div ref={introduce} className="scroll-mt-32">
            <Introduce />
          </div>
          <div className="mb-[14%]"></div>
          
          <div ref={about} className="scroll-mt-32">
            <About />
          </div>
          <div className="mb-[14%]"></div>
          
          <div ref={resume} className="scroll-mt-32">
            <Resume />
          </div>
          <div className="mb-[17%]"></div>
          
          <div ref={skill} className="scroll-mt-32">
            <Skills />
          </div>
          <div className="mb-[14%]"></div>
          
          <div ref={project} className="scroll-mt-32">
            <Projects />
          </div>
          <div className="mb-[14%]"></div>
          
          <div ref={contact} className="scroll-mt-32">
            <Contact />
          </div>
          <div className="mb-[14%]"></div>
        </div>
        <div className="hidden lg:flex w-[100px] shrink-0 h-dvh sticky top-0 justify-center items-center">
          <RightSideBar scrollToElement={scrollToElement} activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}
