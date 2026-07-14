import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { config } from "@/config";
export default function RightSideBar(props :any) {
    const { section } = config();
    const item = section();
    return (
        <div className="border border-gray-500 w-14 h-auto translate-x-24 rounded-3xl text-center dark:text-white flex flex-col items-center gap-y-10 pt-6 pb-8">
            {
                item.map((value: any, index: number) => (
                    <TooltipProvider delayDuration={100} key={index}>
                        <Tooltip >
                            <TooltipTrigger className="w-full flex justify-center hover:text-green-500" onClick={() => props.scrollToElement(value.scroll)}>
                                {value.icon}
                            </TooltipTrigger>
                            <TooltipContent side="left" >
                                <p>{value.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))
            }
        </div>
    )
}