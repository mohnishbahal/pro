"use client";

import React from "react";
import { motion } from "framer-motion";

// Icons
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white/90 backdrop-blur-md dark:bg-gray-900/80 z-10 border-b border-gray-100 dark:border-gray-800">
      <div className="h-full max-w-full mx-auto flex items-center justify-between px-4">
        {/* Left section with mobile menu */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MenuIcon />
          </button>
        </div>
        
        {/* Center section - now empty */}
        <div className="flex-1 max-w-xl mx-4 flex justify-end md:justify-center">
          <motion.div 
            className="py-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400"
            initial={{ opacity: 0.9, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            ProFlow
          </motion.div>
        </div>
        
        {/* Right section with actions */}
        <div className="flex items-center space-x-3">
          {/* New idea button */}
          <button className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-colors">
            <AddIcon />
            <span className="text-sm font-medium">New Idea</span>
          </button>
          
          {/* Notifications */}
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
            <BellIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
} 