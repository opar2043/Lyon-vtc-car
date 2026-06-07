# Lyon VTC Premium 🚘✨

A complete, production-ready, highly responsive luxury private chauffeur company website serving the Lyon region.

Built entirely with the **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**, maintaining an elevated UI standard and high performance score.

## Features

- **Pristine Aesthetics**: Custom tailored color palette mirroring luxury standards (Obsidian blacks, gold accents, muted silvers).
- **Smooth Animations**: Every element gracefully reveals itself on scroll via Framer Motion's intersection logic. Micro-interactions add dynamic tactical depth to cards and buttons.
- **Form Management**: Validated inputs with `react-hook-form` coupled with dynamic UI success feedback loops.
- **Top-Tier Performance**: Out of the box optimization with `next/font` & `next/image` ensuring flawless fast delivery layout shifts. 
- **Typography Integration**: Employs Google Font's **Cormorant Garamond** for dramatic, sweeping headings and **Montserrat** to hold legible body text structures.

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Open the Portal**
   Navigate to [http://localhost:3000](http://localhost:3000) inside your browser.

## Project Structure Diagram

```text
├── app
│   ├── layout.tsx         # Contains Metadata, Next Fonts and core configuration
│   ├── page.tsx           # Assembles all modular UI components 
│   ├── globals.css        # Defines scrollbar, typography defaults & base tailwind classes
├── components
│   ├── ui                 # Shared generic assets like GoldDivider & SectionEyebrow
│   ├── About.tsx          # Dual column grid highlighting history and feature sets
│   ├── Contact.tsx        # Encapsulated logic for the React-Hook contact framework
│   ├── Footer.tsx         # Detailed canonical navigation block
│   ├── Hero.tsx           # Highly stylized landing wrapper with custom inline SVGs
│   ├── Navbar.tsx         # Smart navigation that reads scroll depth thresholds
│   ├── Services.tsx       # Matrix showcasing varying service routes scaled dynamically
│   └── Testimonials.tsx   # Quotations mapped over UI cards
├── public                 # Core application statics
├── next.config.mjs        # Whitelists domains specifically mapping unsplash protocols
└── tailwind.config.ts     # Holds specific brand hex codes mappings & global token logic
```

## Production Building

To push the codebase into production-ready compilation:
```bash
npm run build
npm start
```
