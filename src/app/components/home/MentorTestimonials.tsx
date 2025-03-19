'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    id: 'strategic',
    name: 'Strategic',
    avatar: '👨‍💼',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    darkBg: 'bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    quote: "The Strategic mentor helped me connect my app idea directly to our company OKRs. What started as a side project gained executive sponsorship because of how well it aligned with business goals.",
    improvement: "87%",
    metric: "strategic alignment",
    user: {
      name: "Alex Chen",
      role: "Product Manager",
      company: "FinTech Innovations"
    }
  },
  {
    id: 'creative',
    name: 'Creative',
    avatar: '👩‍🎨',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    darkBg: 'bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    quote: "I was stuck in conventional thinking until the Creative mentor pushed me to approach the problem differently. By questioning every assumption, we developed a solution that stands out in a crowded market.",
    improvement: "143%",
    metric: "innovation score",
    user: {
      name: "Sophia Martinez",
      role: "UX Designer",
      company: "Designify"
    }
  },
  {
    id: 'technical',
    name: 'Technical',
    avatar: '👨‍💻',
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'bg-emerald-900/30',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    quote: "The Technical mentor helped me understand implementation feasibility early in the ideation process. We identified potential architecture challenges and solved them before writing a single line of code.",
    improvement: "62%",
    metric: "development speed",
    user: {
      name: "Raj Patel",
      role: "Engineering Lead",
      company: "TechSolutions"
    }
  },
  {
    id: 'analytical',
    name: 'Analytical',
    avatar: '👩‍🔬',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    darkBg: 'bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400',
    quote: "Working with the Analytical mentor transformed our decision-making process. Every feature is now backed by data, and we've built a comprehensive framework to measure success from day one.",
    improvement: "94%",
    metric: "data-backed decisions",
    user: {
      name: "Emma Wilson",
      role: "Data Scientist",
      company: "AnalyticsPro"
    }
  },
  {
    id: 'user-focused',
    name: 'User-Focused',
    avatar: '👨‍👩‍👧‍👦',
    color: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    darkBg: 'bg-rose-900/30',
    textColor: 'text-rose-600 dark:text-rose-400',
    quote: "The User-Focused mentor completely changed how I think about product development. We created detailed personas and journey maps that uncovered pain points we would have missed otherwise.",
    improvement: "78%",
    metric: "user satisfaction",
    user: {
      name: "Jordan Taylor",
      role: "Product Owner",
      company: "UserFirst"
    }
  },
  {
    id: 'critical',
    name: 'Critical',
    avatar: '🧐',
    color: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'bg-indigo-900/30',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    quote: "At first I was uncomfortable with how the Critical mentor challenged every aspect of my idea, but this rigorous examination helped us identify potential issues early and build a much more resilient solution.",
    improvement: "90%",
    metric: "risk mitigation",
    user: {
      name: "Michael Johnson",
      role: "Startup Founder",
      company: "RiskSmart"
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
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-500 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-3">
            Mentor Experience
          </span>
          <h2 className="text-3xl font-bold mb-4">Choose Your Ideal AI Mentor</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how different mentor personalities can guide your product development process with unique perspectives and expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mentor selection tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {mentors.map((mentor) => (
              <button
                key={mentor.id}
                onClick={() => handleMentorChange(mentor)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
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
            className={`${activeMentor.lightBg} dark:${activeMentor.darkBg} rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Testimonial content - 3 columns */}
              <div className="lg:col-span-3">
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-full ${activeMentor.color} flex items-center justify-center text-2xl text-white flex-shrink-0`}>
                    {activeMentor.avatar}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{activeMentor.name} Mentor</h3>
                    <p className={`text-sm ${activeMentor.textColor}`}>Specialized guidance for your product development</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <svg className={`h-10 w-10 ${activeMentor.textColor} mb-2 opacity-50`} fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                    {activeMentor.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="font-medium">{activeMentor.user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{activeMentor.user.role}, {activeMentor.user.company}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-sm font-medium mb-2">Try a conversation starter:</div>
                  <div className={`p-3 rounded-lg ${activeMentor.lightBg} dark:${activeMentor.darkBg} ${activeMentor.textColor} text-sm mb-2`}>
                    {activeMentor.id === 'strategic' && "How does this idea align with our company's long-term strategy?"}
                    {activeMentor.id === 'creative' && "What if we approached this problem from an entirely different angle?"}
                    {activeMentor.id === 'technical' && "What are the main technical challenges we'll face implementing this?"}
                    {activeMentor.id === 'analytical' && "What data do we need to collect to validate this concept?"}
                    {activeMentor.id === 'user-focused' && "How will this improve the experience for our primary user personas?"}
                    {activeMentor.id === 'critical' && "What are the three biggest risks that could cause this idea to fail?"}
                  </div>
                  
                  <div className="flex justify-end">
                    <button className={`px-4 py-2 rounded-lg ${activeMentor.color} text-white text-sm`}>
                      Start Conversation
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Stats and sample - 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <h4 className="font-medium mb-4">Performance Metrics</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
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
                      <div className="flex justify-between text-sm mb-1">
                        <span>clarity improvement</span>
                        <span className={`font-medium ${activeMentor.textColor}`}>+68%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={activeMentor.color} style={{ width: '68%', height: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
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
                  <div className={`${activeMentor.color} text-white p-4`}>
                    <h4 className="font-medium">Mentor Style Preview</h4>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full ${activeMentor.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {activeMentor.avatar}
                      </div>
                      <div className={`${activeMentor.lightBg} dark:${activeMentor.darkBg} p-3 rounded-xl rounded-tl-none max-w-full text-sm`}>
                        {activeMentor.id === 'strategic' && 
                          "Let's consider how this aligns with market trends and your company objectives."}
                        {activeMentor.id === 'creative' && 
                          "What if we completely reimagined this approach? Let's explore some unconventional solutions."}
                        {activeMentor.id === 'technical' && 
                          "We should carefully consider the technical architecture to ensure scalability from day one."}
                        {activeMentor.id === 'analytical' && 
                          "Based on the data, there are three key patterns we should consider in our approach."}
                        {activeMentor.id === 'user-focused' && 
                          "How would this feature impact your different user personas? Let's map out their journeys."}
                        {activeMentor.id === 'critical' && 
                          "Let's challenge our assumptions here. What could go wrong with this approach?"}
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className={`px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm hover:${activeMentor.lightBg}`}>
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