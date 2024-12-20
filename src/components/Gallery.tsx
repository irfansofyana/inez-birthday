import { images } from '../config/images';

export function Gallery() {
  return (
    <section className="py-20 bg-primary-100" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary-800">Some of Our Moments...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.gallery.map((photo) => (
            <div key={photo.url} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-primary-900 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-base md:text-lg font-medium text-center leading-relaxed px-4 py-2 rounded-lg bg-black bg-opacity-30 backdrop-blur-sm max-w-[90%] overflow-auto">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}