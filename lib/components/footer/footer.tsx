import { SocialBadges } from "../social-badges/social-badges";

export function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full max-w-4xl px-4 sm:px-6 pb-4 gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">© 2025 João Vitor. All rights reserved.</p>
            <SocialBadges withoutLabel />
        </footer>
    )
}