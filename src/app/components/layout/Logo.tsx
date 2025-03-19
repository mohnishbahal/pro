import React, { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  animated?: boolean;
}

export default function Logo({ size = 'medium', showText = true, animated = true }: LogoProps) {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
    large: 'h-10 w-10'
  };

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <div className={`flex items-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        {/* Stylized "P" with flow lines for ProFlow */}
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main circular background */}
          <circle cx="18" cy="18" r="18" className="fill-blue-500 dark:fill-blue-400" />
          
          {/* Letter P */}
          <path 
            d="M12 8h8.5c2.5 0 4.5 2 4.5 4.5S23 17 20.5 17H12V8z" 
            className="fill-white" 
          />
          
          {/* P stem continues down */}
          <rect x="12" y="17" width="4" height="11" className="fill-white" />
          
          {/* Flow lines */}
          <path 
            d="M16 22c6 0 10 2 10 6M20 17c4 0 8 1 8 5" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            className={animated ? "animate-dash" : ""}
          />
        </svg>
      </div>
      
      {showText && (
        <div className={`ml-2 font-bold tracking-tight ${textSizeClasses[size]} text-gray-900 dark:text-white`}>
          ProFlow<span className="text-blue-500 dark:text-blue-400">.dev</span>
        </div>
      )}
    </div>
  );
} 