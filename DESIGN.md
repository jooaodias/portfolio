---
name: João Aleixo Portfolio
description: Bento Engineering dark portfolio system pairing crisp readability with pure-CSS technical depth.
colors:
  primary: "#009ee3"
  primary-hover: "#38bdf8"
  status-ml: "#ffe600"
  success: "#4ade80"
  space-void: "#0a0b0e"
  surface-card: "#111216"
  surface-elevated: "#181920"
  border-subtle: "#27272a"
  text-primary: "#ffffff"
  text-secondary: "#d4d4d8"
  text-muted: "#a1a1aa"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter Tight, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  card-experience:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.lg}"
    padding: "32px"
  chip-tech:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  nav-floating:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: João Aleixo Portfolio

## Overview

**Creative North Star: "Bento Engineering"**

This design system frames a software engineer's portfolio against an immediate, matte dark canvas (`space-void`) with a subtle pure-CSS 48px technical grid (zero `<canvas>` or WebGL), prioritizing fast first paint and effortless scanning on both high-DPI monitors and budget laptops or mobile devices.

Every surface feels direct, modular, and responsive: Bento cards sit quietly in dark tonal layers with hairline borders at rest, reserving fintech cyan (`primary-hover`) and Mercado Livre yellow (`status-ml`) for active states, status dots, and direct user interaction.

**Key Characteristics:**
- Always-dark matte canvas (`space-void`) with pure-CSS technical grid and zero light-mode flash.
- Modular Bento Grid hero communicating role, scale, core stack, and links in the first viewport.
- Tabbed Experience selector reducing vertical scroll while preserving keyboard accessibility.
- Crisp geometric sans-serif typography (`Inter` and `Inter Tight`) with solid, high-contrast headings.

## Colors

The palette pairs an obsidian night-sky base with cool neutral grays for content hierarchy and a restrained electric blue-to-violet accent pair for primary actions and active states.

### Primary
- **Electric Cobalt** (`primary`): Anchors primary call-to-action buttons, active navigation indicators, and the leading edge of brand gradients.
- **Vivid Violet** (`primary-accent`): Completes primary interactive gradients, hover border highlights, and text selection tinting.

### Secondary
- **Magenta Spark** (`secondary-accent`): Used sparingly as the trailing hover shift on primary CTA buttons and subtle hero ambient glow.
- **Emerald Signal** (`success`): Dedicated exclusively to "Main Achievements" headings and bullet arrows inside experience cards.

### Neutral
- **Deep Space Void** (`space-void`): Root document and viewport canvas behind all sections.
- **Obsidian Card** (`surface-card`): Base fill for experience cards, project cards, and floating navigation containers.
- **Slate Surface** (`surface-elevated`): Fill for secondary buttons, technology chips, and company icon frames.
- **Hairline Slate** (`border-subtle`): Default 1px structural border separating cards from the space canvas.
- **Pure White** (`text-primary`): Headings, role titles, and primary button labels.
- **Silver Mist** (`text-secondary`): Body paragraphs, experience descriptions, and technology chip labels.
- **Muted Pewter** (`text-muted`): Dates, captions, and secondary metadata.

### Named Rules
**The Always-Dark Canvas Rule.** The root document never falls back to a light background regardless of OS color scheme; `color-scheme: dark` and `space-void` are always active so light foreground text is never stranded.
**The Restrained Accent Rule.** Electric Cobalt and Vivid Violet are reserved for interactive triggers, active states, and hover highlights; body copy and card backgrounds stay strictly neutral.

## Typography

**Display Font:** Inter (`system-ui, sans-serif`)
**Body Font:** Inter (`system-ui, sans-serif`)
**Label/Mono Font:** Inter Tight (`Inter, system-ui, sans-serif`)

**Character:** A clean, geometric neo-grotesque pairing that balances generous, readable body prose with tight, high-clarity uppercase labels and metrics.

### Hierarchy
- **Display** (700, 2.25rem on desktop / 1.5rem on mobile, 1.15 line-height, -0.025em tracking): Hero typing headline.
- **Headline** (700, 1.5rem on desktop / 1.25rem on mobile, 1.25 line-height, -0.015em tracking): Section titles (About, Skills, Work Experience, Featured Projects).
- **Title** (700, 1.25rem, 1.3 line-height): Card role titles and project names.
- **Body** (400–500, 1rem, 1.625 line-height): Bio paragraphs, experience bullet descriptions, and project summaries.
- **Label** (600, 0.75rem, 1.2 line-height, 0.05em tracking, uppercase when section subheader): Achievement subheaders, dates, and technology badges.

## Layout

Content lives in a centered single-column reading spine (`max-width: 896px` / `max-w-4xl`) with generous horizontal breathing room (`16px` on mobile, `24px` on `sm:` and above). Sections stack vertically with consistent `40px` (`gap-10`) separation and `40px` top padding (`pt-10`) for scroll-spy targets.

Stats use a responsive 2-column grid on mobile expanding to 4 columns on `sm:` (`640px+`), while experience headers stack vertically on mobile and align horizontally with `md:flex-row md:justify-between` on desktop (`768px+`).

## Elevation & Depth

Surfaces follow a **flat-by-default** tonal layering model. Rather than heavy ambient drop shadows at rest, depth is communicated by stepping surface lightness from `space-void` to `surface-card` and framing cards with a subtle 1px border (`border-subtle`). Interactive glow and shadow (`0 20px 25px -5px rgba(168, 85, 247, 0.1)`) appear only on hover.

### Named Rules
**The Flat-By-Default Rule.** Cards and containers rest flat against the space backdrop with 1px hairline borders; colored glows and elevation shadows activate strictly on hover or focus.

## Shapes

The system uses progressive rounding scaled to container size: compact controls and primary/secondary buttons use gently curved corners (`8px` radius), icon frames use medium rounding (`12px` radius), large content cards use generous rounding (`16px` radius), and navigation bars, avatars, and technology chips use full pill/circle silhouettes (`9999px` radius).

## Components

Components feel direct, tactile, and responsive—relying on crisp border shifts, subtle scale feedback, and short `150ms–300ms` transitions.

### Buttons
- **Shape:** Gently curved rectangle (`8px` radius).
- **Primary:** Gradient fill from `primary` to `primary-accent` with `text-primary` (`12px 24px` desktop padding, `10px 16px` mobile).
- **Hover / Focus:** Shifts gradient toward `secondary-accent` with subtle `scale(1.05)` and violet glow shadow.
- **Secondary:** `surface-elevated` translucent fill (`80%` opacity) with 2px `border-subtle` stroke, transitioning border to `primary-accent` on hover.

### Chips
- **Style:** Full pill (`9999px` radius), `surface-elevated` translucent fill, 1px `border-subtle` stroke, and `text-secondary` 12px medium label (`2px 8px` padding).
- **State:** On hover, fills with a subtle blue-to-violet tint, highlights border, and scales slightly (`1.05`).

### Cards / Containers
- **Corner Style:** Generous curve (`16px` radius).
- **Background:** `surface-card` translucent gradient with subtle backdrop blur.
- **Shadow Strategy:** Flat at rest; ambient violet shadow on hover.
- **Border:** 1px `border-subtle` at rest, shifting to translucent `primary-accent` on hover.
- **Internal Padding:** `24px` on mobile, `32px` on `md:` (`768px+`).

### Navigation
- **Style:** Floating translucent dark pill (`9999px` radius) pinned near the top viewport, housing section links with Lucide icons and an inline `pt-BR` / `en-US` flag switcher. Active section links highlight with a subtle pill background and crisp white text.

## Do's and Don'ts

### Do:
- **Do** keep background effects bounded to the viewport (`position: fixed`) with `devicePixelRatio` capped at `1.5` and static fallbacks for `prefers-reduced-motion: reduce`.
- **Do** keep hero LCP elements (such as the profile avatar) immediately visible (`opacity: 1`) without blocking behind delayed IntersectionObserver reveals.
- **Do** host company logos and recurring UI icons locally in `public/icons/` so external CDNs or hotlink limits never break cards.

### Don't:
- **Don't** run multi-pass per-pixel WebGL fragment shaders across full-document-height canvases.
- **Don't** rely on OS `prefers-color-scheme: light` to set a light page background on this dark-themed portfolio.
- **Don't** animate layout-triggering properties (`width`, `height`, `top`, `left`) or leave continuous `animate-pulse` repaints on large blurred layers.
