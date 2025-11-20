'use client'

import { useState } from "react";
import TextType from "@/lib/components/text-type/text-type";
import Image from "next/image";
import { SocialBadges } from "@/lib/components/social-badges/social-badges";
import { AboutMe, Jobs, Project } from "./sections";
import BrazilFlag from "@/public/icons/BRA.svg";
import { useI18n } from "@/lib/i18n/context";
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { Footer } from "@/lib/components/footer/footer";

export default function Home() {
  const { t } = useI18n()
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div id="home" className="flex flex-col items-center h-full justify-center gap-10 pb-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <AnimatedContent
            delay={0.2}
            distance={50}
            scale={0.8}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0}
            direction="horizontal"
            reverse={true}
          >
            <div className="rounded-full overflow-hidden w-[200px] h-[200px] border-4 border-white/20 shadow-lg">
              <Image
                src="/images/its-me.jpeg"
                alt="Profile"
                width={200}
                height={200}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setIsImageLoaded(true)}
                priority
              />
            </div>
          </AnimatedContent>

          <div className="text-base font-medium italic flex gap-1">
            {t('home.from')} <Image src={BrazilFlag} alt="Brasil" width={20} height={20} />
          </div>
        </div>
        <TextType
          text={[
            t('home.typing.text1'),
            t('home.typing.text2'),
            t('home.typing.text3'),
            t('home.typing.text4'),
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          className="text-4xl font-bold"
        />
        <SocialBadges />
      </div>  
      <AboutMe />
      <Jobs />
      <Project />

      <Footer />

    </div>
  );
}
