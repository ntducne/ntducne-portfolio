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
import { useRef, useState } from "react";

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
        if (introduce.current) {
          introduce.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "about":
        if (about.current) {
          about.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "resume":
        if (resume.current) {
          resume.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "skill":
        if (skill.current) {
          skill.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "project":
        if (project.current) {
          project.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "contact":
        if (contact.current) {
          contact.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <>

      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800 sticky top-0 z-50 sm:hidden">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link href="https://ntducc.id.vn" className="flex-none text-xl font-semibold dark:text-white">
              Portfolio
            </Link>
            <div className="">
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

      <div className="grid grid-cols-1 md:grid-cols-8 m-5 lg:m-0">
        <div className="lg:col-span-3  lg:h-dvh lg:sticky lg:top-0 flex justify-start items-center">
          <UserInfo />
        </div>
        <div className="col-span-4 w-full">
          <div className="mb-[14%]" ref={introduce}></div>
          <Introduce />
          <div className="mb-[14%]" ref={about}></div>
          <About />
          <div className="mb-[14%]" ref={resume}></div>
          <Resume />
          <div className="mb-[17%]" ref={skill}></div>
          <Skills />
          <div className="mb-[14%]" ref={project}></div>
          <Projects />
          <div className="mb-[14%]" ref={contact}></div>
          <Contact />
          <div className="mb-[14%]"></div>
        </div>
        <div className="col-span-1 h-dvh sticky top-0 lg:flex justify-start items-center hidden">
          <RightSideBar scrollToElement={scrollToElement} />
        </div>
      </div>
    </>
  );
}
