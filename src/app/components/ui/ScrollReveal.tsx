'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollRevealProps = {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 30,
  once = true,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  // Initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'none':
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  // Final position when in view
  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'none':
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 