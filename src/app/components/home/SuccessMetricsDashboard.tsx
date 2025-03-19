'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const developmentMetrics = [
  {
    title: 'Time to Market',
    traditional: 168,  // days
    proflow: 42,       // days
    improvement: '75%',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Team Productivity',
    traditional: 100,  // baseline
    proflow: 230,      // percentage
    improvement: '130%',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    )
  },
  {
    title: 'Development Costs',
    traditional: 100,  // baseline
    proflow: 60,       // percentage
    improvement: '40%',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Strategic Alignment',
    traditional: 42,   // percentage
    proflow: 91,       // percentage
    improvement: '116%',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    )
  }
];

const customerQuotes = [
  {
    quote: "ProFlow reduced our product development cycle from 6 months to just 6 weeks while improving alignment with business goals.",
    author: "Sarah Johnson",
    role: "VP of Product",
    company: "TechGrowth Inc.",
    image: "👩‍💼"
  },
  {
    quote: "Our engineers are 130% more productive with ProFlow's AI mentors guiding them through complex architecture decisions.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate Systems",
    image: "👨‍💻"
  },
  {
    quote: "ProFlow democratized innovation at our company. Now ideas come from every department, not just product and design.",
    author: "Jessica Rodriguez",
    role: "Chief Innovation Officer",
    company: "Future Forward",
    image: "👩‍🔬"
  }
];

export default function SuccessMetricsDashboard() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  
  // Calculate ROI based on team size
  const calculateROI = (teamSize: number) => {
    const traditionalCostPerMonth = teamSize * 12000; // $12k per team member per month in traditional setting
    const proflowCostPerMonth = teamSize * 8000;      // $8k per team member per month with ProFlow
    
    const monthlySavings = traditionalCostPerMonth - proflowCostPerMonth;
    const yearlySavings = monthlySavings * 12;
    
    // Time to market reduction (from 168 days to 42 days = 126 days saved)
    const timeToMarketSavings = 126; // days
    
    // Format ROI values for display
    return {
      roi: '280%',
      savings: formatCurrency(yearlySavings),
      timeToMarket: `${timeToMarketSavings} days`
    };
  };
  
  // Format currency with commas and $ sign
  const formatCurrency = (value: number) => {
    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  // Calculate values based on slider
  const teamSize = Math.round((sliderValue / 100) * 90 + 10); // 10-100 team members
  const yearlyROI = calculateROI(teamSize);
  
  const activeQuote = customerQuotes[activeQuoteIndex];
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-500 bg-green-50 dark:bg-green-900/30 rounded-full mb-3">
            Measure Your Success
          </span>
          <h2 className="text-3xl font-bold mb-4">From Vision to Value: Quantifiable Results</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The final step in your journey - measuring real-world impact. See how your product innovation creates tangible business value and transforms your organization.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Metrics comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {developmentMetrics.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <h3 className="ml-3 font-medium text-sm sm:text-base">{metric.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-gray-500 dark:text-gray-400">Traditional</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {metric.title === 'Time to Market' 
                          ? `${metric.traditional} days` 
                          : `${metric.traditional}%`}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-full bg-gray-300 dark:bg-gray-600 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="text-indigo-500 dark:text-indigo-400">ProFlow</span>
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">
                        {metric.title === 'Time to Market' 
                          ? `${metric.proflow} days` 
                          : `${metric.proflow}%`}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-full bg-indigo-500 rounded-full" 
                        style={{ 
                          width: metric.title === 'Development Costs' 
                            ? `${(metric.proflow / metric.traditional) * 100}%` 
                            : `${(metric.proflow / metric.traditional) * 100 > 100 ? 100 : (metric.proflow / metric.traditional) * 100}%` 
                        }}>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                    {metric.improvement} {metric.title === 'Development Costs' ? 'savings' : 'improvement'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* ROI Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">ROI Calculator</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                See your potential return on investment when using ProFlow for product development.
              </p>
              
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">5</span>
                  <input 
                    type="range" 
                    min="5" 
                    max="100" 
                    value={sliderValue}
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full appearance-none cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">100</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm sm:text-base font-medium">{sliderValue} team members</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{yearlyROI.roi}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">ROI</div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{yearlyROI.savings}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Cost Savings</div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{yearlyROI.timeToMarket}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Time Saved</div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm sm:text-base">
                  Get Detailed ROI Report
                </button>
              </div>
            </div>
            
            {/* Customer quotes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold">Customer Success Stories</h3>
              </div>
              
              <div className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <motion.div
                    key={activeQuoteIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div className="text-xl sm:text-2xl text-gray-400 dark:text-gray-500 mb-2">&quot;</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg italic mb-4">
                      {activeQuote.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-lg sm:text-xl">
                        {activeQuote.image}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm sm:text-base font-medium">{activeQuote.author}</div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {activeQuote.role}, {activeQuote.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {customerQuotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveQuoteIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                        activeQuoteIndex === index ? 'bg-indigo-500' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                      aria-label={`View quote ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to transform your product development?</h3>
            <p className="text-sm sm:text-base text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join the companies that have slashed development time by 75% and increased innovation throughput by 100%.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-colors shadow-md text-sm sm:text-base">
                Get Started
              </button>
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors text-sm sm:text-base">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 