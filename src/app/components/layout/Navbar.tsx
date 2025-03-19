'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo 
                size={isScrolled ? 'small' : 'medium'} 
                animated={true}
                variant={isScrolled ? 'monochrome' : 'default'} 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Documentation
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login" className="px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="px-4 py-2 rounded-full text-sm bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                Get Started
              </Link>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md md:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-3 sm:py-4 space-y-3 sm:space-y-4 bg-white dark:bg-gray-900 shadow-lg">
          <Link 
            href="/features" 
            className="block px-3 sm:px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="block px-3 sm:px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/docs" 
            className="block px-3 sm:px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link 
            href="/blog" 
            className="block px-3 sm:px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          
          <div className="pt-3 sm:pt-4 flex flex-col space-y-2 border-t border-gray-100 dark:border-gray-800">
            <Link 
              href="/login" 
              className="px-3 sm:px-4 py-2 text-center rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="px-3 sm:px-4 py-2 text-center rounded-full text-sm bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 