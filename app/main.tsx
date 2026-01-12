'use client'

import Galaxy from "@/lib/components/background/galaxy"
import { NavigationMenu } from "@/lib/components/menu/menu"

export function MainContent({ children }: { children: React.ReactNode } ) {
    return (
        <main style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            <Galaxy 
                mouseInteraction={false}
                glowIntensity={0.15}
                density={0.6}
                twinkleIntensity={0.2}
                saturation={0.0}
            >
            {/* Overlay sutil para suavizar o background */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <NavigationMenu />
            <div className="pt-24 relative z-10">
                {children}
            </div>
            </Galaxy>
        </main>
    )
}