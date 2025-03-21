"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons (using more modern style)
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IdeasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
    color: string;
  };
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string>("/dashboard");
  
  // Navigation groups
  const mainNavItems: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: <HomeIcon /> },
    { name: "Ideas Hopper", href: "/ideas", icon: <IdeasIcon />, badge: { text: "3", color: "bg-indigo-500" } },
    { name: "PRDs", href: "/documents", icon: <DocumentIcon /> },
    { name: "Analytics", href: "/analytics", icon: <AnalyticsIcon /> },
  ];
  
  const secondaryNavItems: NavItem[] = [
    { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
  ];
  
  useEffect(() => {
    // Set active item based on current path
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setActiveItem(path);
    }
  }, []);

  // Render a navigation item
  const renderNavItem = (item: NavItem) => {
    const isActive = activeItem === item.href;
    
    return (
      <Link 
        href={item.href} 
        key={item.name}
        className={`flex items-center ${isCollapsed ? 'justify-center w-10 h-10 mx-auto' : 'px-4 py-3'} rounded-xl transition-all duration-200 ${
          isActive 
          ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
          : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/50'
        }`}
        onClick={() => setActiveItem(item.href)}
        title={isCollapsed ? item.name : ""}
      >
        <div className={`relative ${isCollapsed ? '' : 'mr-3'}`}>
          <div className={isActive ? 'text-white' : ''}>{item.icon}</div>
          {item.badge && (
            <span className={`absolute -top-1 -right-1 ${item.badge.color} text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center`}>
              {item.badge.text}
            </span>
          )}
        </div>
        
        {!isCollapsed && (
          <span className={`text-sm font-medium ${isActive ? 'text-white' : ''}`}>{item.name}</span>
        )}
      </Link>
    );
  };

  return (
    <motion.div 
      className={`fixed h-full bg-white/90 backdrop-blur-md dark:bg-gray-900/80 z-20 border-r border-gray-100 dark:border-gray-800`}
      initial={{ width: isCollapsed ? 80 : 256 }}
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col h-full">
        {/* Logo section */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100 dark:border-gray-800">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">ProFlow</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>
        
        {/* Navigation sections */}
        <div className="flex flex-col flex-1 overflow-y-auto px-3 py-6 space-y-6">
          {/* Main navigation */}
          <div className="space-y-1">
            {!isCollapsed && (
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Main
              </h3>
            )}
            <div className={`mt-2 space-y-1 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
              {mainNavItems.map(renderNavItem)}
            </div>
          </div>
          
          {/* Account/Settings navigation */}
          <div className="space-y-1 mt-auto">
            {!isCollapsed && (
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Account
              </h3>
            )}
            <div className={`mt-2 space-y-1 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
              {secondaryNavItems.map(renderNavItem)}
              
              {/* Profile link */}
              <Link 
                href="/profile" 
                className={`flex items-center ${isCollapsed ? 'justify-center w-10 h-10 mx-auto' : 'px-4 py-3'} rounded-xl transition-all duration-200 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/50`}
                title="Profile"
              >
                <div className={`relative ${isCollapsed ? '' : 'mr-3'}`}>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-[10px] font-medium">
                    MB
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-500 border-1 border-white dark:border-gray-800"></div>
                </div>
                
                {!isCollapsed && (
                  <span className="text-sm font-medium">Profile</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        
        {/* User profile section */}
        <div className={`p-4 mt-auto border-t border-gray-100 dark:border-gray-800 ${isCollapsed ? 'flex justify-center' : ''}`}>
          {isCollapsed ? (
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-medium text-xs">
                MB
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-medium">
                  MB
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Mohnish Bahal</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Product Owner</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 