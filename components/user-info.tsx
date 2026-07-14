import Image from "next/image";
import { CopyrightCircleOutlined, MailFilled } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";

export default function UserInfo(props: any) {
    const date = new Date();
    const year = date.getFullYear()
    const { info } = config();
    const item = info();

    function createMailtoLink(to :string, subject :string = "", body :string = "", cc :string = "", bcc :string = "") {
        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);
        if (cc) params.push(`cc=${encodeURIComponent(cc)}`);
        if (bcc) params.push(`bcc=${encodeURIComponent(bcc)}`);
        const queryString = params.length ? `?${params.join("&")}` : "";
        return `mailto:${to}${queryString}`;
    }

    const handleHireMe = () => {
        window.location.href = createMailtoLink(
            item.email,
            "Job Opportunity",
            "Hello, I would like to discuss a potential collaboration with you."
        );
    };

    return (
        <div className="py-4 border dark:border-gray-500 rounded-[30px] px-10 w-full lg:w-[60%] lg:ml-20" ref={props.userInfo}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-center w-full mx-auto p-0 mt-6 mb-6 dark:text-white">
                <div className="text-left font-bold text-5xl">
                    {item.name}
                </div>
                <h4 className="md:text-right text-sm">
                    {item.major}
                </h4>
            </div>
            <div className="overflow-visible py-2 mb-6">
            <Image
                src={item.img}
                width={500}
                height={500}
                className="lg:w-[80%] rounded-3xl text-large mx-auto object-cover"
                alt="Picture of the author"
            />
            </div>
            <div className="pb-0 pt-2 px-4 text-center dark:text-white">
                <p className="text-xl mb-2">
                    Live in
                </p>
                <h4 className="text-xl">{item.address}</h4>
            </div>
            <div className="mt-7 mb-8 flex items-center justify-center text-[12px] text-gray-400">
                <CopyrightCircleOutlined className="w-5" />
                <div>{year} Duc. All Rights Reserved</div>
            </div>
            <div className="flex justify-center items-center mb-6">
                {
                    item.social.map((value, index) => (
                        <Link target="_blank" href={value.link} key={index} className="dark:bg-white border dark:text-black m-1 p-3 rounded-xl dark:hover:bg-transparent dark:hover:border dark:hover:border-gray-500 dark:hover:text-white transition-all">
                            {value.icon}
                        </Link>
                    ))
                }
            </div>
            <div className="text-center mb-6">
                <Button color="secondary" className="dark:bg-white text-black" onClick={handleHireMe}>
                    <MailFilled className="mr-2"/> Hire Me !
                </Button>
            </div>
        </div>
    );
}