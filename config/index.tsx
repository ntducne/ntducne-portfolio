import { useToast } from "@/components/ui/use-toast";
import { FacebookFilled, GithubFilled, InstagramFilled } from "@ant-design/icons"
import axios from "axios";
import { BriefcaseBusiness, Contact, Dumbbell, FolderKanban, Home, User } from "lucide-react";

interface Contact {
    fullname: string,
    email: string,
}

export const config = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startWork = 2023;
    const yearOfExperience = currentYear - startWork;
    const { toast } = useToast()


    const section = () => {
        return [
            {
                name: "Introduce",
                icon: <Home />,
                scroll: 'introduce'
            },
            {
                name: "About",
                icon: <User />,
                scroll: 'about'
            },
            {
                name: "Resume",
                icon: <BriefcaseBusiness />,
                scroll: 'resume'
            },
            {
                name: "Skills",
                icon: <Dumbbell />,
                scroll: 'skill'
            },
            {
                name: "Projects",
                icon: <FolderKanban />,
                scroll: 'project'
            },
            {
                name: "Contact",
                icon: <Contact />,
                scroll: 'contact'
            }
        ]
    }


    const info = () => {
        return {
            name: "N.T.Duc",
            major: "Web Designer & Developer",
            img: "/img.jpg",
            email: "nguyenduc10603@gmail.com",
            address: "Hanoi, Vietnam",
            social: [
                {
                    name: "Facebook",
                    link: "https://www.facebook.com/ntduc106",
                    open: true,
                    icon: <FacebookFilled />
                },
                {
                    name: "Instagram",
                    link: "https://www.instagram.com/ntduc106",
                    open: true,
                    icon: <InstagramFilled />
                },
                {
                    name: "Github",
                    link: "https://github.com/ntducne",
                    open: true,
                    icon: <GithubFilled />
                },
            ],
        }
    }

    const introduce = () => {
        return {
            textType: "Nguyen Duc",
            major: {
                line_1: "Web Designer and Backend",
                line_2: "Developer"
            },
            text: "I design and code beautifully simple things and i love what i do. Just simple like that!",
            year_of_experience: yearOfExperience,
            project_completed: 20,
            num_of_clients: 2
        }
    }

    const about = () => {
        return "I am a backend developer. I am passionate about designing and developing mining complex web applications in languages ​​like Javascript and PHP, using technologies like Laravel Framework, NextJS and NuxtJS. I also have experience working with databases like MongoDB, MySQL. My knowledge includes RESTful API, Docker. I am always up to date with the latest trends and always want to contribute to the development of the organization in the field of technology"
    }

    const resume = () => {
        return [
            {
                time: "October 2021 - February 2024",
                title: "FPT Polytechnic Edutcation",
                description: "I am currently studying at FPT Polytechnic Education, majoring in Information Technology."
            },
            {
                time: "December 2023 - March 2025",
                title: "GolSoft Company",
                description: "Backend and FrontEnd Developer"
            },
            {
                time: "April 2025 - Present",
                title: "Miraisoft Company",
                description: "Backend and FrontEnd Developer"
            }
        ]
    }

    const skills = () => {
        return [
            {
                name: "HTML/CSS/JS",
                icon: "https://www.10bestdesign.com/blog/content/images/2018/03/20.png",
                animation: "fade-up"
            },
            {
                name: "Laravel",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
                animation: "fade-down"
            },
            {
                name: "PHP",
                icon: "https://pngimg.com/d/php_PNG10.png",
                animation: "fade-right"
            },
            {
                name: "MongoDB",
                icon: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
                animation: "fade-left"
            },
            {
                name: "MySQL",
                icon: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
                animation: "fade-up-right"
            },
            {
                name: "VueJS",
                icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
                animation: "fade-up-left"
            }
        ]
    }

    const projects = () => {
        return [
            {
                name: "Hotel Management Website",
                description:
                    "A complete hotel management system with booking, room management, and customer portal.",
                img: "https://www.kayak.co.uk/rimg/dimg/dynamic/5/2023/08/341cd442bfcb075acf7a80a2997570a7.webp",
                technology: ["ReactJS", "Laravel", "MongoDB"],
                website: "",
                git: "",
            },
            {
                name: "Law Website",
                description:
                    "A professional website for a law firm, including legal services, blog, and client contact forms.U",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPxV_jEO3bvosik6SbcZmc7vfBGHWs3cDpuCjaksYGvIGmg8GCJ8QmEdXwL2JcQATGPY&usqp=CAU",
                technology: ["Laravel", "MySQL"],
                website: "",
                git: "",
            },
            {
                name: "MMA Website",
                description:
                    "A modern website for an MMA community, with event listings, news, and training schedules.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIrvjvhSMqq-Yhs68myZfy-QuDdakfjfaSg&s",
                technology: ["Laravel", "MySQL", "TailwindCSS"],
                website: "",
                git: "",
            },
            {
                name: "Real Estate Management Website",
                description:
                    "A platform to manage properties, clients, and transactions for real estate businesses.",
                img: "https://propacity.com/blogs/wp-content/uploads/2020/12/PROPERTY-MANAGEMENT-SERVICES.png",
                technology: ["PHP", "MySQL"],
                website: "",
                git: "",
            },
            {
                name: "Profile Data Management Website (Laravel, Vue, MongoDB, MySQL)",
                description:
                    "A web app to manage employee profiles and documents with secure access and reporting features.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ291lPUJRZK-h4Bi1l3TcsRO5PvFpk441oEA&s",
                technology: ["Laravel", "Vue", "MongoDB", "MySQL"],
                website: "",
                git: "",
            },
        ];
    };


    const submitContact = async (data: Contact) => {
        // var baseApi = "http://localhost:5000/sendMessage";
        var baseApi = "https://portfolio-s3j4.onrender.com/sendMessage";
        try {
            await axios.post(baseApi, data);
            toast({
                title: "Success !",
                description: "Message sent successfully !",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error !",
                description: "Can't send message !",
            })
        }
    }

    return {
        section, info, introduce, about, resume, skills, projects, submitContact
    }
}