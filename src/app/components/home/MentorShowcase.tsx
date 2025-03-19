'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    id: 'strategic',
    name: 'Strategic',
    avatar: '👨‍💼',
    description: 'Focuses on market fit, business value, and competitive analysis',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    darkBg: 'bg-blue-900/30',
    style: 'You should consider the overall market landscape and your product\'s unique position in it.'
  },
  {
    id: 'creative',
    name: 'Creative',
    avatar: '👩‍🎨',
    description: 'Emphasizes innovative solutions and unique design approaches',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    darkBg: 'bg-purple-900/30',
    style: 'What if we approached this from a completely different angle? Have you considered...?'
  },
  {
    id: 'technical',
    name: 'Technical',
    avatar: '👨‍💻',
    description: 'Focuses on implementation feasibility and technical architecture',
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'bg-emerald-900/30',
    style: 'Let\'s consider the technical constraints and how this would be implemented efficiently.'
  },
  {
    id: 'analytical',
    name: 'Analytical',
    avatar: '👩‍🔬',
    description: 'Data-driven approach with deep analysis of requirements',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    darkBg: 'bg-amber-900/30',
    style: 'Based on the data and analysis, these are the key considerations we should focus on.'
  },
  {
    id: 'user-focused',
    name: 'User-Focused',
    avatar: '👨‍👩‍👧‍👦',
    description: 'Prioritizes user experience and accessibility considerations',
    color: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    darkBg: 'bg-rose-900/30',
    style: 'How would this feature impact different user personas? Let\'s think about the user journey.'
  },
  {
    id: 'critical',
    name: 'Critical',
    avatar: '🧐',
    description: 'Challenges assumptions and identifies potential weaknesses',
    color: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'bg-indigo-900/30',
    style: 'Let\'s carefully examine the potential issues with this approach before proceeding.'
  }
];

export default function MentorShowcase() {
  const [activeMentor, setActiveMentor] = useState(mentors[0]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setTypingText('');
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setTypingText(prev => prev + text.charAt(i));
        i++;
        setTimeout(typeWriter, 30);
      } else {
        setIsTyping(false);
      }
    };
    
    typeWriter();
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
            AI Mentors
          </span>
          <h2 className="text-3xl font-bold mb-4">Select Your Ideal Mentor</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from six distinct mentor personalities, each bringing a unique perspective to your product development process
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="lg:w-1/3 flex items-center">
            <div className="w-full space-y-4">
              {mentors.map((mentor) => (
                <div 
                  key={mentor.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    activeMentor.id === mentor.id 
                      ? `${mentor.lightBg} dark:${mentor.darkBg} shadow-md border border-gray-100 dark:border-gray-700 ring-2 ring-${mentor.color.split('-')[1]}-500` 
                      : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setActiveMentor(mentor);
                    simulateTyping(mentor.style);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      activeMentor.id === mentor.id 
                        ? mentor.color + ' text-white' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {mentor.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{mentor.name} Mentor</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{mentor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="mb-6 flex items-center">
                <div className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center text-2xl ${activeMentor.color} text-white`}>
                  {activeMentor.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{activeMentor.name} Mentor</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activeMentor.description}</p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col gap-4">
                  {/* Split screen chat UI */}
                  <div className="flex h-72 gap-4">
                    {/* Chat area */}
                    <div className="w-2/3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 px-2">Chat</div>
                      
                      <div className="flex-grow overflow-y-auto space-y-3 p-2">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center text-sm">
                            👤
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                            <p className="text-sm">I&apos;m thinking of creating a voice-controlled smart home assistant that integrates with existing platforms.</p>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-row-reverse">
                          <div className={`w-8 h-8 rounded-full ${activeMentor.color} flex-shrink-0 flex items-center justify-center text-sm text-white`}>
                            {activeMentor.avatar}
                          </div>
                          <div className={`${activeMentor.lightBg} dark:${activeMentor.darkBg} p-3 rounded-2xl rounded-tr-none max-w-[80%]`}>
                            <p className="text-sm relative">
                              {typingText}
                              {isTyping && (
                                <span className="inline-flex ml-1">
                                  <motion.span 
                                    className="w-1.5 h-1.5 bg-current rounded-full mx-0.5"
                                    animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                  />
                                  <motion.span 
                                    className="w-1.5 h-1.5 bg-current rounded-full mx-0.5"
                                    animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                  />
                                  <motion.span 
                                    className="w-1.5 h-1.5 bg-current rounded-full mx-0.5"
                                    animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                  />
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 relative">
                        <input 
                          type="text" 
                          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full py-2 pl-4 pr-10"
                          placeholder="Type your message..."
                        />
                        <button className={`absolute right-2 top-2 w-6 h-6 ${activeMentor.color} rounded-full flex items-center justify-center text-white`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Assessment area */}
                    <div className="w-1/3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 flex flex-col">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Real-time Assessment</div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Market fit</span>
                            <span className="font-medium">65%</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{width: '65%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Technical feasibility</span>
                            <span className="font-medium">82%</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500" style={{width: '82%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>User experience</span>
                            <span className="font-medium">43%</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500" style={{width: '43%'}}></div>
                          </div>
                        </div>

                        <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Clarity Score</span>
                            <div className="w-12 h-12 rounded-full border-4 border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center">
                              <span className="text-lg font-bold text-indigo-500">68</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 