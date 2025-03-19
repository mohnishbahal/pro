'use client';

import React, { useState } from 'react';

const companyOKRs = [
  {
    id: 'growth',
    title: 'Accelerate Growth',
    description: 'Increase revenue by 40% YoY',
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    ),
    metrics: [
      { title: 'New enterprise clients', target: '25+', value: '18', progress: 72 },
      { title: 'User activation rate', target: '60%', value: '52%', progress: 86 },
      { title: 'Revenue per customer', target: '$12K', value: '$9.2K', progress: 77 }
    ]
  },
  {
    id: 'experience',
    title: 'Enhance UX',
    description: 'Boost engagement and retention',
    color: 'purple',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    metrics: [
      { title: 'Monthly active users', target: '100K', value: '78K', progress: 78 },
      { title: 'Session duration', target: '12 min', value: '9.5 min', progress: 79 },
      { title: 'User satisfaction', target: '4.8/5', value: '4.6/5', progress: 95 }
    ]
  },
  {
    id: 'innovation',
    title: 'Drive Innovation',
    description: 'Launch 3 new product categories',
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    ),
    metrics: [
      { title: 'New features launched', target: '24', value: '21', progress: 87 },
      { title: 'R&D initiatives', target: '5', value: '3', progress: 60 },
      { title: 'Patents filed', target: '8', value: '6', progress: 75 }
    ]
  }
];

// Define the type for alignment scores
interface AlignmentScores {
  growth: number;
  experience: number;
  innovation: number;
}

interface ProductIdea {
  id: string;
  title: string;
  description: string;
  alignmentScores: AlignmentScores;
  impact: string;
  status: string;
  icon: string;
}

const productIdeas: ProductIdea[] = [
  {
    id: 'ai-assistant',
    title: 'AI Product Assistant',
    description: 'ML-powered suggestion engine for product development',
    alignmentScores: { growth: 82, experience: 68, innovation: 95 },
    impact: 'High',
    status: 'In development',
    icon: '🤖'
  },
  {
    id: 'analytics-dash',
    title: 'Advanced Analytics Dashboard',
    description: 'Real-time metrics visualization and trend analysis',
    alignmentScores: { growth: 91, experience: 76, innovation: 64 },
    impact: 'Medium',
    status: 'Proposed',
    icon: '📊'
  },
  {
    id: 'mobile-app',
    title: 'Mobile Companion App',
    description: 'On-the-go access to key features and notifications',
    alignmentScores: { growth: 75, experience: 94, innovation: 58 },
    impact: 'High',
    status: 'In research',
    icon: '📱'
  }
];

// Function to get color classes based on the color name
const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        ring: 'ring-blue-500'
      };
    case 'purple':
      return {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        ring: 'ring-purple-500'
      };
    case 'emerald':
      return {
        bg: 'bg-emerald-500',
        bgLight: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-200 dark:border-emerald-800',
        ring: 'ring-emerald-500'
      };
    default:
      return {
        bg: 'bg-gray-500',
        bgLight: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-600 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800',
        ring: 'ring-gray-500'
      };
  }
};

export default function StrategicAlignment() {
  const [selectedOKR, setSelectedOKR] = useState(companyOKRs[0]);
  const [selectedIdea, setSelectedIdea] = useState(productIdeas[0]);
  const [activeTool, setActiveTool] = useState('explore');
  
  const colorClasses = getColorClasses(selectedOKR.color);
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
            Business Impact
          </span>
          <h2 className="text-3xl font-bold mb-4">Ensuring Your Product Makes a Difference</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect your innovation directly to company goals. Align your product with strategic objectives to maximize impact and secure stakeholder support.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Left panel - Company OKRs */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Company OKRs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  ProFlow automatically connects your product ideas to company objectives and key results
                </p>
                
                <div className="space-y-4">
                  {companyOKRs.map((okr, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOKR(okr)}
                      className={`w-full p-3 sm:p-4 rounded-xl text-left transition-all ${
                        selectedOKR.id === okr.id
                          ? 'bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700'
                          : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-100 dark:border-gray-700'
                      }`}
                    >
                      <div className={`text-sm sm:text-base font-medium mb-1 ${
                        selectedOKR.id === okr.id ? 'text-amber-600 dark:text-amber-400' : ''
                      }`}>
                        {okr.title}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {okr.description.substring(0, 60)}...
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Center connector */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
              <div className="h-full flex flex-col items-center justify-center py-8">
                <div className="h-20 w-px bg-dashed bg-gray-300 dark:bg-gray-600"></div>
                
                <div className="my-4 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                
                <div className="h-20 w-px bg-dashed bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
            
            {/* Horizontal connector for mobile */}
            <div className="lg:hidden flex justify-center my-6">
              <div className="flex items-center">
                <div className="h-px w-16 bg-dashed bg-gray-300 dark:bg-gray-600"></div>
                <div className="mx-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="h-px w-16 bg-dashed bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
            
            {/* Right panel - Product ideas */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Aligned Product Ideas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Ideas are automatically scored based on their alignment with company objectives
                </p>
                
                <div className="space-y-4">
                  {selectedOKR.metrics.map((metric) => (
                    <div 
                      key={metric.title}
                      className="p-3 sm:p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                    >
                      <div className="flex items-start">
                        <div className="mr-3 text-xl sm:text-2xl">📊</div>
                        <div>
                          <div className="font-medium text-sm sm:text-base mb-1">{metric.title}</div>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                            Progress toward target metric
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 text-xs rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {metric.value} / {metric.target}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                              {metric.progress}% complete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm">
                    Evaluate Your Idea
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 