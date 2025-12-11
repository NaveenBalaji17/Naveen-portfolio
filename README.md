# Naveen Balaji K - Portfolio

A modern, responsive portfolio website built with React, Vite, and plain CSS.

## ✨ Features

- **Dark/Light Theme Toggle** - Persists to localStorage, respects system preference
- **Mobile-First Responsive Design** - Works beautifully on all devices
- **Accessibility** - Semantic HTML, ARIA labels, visible focus states
- **Easy Customization** - Edit the single `DATA` object in `src/data/portfolioData.ts`
- **Smooth Animations** - Respects `prefers-reduced-motion`
- **Contact Form** - Opens mail client (with EmailJS setup instructions)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── avatar-placeholder.svg    # Replace with your photo
│   ├── project-safedrive.svg     # Project images
│   ├── project-news.svg
│   └── resume.pdf                # Add your resume here
├── src/
│   ├── components/               # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolioData.ts      # ⭐ EDIT THIS FILE FOR YOUR DETAILS
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── styles/
│   │   ├── variables.css         # Design tokens
│   │   ├── global.css            # Global styles
│   │   └── components.css        # Shared component styles
│   └── pages/
│       └── Index.tsx
└── index.html
```

## 🎨 Customization

### 1. Update Your Details

Edit `src/data/portfolioData.ts` to update:
- Personal information (name, tagline, bio)
- Contact details (email, phone, location)
- Social links (LinkedIn, GitHub, Twitter, Reddit)
- Skills (hardware and software with proficiency levels)
- Projects (title, description, tech stack, links)
- Education history
- Achievements

### 2. Add Your Assets

- Replace `public/avatar-placeholder.svg` with your photo (recommended: 400x400px)
- Add your resume as `public/resume.pdf`
- Replace project images with screenshots

### 3. Update Theme Colors

Edit `src/styles/variables.css` to change the color palette:
```css
:root {
  --color-primary: #0d9488;  /* Change this */
  --color-accent: #f59e0b;   /* And this */
}
```

## 🌐 Deployment

### GitHub Pages

```bash
# 1. Build the project
npm run build

# 2. Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 3. Enable GitHub Pages
# Go to Settings > Pages > Source: Deploy from branch > Branch: main > /dist
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

```bash
npx vercel
```

## 📧 Contact Form with EmailJS (Optional)

To enable form submission without a backend:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow the commented instructions in `src/components/Contact.tsx`

## 📝 License

MIT License - Feel free to use this for your own portfolio!

---

Built with ❤️ by Naveen Balaji K
