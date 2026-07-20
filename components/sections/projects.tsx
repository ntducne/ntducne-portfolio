"use client";
import { config } from "@/config";
import Link from "next/link";
import Image from "next/image";

export default function Projects(props: any) {
    const { section, projects } = config();
    const item = projects();
    const section_item = section()[4];

    return (
        <section ref={props.section_5}>
            <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-14 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10">
                <p className="my-4 font-bold tracking-tight">Some <span className="text-gradient">Projects</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    item.map((project: any, index: number) => {
                        return (
                            <div className="group cursor-pointer glass-card rounded-3xl p-4 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 flex flex-col" key={index}>
                                <div className="relative shadow-sm rounded-2xl overflow-hidden aspect-[4/3]">
                                    <Image className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.img} alt={project.name} width={600} height={450} unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                </div>
                                <div className="mt-6 mb-4 px-2 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-300">{project.name}</h3>
                                    <p className="text-muted-foreground mt-3 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )

}
