# NBPS Alumni Association Website

A modern, professional Next.js website for the Nyandarua Boarding Primary School Alumni Association.

## Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Material-UI Components**: Built with MUI for consistent, accessible components
- **Responsive**: Fully responsive design that works on all devices
- **Professional Stock Images**: High-quality Unsplash images throughout
- **Custom Theme**: Blue (#2b3a6c) and Yellow (#fbbc04) color scheme
- **Flexbox Layouts**: All layouts use flexbox (no CSS Grid)
- **Smooth Animations**: Page transitions and scroll animations
- **Multiple Pages**: Home, About, Projects, Activities, Gallery, Resources, Donate, Register

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd c:\projects\nbps\nbps-alumni
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nbps-alumni/
├── app/
│   ├── about/page.js           # About page
│   ├── activities/page.js      # Events & activities
│   ├── donate/page.js          # Donation form
│   ├── gallery/page.js         # Photo gallery
│   ├── projects/page.js        # Projects showcase
│   ├── register/page.js        # Alumni registration
│   ├── resources/page.js       # Documents & resources
│   ├── layout.js               # Root layout with MUI theme
│   ├── page.js                 # Home page
│   └── globals.css             # Global styles
├── components/
│   ├── Header.js               # Navigation header
│   ├── Footer.js               # Site footer
│   ├── Hero.js                 # Hero slider
│   └── home/                   # Home page sections
│       ├── AboutSection.js
│       ├── ProjectsSection.js
│       ├── EventsSection.js
│       └── CTASection.js
├── theme/
│   └── theme.js                # MUI theme configuration
└── package.json
```

## Design System

### Colors
- **Primary (Blue)**: #2b3a6c
- **Secondary (Yellow)**: #fbbc04
- **Background**: #faf7f0
- **Text**: #2c2c2c

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)
- **Monospace**: DM Mono

### Components
- All components use MUI (Material-UI)
- Flexbox for all layouts
- Framer Motion for animations
- Professional stock images from Unsplash

## Pages

1. **Home** - Hero slider, about preview, projects, events, CTA
2. **About** - Mission, vision, values, leadership team
3. **Projects** - Active and completed community projects
4. **Activities** - Upcoming and past events calendar
5. **Gallery** - Photo gallery with categories
6. **Resources** - Documents, videos, links, FAQs
7. **Donate** - Donation form with payment options
8. **Register** - Alumni registration form

## Technologies

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Material-UI (MUI) v6
- **Animations**: Framer Motion
- **Language**: JavaScript (not TypeScript)
- **Styling**: MUI sx prop, Emotion
- **Fonts**: Google Fonts (DM Sans, Playfair Display, DM Mono)
- **Images**: Unsplash stock photos

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment

This Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

For Vercel deployment:
```bash
vercel
```

## Notes

- No TypeScript - pure JavaScript
- No Tailwind CSS - MUI only
- No CSS Grid - flexbox only
- Professional stock images replace emoji icons
- Smooth animations throughout
- Clean, modern, professional design
