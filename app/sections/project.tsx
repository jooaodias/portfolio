import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function Project() {
    const { t } = useI18n()
    
    return (
        <div id="projects" className="flex flex-col justify-start items-start w-full max-w-4xl px-6 pb-4 text-justify">
            <AnimatedContent delay={0} duration={0.6}>
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-white">Projects</h2>
                </div>
                <p className="flex flex-row items-center gap-2">Page under development <Wrench className="w-4 h-4" /> </p>
            </AnimatedContent>
        </div>
    )
}