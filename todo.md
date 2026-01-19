# Steve Riju Portfolio - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Vercel.com**: Clean, modern, dark theme with subtle animations
- **Linear.app**: Minimalist, professional, smooth interactions
- **GitHub.com**: Developer-focused, clear hierarchy
- **Style**: Modern Minimalism + Dark Mode + Professional Developer Portfolio

### Color Palette
- Primary Background: #0A0A0A (Deep Black)
- Secondary Background: #1A1A1A (Charcoal)
- Card Background: #161616 (Dark Gray)
- Accent Primary: #3B82F6 (Blue - CTAs and highlights)
- Accent Secondary: #8B5CF6 (Purple - secondary highlights)
- Text Primary: #FFFFFF (White)
- Text Secondary: #A1A1AA (Light Gray)
- Border: #27272A (Subtle border)
- Success: #10B981 (Green)

### Typography
- Heading1: Inter font-weight 800 (56px) - Hero title
- Heading2: Inter font-weight 700 (40px) - Section titles
- Heading3: Inter font-weight 600 (28px) - Subsection titles
- Heading4: Inter font-weight 600 (20px) - Card titles
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Small: Inter font-weight 400 (14px)
- Code: JetBrains Mono font-weight 400 (14px)

### Key Component Styles
- **Buttons**: 
  - Primary: Blue background (#3B82F6), white text, 8px rounded, hover: brighten 10%
  - Secondary: Transparent with border, hover: fill with subtle background
- **Cards**: 
  - Dark background (#161616), 1px border (#27272A), 12px rounded
  - Hover: Lift 4px with glow effect, 300ms transition
- **Forms**: 
  - Dark inputs with border, focus: blue accent ring
- **Theme Toggle**: 
  - Smooth transition between light/dark modes
  - Light mode: White backgrounds, dark text, blue accents

### Layout & Spacing
- Hero section: Full viewport height with centered content
- Section padding: 120px vertical, 80px horizontal (desktop)
- Card gaps: 32px between cards
- Max content width: 1200px
- Smooth scroll behavior with offset for fixed header

### Animations
- Fade-in on scroll: Elements animate in as they enter viewport
- Hover effects: Subtle lift and glow on cards
- Smooth transitions: 300ms ease-in-out for most interactions
- Hero text: Staggered fade-in animation
- Project images: Zoom on hover

### Images to Generate
1. **steve-profile-photo.jpg** - Professional headshot, software engineer, friendly, modern office background (Style: photorealistic, professional)
2. **mbc-dashboard-screenshot.jpg** - College administration dashboard, clean UI, data tables, modern web app (Style: photorealistic, UI screenshot)
3. **mbc-student-portal.jpg** - Student learning interface, course cards, assignment view (Style: photorealistic, UI screenshot)
4. **song-portal-presentation.jpg** - Church song presentation mode, hymn lyrics display, clean typography (Style: photorealistic, UI screenshot)
5. **song-portal-admin.jpg** - Song management interface, list view, edit controls (Style: photorealistic, UI screenshot)
6. **healthlink-dashboard.jpg** - Hospital management dashboard, patient records, appointment scheduling (Style: photorealistic, UI screenshot)

---

## Development Tasks

### 1. Project Setup & Structure
- Read template README.md
- Create Angular components: Hero, About, Skills, Projects, Contact, Footer
- Set up routing and navigation
- Configure theme service for light/dark mode

### 2. Design System & Theming
- Create theme.service.ts for light/dark toggle
- Set up CSS variables for colors
- Implement Inter and JetBrains Mono fonts
- Add custom scrollbar styles
- Create reusable button and card components

### 3. Generate Images
- Use ImageCreator.generate_images to create all 6 images
- Store images in public/assets/images/

### 4. Hero Section
- Large animated heading: "Steve Riju"
- Subtitle: "Software Engineer"
- Professional tagline (generate compelling copy)
- CTA buttons: "View Projects" and "Download Resume"
- Smooth scroll to sections

### 5. About Section
- Compelling narrative about backend expertise
- Highlight: Java, Spring Boot, Full-Stack, Clean Architecture
- Professional tone, factual, confident
- Include profile photo

### 6. Skills Section
- Flat list display with visual grouping
- Tech stack: Java, Spring Boot, Spring Data JPA, Hibernate, SQL/MySQL, HTML/CSS/JS, Microservices, Angular (learning), AEM, Spring AI (learning)
- Simple icons or badges
- Responsive grid layout

### 7. Projects Showcase (CORE FEATURE)
- Animated project cards with hover effects
- Image galleries for each project
- Project 1: Madurai Bible College (Live + GitHub links)
- Project 2: Song Portal (Live + GitHub links, note about free hosting)
- Project 3: HealthLink-Alliance (GitHub only)
- Tech stack badges
- Key features list
- Links with icons

### 8. Resume & Contact
- Resume download button (placeholder PDF path)
- Contact form: Name, Email, Message
- Form validation
- Social links: GitHub, LinkedIn (placeholders)

### 9. Footer
- Tasteful faith statement: "Built with gratitude to God"
- Copyright notice
- Social links
- Back to top button

### 10. Animations & Interactions
- Intersection Observer for scroll animations
- Smooth scroll behavior
- Hover effects on cards and buttons
- Theme toggle animation
- Responsive navigation

### 11. Build & Deploy Configuration
- Configure for static site generation
- Add build instructions for GitHub Pages / Cloudflare Pages
- Test production build
- Create deployment README

---

## Professional Tagline Options (to choose from)
1. "Building scalable backend systems with clean architecture and production-grade code"
2. "Backend engineer crafting robust APIs and full-stack solutions"
3. "Specializing in Java Spring Boot, microservices, and enterprise-grade backend systems"

## About Section Copy (Draft)
I'm a software engineer specializing in backend development with Java and Spring Boot. My focus is on building scalable, maintainable systems that solve real-world problems. I have hands-on experience developing full-stack applications, from database design to REST APIs to frontend integration.

My work spans college administration systems, church management tools, and healthcare platforms—each requiring clean architecture, role-based access control, and production-ready code. I'm passionate about writing code that's not just functional, but elegant and maintainable.

Currently expanding my skills in Angular and Spring AI to build even more powerful solutions.

---

## Faith Statement (Footer)
"All glory to God, who gives wisdom and strength. Built with gratitude."