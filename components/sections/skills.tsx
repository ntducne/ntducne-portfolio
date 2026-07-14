import { config } from "@/config";
export default function Skills(props :any) {
    const { section, skills } = config();
    const item = skills();
    const section_item = section()[3];
    return (
        <section ref={props.section_4}>
             <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-14 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white">
                <p className="my-4">My <span className="text-green-500 ">Advantages</span></p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[55rem]">
                {
                    item.map((skill, index) => {
                        return (
                            <div key={index} className=" rounded-full hover:border-green-500 transition-all" data-aos={skill.animation}>
                                <img className="w-36 h-48 pt-8 pb-4 rounded-xl mx-auto" src={skill.icon} alt="product image" />
                                <div className="px-5 pb-5 text-center">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{skill.name}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}