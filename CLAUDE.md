# Inez Birthday Website - Claude Code Context

## Project Type
Personal React web application - A birthday celebration website with password protection and interactive features.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme (emerald/green color palette)
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React + React Icons
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via gh-pages

## Key Features & Architecture
- **Password Protection**: Environment variable based (`VITE_APP_PASSWORD`)
- **Background Music**: Two audio files with auto-play handling and user interaction
- **Photo Gallery**: Image configuration in `src/config/images.ts`
- **State Management**: React hooks + localStorage for preferences
- **Responsive Design**: Mobile-first with Tailwind breakpoints

## Project Structure
- `src/components/` - All React components (Header, Gallery, Music, etc.)
- `src/config/` - Configuration files for images and audio
- `public/music/` - Audio files (happy-birthday.mp3, background-music-on-password.mp3)
- Custom Tailwind theme with emerald colors and music animation keyframes

## Development Commands
- `npm run dev` - Development server (localhost:5173)
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Important Context
- Personal project for girlfriend's birthday - handle with care and respect
- Password protection is core feature - test thoroughly
- Audio auto-play requires user interaction (browser restrictions)
- Uses localStorage for password validation and audio preferences
- Custom CSS animations for music visualizer in Tailwind config

## Environment Setup
Requires `.env` file with `VITE_APP_PASSWORD=your_password_here`