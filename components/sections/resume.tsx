import { config } from "@/config";
export default function Resume(props :any) {
    const { section, resume } = config();
    const item = resume();
    const section_item = section()[2];
    return (
        <section ref={props.section_3}>
            <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-14 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white">
                <p className="my-4">Education & <span className="text-green-500 ">Experience</span></p>
            </div>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                {
                    item.map((item, index) => (
                        <li key={index} className="mb-10 ms-4 group" data-aos="fade-up">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 group-hover:bg-green-500 transition-all"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 group-hover:text-green-500 transition-all">
                                {item.time}
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2 mb-2">{item.title}</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                {item.description}
                            </p>
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}