# Portfolio 2025 - Creative Developer Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://folio-2022.netlify.app/)
[![Version](https://img.shields.io/badge/version-1.0.13-blue.svg)](https://github.com/jayanthgummitha/jayanthgummitha.github.io)

A modern, interactive 3D portfolio website showcasing creative development work with immersive WebGL experiences, smooth animations, and responsive design.

🌐 **[Live Demo](https://jayanthgummitha.github.io/)**

## ✨ Features

- **3D Interactive Experience** - Immersive Three.js powered 3D scenes with custom shaders and animations
- **Smooth Animations** - GSAP-powered transitions and scroll-based animations
- **Responsive Design** - Optimized for all devices and screen sizes
- **Multi-language Support** - i18next integration for English and Italian
- **Audio Integration** - Interactive sound effects and background music with Howler.js
- **Project Showcase** - Dynamic project galleries with video and image media
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **Modern Tech Stack** - Built with React 18, TypeScript, and Vite

## 🚀 Tech Stack

### Core
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing

### 3D & Animation
- **Three.js** - WebGL 3D graphics library
- **GSAP** - Professional-grade animation library
- **@masatomakino/threejs-interactive-object** - Interactive 3D object handling

### State Management
- **Redux** - Predictable state container
- **Rematch** - Redux framework with less boilerplate
- **React Redux** - Official React bindings for Redux

### Styling
- **PostCSS** - CSS processing with modern features
- **CSS Modules** - Scoped and modular CSS
- **Autoprefixer** - Automatic vendor prefixing

### Audio
- **Howler.js** - Audio library for the modern web

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React integration for i18next

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- pnpm (required package manager)

### Setup

```bash
# Clone the repository
git clone https://github.com/jayanthgummitha/jayanthgummitha.github.io.git

# Navigate to project directory
cd jayanthgummitha.github.io

# Install dependencies (pnpm is enforced)
pnpm install
```

## 🛠️ Development

```bash
# Start development server with network access
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code with Prettier
pnpm prettier-all
```

## 🚢 Deployment

```bash
# Build and deploy to GitHub Pages
pnpm deploy
```

The site is automatically deployed to GitHub Pages at [https://jayanthgummitha.github.io/](https://jayanthgummitha.github.io/)

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── audio/             # Sound effects and music
│   ├── draco/             # Draco compression for 3D models
│   ├── images/            # Project images and thumbnails
│   ├── locales/           # Translation files (en, it)
│   └── models/            # 3D models (GLTF/GLB)
├── src/
│   ├── components/        # React components
│   │   ├── Experience/    # Three.js 3D experience
│   │   ├── Menu/          # Navigation menu
│   │   ├── ProjectHero/   # Project showcase
│   │   └── ...            # Other UI components
│   ├── hooks/             # Custom React hooks
│   ├── partials/          # Page partials/sections
│   ├── store/             # Redux store configuration
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── i18n.ts            # i18n configuration
│   ├── main.tsx           # Application entry point
│   └── settings.ts        # App settings
├── fonts/                 # Custom fonts
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## 🎨 Key Components

- **Experience** - Three.js WebGL renderer and scene management
- **ProjectHero** - Animated project showcase with media
- **Menu** - Interactive navigation with smooth transitions
- **AudioWave** - Visual audio waveform component
- **LoadProgress** - Asset loading progress indicator
- **TextScramble** - Animated text scramble effects

## 🌍 Internationalization

The portfolio supports multiple languages:
- English (en)
- Italian (it)

Translation files are located in `public/locales/{lang}/`

## 🎵 Audio Features

Interactive audio system with:
- Background music
- Hover sound effects
- Bell notifications
- Intro sounds

Audio files are located in `public/audio/`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

WebGL support required for 3D features.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

**Jayanth Gummitha**
- Website: [jayanthgummitha.github.io](https://jayanthgummitha.github.io/)
- GitHub: [@jayanthgummitha](https://github.com/jayanthgummitha)

## 🙏 Acknowledgments

- Three.js community for excellent 3D library
- GSAP for powerful animation tools
- React team for the amazing framework

---

Built with ❤️ using React, Three.js, and modern web technologies
