'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types for our ideas
type IdeaStage = 'draft' | 'refining' | 'validated' | 'ready';
type IdeaPriority = 'low' | 'medium' | 'high' | 'critical';
type IdeaAlignment = 'low' | 'medium' | 'high';
type IdeaMaturity = 'early' | 'developing' | 'mature';

// Define the Idea type
type Idea = {
  id: string;
  title: string;
  description: string;
  stage: IdeaStage;
  priority: IdeaPriority;
  alignment: IdeaAlignment;
  maturity: IdeaMaturity;
  clarityScore: number;
  createdDate: string;
  tags: string[];
};

// Sample ideas data
const sampleIdeas: Idea[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Support Chatbot',
    description: 'Intelligent chatbot that uses machine learning to handle customer inquiries, reducing support ticket volume by 40%.',
    stage: 'ready',
    priority: 'high',
    alignment: 'high',
    maturity: 'mature',
    clarityScore: 87,
    createdDate: '2023-11-15',
    tags: ['AI', 'Customer Support', 'Automation']
  },
  {
    id: '2',
    title: 'Cross-Platform Mobile Collaboration Tool',
    description: 'Seamless collaboration app for distributed teams with real-time document editing and video conferencing.',
    stage: 'validated',
    priority: 'critical',
    alignment: 'high',
    maturity: 'developing',
    clarityScore: 72,
    createdDate: '2023-12-05',
    tags: ['Collaboration', 'Mobile', 'Teams']
  },
  {
    id: '3',
    title: 'Sustainable E-Commerce Packaging Solution',
    description: 'Biodegradable packaging system that reduces environmental impact while maintaining product protection.',
    stage: 'refining',
    priority: 'medium',
    alignment: 'medium',
    maturity: 'early',
    clarityScore: 54,
    createdDate: '2024-01-10',
    tags: ['Sustainability', 'E-Commerce', 'Packaging']
  },
  {
    id: '4',
    title: 'AR-Based Retail Try-Before-Buy Experience',
    description: 'Augmented reality application allowing customers to visualize products in their space before purchasing.',
    stage: 'draft',
    priority: 'low',
    alignment: 'medium',
    maturity: 'early',
    clarityScore: 31,
    createdDate: '2024-02-20',
    tags: ['AR', 'Retail', 'Customer Experience']
  },
  {
    id: '5',
    title: 'Predictive Maintenance IoT Platform',
    description: 'IoT solution that monitors equipment health and predicts failures before they occur, reducing downtime.',
    stage: 'validated',
    priority: 'high',
    alignment: 'high',
    maturity: 'developing',
    clarityScore: 68,
    createdDate: '2024-01-25',
    tags: ['IoT', 'Manufacturing', 'Predictive Analytics']
  },
  {
    id: '6',
    title: 'Health & Wellness Habit Tracker',
    description: 'Mobile app that helps users build and maintain healthy habits through behavioral science techniques.',
    stage: 'draft',
    priority: 'medium',
    alignment: 'low',
    maturity: 'early',
    clarityScore: 28,
    createdDate: '2024-02-28',
    tags: ['Health', 'Mobile App', 'Habits']
  }
];

// Get background color based on stage
const getStageBg = (stage: IdeaStage) => {
  switch (stage) {
    case 'draft': return 'bg-gray-100 dark:bg-gray-700';
    case 'refining': return 'bg-blue-100 dark:bg-blue-900/40';
    case 'validated': return 'bg-emerald-100 dark:bg-emerald-900/40';
    case 'ready': return 'bg-purple-100 dark:bg-purple-900/40';
    default: return 'bg-gray-100 dark:bg-gray-700';
  }
};

// Get text color based on stage
const getStageText = (stage: IdeaStage) => {
  switch (stage) {
    case 'draft': return 'text-gray-700 dark:text-gray-300';
    case 'refining': return 'text-blue-700 dark:text-blue-300';
    case 'validated': return 'text-emerald-700 dark:text-emerald-300';
    case 'ready': return 'text-purple-700 dark:text-purple-300';
    default: return 'text-gray-700 dark:text-gray-300';
  }
};

// Get priority color
const getPriorityColor = (priority: IdeaPriority) => {
  switch (priority) {
    case 'low': return 'border-gray-300 dark:border-gray-600';
    case 'medium': return 'border-blue-400 dark:border-blue-500';
    case 'high': return 'border-amber-400 dark:border-amber-500';
    case 'critical': return 'border-rose-500 dark:border-rose-500';
    default: return 'border-gray-300 dark:border-gray-600';
  }
};

// Get alignment indicator
const getAlignmentIndicator = (alignment: IdeaAlignment) => {
  switch (alignment) {
    case 'low': return { color: 'bg-red-400 dark:bg-red-600', width: 'w-1/3' };
    case 'medium': return { color: 'bg-amber-400 dark:bg-amber-500', width: 'w-2/3' };
    case 'high': return { color: 'bg-emerald-400 dark:bg-emerald-500', width: 'w-full' };
    default: return { color: 'bg-gray-300 dark:bg-gray-600', width: 'w-1/4' };
  }
};

// Get maturity indicator
const getMaturityIndicator = (maturity: IdeaMaturity) => {
  switch (maturity) {
    case 'early': return { color: 'text-gray-500 dark:text-gray-400', icon: '🌱' };
    case 'developing': return { color: 'text-amber-500 dark:text-amber-400', icon: '🌿' };
    case 'mature': return { color: 'text-emerald-500 dark:text-emerald-400', icon: '🌳' };
    default: return { color: 'text-gray-500 dark:text-gray-400', icon: '🌱' };
  }
};

export default function IdeasHopper() {
  const [activeFilter, setActiveFilter] = useState<IdeaStage | 'all'>('all');
  const [hoveredIdea, setHoveredIdea] = useState<string | null>(null);

  // Filter ideas based on active filter
  const filteredIdeas = activeFilter === 'all' 
    ? sampleIdeas 
    : sampleIdeas.filter(idea => idea.stage === activeFilter);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-3">
            Ideas Management
          </span>
          <h2 className="text-3xl font-bold mb-4">Your Ideas Hopper</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Manage multiple product concepts simultaneously. Track their development from early drafts to launch-ready ideas with clarity scores, strategic alignment, and prioritization.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            All Ideas
          </button>
          <button 
            onClick={() => setActiveFilter('draft')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === 'draft' ? 'bg-gray-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            Drafts
          </button>
          <button 
            onClick={() => setActiveFilter('refining')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === 'refining' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            Refining
          </button>
          <button 
            onClick={() => setActiveFilter('validated')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === 'validated' ? 'bg-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            Validated
          </button>
          <button 
            onClick={() => setActiveFilter('ready')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === 'ready' ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            Ready
          </button>
        </div>

        {/* Ideas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => {
            const alignmentIndicator = getAlignmentIndicator(idea.alignment);
            const maturityIndicator = getMaturityIndicator(idea.maturity);
            const isHovered = hoveredIdea === idea.id;

            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredIdea(idea.id)}
                onHoverEnd={() => setHoveredIdea(null)}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-l-4 ${getPriorityColor(idea.priority)} transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : ''}`}
              >
                {/* Card header with stage indicator */}
                <div className={`${getStageBg(idea.stage)} px-4 py-3 flex justify-between items-center`}>
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${alignmentIndicator.color}`} />
                    <span className={`text-sm font-medium ${getStageText(idea.stage)}`}>
                      {idea.stage.charAt(0).toUpperCase() + idea.stage.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${maturityIndicator.color}`} title="Idea maturity">
                      {maturityIndicator.icon}
                    </span>
                    <div className="flex items-center gap-1" title="Clarity Score">
                      <span className="text-sm font-medium">
                        {idea.clarityScore}
                      </span>
                      <svg className="w-4 h-4 text-indigo-400 dark:text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">{idea.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{idea.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {idea.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Strategic alignment bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Strategic Alignment</span>
                      <span>{idea.alignment.charAt(0).toUpperCase() + idea.alignment.slice(1)}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${alignmentIndicator.color} ${alignmentIndicator.width}`}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Card footer */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Added: {idea.createdDate}
                    </span>
                    <button className="text-xs text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors">
            Create New Idea
          </button>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Idea Hopper manages your concepts from inception to execution
          </p>
        </div>
      </div>
    </section>
  );
} 