'use client'

import React from 'react';
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { useI18n } from "@/lib/i18n/context";

const AboutMeComponent = () => {
    const { t } = useI18n();

    const texts = React.useMemo(() => [
        t('aboutMe.text1'),
        t('aboutMe.text2'),
        t('aboutMe.text3'),
    ], [t]);

    return (
        <section id="about-me" className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4">
            <AnimatedContent delay={0} duration={0.45} distance={20}>
                <div className="bg-[#111216] border border-white/10 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {t('menu.aboutMe')}
                    </h2>
                    <div className="flex flex-col gap-3.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {texts.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
};

export const AboutMe = React.memo(AboutMeComponent);
