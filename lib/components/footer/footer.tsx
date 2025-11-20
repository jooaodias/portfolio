import { SocialBadges } from "../social-badges/social-badges";

export function Footer() {
    return (
        <footer className="flex justify-between items-start w-full max-w-4xl px-6 pb-4 ">
            <p className="text-sm text-gray-400">© 2025 João Vitor. All rights reserved.</p>
            <SocialBadges withoutLabel/>
        </footer>
    )
}