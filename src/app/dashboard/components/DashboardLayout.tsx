"use client";

import React from "react";
import { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Check if we should initialize the sidebar as collapsed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div 
        className={`flex flex-col flex-1 ${isSidebarCollapsed ? 'ml-20' : 'ml-0 md:ml-64'} transition-all duration-300`}
      >
        {/* Top Navigation */}
        <Header toggleSidebar={toggleSidebar} />
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
} 