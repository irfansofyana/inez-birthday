import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Message } from './components/Message';
import { Wishes } from './components/Wishes';
import { PasswordProtection } from './components/PasswordProtection';
import { BackgroundMusic } from './components/BackgroundMusic';
import Footer from './components/Footer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
      <BackgroundMusic isPlaying={isUnlocked} />
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <PasswordProtection onSuccess={() => setIsUnlocked(true)} />
        ) : (
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Wishes />
            <Gallery />
            <Message />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
