// SwipeUpPrompt.js
"use client"
// SwipeUpPrompt.js

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SwipeUpPrompt = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust the threshold value based on when you want the arrow to disappear
      setIsVisible(scrollY <= window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, 0, 0, 5, 0] : 0, // Up-and-down motion when visible
      }}
      transition={{ duration: 0.5, repeat: isVisible ? Infinity : 0  }}
      style={{
        position: 'fixed',
        top: '92%',
        left: '49%',
        transform: 'translate(-50%, -50%)',
        padding: 5,
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        color: '#fff',
        cursor: 'pointer',
        zIndex: 999, // Adjust the zIndex if needed
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      {/* Down arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        style={{ width: '24px', height: '24px' }}
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </motion.div>
  );
};

export default SwipeUpPrompt;
