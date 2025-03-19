'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FlowLinesProps {
  color?: string;
  opacity?: number;
  count?: number;
  width?: number;
  className?: string;
}

export default function FlowLines({
  color = 'rgba(99, 102, 241, 0.15)',
  opacity = 0.5,
  count = 3,
  width = 1,
  className = '',
}: FlowLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for flow lines
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  // Generate flow lines
  const flowLines = Array.from({ length: count }).map((_, index) => {
    // Calculate random but stable position
    const seed = index * 1137; // Using a prime number for better distribution
    const left = `${(seed % 80) + 10}%`; // Between 10% and 90%
    const height = `${(seed % 30) + 70}%`; // Between 70% and 100%
    const delay = index * 0.1;
    
    // Choose which parallax effect to use based on index
    const yValue = index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3;
    
    return (
      <motion.div
        key={index}
        style={{
          position: 'absolute',
          left,
          top: 0,
          height,
          width: `${width}px`,
          backgroundColor: color,
          opacity: opacity * (0.7 + (index % 3) * 0.1), // Slight variation in opacity
          y: yValue,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity * (0.7 + (index % 3) * 0.1) }}
        transition={{ duration: 1, delay }}
      />
    );
  });

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {flowLines}
    </div>
  );
} 