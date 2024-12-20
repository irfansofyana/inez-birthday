import { useState, FormEvent, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordProtectionProps {
  onSuccess: () => void;
}

export const PasswordProtection = ({ onSuccess }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasAttemptedPlay = useRef(false);

  useLayoutEffect(() => {
    // Check if already validated
    const isValidated = localStorage.getItem('password_validated') === 'true';
    if (isValidated) {
      onSuccess();
    }
  }, [onSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_APP_PASSWORD) {
      if (audioRef.current) {
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.02) {
            audioRef.current.volume -= 0.02;
          } else {
            clearInterval(fadeOut);
            audioRef.current?.pause();
          }
        }, 50);
      }
      // Store validation state in localStorage
      localStorage.setItem('password_validated', 'true');
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const playMusic = async () => {
    if (!audioRef.current || hasAttemptedPlay.current) return;
    
    try {
      hasAttemptedPlay.current = true;
      audioRef.current.volume = 0.3;
      await audioRef.current.play();
      console.log('Music started playing successfully');
      setIsPlaying(true);
      setShowPlayButton(false);
    } catch (error) {
      console.error('Failed to play music:', error);
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
      }
      setShowPlayButton(true);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (audioRef.current.paused) {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Failed to toggle music:', error);
    }
  };

  // Try to play when input is focused
  const handleInputFocus = () => {
    playMusic();
  };

  // Try to play when any click happens on the page
  const handlePageClick = () => {
    playMusic();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Log the audio element's properties
    console.log('Audio element ready:', {
      src: audio.src,
      readyState: audio.readyState,
      paused: audio.paused,
      muted: audio.muted,
      volume: audio.volume,
    });

    // Add click listener to the whole page
    document.addEventListener('click', handlePageClick);

    return () => {
      audio.pause();
      hasAttemptedPlay.current = false;
      document.removeEventListener('click', handlePageClick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-emerald-50 flex items-center justify-center z-50"
    >
      <audio 
        ref={audioRef} 
        preload="auto"
        src={`${import.meta.env.BASE_URL}music/background-music-on-password.mp3`}
        loop
        onError={(e) => {
          const audio = e.target as HTMLAudioElement;
          console.error('Audio loading error:', {
            error: audio.error,
            networkState: audio.networkState,
            readyState: audio.readyState,
            src: audio.src,
          });
          setShowPlayButton(true);
        }}
        onLoadedData={() => {
          console.log('Audio file loaded successfully');
          // Try to play when audio is loaded
          playMusic();
        }}
      />
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 border-2 border-emerald-200">
        <h2 className="text-xl font-bold text-emerald-600 mb-4">
          💚 Enter Password to Open Letter
        </h2>
        
        {showPlayButton && (
          <div className="mb-6 flex flex-col items-center">
            <p className="text-sm text-emerald-600 mb-2">
              {isPlaying ? "Background music is playing" : "Add some background music?"}
            </p>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                toggleMusic();
              }}
              type="button"
              className={`relative flex items-center justify-center px-4 py-2 rounded-full transition-all duration-200 ease-in-out
                ${isPlaying 
                  ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
                } 
                shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              title={isPlaying ? "Pause Music" : "Play Music"}
            >
              <div className="flex items-center space-x-2">
                {isPlaying ? (
                  <>
                    <span className="w-4 h-3 relative">
                      <span className="absolute inset-0 flex items-center justify-center gap-[2px]">
                        <span className="block w-[2px] bg-emerald-600 animate-music1"></span>
                        <span className="block w-[2px] bg-emerald-600 animate-music2"></span>
                        <span className="block w-[2px] bg-emerald-600 animate-music3"></span>
                      </span>
                    </span>
                    <span className="text-sm">Pause Music</span>
                  </>
                ) : (
                  <>
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10L5 3v14l13-7z" />
                    </svg>
                    <span className="text-sm">Play Music</span>
                  </>
                )}
              </div>
            </motion.button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleInputFocus}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                error ? 'border-red-500' : 'border-emerald-300'
              } bg-emerald-50/50`}
              placeholder="Enter password..."
            />
          </div>
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm"
              >
                Incorrect password. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            Open
          </button>
        </form>
      </div>
    </motion.div>
  );
};
