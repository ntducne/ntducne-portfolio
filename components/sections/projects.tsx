import { config } from "@/config";
import Link from "next/link";

export default function Projects(props: any) {
    const { section, projects } = config();
    const item = projects();
    const section_item = section()[4];

    return (
        <section ref={props.section_5}>
            <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-14 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white">
                <p className="my-4">Some projects <span className="text-green-500 ">examples</span></p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    item.map((project: any, index: number) => {
                        return (
                            <div className="group cursor-pointer" key={index}>
                                <div className="relative shadow-sm rounded-xl overflow-hidden">
                                    <img className="w-full h-[260px] rounded-xl transition-all group-hover:scale-110" src={project.img} alt="Image Description" />
                                    <div className="absolute top-0 bg-black w-full h-full opacity-30"></div>
                                    <div className="absolute bottom-0 start-0 end-0">
                                        {/* <div className="p-4 md:p-5 flex">
                                            {
                                                project.technology.map((tech: string, index: number) => {
                                                    return (
                                                        <div className={`px-4 py-2 rounded-full bg-white text-sm group-hover:bg-[#1f1f1f] group-hover:text-white transition-all ${index > 0 ? 'ml-2' : ''}`} key={index}>
                                                            {tech}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div> */}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl mt-5 dark:text-white">{project.name}</h3>
                                    <p className="text-gray-500 mt-2">{project.description}</p>
                                    {/* <div className="mt-4">
                                        <Link href={project.website} className="text-green-500 hover:underline">Website</Link>
                                        <Link href={project.git} className="ml-4 text-green-500 hover:underline">Github</Link>
                                    </div> */}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )

}