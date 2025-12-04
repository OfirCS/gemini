import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Faster progression for snappier feel
        const remaining = 100 - prev;
        const increment = Math.max(2, Math.floor(remaining / 8));
        return Math.min(100, prev + increment);
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setPhase('complete');
      setTimeout(() => {
        setLoading(false);
      }, 800); // Slightly longer pause at 100%
    }
  }, [count, setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col bg-void overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        pointerEvents: "none",
        transition: { duration: 1.0, ease: "easeInOut" }
      }}
    >
      {/* Main content container */}
      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top bar */}
        <div className="flex justify-between items-center px-8 md:px-16 py-8">
          <motion.span
            className="font-display text-xl md:text-2xl text-cream tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Emerge
          </motion.span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">

          {/* Large counter */}
          <div className="relative">
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.span
                className="block font-display text-[15vw] md:text-[12vw] leading-none text-cream tracking-tighter select-none"
                style={{ fontWeight: 700 }}
              >
                {String(count).padStart(3, '0')}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex justify-between items-end px-8 md:px-16 py-8">
          <motion.div
            className="flex items-center gap-6 w-full max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="w-full h-[1px] bg-ash/20 overflow-hidden">
              <motion.div
                className="h-full bg-cream"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
