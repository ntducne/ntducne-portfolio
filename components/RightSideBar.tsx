import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { config } from "@/config";
import { ModeToggle } from "./mode-toggle";
export default function RightSideBar(props :any) {
    const { section } = config();
    const item = section();
    return (
        <div className="glass-panel w-14 h-auto rounded-3xl text-center flex flex-col items-center gap-y-10 pt-6 pb-8 shadow-2xl relative before:absolute before:-inset-px before:bg-gradient-to-b before:from-emerald-500/30 before:to-transparent before:rounded-3xl before:-z-10 group">
            {
                item.map((value: any, index: number) => {
                    const isActive = props.activeSection === value.scroll;
                    return (
                        <TooltipProvider delayDuration={100} key={index}>
                            <Tooltip >
                                <TooltipTrigger 
                                    className={`w-full flex justify-center transition-all duration-300 ${isActive ? 'text-emerald-500 dark:text-emerald-400 scale-125 -translate-x-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-125 hover:-translate-x-1'}`} 
                                    onClick={() => props.scrollToElement(value.scroll)}
                                >
                                    {value.icon}
                                </TooltipTrigger>
                                <TooltipContent side="left" className="glass-panel border-white/10 text-white shadow-lg">
                                    <p className="font-medium tracking-wide">{value.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })
            }
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 w-full flex justify-center">
                <ModeToggle />
            </div>
        </div>
    )
}