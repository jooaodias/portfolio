import { I18nProvider } from "@/lib/i18n/context";
import { StatsigProviderWrapper } from "./statsig-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StatsigProviderWrapper>
            <I18nProvider>
                {children}
            </I18nProvider>
        </StatsigProviderWrapper>
    )
}