"use client"

import React, { useEffect, useCallback } from "react"
import { Home, FileText, FolderKanban, Briefcase, Sparkles, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n/context"
import BrazilFlag from "@/public/icons/BRA.svg"
import USAFlag from "@/public/icons/USA.svg"
import { useIsMobile } from "@/lib/hooks/useIsMobile"

const SCROLL_OFFSET = 100

export function NavigationMenu() {
  const { locale, setLocale, t } = useI18n()
  const [activeItem, setActiveItem] = React.useState("#home")
  const [isScrolling, setIsScrolling] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const [isChangingLocale, setIsChangingLocale] = React.useState(false)

  const isMobile = useIsMobile()
  const pathname = usePathname()
  const isOnBlogPage = pathname?.startsWith('/blog')

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const menuItems = [
    { labelKey: "menu.home", href: "#home", icon: Home, isCircular: true, isRoute: false },
    { labelKey: "menu.aboutMe", href: "#about-me", icon: FileText, isRoute: false },
    { labelKey: "Skills", href: "#skills", icon: Sparkles, isRoute: false },
    { labelKey: "menu.jobs", href: "#jobs", icon: Briefcase, isRoute: false },
    { labelKey: "menu.projects", href: "#projects", icon: FolderKanban, isRoute: false },
    { labelKey: "menu.blog", href: "/blog", icon: BookOpen, isRoute: true },
  ]

  const toggleLocale = useCallback(() => {
    setIsChangingLocale(true)
    setTimeout(() => {
      setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')
      setTimeout(() => {
        setIsChangingLocale(false)
      }, 200)
    }, 200)
  }, [locale, setLocale])

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return

      const scrollPosition = window.scrollY + SCROLL_OFFSET + 50

      let currentSection = "#home"
      const sections = ["#projects", "#jobs", "#skills", "#about-me", "#home"]

      for (const section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY
          if (scrollPosition >= elementTop) {
            currentSection = section
            break
          }
        }
      }

      setActiveItem(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isScrolling])

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsScrolling(true)
    setActiveItem(href)

    const element = document.querySelector(href)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })

      setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }
  }, [])

  return (
    <div className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 right-0 z-50">
      <nav className={cn(
        "relative flex items-center gap-1.5 bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-800/60 shadow-xl",
        isMobile ? "px-1.5 py-1" : "px-2 py-1.5"
      )}>
        {menuItems.map((item) => {
          const Icon = item.icon
          const isRoute = item.isRoute
          const isCircular = item.isCircular
          const isActive = isRoute 
            ? pathname?.startsWith(item.href)
            : !isOnBlogPage && activeItem === item.href

          // For route items, use Link
          if (isRoute) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 transition-all duration-300 cursor-pointer z-10",
                  "rounded-lg px-3 py-2 hover:bg-gray-800/60",
                  isActive && "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30"
                )}
              >
                <Icon 
                  className={cn(
                    "w-4 h-4 transition-colors duration-300",
                    isActive ? "text-purple-400" : "text-white"
                  )} 
                  strokeWidth={2} 
                />
                {!isMobile && (
                  <span className={cn(
                    "text-sm font-medium whitespace-nowrap transition-colors duration-300",
                    isActive ? "text-purple-300" : "text-white"
                  )}>
                    {t(item.labelKey)}
                  </span>
                )}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
                )}
              </Link>
            )
          }

          // For section items (anchor links)
          // If on blog page, redirect to home with hash
          const href = isOnBlogPage ? `/${item.href}` : item.href

          return (
            <a
              key={item.href}
              href={href}
              onClick={(e) => !isOnBlogPage && handleClick(e, item.href)}
              className={cn(
                "relative flex items-center gap-2 transition-all duration-300 cursor-pointer z-10",
                isCircular
                  ? "rounded-full p-2.5 hover:bg-gray-800/60"
                  : "rounded-lg px-3 py-2 hover:bg-gray-800/60",
                isActive && !isCircular && "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30"
              )}
            >
              <Icon 
                className={cn(
                  "w-4 h-4 transition-colors duration-300",
                  isActive ? "text-purple-400" : "text-white"
                )} 
                strokeWidth={2} 
              />
              {!isCircular && !isMobile && (
                <span className={cn(
                  "text-sm font-medium whitespace-nowrap transition-colors duration-300",
                  isActive ? "text-purple-300" : "text-white"
                )}>
                  {item.labelKey === "Skills" ? item.labelKey : t(item.labelKey)}
                </span>
              )}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
              )}
            </a>
          )
        })}
        <div className="w-px h-6 bg-gray-700/50 mx-1" />
        <button
          onClick={toggleLocale}
          className="rounded-full p-2.5 hover:bg-gray-800/60 transition-all duration-200 cursor-pointer relative overflow-hidden hover:scale-110"
          aria-label={locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
          title={locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
        >
          <div className="relative w-4 h-4 flex items-center justify-center">
            <div
              key={`${locale}-${isChangingLocale}`}
              className={cn(
                "absolute inset-0 transition-all duration-300 ease-in-out transform",
                !isMounted && "opacity-0 scale-75",
                isMounted && !isChangingLocale && "opacity-100 scale-100",
                isChangingLocale && "opacity-0 scale-75"
              )}
            >
              {locale === 'pt-BR' ? (
                <Image
                  src={USAFlag}
                  alt="USA"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                  priority
                />
              ) : (
                <Image
                  src={BrazilFlag}
                  alt="Brasil"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain"
                  priority
                />
              )}
            </div>
          </div>
        </button>
      </nav>
    </div>
  )
}
