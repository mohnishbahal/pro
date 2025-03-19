'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ['Ideation', 'Prototyping', 'Architecture', 'Development', 'Testing', 'Deployment'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [stages.length]);

  const stageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 sm:pt-24 pb-20 sm:pb-32 min-h-screen flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4"
            >
              <span className="animate-pulse mr-2">🚀</span>
              The Future of Product Development
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Where Ideas Become Reality
              </span> 
              <br />
              <span>With AI-Powered Flow</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Begin your journey from concept to creation. ProFlow's AI ecosystem transforms how products are built, making innovation accessible to everyone, regardless of technical background.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex -space-x-3 mr-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 overflow-hidden bg-white shadow-lg">
                  <img 
                    src="/images/avatars/avatar-1.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = "https://ui-avatars.com/api/?name=Emma+Wilson&background=4F46E5&color=fff"} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 overflow-hidden bg-white shadow-lg">
                  <img 
                    src="/images/avatars/avatar-2.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = "https://ui-avatars.com/api/?name=Michael+Chen&background=7C3AED&color=fff"} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 overflow-hidden bg-white shadow-lg">
                  <img 
                    src="/images/avatars/avatar-3.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4338CA&color=fff"} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 overflow-hidden bg-white shadow-lg">
                  <img 
                    src="/images/avatars/avatar-4.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = "https://ui-avatars.com/api/?name=David+Kim&background=3B82F6&color=fff"} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 overflow-hidden bg-white shadow-lg">
                  <img 
                    src="/images/avatars/avatar-5.jpg" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.currentTarget.src = "https://ui-avatars.com/api/?name=Alex+Rodriguez&background=06B6D4&color=fff"} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  +495
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">500+</span> teams already using ProFlow
                </div>
                <div className="flex space-x-2 mt-1">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                    Tech
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                    Finance
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></div>
                    Healthcare
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/get-started" className="group px-8 py-3 font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Your First Idea
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/demo" className="group px-8 py-3 font-medium bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-gray-700 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors shadow-md">
                Watch 2-Min Demo
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">▶</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Right animated flow pipeline */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all">
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold">Continuous FLOW System</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Ideas to production without sprints or bottlenecks</p>
              </div>
              
              <div className="relative">
                {/* Pipeline graphic */}
                <div className="h-14 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-full my-6 sm:my-8 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between px-2 sm:px-4 py-2">
                    {stages.map((stage, index) => (
                      <div key={stage} className="relative flex flex-col items-center">
                        <div 
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                            index <= currentStage 
                              ? 'bg-indigo-600 text-white scale-110 shadow-lg' 
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="absolute -bottom-6 sm:-bottom-8 text-[10px] sm:text-xs font-medium whitespace-nowrap">
                          {stage}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress bar */}
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                    style={{ 
                      width: `${(currentStage / (stages.length - 1)) * 100}%`,
                      transition: 'width 0.8s ease-in-out'
                    }}
                  />
                </div>
                
                {/* Current stage display */}
                <div className="h-24 sm:h-28 mt-8 sm:mt-10 text-center">
                  <motion.div
                    key={currentStage}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stageVariants}
                    className="bg-indigo-50 dark:bg-indigo-900/20 p-3 sm:p-4 rounded-xl shadow-sm"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-indigo-700 dark:text-indigo-300">
                      {stages[currentStage]} Stage
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {currentStage === 0 && "Transform raw ideas into strategically aligned concepts with AI mentors"}
                      {currentStage === 1 && "Convert refined ideas into visual designs and interactive prototypes"}
                      {currentStage === 2 && "Define technical approach and optimal system design"}
                      {currentStage === 3 && "Implement solutions with AI-assisted code generation"}
                      {currentStage === 4 && "Validate quality through automated and guided testing"}
                      {currentStage === 5 && "Seamlessly release to production with monitoring"}
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Key metrics */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Faster Cycles</div>
                </div>
                <div className="text-center p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Innovation Flow</div>
                </div>
                <div className="text-center p-2 sm:p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">6</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">AI Mentors</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Discover More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12L12 7L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 