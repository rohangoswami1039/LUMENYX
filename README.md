# LUMENYX - Antigravity Frontend

A modern, futuristic web experience featuring stunning laser flow animations built with React, TypeScript, and Webpack.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Webpack](https://img.shields.io/badge/Webpack-5-orange)

## ✨ Features

- **LaserFlow Background** - Canvas-based animated laser beams with GPU acceleration
- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **Performance Optimized** - Adaptive rendering for low-end devices
- **Accessible** - Respects `prefers-reduced-motion` preferences
- **Modern Stack** - React 18, TypeScript strict mode, CSS Modules

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd LUMENYX

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized production build
npm run build
```

Output will be in the `dist/` directory.

### Type Checking

```bash
# Run TypeScript type checking
npm run type-check
```

## 📁 Project Structure

```
LUMENYX/
├── public/
│   └── index.html              # HTML template
│
├── src/
│   ├── assets/                 # Static assets
│   │   ├── images/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── Background/
│   │   │   ├── LaserFlow.tsx   # Animated background
│   │   │   ├── LaserFlow.types.ts
│   │   │   └── LaserFlow.module.css
│   │   │
│   │   ├── Layout/
│   │   │   └── MainLayout.tsx  # App layout wrapper
│   │   │
│   │   └── UI/
│   │       ├── Button.tsx      # Neon button component
│   │       └── Button.module.css
│   │
│   ├── pages/
│   │   └── Home.tsx            # Landing page
│   │
│   ├── styles/
│   │   ├── globals.css         # Global styles
│   │   ├── variables.css       # CSS custom properties
│   │   └── animations.css      # Keyframe animations
│   │
│   ├── utils/
│   │   └── math.ts             # Math & animation utilities
│   │
│   ├── App.tsx                 # Root component
│   ├── index.tsx               # Entry point
│   └── types.d.ts              # Global type declarations
│
├── webpack/
│   ├── webpack.common.js       # Shared config
│   ├── webpack.dev.js          # Development config
│   └── webpack.prod.js         # Production config
│
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## 🎨 Customization

### LaserFlow Configuration

Customize the animated background in your component:

```tsx
import LaserFlow from './components/Background/LaserFlow';

<LaserFlow 
  config={{
    beamCount: 25,
    speed: 1.5,
    colors: ['#00ffff', '#ff00ff', '#00ff88'],
    glowEnabled: true,
  }}
/>
```

### Theme Colors

Edit `src/styles/variables.css` to customize the color palette:

```css
:root {
  --color-neon-cyan: #00ffff;
  --color-neon-purple: #a855f7;
  --color-neon-magenta: #ff00ff;
  /* ... */
}
```

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript 5 | Type safety |
| Webpack 5 | Module bundler |
| CSS Modules | Scoped styling |
| PostCSS | CSS processing |
| Canvas API | Background animation |

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Performance

The LaserFlow background includes:

- **Automatic pause** when tab is hidden
- **Reduced complexity** on low-end devices
- **Debounced resize** handling
- **GPU acceleration** via CSS transforms

## 📄 License

MIT License - feel free to use this in your projects!
