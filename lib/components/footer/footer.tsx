'use client'

import React from "react";
import { SocialBadges } from "../social-badges/social-badges";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 gap-4 border-t border-border-subtle mt-8">
            <p className="text-sm text-ink-muted text-center sm:text-left">
                © {currentYear} João Vitor Aleixo.
            </p>
            <SocialBadges withoutLabel />
        </footer>
    );
};

export const Footer = React.memo(FooterComponent);