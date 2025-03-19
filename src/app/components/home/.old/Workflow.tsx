'use client';

import { useState } from 'react';

const steps = [
  {
    title: "Ideation Flow",
    description: "Start with a concept and engage in guided conversations with AI mentors to refine your idea.",
    details: [
      "Log in to Dashboard",
      "Select AI mentor persona",
      "Enter initial concept",
      "Engage in guided conversation",
      "Review real-time assessment",
      "Generate PRD",
      "Share or export"
    ]
  },
  {
    title: "Assessment Review Flow",
    description: "Review comprehensive assessments of your product ideas and improve low-scoring dimensions.",
    details: [
      "View radar chart assessment",
      "Identify low-scoring dimensions",
      "Get AI suggestions for improvement",
      "Update dimensions",
      "Earn achievements",
      "See improved clarity score"
    ]
  },
  {
    title: "Ideas Management Flow",
    description: "Organize, prioritize and manage all your product ideas from inception to development.",
    details: [
      "Navigate to Ideas Hopper",
      "View prioritized ideas",
      "Filter and sort ideas",
      "Add comments and feedback",
      "Update status",
      "Assign resources",
      "Move to development"
    ]
  }
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
          User Flows
        </span>
        <h2 className="text-3xl font-bold mb-4">Streamlined Product Development</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our intuitive workflows make product development organized, efficient, and collaborative
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="space-y-4 sticky top-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  activeStep === index 
                    ? 'bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStep === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">{steps[activeStep].title}</h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-700"></div>
              <div className="space-y-8">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-6 relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      index === 0 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-500' 
                        : index < 3 
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-500' 
                          : 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`p-5 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex-1 transform transition-all duration-300 ${
                      true ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <p className="font-medium">{detail}</p>
                      
                      {index === 0 && activeStep === 0 && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                          The dashboard provides a clear overview of all your projects and their clarity scores
                        </div>
                      )}
                      
                      {index === 1 && activeStep === 0 && (
                        <div className="mt-3 grid grid-cols-6 gap-2">
                          {['Strategic', 'Creative', 'Technical', 'Analytical', 'User-focused', 'Critical'].map((persona, i) => (
                            <div key={i} className={`p-2 text-xs rounded text-center ${
                              i === 2 ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 ring-2 ring-purple-500' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}>
                              {persona}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {index === 3 && activeStep === 1 && (
                        <div className="mt-3 flex justify-center">
                          <div className="w-32 h-32 relative">
                            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                              <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" 
                                className="text-gray-200 dark:text-gray-700" strokeWidth="10" />
                              
                              {[
                                { percent: 80, color: 'text-blue-500' },
                                { percent: 60, color: 'text-purple-500' },
                                { percent: 90, color: 'text-green-500' },
                                { percent: 70, color: 'text-amber-500' },
                                { percent: 40, color: 'text-rose-500' }
                              ].map((segment, i) => {
                                const circumference = 2 * Math.PI * 45;
                                const offset = circumference - (segment.percent / 100) * circumference;
                                const rotation = i * 72; // 360 / 5 = 72 degrees per segment
                                
                                return (
                                  <circle key={i} cx="50" cy="50" r="45" fill="transparent" 
                                    stroke="currentColor" 
                                    className={segment.color}
                                    strokeWidth="10" 
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
                                  />
                                );
                              })}
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xl font-bold">72%</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 