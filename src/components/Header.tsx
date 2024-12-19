import { Heart, Cake, Stars, MailX } from 'lucide-react';
import { images } from '../config/images';

interface HeaderProps {
  onCloseLetter: () => void;
}

export function Header({ onCloseLetter }: HeaderProps) {
  return (
    <header className="relative h-screen flex items-end justify-center overflow-hidden pb-32">
      <div className="absolute inset-0">
        <img
          src={images.hero.url}
          alt={images.hero.alt}
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-primary-900/20" /> {/* Green overlay */}
      </div>
      <button
        onClick={onCloseLetter}
        className="absolute top-4 right-4 z-20 flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition-colors duration-200"
      >
        <MailX className="w-4 h-4" />
        <span>Close Letter</span>
      </button>
      <div className="relative text-center text-white z-10 space-y-6">
        <div className="flex items-center justify-center space-x-3 animate-bounce">
          <Heart className="w-8 h-8 text-primary-300" />
          <Stars className="w-8 h-8 text-primary-200" />
          <Cake className="w-8 h-8 text-primary-300" />
        </div>
        <h1 className="text-6xl font-bold font-serif drop-shadow-lg">Happy Birthday</h1>
        <p className="text-3xl italic text-primary-100">To My Amazing Girlfriend</p>
      </div>
    </header>
  );
}
