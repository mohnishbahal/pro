'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ['Ideation', 'Prototyping', 'Architecture', 'Development', 'Testing', 'Deployment'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stages.length]);

  const stageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  const circleVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.15, 
      boxShadow: "0px 4px 20px rgba(79, 70, 229, 0.4)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };
  
  const progressVariants = {
    initial: { width: '0%' },
    animate: { 
      width: `${(currentStage / (stages.length - 1)) * 100}%`,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
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
        {/* Add shimmer animation class */}
        <style jsx global>{`
          @keyframes shimmer {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(200%);
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
        
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all relative overflow-hidden">
              {/* Decorative particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                  className="absolute top-10 right-10 w-4 h-4 rounded-full bg-indigo-400 dark:bg-indigo-500 opacity-20"
                  animate={{ 
                    y: [0, -10, 0], 
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute bottom-20 left-16 w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-500 opacity-20"
                  animate={{ 
                    y: [0, -10, 0], 
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute top-32 left-24 w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-500 opacity-20"
                  animate={{ 
                    y: [0, -10, 0], 
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">Continuous FLOW System</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Ideas to production without sprints or bottlenecks</p>
              </div>
              
              <div className="relative">
                {/* Pipeline graphic */}
                <div className="h-16 sm:h-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full my-6 sm:my-8 relative shadow-inner overflow-hidden">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-full"></div>
                  
                  {/* Stage indicators */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between px-2 sm:px-4 py-2">
                    {stages.map((stage, index) => (
                      <div key={stage} className="relative flex flex-col items-center z-20">
                        <motion.div 
                          variants={circleVariants}
                          animate={index <= currentStage ? "active" : "inactive"}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden
                            ${index <= currentStage 
                              ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white' 
                              : 'bg-gray-200/80 dark:bg-gray-600/80 text-gray-500 dark:text-gray-400 backdrop-blur-sm'
                            }`}
                        >
                          {index <= currentStage && (
                            <motion.div
                              className="absolute inset-0 bg-white opacity-20"
                              animate={{ 
                                opacity: [0.1, 0.2, 0.1],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}
                          <span className="font-semibold text-sm sm:text-base relative z-10">{index + 1}</span>
                        </motion.div>
                        <div className="absolute -bottom-8 sm:-bottom-10 flex flex-col items-center">
                          <span className={`text-[10px] sm:text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
                            index === currentStage ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {stage}
                          </span>
                          {index === currentStage && (
                            <motion.div 
                              layoutId="activeIndicator"
                              className="h-0.5 w-full mt-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-600 transform -translate-y-1/2 z-[5]"></div>
                  
                  {/* Progress bar */}
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 rounded-full relative z-10"
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                    key={currentStage}
                  >
                    {/* Replace noise texture with a simple opacity overlay */}
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                    <div className="absolute top-0 h-full w-20 bg-white/20 animate-shimmer"></div>
                  </motion.div>
                </div>
                
                {/* Current stage display */}
                <div className="h-32 sm:h-36 mt-12 sm:mt-14 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStage}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={stageVariants}
                      className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-4 sm:p-6 rounded-xl shadow-md relative overflow-hidden"
                    >
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-sm"></div>
                      
                      {/* Stage content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-indigo-600 text-white mr-2`}>
                            <span className="font-semibold">{currentStage + 1}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-indigo-700 dark:text-indigo-300">
                            {stages[currentStage]} Stage
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          {currentStage === 0 && "Transform raw ideas into strategically aligned concepts with AI mentors"}
                          {currentStage === 1 && "Convert refined ideas into visual designs and interactive prototypes"}
                          {currentStage === 2 && "Define technical approach and optimal system design"}
                          {currentStage === 3 && "Implement solutions with AI-assisted code generation"}
                          {currentStage === 4 && "Validate quality through automated and guided testing"}
                          {currentStage === 5 && "Seamlessly release to production with monitoring"}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Key metrics */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                <motion.div 
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                  className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">90%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Faster Cycles</div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
                  className="text-center p-3 sm:p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Innovation Flow</div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(67, 56, 202, 0.4)" }}
                  className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">6</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">AI Mentors</div>
                </motion.div>
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