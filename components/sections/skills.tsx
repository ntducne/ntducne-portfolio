"use client";
import { config } from "@/config";
import Image from "next/image";
export default function Skills(props :any) {
    const { section, skills } = config();
    const item = skills();
    const section_item = section()[3];
    return (
        <section ref={props.section_4}>
             <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-14 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10">
                <p className="my-4 font-bold tracking-tight">My <span className="text-gradient">Advantages</span></p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[55rem]">
                {
                    item.map((skill: any, index: number) => {
                        return (
                            <div key={index} className="glass-card rounded-3xl hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group overflow-hidden relative" data-aos={skill.animation}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/20 transition-all duration-300"></div>
                                <Image className="w-24 h-24 mt-8 mb-4 object-contain mx-auto group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" src={skill.icon} alt={skill.name} width={96} height={96} />
                                <div className="px-5 pb-6 text-center">
                                    <h5 className="text-lg font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">{skill.name}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
