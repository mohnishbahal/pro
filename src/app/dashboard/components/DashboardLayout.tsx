"use client";

import React from "react";
import { ReactNode, useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Check if we should initialize the sidebar as collapsed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
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
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <Header 
          variant="dashboard" 
          toggleSidebar={toggleSidebar} 
          userName="Jane Doe" 
          notificationCount={2} 
        />
        
        {/* Content */}
        <div className="pt-16">
          {children}
        </div>
      </div>
    </div>
  );
} 