'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    id: 'steve-jobs',
    name: 'Steve Jobs',
    avatar: '🧠',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    darkBg: 'bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    quote: "The Steve Jobs mentor pushed me to simplify our product until only the essential remained. What started as a complex system became an intuitive experience that users instantly connect with emotionally.",
    improvement: "93%",
    metric: "user satisfaction",
    user: {
      name: "Maya Rodriguez",
      role: "Design Director",
      company: "UserFirst Innovation"
    }
  },
  {
    id: 'elon-musk',
    name: 'Elon Musk',
    avatar: '🚀',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    darkBg: 'bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    quote: "The Elon Musk mentor completely transformed our approach by questioning fundamental assumptions. By applying first principles thinking, we found a 10x improvement opportunity that competitors had overlooked for years.",
    improvement: "157%",
    metric: "technological advancement",
    user: {
      name: "David Chen",
      role: "CTO",
      company: "FutureTech Systems"
    }
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    avatar: '📦',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    darkBg: 'bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400',
    quote: "Working with the Jeff Bezos mentor taught me to work backwards from the customer experience. We completely reoriented our roadmap around customer pain points and saw immediate improvements in retention and satisfaction.",
    improvement: "89%",
    metric: "customer retention",
    user: {
      name: "Sarah Johnson",
      role: "VP of Product",
      company: "CustomerFirst Services"
    }
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    avatar: '🏛️',
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'bg-emerald-900/30',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    quote: "The Aristotle mentor helped us create a comprehensive categorization system that transformed our chaotic ideation process into a structured methodology with clear definitions and logical progression.",
    improvement: "74%",
    metric: "conceptual clarity",
    user: {
      name: "Michael Stevens",
      role: "Research Director",
      company: "Systematic Solutions"
    }
  },
  {
    id: 'sun-tzu',
    name: 'Sun Tzu',
    avatar: '⚔️',
    color: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    darkBg: 'bg-rose-900/30',
    textColor: 'text-rose-600 dark:text-rose-400',
    quote: "The Sun Tzu mentor revealed strategic positioning opportunities we'd never considered. By analyzing competitive weaknesses and focusing our resources precisely, we entered a crowded market and quickly established a defensible position.",
    improvement: "112%",
    metric: "market penetration",
    user: {
      name: "Jennifer Wu",
      role: "Strategy Director",
      company: "CompetitiveEdge"
    }
  },
  {
    id: 'cpo',
    name: 'Strategic CPO',
    avatar: '📊',
    color: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'bg-indigo-900/30',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    quote: "The Strategic CPO mentor transformed how we measured success. By implementing clear KPIs aligned with business objectives, we increased ROI and secured executive buy-in for our most ambitious initiatives.",
    improvement: "96%",
    metric: "business impact",
    user: {
      name: "Thomas Anderson",
      role: "Head of Product",
      company: "MetricsMatters"
    }
  }
];

export default function MentorTestimonials() {
  const [activeMentor, setActiveMentor] = useState(mentors[0]);

  const handleMentorChange = (mentor: typeof mentors[0]) => {
    if (mentor.id === activeMentor.id) return;
    setActiveMentor(mentor);
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-500 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Learn From Those Who've Walked The Path</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how others transformed their vision into reality with ProFlow's AI mentor guidance. Their journeys provide insights for your own innovation adventure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mentor selection tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
            {mentors.map((mentor) => (
              <button
                key={mentor.id}
                onClick={() => handleMentorChange(mentor)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all text-sm ${
                  mentor.id === activeMentor.id 
                    ? `${mentor.color} text-white shadow-md` 
                    : `${mentor.lightBg} ${mentor.textColor} hover:shadow-sm`
                }`}
              >
                <span>{mentor.avatar}</span>
                <span className="font-medium">{mentor.name}</span>
              </button>
            ))}
          </div>

          {/* Testimonial display */}
          <motion.div 
            key={activeMentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${activeMentor.lightBg} dark:${activeMentor.darkBg} rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Testimonial content - 3 columns */}
              <div className="lg:col-span-3">
                <div className="flex items-start mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${activeMentor.color} flex items-center justify-center text-xl sm:text-2xl text-white flex-shrink-0`}>
                    {activeMentor.avatar}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg sm:text-xl font-bold">{activeMentor.name} Mentor</h3>
                    <p className={`text-xs sm:text-sm ${activeMentor.textColor}`}>Specialized guidance for your product development</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <svg className={`h-8 sm:h-10 w-8 sm:w-10 ${activeMentor.textColor} mb-2 opacity-50`} fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg mb-4">
                    {activeMentor.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="text-sm sm:text-base font-medium">{activeMentor.user.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{activeMentor.user.role}, {activeMentor.user.company}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-xs sm:text-sm font-medium mb-2">Try a conversation starter:</div>
                  <div className={`p-3 rounded-lg ${activeMentor.lightBg} dark:${activeMentor.darkBg} ${activeMentor.textColor} text-xs sm:text-sm mb-2`}>
                    {activeMentor.id === 'steve-jobs' && "How can we make this product experience so simple and delightful that users can't imagine life without it?"}
                    {activeMentor.id === 'elon-musk' && "What fundamental assumption in this industry can we challenge to create a 10x improvement?"}
                    {activeMentor.id === 'jeff-bezos' && "If we worked backwards from the perfect customer experience, what would this product look like?"}
                    {activeMentor.id === 'aristotle' && "How should we categorize and define the key components of this problem to ensure logical consistency?"}
                    {activeMentor.id === 'sun-tzu' && "Where are our competitors vulnerable, and how can we position ourselves to exploit that weakness?"}
                    {activeMentor.id === 'cpo' && "What key metrics would indicate success for this initiative, and how does it align with our strategic objectives?"}
                  </div>
                  
                  <div className="flex justify-end">
                    <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg ${activeMentor.color} text-white text-xs sm:text-sm`}>
                      Start Conversation
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Stats and sample - 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <h4 className="text-sm sm:text-base font-medium mb-4">Performance Metrics</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>{activeMentor.metric}</span>
                        <span className={`font-medium ${activeMentor.textColor}`}>+{activeMentor.improvement}</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={activeMentor.color} 
                          style={{ width: `${parseInt(activeMentor.improvement)}%`, height: '100%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>clarity improvement</span>
                        <span className={`font-medium ${activeMentor.textColor}`}>+68%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={activeMentor.color} style={{ width: '68%', height: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>development speed</span>
                        <span className={`font-medium ${activeMentor.textColor}`}>+45%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={activeMentor.color} style={{ width: '45%', height: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className={`${activeMentor.color} text-white p-3 sm:p-4`}>
                    <h4 className="text-sm sm:text-base font-medium">Mentor Style Preview</h4>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full ${activeMentor.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {activeMentor.avatar}
                      </div>
                      <div className={`${activeMentor.lightBg} dark:${activeMentor.darkBg} p-3 rounded-xl rounded-tl-none max-w-full text-xs sm:text-sm`}>
                        {activeMentor.id === 'steve-jobs' && 
                          "This needs to be dramatically simpler. If users need a manual, we've failed. Focus on the experience, not the features."}
                        {activeMentor.id === 'elon-musk' && 
                          "Let's break this down to first principles. What physical constraints are we dealing with and how can we engineer around them?"}
                        {activeMentor.id === 'jeff-bezos' && 
                          "Start with what the customer needs and work backwards. What would delight them in ways they don't even expect yet?"}
                        {activeMentor.id === 'aristotle' && 
                          "We must first establish clear definitions and categories. What is the essence of this problem, and what are its constituent parts?"}
                        {activeMentor.id === 'sun-tzu' && 
                          "Know your market as you know yourself. Where are your competitors vulnerable and how can you position for maximum advantage?"}
                        {activeMentor.id === 'cpo' && 
                          "What metrics will determine success? How does this align with our OKRs and how will we measure progress?"}
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-xs sm:text-sm hover:${activeMentor.lightBg}`}>
                        See Full Conversation Example
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 