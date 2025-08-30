# Inez 24th Birthday Website

A special birthday website created with React, TypeScript, and Tailwind CSS to celebrate my girlfriend, Inez's birthday. This is a personal project made with love to showcase our memories together and express my heartfelt feelings on her special day.

## Live Demo

You can view the live demo of the website [here](https://inez-birthday.irfansp.dev/).

## Features

- 🔒 **Password Protection**: Special content with password entry screen and background music
- 📸 **Photo Gallery**: Interactive collection of memorable moments with hover captions
- 🎵 **Background Music**: Auto-playing birthday music with mute/unmute controls
- 💝 **Birthday Message**: Personalized birthday message section
- 🌟 **Birthday Wishes**: Special wishes display component
- 🎨 **Modern UI**: Clean and responsive design built with Tailwind CSS
- ✨ **Smooth Animations**: Engaging user experience with Framer Motion
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🎭 **Interactive Elements**: Hover effects and smooth transitions
- 💾 **Local Storage**: Remembers password validation and audio preferences

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (for animations)
- Lucide React (for icons)
- React Icons

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/irfansofyana/inez-birthday.git
```

2. Install dependencies

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_APP_PASSWORD=your_password_here
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
inez-birthday/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Main header with navigation
│   │   ├── PasswordProtection.tsx  # Password entry screen
│   │   ├── Gallery.tsx      # Photo gallery with hover effects
│   │   ├── Message.tsx      # Birthday message section
│   │   ├── Wishes.tsx       # Birthday wishes display
│   │   ├── BackgroundMusic.tsx  # Audio player with controls
│   │   └── Footer.tsx       # Footer component
│   ├── config/
│   │   ├── images.ts        # Image configuration and paths
│   │   └── audio.ts         # Audio configuration
│   ├── types/
│   │   └── audio.d.ts       # TypeScript audio declarations
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/
│   ├── music/              # Audio files
│   │   ├── happy-birthday.mp3
│   │   └── background-music-on-password.mp3
│   ├── cake.svg            # Icon assets
│   ├── index.html          # Main HTML template
│   └── 404.html            # 404 error page
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## License

This project is a personal creation and is not licensed for public use.

## Created with love

Made with love for Inez's 24th birthday celebration

## Credits

This project was developed with the assistance of:

- [bolt.new](https://bolt.new) - AI-powered development platform
- [Windsurf Editor](https://codeium.com/windsurf) - Agentic AI coding assistant IDE
- [Cline](https://github.com/cline/cline) - Autonomous coding agent in IDE
