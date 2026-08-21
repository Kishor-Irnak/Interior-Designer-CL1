---
name: Architectural Refinement
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#444748'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1f'
  on-tertiary-container: '#818488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c6c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#e0e2e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system embodies a **Modern / Corporate** aesthetic with a strong emphasis on architectural precision and high-end lifestyle curation. The brand personality is professional, trustworthy, and meticulously organized, targeting high-net-worth individuals and homeowners seeking premium craftsmanship.

The visual narrative is driven by clean lines, generous whitespace, and a high-contrast interaction between deep blacks and pure whites. It leverages a "Gallery" approach, where the UI serves as a sophisticated frame for high-quality photography. The emotional response is one of calm assurance, luxury, and functional elegance.

Key stylistic pillars include:
- **Editorial Typography:** Large, confident headlines paired with highly legible, functional body copy.
- **Structured Minimalism:** A rigid adherence to grid systems and logical information architecture.
- **Premium Accents:** Minimal use of color, relying instead on tonal depth and crisp iconography to guide the user.

## Colors

The palette is rooted in a monochromatic foundation to maintain a timeless and high-end feel. 

- **Primary:** A deep, near-black (#121212) used for headings, primary buttons, and hero sections to establish authority.
- **Secondary:** A soft, cool grey (#F4F5F7) used for large surface areas and card backgrounds to provide a subtle distinction from the white canvas.
- **Neutral:** Mid-range greys are utilized for secondary text, borders, and UI icons to ensure proper hierarchy without competing with primary content.
- **Backgrounds:** The system alternates between pure white (#FFFFFF) for light sections and deep black (#0A0A0A) for high-impact segments like the Footer or Hero, creating a rhythmic visual pace.

## Typography

The design system uses **Hanken Grotesk** across all roles to achieve a unified, contemporary, and sharp look. It is a font that feels both engineered and approachable.

- **Display & Headlines:** Use tight letter spacing and heavier weights to command attention. Use "Display-lg" for main hero statements.
- **Body Text:** Set with generous line heights (1.5x - 1.6x) to ensure readability in long-form descriptions.
- **Labels:** Small labels (like category tags or "Available for work" badges) should be uppercase with increased letter spacing to provide a technical, "badge-like" appearance.
- **Hierarchy:** Maintain a clear distinction between levels by significantly jumping in size (e.g., 48px to 18px) to avoid visual ambiguity.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain the "Gallery" feel, transitioning to a fluid model for mobile devices.

- **Desktop (1440px+):** 12-column grid with a 1280px max-width container. 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid with 40px side margins.
- **Mobile (<768px):** 4-column grid with 20px side margins.

**Vertical Rhythm:**
Use a generous `section-gap` (120px) to separate major content blocks, allowing the design to breathe. Internal component spacing follows a 4px/8px baseline shift, using `stack-md` (16px) for most grouping and `stack-lg` (32px) for separating text blocks from media.

## Elevation & Depth

This design system avoids heavy drop shadows, opting instead for **Tonal Layers** and **Low-contrast Outlines** to define hierarchy.

- **Surface Tiers:** Use the Secondary color (#F4F5F7) as a base layer for cards and sections. Components sitting on these surfaces use pure white to create a "lifted" effect without needing shadows.
- **Ghost Borders:** Use 1px solid lines in Tertiary (#E5E7EB) for input fields, accordions, and dividers. This maintains a flat, architectural feel.
- **Interaction Depth:** On hover, buttons may slightly shift in tone (e.g., from #121212 to a slightly lighter grey) or include a subtle scale-up effect (1.02x) rather than an elevation change.

## Shapes

The shape language is primarily **Soft** and structured. 

- **Standard Radius:** 0.25rem (4px) is the default for buttons and input fields, providing just enough softness to feel modern while retaining a professional edge.
- **Container Radius:** Larger containers like cards or image wrappers use `rounded-lg` (8px) to soften the overall layout.
- **Exceptions:** Functional elements like "tags" or "pills" may use a full pill shape (100px) to differentiate them from actionable buttons.

## Components

- **Buttons:** Primary buttons are solid #121212 with white text, featuring a 4px radius. Secondary buttons use an outline style or a light grey fill. Include a "circular arrow" icon for primary calls to action to imply movement.
- **Input Fields:** Minimalist design with a 1px border (#E5E7EB) and 4px radius. Labels are positioned above the field in `label-sm` style.
- **Accordions:** Used for FAQs and Service lists. Use thin horizontal dividers. The trigger should feature a simple "+" or "-" icon, maintaining a clean, technical look.
- **Cards:** No shadows. Use a light grey background (#F4F5F7) with internal padding of 32px or 48px. Images within cards should have a subtle 4px corner radius.
- **Chips/Tags:** Small, pill-shaped backgrounds (black for active, light grey for inactive) with uppercase `label-sm` typography.
- **Testimonial Blocks:** Simple, left-aligned text with a star-rating component (5 stars) in primary black. Use small circular avatars for the speakers.