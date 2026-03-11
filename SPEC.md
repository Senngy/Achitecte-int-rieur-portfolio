# Forma & Raum - Architectural Portfolio Specification

## Project Overview

**Project Name**: Forma & Raum (Architectural Portfolio)
**Project Type**: High-End Portfolio Website
**Core Functionality**: Immersive storytelling through full-width video backdrops and strict grid-based project galleries with sophisticated scroll interactions
**Target Users**: High-net-worth private clients, commercial real estate developers, design professionals

---

## UI/UX Specification

### Layout Structure

#### Grid System
- **Type**: Strict 12-column Swiss grid system
- **Column Width**: Flexible, calculated as (100vw - 10vw * 2) / 12
- **Gutter**: 24px
- **Margin**: 5vw (80px on 1440px viewport)
- **Visible Grid**: Subtle 1px grid lines at 8% opacity (toggleable via dev)

#### Page Sections
1. **Navigation Bar**: Fixed top, transparent initially, becomes solid white on scroll
2. **Hero Section**: Full viewport height (100vh), horizontal video slider
3. **Selected Works**: Grid-based project showcase
4. **About Section**: Split layout with typography-focused content
5. **Services**: List-style presentation with hover interactions
6. **Contact**: Minimal contact form with large typography
7. **Footer**: Reduced footprint, essential information only

#### Responsive Breakpoints
- **Desktop Large**: 1440px+ (12 columns)
- **Desktop**: 1024px - 1439px (12 columns)
- **Tablet**: 768px - 1023px (6 columns, stacked)
- **Mobile**: 375px - 767px (4 columns, single stack)

---

### Visual Design

#### Color Palette
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Canvas White | `#FFFFFF` | Primary background |
| Structured Black | `#111111` | Primary typography |
| Concrete Grey | `#E5E7EB` | Grid lines, secondary backgrounds |
| Cool Grey | `#8A8D91` | Secondary typography |
| Warm Stone | `#C4C0B8` | Subtle accents |
| Raw Oak | `#9C8B7A` | Active states, lines, accents |
| Deep Charcoal | `#1A1A1A` | Footer, overlay backgrounds |

#### Typography

**Primary Font (Headings)**
- Font Family: "Neue Haas Grotesk Display Pro", "Helvetica Now Display", "Helvetica Neue", sans-serif
- Font Weight: 500 (Medium), 700 (Bold)
- Letter Spacing: -0.02em (tight tracking)
- Line Height: 1.1

**Font Sizes (Desktop)**
- H1: 8rem (128px)
- H2: 4rem (64px)
- H3: 2rem (32px)
- H4: 1.5rem (24px)

**Secondary Font (Body/Meta)**
- Font Family: "Inter", "Roboto Mono", monospace
- Font Weight: 400 (Regular)
- Letter Spacing: 0.02em
- Line Height: 1.5
- Size: 0.875rem (14px) for body, 0.75rem (12px) for meta/labels

**Typography Styles**
- All caps for section labels: "01 — SELECTED WORKS"
- Uppercase for navigation: "PROJECTS", "STUDIO", "CONTACT"
- Minimal emphasis usage - let typography breathe

#### Spacing System
- Base unit: 8px
- Section padding: 160px vertical (desktop), 80px (mobile)
- Component spacing: 48px between major elements
- Negative space: 30% of viewport dedicated to whitespace

#### Visual Effects
- **Scroll Transitions**: Fade-in with 30px Y-axis translation, 0.8s ease-out
- **Hover States**: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) transitions
- **Hero Slider**: Smooth horizontal drag with momentum
- **Parallax**: Subtle 10-15% speed difference on scroll

---

### Components

#### 1. Navigation Bar
- **Position**: Fixed top, z-index 1000
- **Initial State**: Transparent background, white text
- **Scrolled State**: White background (#FFFFFF), black text, subtle shadow
- **Logo**: Top-left, "FORMA & RAUM" in Neue Haas Grotesk, weight 700
- **Menu Trigger**: Top-right, hamburger icon or "MENU" text
- **Height**: 80px

#### 2. Hero Video Slider
- **Dimensions**: 100vw × 100vh
- **Layout**: Full-screen horizontal slider
- **Interaction**: Drag/swipe to navigate, momentum scrolling
- **Video Count**: 4-5 videos showcasing different interior styles
- **Overlay Elements**:
  - Project title (bottom-left)
  - Project number/location (bottom-right)
  - Progress indicator (thin line at bottom)
- **Auto-play**: Muted, looped, plays on load
- **Transitions**: Crossfade between slides (0.6s)

#### 3. Project Grid
- **Layout**: 2-column grid (desktop), single column (mobile)
- **Aspect Ratio**: 4:3 for images
- **Hover State**:
  - Image scales to 1.02
  - Overlay darkens (10% black)
  - Title slides up from bottom
  - Year and location appear
- **Gap**: 40px

#### 4. Section Headers
- **Style**: Large horizontal rule with integrated text
- **Format**: "01 — SELECTED WORKS"
- **Line**: 1px height, Concrete Grey (#E5E7EB)
- **Typography**: Uppercase, 12px, Inter font

#### 5. About Section
- **Layout**: 60/40 split (text left, whitespace right)
- **Typography**: Large pull quote style
- **Accent**: Raw Oak colored line element

#### 6. Services List
- **Style**: Minimal list with large typography
- **Items**: Architecture, Interior Design, Project Management, Consultation
- **Hover**: Raw Oak color shift, subtle line animation

#### 7. Contact Form
- **Fields**: Name, Email, Project Type, Message
- **Style**: Underline-only inputs (no boxes)
- **Button**: Raw Oak background, white text, sharp corners

#### 8. Custom Cursor (Optional Enhancement)
- **Default**: Small circle (8px), black
- **Hover State**: Larger circle (40px) with "VIEW" text
- **Blend Mode**: Difference for visibility

---

## Functionality Specification

### Core Features

1. **Horizontal Video Slider**
   - Touch and mouse drag support
   - Keyboard navigation (arrow keys)
   - Progress indicator
   - Auto-advancement option (disabled by default)
   - Click/tap to pause or enter project

2. **Smooth Scroll**
   - Native CSS scroll-behavior: smooth
   - Optional: Lenis smooth scroll library for enhanced feel
   - Scroll-triggered animations (IntersectionObserver)

3. **Fade-in Animations**
   - Elements animate on scroll into viewport
   - Threshold: 20% visibility
   - Animation: translateY(30px) → translateY(0), opacity 0 → 1
   - Duration: 0.8s ease-out
   - Stagger: 0.1s delay between elements

4. **Navigation**
   - Smooth scroll to sections
   - Active state highlighting
   - Mobile hamburger menu with full-screen overlay

5. **Video Handling**
   - Lazy loading for below-fold videos
   - Poster images for loading states
   - Muted autoplay (respects user preferences)
   - Fallback to static images if video fails

### User Interactions

1. **Hero Section**
   - Drag horizontally to explore projects
   - Scroll down or click arrow to proceed
   - Click project to view details

2. **Project Browsing**
   - Scroll to reveal projects with fade-in
   - Hover for enhanced preview
   - Click to view project details (or expand)

3. **Navigation**
   - Click logo to return home
   - Click menu for full navigation overlay
   - Smooth scroll to sections

### Performance Requirements

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Video**: < 5MB per loop, H.264/WebM format
- **Images**: WebP with fallbacks, optimized for viewport

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Grid alignment precise to the pixel (use dev tools to verify)
- [ ] Typography crisp at all sizes (no blur)
- [ ] Consistent spacing throughout
- [ ] Color palette accurately implemented
- [ ] Smooth 60fps animations

### Functional Checkpoints
- [ ] Hero slider responds to touch and mouse
- [ ] All scroll animations trigger correctly
- [ ] Navigation works on all devices
- [ ] Videos play automatically (muted)
- [ ] Fallback images display when needed

### Responsive Checkpoints
- [ ] Desktop (1440px+): Full experience
- [ ] Tablet (768px-1023px): Adapted grid, touch-friendly
- [ ] Mobile (375px-767px): Single column, optimized media

### Performance Checkpoints
- [ ] Lighthouse Performance score > 85
- [ ] No layout shifts during load
- [ ] Videos don't block page load
