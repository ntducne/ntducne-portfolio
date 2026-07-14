import Typewriter from "@/components/TypingEffect";
import { config } from "@/config";
import { CodeOutlined, ScheduleOutlined } from "@ant-design/icons";
export default function Introduce() {
    const { section, introduce } = config();
    const item = introduce();
    const section_item = section()[0];
    return (
        <section>
            <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-14 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white">
                <p>Say Hi from <span className="text-green-500 ">{item.textType}</span>,</p>
                <p className="my-4">
                    {item.major.line_1}
                </p>
                <p>
                    {item.major.line_2}
                </p>
            </div>
            <div className="text-gray-500">
                <span>
                    {item.text}
                </span>
            </div>
            <div className="flex mt-8">
                <div className="rounded-[25px] aspect">
                    <div className="my-2 flex dark:text-white">
                        <ScheduleOutlined className="text-4xl mr-3" />
                        <h2 className="text-4xl font-bold"><span>{item.year_of_experience}</span> +</h2>
                    </div>
                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">YEARS OF EXPERIENCE</p>
                    </div>
                </div>
                <div className="rounded-[25px] aspect ml-14">
                    <div className="my-2 flex dark:text-white">
                        <CodeOutlined className="text-4xl mr-3" />
                        <h2 className="text-4xl font-bold"><span>{item.project_completed}</span> +</h2>
                    </div>
                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">PROJECTS COMPLETED ON {item.num_of_clients} COUNTRIES</p>
                    </div>
                </div>
            </div>
        </section>
    )
}