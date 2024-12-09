import { Sparkles, Gift, Music } from 'lucide-react';

export function Wishes() {
  const wishes = [
    {
      id: 'sparkles',
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      wish: "May your day be filled with endless joy and laughter"
    },
    {
      id: 'gift',
      icon: <Gift className="w-8 h-8 text-pink-400" />,
      wish: "May all your dreams and wishes come true"
    },
    {
      id: 'music',
      icon: <Music className="w-8 h-8 text-purple-400" />,
      wish: "May your life continue to be a beautiful melody"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((item) => (
            <div key={item.id} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-gray-700">{item.wish}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}