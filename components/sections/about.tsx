import { config } from "@/config";
export default function About(props :any) {
    const { section, about } = config();
    const item = about();
    const section_item = section()[1];
    return (
        <section>
             <div className="border border-gray-500 w-44 text-center rounded-full py-1 text-lg mb-14 dark:text-white flex justify-center items-center">
                {section_item.icon}<small className="uppercase ml-2 mt-[1px]">{section_item.name}</small>
            </div>
            <div className="text-5xl mt-5 mb-10 dark:text-white" data-aos="fade-up">
                <p>Every great design begin with</p>
                <p className="my-4">an even <span className="text-green-500 ">better story</span></p>
            </div>
            <div className="mt-5 text-gray-500" data-aos="fade-up">
                {item}
            </div>
        </section>
    )
}