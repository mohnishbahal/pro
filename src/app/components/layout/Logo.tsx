import React, { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  animated?: boolean;
  variant?: 'default' | 'monochrome';
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  animated = true, 
  variant = 'default' 
}: LogoProps) {
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
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="stop-color-primary-start" stopColor="#4F46E5" />
              <stop offset="100%" className="stop-color-primary-end" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="bgGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Filters */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Main circle with gradient */}
          <circle 
            cx="20" 
            cy="20" 
            r="20" 
            fill="url(#bgGradient)"
            className={`${animated ? "animate-pulse-subtle" : ""} dark:hidden`}
          />
          
          {/* Dark mode version with glow */}
          <g className="hidden dark:inline-block">
            <circle 
              cx="20" 
              cy="20" 
              r="20" 
              fill="url(#bgGradientDark)"
              className={animated ? "animate-pulse-subtle" : ""}
              filter="url(#glow)"
            />
          </g>
          
          {/* Subtle shine effect */}
          <path 
            d="M10 10 Q 20 5, 30 15 T 37 25" 
            fill="url(#shineGradient)" 
            opacity="0.4"
          />
          
          {/* Improved P shape */}
          <path 
            d="M14 10h8.5c2.8 0 5 2.2 5 5s-2.2 5-5 5H14V10z" 
            fill="white" 
          />
          <rect x="14" y="20" width="4" height="10" fill="white" />
          
          {/* Multiple animated flow lines with varying opacity */}
          <path 
            d="M18 24c7 0 11 2 12 7" 
            stroke="url(#flowGradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.9"
            className={animated ? "animate-dash" : ""}
          />
          <path 
            d="M22 20c5 0 9 1 10 6" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            opacity="0.7"
            className={animated ? "animate-dash animate-delay-100" : ""}
          />
          <path 
            d="M20 22c4 -1 8 2 8 7" 
            stroke="white" 
            strokeWidth="1" 
            strokeLinecap="round" 
            opacity="0.5"
            className={animated ? "animate-dash animate-delay-200" : ""}
          />
        </svg>
      </div>
      
      {showText && (
        <div className="ml-2 font-bold tracking-tight flex items-center">
          <span className={`${textSizeClasses[size]} bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400`}>
            Pro<span className="text-gray-800 dark:text-white">Flow</span>
          </span>
          <span className="ml-0.5 text-blue-500 dark:text-blue-400 text-xs sm:text-sm font-semibold">.dev</span>
        </div>
      )}
    </div>
  );
} 