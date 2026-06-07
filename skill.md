---
description: How to maintain and expand the Lyon VTC Premium project
---

# Lyon VTC Premium Maintenance Skill

This document provides instructions on how to maintain the codebase for the Lyon VTC Premium website.

## 1. Adding New Sections or Components

When adding new sections, maintain the established design system:
- Use `<SectionEyebrow>TEXT</SectionEyebrow>` for section subtitles.
- Separate new sections with `<GoldDivider />` in `app/page.tsx`.
- Keep background colors alternating between `bg-brand-black` and `bg-brand-black-2`.
- Wrap elements with `framer-motion`'s `<motion.div>` for `fade-in-up` effects (refer to existing sections for variants).

## 2. Managing UI and Color Changes

All global style tokens are defined in **two places**:
1. `tailwind.config.ts` configured as `brand-*`.
2. `app/globals.css` inside the `:root` to handle native transitions and scrollbar functionality.

When updating the gold accent, ensure both files reflect the exact hex value `#C9A84C` appropriately for seamless sync.

## 3. Dealing with Images

The application strictly utilizes `next/image`.
If pulling from external sources, explicitly register the domain inside `next.config.mjs` using the `remotePatterns` configuration:

```javascript
remotePatterns: [
    {
        protocol: "https",
        hostname: "images.unsplash.com",
    },
]
```

## 4. Working with the Contact Form

- The contact validation is driven by `react-hook-form` inside `components/Contact.tsx`.
- Currently, form submission switches to a local visual success state natively without API bridging. Point the `onSubmit` logic toward an Email endpoint (like SendGrid or Resend) when ready to hook up to a backend.
