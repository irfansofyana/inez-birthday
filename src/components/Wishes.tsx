import { Sparkles, Gift, Music, Heart, Star, Sun } from 'lucide-react';

export function Wishes() {
  const wishes = [
    {
      id: 'sparkles',
      icon: <Sparkles className="w-8 h-8 text-primary-400" />, 
      wish: "May your day be filled with endless joy and laughter"
    },
    {
      id: 'gift',
      icon: <Gift className="w-8 h-8 text-primary-500" />,
      wish: "May all your dreams and wishes come true"
    },
    {
      id: 'music', 
      icon: <Music className="w-8 h-8 text-primary-600" />,
      wish: "May your life continue to be a beautiful melody"
    },
    {
      id: 'heart',
      icon: <Heart className="w-8 h-8 text-primary-400" />,
      wish: "May love and happiness surround you always"
    },
    {
      id: 'star',
      icon: <Star className="w-8 h-8 text-primary-500" />,
      wish: "May you shine bright and achieve everything you desire"
    },
    {
      id: 'sun',
      icon: <Sun className="w-8 h-8 text-primary-600" />,
      wish: "May each sunrise bring you new opportunities and hope"
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((item) => (
            <div key={item.id} className="text-center p-6 rounded-lg bg-white hover:bg-primary-100 transition-colors duration-300 shadow-sm">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-primary-800">{item.wish}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
