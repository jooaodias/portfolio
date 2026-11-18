'use client'

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Briefcase, Calendar, Github, Linkedin, Mail, Users } from "lucide-react";
import { AboutMe, Jobs, Project } from "./sections";
import { Skills } from "./sections/skills";
import BrazilFlag from "@/public/icons/BRA.svg";
import { useI18n } from "@/lib/i18n/context";
import { Footer } from "@/lib/components/footer/footer";
import { getExperiences } from "@/lib/constants/jobsExperiences";

const CORE_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "SSR",
  "AI Full Cycle",
  "SDD",
  "Jest",
];

const DIRECT_LINKS = [
  {
    labelKey: "social.github",
    href: "https://github.com/jooaodias",
    handle: "@jooaodias",
    icon: Github,
    external: true,
  },
  {
    labelKey: "social.linkedin",
    href: "https://www.linkedin.com/in/joao-aleixo-dias/",
    handle: "joao-aleixo-dias",
    icon: Linkedin,
    external: true,
  },
  {
    labelKey: "social.email",
    href: "mailto:joaovitordias92040@gmail.com",
    handle: "joaovitordias92040",
    icon: Mail,
    external: false,
  },
];

export default function HomePageClient() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021;
  const companiesCount = React.useMemo(() => getExperiences(t).length, [t]);

  return (
    <div id="home" className="flex flex-col items-center w-full gap-10 pb-6">
      {/* Bento Engineering Hero */}
      <section
        aria-label={t('home.name')}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Profile & Positioning */}
          <div className="md:col-span-2 bg-[#111216] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-[#FFE600] shrink-0" aria-hidden="true" />
                  <span>{t('home.bento.currentStatus')}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                  <Image
                    src={BrazilFlag}
                    alt="Brasil"
                    width={16}
                    height={16}
                    style={{ width: '16px', height: 'auto' }}
                  />
                  <span>{t('home.bento.basedIn')}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/15 shrink-0 bg-zinc-900">
                  <Image
                    src="/images/its-me.jpeg"
                    alt={t('home.name')}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                    quality={85}
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {t('home.name')}
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-[#38bdf8] mt-1">
                    {t('home.roleBadge')}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                {t('home.summary')}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#jobs"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#009EE3] hover:bg-[#38bdf8] text-zinc-950 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216]"
              >
                {t('home.cta.viewExperiences')}
              </a>
              <a
                href="mailto:joaovitordias92040@gmail.com"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 hover:border-[#38bdf8]/50 text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216]"
              >
                {t('home.cta.contact')}
              </a>
            </div>
          </div>

          {/* Card 2: Scale & Track Record */}
          <div className="bg-[#111216] border border-white/10 rounded-2xl p-6 flex flex-col justify-start gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t('home.bento.impactTitle')}
            </h2>

            <div className="divide-y divide-white/10">
              <div className="pb-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-zinc-400 min-w-0">
                  <Calendar className="w-4 h-4 text-[#38bdf8] shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">{t('stats.yearsExperience')}</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white tabular-nums shrink-0">
                  {yearsOfExperience}+
                </span>
              </div>

              <div className="py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-zinc-400 min-w-0">
                  <Users className="w-4 h-4 text-[#FFE600] shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">{t('home.bento.dailyUsersLabel')}</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white shrink-0">
                  {t('home.bento.dailyUsersValue')}
                </span>
              </div>

              <div className="pt-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-zinc-400 min-w-0">
                  <Briefcase className="w-4 h-4 text-[#38bdf8] shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">{t('stats.companies')}</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white tabular-nums shrink-0">
                  {companiesCount}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Core Stack & Workflow */}
          <div className="md:col-span-2 bg-[#111216] border border-white/10 rounded-2xl p-6 flex flex-col justify-start gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t('home.bento.stackTitle')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {CORE_STACK.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-zinc-200 hover:border-[#38bdf8]/50 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Direct Links */}
          <div className="bg-[#111216] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t('home.bento.connectTitle')}
            </h2>
            <div className="flex flex-col gap-2">
              {DIRECT_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 hover:border-[#38bdf8]/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium text-zinc-200 group-hover:text-white">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#38bdf8] transition-colors" aria-hidden="true" />
                      {t(link.labelKey)}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#38bdf8] transition-colors" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <Jobs />
      <Skills />
      <Project />

      <Footer />
    </div>
  );
}
