"use client";
import { config } from "@/config";
export default function About(props :any) {
    const { section, about } = config();
    const item = about();
    const section_item = section()[1];
    return (
        <section>
             <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-14 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10" data-aos="fade-up">
                <p className="font-bold tracking-tight">Every great design begins with</p>
                <p className="my-4 font-bold tracking-tight">an even <span className="text-gradient">better story</span></p>
            </div>
            <div className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-3xl" data-aos="fade-up">
                {item}
            </div>
        </section>
    )
}
