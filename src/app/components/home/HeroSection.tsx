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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
              Introducing ProFlow.dev
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                90% Faster Development
              </span> 
              <br />
              <span>With AI-Augmented FLOW</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              ProFlow revolutionizes product development with continuous, AI-guided workflows that transform ideas into products without the bottlenecks of traditional tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-started" className="px-8 py-3 font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors shadow-lg hover:shadow-xl">
                Start Your First Idea
              </Link>
              <Link href="/demo" className="px-8 py-3 font-medium bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-gray-700 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors shadow-md">
                Watch Demo
              </Link>
            </div>
          </div>
          
          {/* Right animated flow pipeline */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">Continuous FLOW System</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ideas to production without sprints or bottlenecks</p>
              </div>
              
              <div className="relative">
                {/* Pipeline graphic */}
                <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-full my-8 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between px-4 py-2">
                    {stages.map((stage, index) => (
                      <div key={stage} className="relative flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                          index <= currentStage ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="absolute -bottom-8 text-xs font-medium whitespace-nowrap">
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
                <div className="h-24 mt-10 text-center">
                  <motion.div
                    key={currentStage}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={stageVariants}
                    className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl"
                  >
                    <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
                      {stages[currentStage]} Stage
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
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
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">90%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Faster Cycles</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Innovation Flow</div>
                </div>
                <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">6</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">AI Mentors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 