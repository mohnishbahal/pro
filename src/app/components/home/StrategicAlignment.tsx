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
  
  const colorClasses = getColorClasses(selectedOKR.color);
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-50"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 rounded-full bg-purple-50 dark:bg-purple-900/20 blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-3">
            Strategic Context
          </span>
          <h2 className="text-3xl font-bold mb-4">Align Ideas with Business Strategy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ProFlow automatically analyzes and scores product ideas against your company&apos;s OKRs and strategic initiatives.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel - Company OKRs */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-100 dark:border-gray-700 p-4">
                <h3 className="text-lg font-bold">Company Objectives</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Select an objective to see alignment</p>
              </div>
              
              <div className="px-4 py-3">
                {companyOKRs.map((okr) => {
                  const okrColorClasses = getColorClasses(okr.color);
                  return (
                    <button
                      key={okr.id}
                      onClick={() => setSelectedOKR(okr)}
                      className={`w-full mb-2 p-3 rounded-lg flex items-center text-left transition-all ${
                        selectedOKR.id === okr.id 
                          ? `${okrColorClasses.bgLight} ${okrColorClasses.text} border ${okrColorClasses.border} shadow-sm` 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full ${okrColorClasses.bg} text-white flex items-center justify-center flex-shrink-0`}>
                        {okr.icon}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">{okr.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{okr.description}</p>
                      </div>
                      <div className="ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${
                          selectedOKR.id === okr.id ? okrColorClasses.text : 'text-gray-400'
                        }`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Key metrics for selected OKR */}
              <div className={`${colorClasses.bgLight} p-4 border-t ${colorClasses.border}`}>
                <h4 className={`text-sm font-medium mb-3 ${colorClasses.text}`}>Key Metrics for {selectedOKR.title}</h4>
                <div className="space-y-4">
                  {selectedOKR.metrics.map((metric) => (
                    <div key={metric.title}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{metric.title}</span>
                        <span className="font-medium">{metric.value} / {metric.target}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${colorClasses.bg}`} style={{ width: `${metric.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Center panel - Connection visualization */}
          <div className="lg:col-span-2 flex items-center justify-center">
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
          
          {/* Right panel - Product ideas */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-100 dark:border-gray-700 p-4">
                <h3 className="text-lg font-bold">Product Ideas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">See how ideas align with objectives</p>
              </div>
              
              <div className="px-4 py-3">
                {productIdeas.map((idea) => (
                  <button
                    key={idea.id}
                    onClick={() => setSelectedIdea(idea)}
                    className={`w-full mb-2 p-3 rounded-lg flex items-start text-left transition-all ${
                      selectedIdea.id === idea.id 
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 shadow-sm' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center justify-center text-xl flex-shrink-0">
                      {idea.icon}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">{idea.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{idea.description}</p>
                      
                      {/* Alignment score bars */}
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {Object.entries(idea.alignmentScores).map(([key, score]) => {
                          const matchingOKR = companyOKRs.find(okr => okr.id === key);
                          if (!matchingOKR) return null;
                          
                          const scoreColorClasses = getColorClasses(matchingOKR.color);
                          
                          return (
                            <div key={key} className="flex flex-col">
                              <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className={scoreColorClasses.bg}
                                  style={{ width: `${score}%`, height: '100%' }}
                                ></div>
                              </div>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                                  {matchingOKR.title.split(' ')[0]}
                                </span>
                                <span className={`text-[10px] font-medium ${scoreColorClasses.text}`}>
                                  {score}%
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Alignment details for selected idea */}
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 border-t border-indigo-200 dark:border-indigo-800">
                <h4 className="text-sm font-medium mb-3 text-indigo-600 dark:text-indigo-400">
                  Strategic Alignment Details
                </h4>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-indigo-100 dark:border-indigo-900/50">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">{selectedIdea.title}</div>
                    <div className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                      {selectedIdea.status}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Overall Alignment Score</div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full border-4 border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center mr-3">
                        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {Math.round(
                            Object.values(selectedIdea.alignmentScores).reduce((acc, val) => acc + val, 0) / 
                            Object.values(selectedIdea.alignmentScores).length
                          )}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {selectedIdea.alignmentScores[selectedOKR.id as keyof AlignmentScores]}% alignment with {selectedOKR.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {selectedIdea.alignmentScores[selectedOKR.id as keyof AlignmentScores] > 80 
                            ? 'Strong alignment with this objective'
                            : selectedIdea.alignmentScores[selectedOKR.id as keyof AlignmentScores] > 60
                              ? 'Moderate alignment with this objective'
                              : 'Weak alignment with this objective'
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    This idea has <span className="font-medium text-indigo-600 dark:text-indigo-400">{selectedIdea.impact} impact</span> potential and will contribute significantly to meeting company objectives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Context hub preview */}
        <div className="mt-12 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-medium">Context Hub</h3>
            <div className="ml-auto flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Active</span>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              ProFlow&apos;s Context Hub continuously analyzes your organization&apos;s strategy documents, meeting notes, and business metrics to ensure all product development aligns with company goals.
            </p>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">84</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Documents Analyzed</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">12</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Strategic OKRs Tracked</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">95%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Context Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 