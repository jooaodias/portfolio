import { I18nProvider } from "@/lib/i18n/context";
import { ThemeProvider } from "@/lib/theme/theme-context";
import { StatsigProviderWrapper } from "./statsig-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <StatsigProviderWrapper>
            <ThemeProvider>
                <I18nProvider>
                    {children}
                </I18nProvider>
            </ThemeProvider>
        </StatsigProviderWrapper>
    )
}