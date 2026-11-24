'use client'

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { NavigationMenu } from "@/lib/components/menu/menu"
import { Spotlight } from "@/lib/components/spotlight/spotlight"
import { CommandPalette } from "@/lib/components/command-palette/command-palette"

export function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [cmdOpen, setCmdOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                setCmdOpen((prev) => !prev)
            }
        }
        const handleOpen = () => setCmdOpen(true)
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('open-command-palette', handleOpen)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('open-command-palette', handleOpen)
        }
    }, [])

    if (pathname?.startsWith('/preview')) {
        return <>{children}</>
    }

    const isHome = pathname === '/'

    return (
        <main className="w-full min-h-screen relative bg-canvas text-ink-secondary">
            <Spotlight />
            <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

            {!isHome && <NavigationMenu onOpenCommandPalette={() => setCmdOpen(true)} />}

            <div className={isHome ? "relative z-10" : "pt-24 relative z-10"}>
                {children}
            </div>
        </main>
    )
}
