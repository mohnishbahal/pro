'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const clarityStages = [
  {
    score: 28,
    title: "Initial Idea",
    description: "Vague concept with unclear goals",
    color: "red",
    sample: "I want to build a collaboration tool for remote teams."
  },
  {
    score: 47,
    title: "Basic Definition",
    description: "Identified problem and basic solution",
    color: "orange",
    sample: "A platform for remote teams to synchronize work across time zones with visual status boards."
  },
  {
    score: 65,
    title: "Detailed Concept",
    description: "Clear value proposition and features",
    color: "yellow",
    sample: "A collaboration platform that uses AI to optimize asynchronous workflows for remote teams, featuring smart notifications, timezone-aware scheduling, and visual project tracking."
  },
  {
    score: 89,
    title: "Refined Proposal",
    description: "Comprehensive strategic alignment",
    color: "green",
    sample: "TimeSync: An AI-powered collaboration platform enabling remote teams to work efficiently across time zones. Features include smart notification batching, ML-based optimal meeting time suggestions, visual workflow tracking with status indicators, and integration with existing tools. Targets companies with 50+ remote employees, addressing the $8.5B productivity loss from timezone challenges."
  }
];

export default function ClarityScoreShowcase() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Auto-progress every 5 seconds
    const interval = setInterval(() => {
      if (currentStage < clarityStages.length - 1) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentStage(prev => prev + 1);
          setIsAnimating(false);
        }, 1500);
      } else {
        // Reset to first stage after showing the last one
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentStage(0);
          setIsAnimating(false);
        }, 1500);
      }
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentStage]);

  // Get color classes based on the stage
  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "bg-red-500",
          light: "bg-red-100 dark:bg-red-900/20",
          text: "text-red-600 dark:text-red-400",
          ring: "ring-red-500"
        };
      case "orange":
        return {
          bg: "bg-orange-500",
          light: "bg-orange-100 dark:bg-orange-900/20",
          text: "text-orange-600 dark:text-orange-400",
          ring: "ring-orange-500"
        };
      case "yellow":
        return {
          bg: "bg-yellow-500",
          light: "bg-yellow-100 dark:bg-yellow-900/20",
          text: "text-yellow-600 dark:text-yellow-400",
          ring: "ring-yellow-500"
        };
      case "green":
        return {
          bg: "bg-emerald-500",
          light: "bg-emerald-100 dark:bg-emerald-900/20",
          text: "text-emerald-600 dark:text-emerald-400",
          ring: "ring-emerald-500"
        };
      default:
        return {
          bg: "bg-gray-500",
          light: "bg-gray-100 dark:bg-gray-900/20",
          text: "text-gray-600 dark:text-gray-400",
          ring: "ring-gray-500"
        };
    }
  };

  const current = clarityStages[currentStage];
  const colorClasses = getColorClasses(current.color);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-3">
            AI-Powered Assessment
          </span>
          <h2 className="text-3xl font-bold mb-4">From Vague Ideas to Clear PRDs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch how AI mentors transform unclear concepts into strategic, well-defined product requirements with real-time clarity scoring.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clarity score visualization */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-2">Clarity Score</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
                Our AI continuously evaluates your idea across 10 dimensions
              </p>
              
              <div className="relative w-64 h-64 mb-4">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                
                {/* Progress circle with animation */}
                <motion.div 
                  className={`absolute inset-0 rounded-full ${colorClasses.bg}`}
                  style={{ 
                    background: `conic-gradient(${colorClasses.bg} ${current.score}%, transparent 0)`,
                    transition: "all 1.5s ease-in-out"
                  }}
                  animate={{ 
                    opacity: isAnimating ? [1, 0.8, 1] : 1 
                  }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
                
                {/* Inner white circle */}
                <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    animate={{ 
                      scale: isAnimating ? [1, 1.05, 1] : 1 
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <motion.div 
                      className={`text-5xl font-bold ${colorClasses.text}`}
                      key={current.score}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {current.score}
                    </motion.div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Clarity Score</div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className={`text-xl font-bold mb-1 ${colorClasses.text}`}
                key={`title-${current.title}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {current.title}
              </motion.div>
              
              <motion.div 
                className="text-sm text-gray-500 dark:text-gray-400 text-center"
                key={`desc-${current.description}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {current.description}
              </motion.div>
              
              {/* Progress steps */}
              <div className="mt-8 flex space-x-2">
                {clarityStages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentStage(idx);
                        setIsAnimating(false);
                      }, 1500);
                    }}
                    className={`w-12 h-1 rounded-full transition-all ${
                      idx === currentStage 
                        ? getColorClasses(stage.color).bg
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                    aria-label={`View ${stage.title} stage`}
                  />
                ))}
              </div>
            </div>
            
            {/* Idea evolution showcase */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-1">Idea Evolution</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Watch how your concept transforms with AI guidance
                </p>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${colorClasses.light} flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colorClasses.text}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">Product Idea</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Stage {currentStage + 1} of {clarityStages.length}</div>
                  </div>
                </div>
                
                <motion.div
                  key={`sample-${current.title}`}
                  className={`p-5 ${colorClasses.light} rounded-xl mb-6`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className={`${colorClasses.text} text-sm`}>
                    {current.sample}
                  </p>
                </motion.div>
                
                {/* AI insights panel */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div className="ml-2 font-medium text-sm">AI Mentor Insights</div>
                  </div>
                  
                  <motion.div
                    key={`insight-${current.title}`}
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {currentStage === 0 && (
                      <>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Who specifically is this for? What problem does it solve?</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Consider defining the unique value compared to existing tools.</p>
                      </>
                    )}
                    {currentStage === 1 && (
                      <>
                        <p className="text-xs text-gray-600 dark:text-gray-300">What specific features would help with time zone challenges?</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">How does this align with current productivity trends?</p>
                      </>
                    )}
                    {currentStage === 2 && (
                      <>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Great progress! Now consider target market size and pricing model.</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">How will you measure success for this product?</p>
                      </>
                    )}
                    {currentStage === 3 && (
                      <>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Excellent definition! Consider adding implementation phases.</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">This is ready to move to the prototyping stage.</p>
                      </>
                    )}
                  </motion.div>
                </div>
                
                {/* Progress indicators */}
                <div className="mt-6 grid grid-cols-5 gap-2">
                  {['Problem', 'User', 'Value', 'Market', 'Features'].map((dimension, idx) => (
                    <div key={dimension} className="text-center">
                      <div className="relative mx-auto w-8 h-8 mb-1">
                        <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                        <div 
                          className={`absolute inset-0 rounded-full ${colorClasses.bg}`}
                          style={{ 
                            background: `conic-gradient(${colorClasses.bg} ${Math.min(100, current.score + (idx * 5))}%, transparent 0)`,
                          }}
                        ></div>
                        <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800"></div>
                      </div>
                      <div className="text-xs font-medium">{dimension}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 