'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const companyOKRs = [
  {
    id: 'growth',
    title: 'Revenue Growth',
    description: 'Increase ARR by 65% within fiscal year',
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    ),
    metrics: [
      { title: 'Enterprise deal size', target: '$180K', value: '$145K', progress: 80 },
      { title: 'Customer acquisition rate', target: '45/month', value: '38/month', progress: 84 },
      { title: 'Expansion revenue', target: '40% of ARR', value: '32% of ARR', progress: 80 }
    ]
  },
  {
    id: 'experience',
    title: 'Product-Market Fit',
    description: 'Achieve 65+ NPS and reduce churn to <5%',
    color: 'purple',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    metrics: [
      { title: 'Net Promoter Score', target: '65+', value: '58', progress: 89 },
      { title: 'Customer retention', target: '95%', value: '91%', progress: 96 },
      { title: 'User activation (14-day)', target: '75%', value: '68%', progress: 91 }
    ]
  },
  {
    id: 'innovation',
    title: 'Product Innovation',
    description: 'Launch 5 game-changing AI features',
    color: 'emerald',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    ),
    metrics: [
      { title: 'Time-to-value', target: '≤ 7 days', value: '9 days', progress: 78 },
      { title: 'AI feature adoption', target: '85%', value: '72%', progress: 85 },
      { title: 'Innovation velocity', target: '4 wk cycle', value: '5.2 wk cycle', progress: 77 }
    ]
  }
];

// Function to get color classes based on the color name
const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50 dark:bg-blue-900/20',
        bgMedium: 'bg-blue-100 dark:bg-blue-800/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800/50',
        ring: 'ring-blue-500/50',
        gradient: 'from-blue-500 to-indigo-600'
      };
    case 'purple':
      return {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-50 dark:bg-purple-900/20',
        bgMedium: 'bg-purple-100 dark:bg-purple-800/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800/50',
        ring: 'ring-purple-500/50',
        gradient: 'from-purple-500 to-fuchsia-600'
      };
    case 'emerald':
      return {
        bg: 'bg-emerald-500',
        bgLight: 'bg-emerald-50 dark:bg-emerald-900/20',
        bgMedium: 'bg-emerald-100 dark:bg-emerald-800/30',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-200 dark:border-emerald-800/50',
        ring: 'ring-emerald-500/50',
        gradient: 'from-emerald-500 to-teal-600'
      };
    default:
      return {
        bg: 'bg-gray-500',
        bgLight: 'bg-gray-50 dark:bg-gray-900/20',
        bgMedium: 'bg-gray-100 dark:bg-gray-800/30',
        text: 'text-gray-600 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-800/50',
        ring: 'ring-gray-500/50',
        gradient: 'from-gray-500 to-slate-600'
      };
  }
};

export default function StrategicAlignment() {
  const [selectedOKR, setSelectedOKR] = useState(companyOKRs[0]);
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);
  
  const colorClasses = getColorClasses(selectedOKR.color);
  
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-50 dark:bg-purple-900/10 blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
            Strategic Alignment
          </span>
          <h2 className="text-3xl font-bold mb-4">Connect Products to Business Outcomes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ProFlow automatically maps your product ideas to company goals, ensuring every feature drives measurable value. Focus on what matters most to achieve breakthrough results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* OKR Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {companyOKRs.map((okr) => {
              const okrColors = getColorClasses(okr.color);
              return (
                <button
                  key={okr.id}
                  onClick={() => setSelectedOKR(okr)}
                  className={`relative px-4 py-2 rounded-full transition-all ${
                    selectedOKR.id === okr.id 
                      ? `${okrColors.bg} text-white shadow-md` 
                      : `${okrColors.bgLight} ${okrColors.text} hover:shadow-sm`
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5">{okr.icon}</span>
                    <span className="font-medium">{okr.title}</span>
                  </div>
                  
                  {selectedOKR.id === okr.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 rounded-full"
                      layoutId="activeOKRIndicator"
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Main Content */}
          <motion.div 
            key={selectedOKR.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Company OKRs Panel */}
            <div className={`relative p-1 rounded-2xl bg-gradient-to-br ${colorClasses.gradient}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses.bgLight} ${colorClasses.text} mb-4`}>
                  {selectedOKR.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedOKR.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedOKR.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Company OKRs</span>
                    <span className={`${colorClasses.text} font-medium`}>Key Results</span>
                  </div>
                  <div className={`h-1 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4`}>
                    <div className={`h-full ${colorClasses.bg}`} style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {selectedOKR.metrics.map((metric, index) => (
                    <button 
                      key={metric.title}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        activeMetricIndex === index 
                          ? `${colorClasses.bgMedium} border ${colorClasses.border}` 
                          : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                      }`}
                      onClick={() => setActiveMetricIndex(index)}
                    >
                      <div className="flex justify-between mb-2">
                        <span className={`font-medium ${activeMetricIndex === index ? colorClasses.text : ''}`}>
                          {metric.title}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {metric.value} / {metric.target}
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                        <div 
                          className={`h-full ${colorClasses.bg}`} 
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Product Ideas Panel */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-4">AI-Powered Alignment Engine</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Every idea is automatically scored and prioritized based on its contribution to key business metrics
                </p>
                
                {/* Visualization */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${colorClasses.bg}`}></div>
                      <span className="text-sm font-medium">{selectedOKR.metrics[activeMetricIndex].title}</span>
                    </div>
                    <span className={`text-sm ${colorClasses.text} font-semibold`}>
                      {selectedOKR.metrics[activeMetricIndex].progress}% Aligned
                    </span>
                  </div>
                  
                  <div className="relative h-24 mb-2">
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 100 30" className="w-full h-full">
                        <defs>
                          <linearGradient id={`gradient-${selectedOKR.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className={`stop-color-${colorClasses.bg}`} stopColor="#4F46E5" />
                            <stop offset="100%" className={`stop-color-${colorClasses.bg}`} stopColor="#0EA5E9" />
                          </linearGradient>
                        </defs>
                        
                        {/* Chart line */}
                        <path 
                          d="M0,30 C20,10 40,20 60,5 C80,15 100,0 100,0 L100,30 L0,30 Z" 
                          fill={`url(#gradient-${selectedOKR.id})`} 
                          fillOpacity="0.2"
                        />
                        <path 
                          d="M0,30 C20,10 40,20 60,5 C80,15 100,0 100,0" 
                          fill="none"
                          stroke={`url(#gradient-${selectedOKR.id})`} 
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Metric Card */}
                <div className={`p-4 rounded-xl ${colorClasses.bgLight} border ${colorClasses.border}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${colorClasses.bg} text-white flex items-center justify-center text-xl`}>
                      📊
                    </div>
                    <div>
                      <h4 className="font-bold">{selectedOKR.metrics[activeMetricIndex].title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Progress toward target metric
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Current: {selectedOKR.metrics[activeMetricIndex].value}</span>
                      <span>Target: {selectedOKR.metrics[activeMetricIndex].target}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <div 
                        className={`h-full ${colorClasses.bg}`}
                        style={{ width: `${selectedOKR.metrics[activeMetricIndex].progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded-md ${colorClasses.bgLight} ${colorClasses.text} flex items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {selectedOKR.metrics[activeMetricIndex].progress}% complete
                    </span>
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      Updated today
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Strategic Action */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h4 className="font-bold mb-2">AI-Generated Strategic Actions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  ProFlow's AI recommends high-impact initiatives based on current metrics:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">
                      Prioritize features that directly impact {selectedOKR.metrics[activeMetricIndex].title.toLowerCase()} to reach {selectedOKR.metrics[activeMetricIndex].target} (currently at {selectedOKR.metrics[activeMetricIndex].value})
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">
                      Run weekly alignment sprints to accelerate progress on "{selectedOKR.title}" with cross-functional teams
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">
                      Consider reprioritizing roadmap to focus on the 3 features AI predicts will have highest impact on {selectedOKR.metrics[activeMetricIndex].title.toLowerCase()}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 