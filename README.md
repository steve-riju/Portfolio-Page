# Steve Riju - Portfolio Website

A modern, animated, and professional portfolio website showcasing software engineering projects and skills. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Query

## 📋 Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **About** - Professional background and expertise
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with images, descriptions, and links
5. **Contact** - Contact form and social links
6. **Footer** - Quick links and additional information

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Dark (#0A0A0A) / Light (#FFFFFF)
- Text: White (#FFFFFF) / Dark (#0A0A0A)

### Typography
- Font Family: Inter (primary), JetBrains Mono (code)
- Headings: 800/700/600 weight
- Body: 400 weight

### Animations
- Fade-in on scroll
- Smooth transitions
- Hover effects on cards and buttons
- Staggered animations for list items

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/steve-riju/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview production build**
   ```bash
   pnpm run preview
   ```

## 🚢 Deployment

This project is optimized for static hosting. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:

- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify

Quick deploy:
```bash
pnpm run build
```

The `dist/` directory contains the production-ready files.

## 📝 Customization

### Update Personal Information

1. **Profile Photo**: Replace the image URL in `src/components/About.tsx`
2. **Resume**: Replace `public/resume.pdf` with your actual resume
3. **Contact Email**: Update email in `src/components/Contact.tsx` and `src/components/Footer.tsx`
4. **Social Links**: Update GitHub and LinkedIn URLs in navigation and footer components

### Add/Modify Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  techStack: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  images: ['image-url-1', 'image-url-2'],
  liveUrl: 'https://...',
  githubUrl: 'https://github.com/...',
}
```

### Modify Skills

Edit the `skillCategories` array in `src/components/Skills.tsx`.

### Change Theme Colors

Update CSS variables in `src/index.css` under the `:root` and `.dark` selectors.

## 🧪 Development

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section
│   ├── Navigation.tsx   # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   └── theme-provider.tsx
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # App root
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🔧 Configuration

### Vite Config
The project uses Vite for fast development and optimized builds. Configuration is in `vite.config.ts`.

### Tailwind Config
Tailwind CSS configuration is in `tailwind.config.ts`. Customize colors, fonts, and other design tokens here.

### TypeScript Config
TypeScript configuration is split into:
- `tsconfig.json` - Base config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node-specific config

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Vercel, Linear, and GitHub
- UI components from shadcn/ui
- Icons from Lucide React
- Fonts from Google Fonts (Inter, JetBrains Mono)

## 📧 Contact

Steve Riju - [GitHub](https://github.com/steve-riju) - [LinkedIn](https://linkedin.com/in/steve-riju)

---

**Built with gratitude to God** ✝️