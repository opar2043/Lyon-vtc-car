# Design System: Lyon VTC Premium

## Typography

- **Headings & Display**: `Cormorant Garamond`
  - Weights: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)
  - Usage: H1-H6, quotes, symbols, hero typography.
- **Body & Accents**: `Montserrat`
  - Weights: 300, 400, 500, 600, 700
  - Usage: Paragraphs, buttons, nav links, small caps eyebrows.

## Color Palette

- **Primary Background (`--brand-black`)**: `#0A0A0A`
- **Alternate Background (`--brand-black-2`)**: `#111111`
- **Card Background (`--brand-black-3`)**: `#1A1A1A`
- **Primary Accent (`--brand-gold`)**: `#C9A84C`
- **Hover State (`--brand-gold-light`)**: `#E8C87A`
- **Pressed State (`--brand-gold-dark`)**: `#9A7A30`
- **Body Text (`--brand-white`)**: `#F5F0E8`
- **Headings (`--brand-white-pure`)**: `#FFFFFF`
- **Muted Text (`--brand-gray`)**: `#888888`

## Layout Rules

- Max content width: `1400px` centered.
- Horizontal padding: `4-5%` for mobile and desktop breathing room.
- Section spacing: Heavy padding on Y axis (`py-24` to `py-36`).
- Corner brackets applied natively on image features.

## Animation & Interactions (Framer Motion)

- Staggered reveals (`fade-in-up`) for sequential elements.
- Viewport triggers: `useInView` logic configured with `-80px` margin and `once: true`.
- Buttons and cards simulate tactile feedback with subtle negative `Y` translation and gold border reveal on hover.

## Structure

1. **Navbar**: Fixed header heavily blurred (`backdrop-blur`).
2. **Hero**: Immersive dark texture background showcasing typography hierarchy.
3. **About**: Two-column layout with right entry / left entry staggering.
4. **Services**: Grid view encapsulating 5 options with transparent borders that glow on hover.
5. **Testimonials**: Auto-fitting layout showcasing client reviews with 5-star ratings.
6. **Contact**: Highly legible hook-form paired alongside quick-access info.
7. **Footer**: 4-column navigational anchor with SEO indexing.
