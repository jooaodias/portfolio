---
name: João Aleixo Portfolio
description: Product Engineering Split-Screen portfolio system with Dark/Light semantic tokens, ScrollSpy sidebar, and cursor spotlight.
colors:
  dark:
    bg-canvas: "#0b1120"
    bg-surface: "rgba(30, 41, 59, 0.45)"
    bg-elevated: "#0f172a"
    bg-sticky: "rgba(11, 17, 32, 0.85)"
    border-subtle: "#1e293b"
    border-hover: "rgba(51, 65, 85, 0.65)"
    text-primary: "#f1f5f9"
    text-secondary: "#cbd5e1"
    text-muted: "#94a3b8"
    accent: "#2dd4bf"
    accent-soft: "rgba(45, 212, 191, 0.10)"
    accent-text: "#5eead4"
  light:
    bg-canvas: "#f8fafc"
    bg-surface: "rgba(255, 255, 255, 0.90)"
    bg-elevated: "#ffffff"
    bg-sticky: "rgba(248, 250, 252, 0.88)"
    border-subtle: "#e2e8f0"
    border-hover: "#cbd5e1"
    text-primary: "#0f172a"
    text-secondary: "#334155"
    text-muted: "#64748b"
    accent: "#0f766e"
    accent-soft: "rgba(15, 118, 110, 0.08)"
    accent-text: "#0f766e"
typography:
  sans: "Inter, system-ui, -apple-system, sans-serif"
  mono: "JetBrains Mono, monospace"
---

# Design System: João Aleixo Portfolio

## Overview

**Creative North Star: "Product Engineering Split-Screen"**

This design system replaces generic Bento boxes and technical grids with a calm, high-craft split-screen architecture:
- **Sticky Left Identity Column (`44%` on `lg:`):** Houses avatar, status, name, role, concise summary, quick controls (OS-aware `Ctrl+K` / `⌘K` Command Palette, Theme Toggle, PT/EN Language Toggle), ScrollSpy navigation with a growing indicator line, and direct social/email actions.
- **Scrollable Right Narrative Column (`54%` on `lg:`):** Flows continuously through About Me, Work Experience (with group-hover focus dimming and dual Mercado Livre + Mercado Pago logos), Featured Projects, Skills (grouped with monochrome SVG icons that light up on hover), Blog teaser, and a minimal footer.

## Semantic Tokens (Dark + Light)

Dark mode (`#0b1120` Deep Slate) is the default, with full Light mode (`#f8fafc` Cool Alabaster) support via CSS custom properties in `lib/theme/globals.css` and `ThemeProvider` (`lib/theme/theme-context.tsx`):
- **Accent contrast rule:** Dark mode uses `#2dd4bf` / `#5eead4`; Light mode shifts to `#0f766e` (`teal-700`) so all links, active indicators, and stack pills maintain WCAG AA contrast.
- **Zero-flash SSR:** An inline `<script>` in `app/layout.tsx` applies `html.dark` before first paint based on `localStorage.getItem('theme')` (defaulting to `'dark'`).

## Typography

- **Primary Sans:** `Inter` (`--font-inter`) for display headings, section prose (`max-w-[65ch]`), and UI controls.
- **Monospace:** `JetBrains Mono` (`--font-jetbrains-mono`) reserved strictly for dates/periods, metrics (`15k+`), and keyboard shortcut badges (`Ctrl+K` / `⌘K`).

## Interaction & Accessibility

- **Cursor Spotlight (`lib/components/spotlight/spotlight.tsx`):** Subtle radial gradient (`620px`) following the pointer, automatically disabled on coarse-pointer (touch) devices and when `prefers-reduced-motion: reduce` is active.
- **Command Palette (`lib/components/command-palette/command-palette.tsx`):** Global `Ctrl+K` (Windows/Linux) / `⌘K` (macOS) dialog with live search filtering, `ArrowUp`/`ArrowDown`/`Enter`/`Escape` keyboard navigation, section jumping, email copy, theme toggle, and language switching.
- **Blog Parity:** `/blog` and `/blog/[slug]` consume the exact same semantic tokens (`bg-canvas`, `bg-surface`, `bg-elevated`, `border-border-subtle`, `text-ink`, `text-ink-secondary`, `text-accent`, `dark:prose-invert`).
