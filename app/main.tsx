'use client'

import { NavigationMenu } from "@/lib/components/menu/menu"

export function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen relative bg-[#0a0b0e] text-zinc-100">
            {/* Pure CSS technical grid + subtle top ambient light (zero canvas/WebGL) */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 35%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 35%, transparent 100%)',
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-x-0 top-0 h-[420px] z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(0, 158, 227, 0.12), transparent 70%)',
                }}
            />
            <NavigationMenu />
            <div className="pt-24 relative z-10">
                {children}
            </div>
        </main>
    )
}
