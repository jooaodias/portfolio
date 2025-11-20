'use client'

import Galaxy from "@/lib/components/background/galaxy"
import { NavigationMenu } from "@/lib/components/menu/menu"

export function MainContent({ children }: { children: React.ReactNode } ) {
    return (
        <main style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            <Galaxy mouseInteraction={false}>
            <NavigationMenu />
            <div className="pt-24">
                {children}
            </div>
            </Galaxy>
        </main>
    )
}