'use client'

import { StatsigProvider } from "@statsig/react-bindings";
import { LoadingScreen } from "@/lib/components/loading/loading-screen";

export function StatsigProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <StatsigProvider
            sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY || 'client-default-key'}
            user={{ userID: 'anonymous' }}
            options={{
                environment: { tier: process.env.NODE_ENV || 'development' }
            }}
            loadingComponent={<LoadingScreen />}
        >
            {children}
        </StatsigProvider>
    )
}