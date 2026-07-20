"use client";
import Typewriter from "@/components/TypingEffect";
import { config } from "@/config";
import { CodeOutlined, ScheduleOutlined } from "@ant-design/icons";
export default function Introduce() {
    const { section, introduce } = config();
    const item = introduce();
    const section_item = section()[0];
    return (
        <section>
            <div className="border border-white/10 glass-card w-44 text-center rounded-full py-1.5 text-lg mb-14 flex justify-center items-center text-muted-foreground shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors duration-300">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px] tracking-widest">{section_item.name}</small>
            </div>
            <div className="text-4xl md:text-5xl mt-5 mb-10">
                <p>Say Hi from <span className="text-gradient font-bold">{item.textType}</span>,</p>
                <p className="my-4 font-bold tracking-tight">
                    {item.major.line_1}
                </p>
                <p className="font-bold tracking-tight">
                    {item.major.line_2}
                </p>
            </div>
            <div className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                <span>
                    {item.text}
                </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-12 gap-8">
                <div className="glass-panel p-6 rounded-3xl flex-1 hover:-translate-y-2 transition-transform duration-300 border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/20 transition-all duration-300"></div>
                    <div className="my-2 flex text-emerald-400 items-center">
                        <ScheduleOutlined className="text-4xl mr-3 drop-shadow-md" />
                        <h2 className="text-5xl font-bold tracking-tighter"><span>{item.year_of_experience}</span>+</h2>
                    </div>
                    <div>
                        <p className="mt-4 font-sans text-sm font-semibold text-muted-foreground tracking-widest uppercase">Years of Experience</p>
                    </div>
                </div>
                <div className="glass-panel p-6 rounded-3xl flex-1 hover:-translate-y-2 transition-transform duration-300 border-white/5 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -z-10 group-hover:bg-cyan-500/20 transition-all duration-300"></div>
                    <div className="my-2 flex text-cyan-400 items-center">
                        <CodeOutlined className="text-4xl mr-3 drop-shadow-md" />
                        <h2 className="text-5xl font-bold tracking-tighter"><span>{item.project_completed}</span>+</h2>
                    </div>
                    <div>
                        <p className="mt-4 font-sans text-sm font-semibold text-muted-foreground tracking-widest uppercase">Projects completed on {item.num_of_clients} countries</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
