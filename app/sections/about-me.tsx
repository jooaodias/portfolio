'use client'

import React from 'react';
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { useI18n } from "@/lib/i18n/context";

const AboutMeComponent = () => {
    const { t } = useI18n()
    
    const texts = React.useMemo(() => [
        t('aboutMe.text1'),
        t('aboutMe.text2'),
        t('aboutMe.text3'),
    ], [t])

    return (
        <div id="about-me" className="flex flex-col justify-start items-start w-full max-w-4xl px-4 sm:px-6 text-justify">
            <div className="flex flex-col gap-4 text-base sm:text-lg font-medium">
            {texts.map((text, index) => (
                <AnimatedContent key={index} delay={0.1} duration={0.5} direction="horizontal" reverse={true}>
                    <p className="leading-relaxed">{text}</p>
                </AnimatedContent>
            ))}
            </div>
           
        </div>
    )
}

export const AboutMe = React.memo(AboutMeComponent);
