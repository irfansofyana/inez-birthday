import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center bg-gradient-to-t from-white/90 to-white/50 backdrop-blur-md border-t border-green-100 shadow-lg">
      <div className="container mx-auto px-4 space-y-3">
        <p className="text-gray-800 text-lg">
          Built with{" "}
          <span className="text-green-500 animate-pulse text-xl" role="img" aria-label="love">
            💚
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/irfanandriansyah1997"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium hover:underline"
          >
            Irfan Sofyana Putra
          </a>
        </p>
        <p className="text-sm text-gray-600 font-light tracking-wide">
          © {currentYear} All rights reserved. Made with love for Inez.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
