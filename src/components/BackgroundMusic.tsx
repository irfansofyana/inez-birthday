import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundMusicProps {
  isPlaying: boolean;
}

export const BackgroundMusic = ({ isPlaying }: BackgroundMusicProps) => {
  const [isMuted, setIsMuted] = useState(() => {
    const savedMuteState = localStorage.getItem('audio_muted');
    return savedMuteState ? JSON.parse(savedMuteState) : false;
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef<boolean>(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted.current && audioRef.current && isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented, we can ignore this
          });
        }
        hasInteracted.current = true;
      }
    };

    // Add interaction listeners
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying && audioRef.current && hasInteracted.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, we'll retry on user interaction
          hasInteracted.current = false;
        });
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, we'll need user interaction
        });
      }
    }
  }, [isPlaying]);

  // Save mute state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('audio_muted', JSON.stringify(isMuted));
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            onClick={toggleMute}
            className="bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
          <audio
            ref={audioRef}
            loop
            src={`${import.meta.env.BASE_URL}music/happy-birthday.mp3`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
