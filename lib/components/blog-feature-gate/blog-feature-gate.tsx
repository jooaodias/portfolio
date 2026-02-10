'use client'

import { useFeatureFlag } from "@/lib/hooks/useFeatureFlag"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function BlogFeatureGate({ children }: { children: React.ReactNode }) {
    const { isEnabled } = useFeatureFlag('blog_feature')
    const router = useRouter()

    useEffect(() => {
        if (!isEnabled) {
            router.push('/')
        }
    }, [isEnabled, router])

    if (!isEnabled) {
        return null
    }
    return <>{children}</>
}