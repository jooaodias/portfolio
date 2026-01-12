'use client'

import React from "react";
import { SocialBadges } from "../social-badges/social-badges";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 gap-4 border-t border-gray-800/50 mt-8">
            <p className="text-sm text-gray-400 text-center sm:text-left">
                © {currentYear} João Vitor. All rights reserved.
            </p>
            <SocialBadges withoutLabel />
        </footer>
    );
};

export const Footer = React.memo(FooterComponent);