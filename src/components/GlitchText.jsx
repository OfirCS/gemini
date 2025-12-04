import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text }) => {
  return (
    <motion.span
      className="inline-block relative overflow-hidden cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="block"
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 block text-brass"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;

