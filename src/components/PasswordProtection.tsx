import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordProtectionProps {
  onSuccess: () => void;
}

export const PasswordProtection = ({ onSuccess }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_APP_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-emerald-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 border-2 border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
          💌 Enter Password to Open
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
