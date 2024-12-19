import { Heart, Cake, Stars } from 'lucide-react';
import { images } from '../config/images';

export function Header() {
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