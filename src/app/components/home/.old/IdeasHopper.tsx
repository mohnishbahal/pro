'use client';

import { useState } from 'react';

interface IdeaCard {
  id: number;
  title: string;
  description: string;
  score: number;
  status: 'draft' | 'in-progress' | 'reviewed' | 'approved';
  priority: 'low' | 'medium' | 'high';
  lastUpdated: string;
  tags: string[];
}

const ideas: IdeaCard[] = [
  {
    id: 1,
    title: "AI-Powered Content Recommendation",
    description: "System that learns user preferences and suggests relevant content across platforms.",
    score: 84,
    status: 'approved',
    priority: 'high',
    lastUpdated: "2 days ago",
    tags: ['AI', 'recommendation', 'personalization']
  },
  {
    id: 2,
    title: "Unified Workspace Dashboard",
    description: "Central hub for accessing all work tools, communications, and documents in one interface.",
    score: 76,
    status: 'in-progress',
    priority: 'high',
    lastUpdated: "6 hours ago",
    tags: ['productivity', 'integration', 'dashboard']
  },
  {
    id: 3,
    title: "Voice-Activated Meeting Assistant",
    description: "Smart meeting tool that transcribes, summarizes, and creates action items from discussions.",
    score: 68,
    status: 'in-progress',
    priority: 'medium',
    lastUpdated: "Yesterday",
    tags: ['meetings', 'voice', 'productivity']
  },
  {
    id: 4,
    title: "Automated Customer Service Bot",
    description: "Intelligent chatbot that handles customer inquiries and routes complex issues to humans.",
    score: 79,
    status: 'reviewed',
    priority: 'medium',
    lastUpdated: "3 days ago",
    tags: ['customer service', 'automation', 'AI']
  },
  {
    id: 5,
    title: "Subscription Management Portal",
    description: "Platform for tracking, optimizing, and managing all subscription services in one place.",
    score: 62,
    status: 'draft',
    priority: 'low',
    lastUpdated: "5 days ago",
    tags: ['subscription', 'management', 'finance']
  }
];

const statusColors = {
  'draft': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  'reviewed': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  'approved': 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
};

const priorityColors = {
  'low': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  'medium': 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  'high': 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
};

export default function IdeasHopper() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('score');

  const filteredIdeas = ideas.filter(idea => {
    if (filter === 'all') return true;
    if (filter === 'high-priority') return idea.priority === 'high';
    if (filter === 'draft') return idea.status === 'draft';
    if (filter === 'in-progress') return idea.status === 'in-progress';
    return true;
  });

  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'priority') {
      const priorityMap = { 'high': 3, 'medium': 2, 'low': 1 };
      return priorityMap[b.priority] - priorityMap[a.priority];
    }
    if (sortBy === 'recent') {
      // This is just for demo, would normally use real dates
      return a.lastUpdated.includes('hours') ? -1 : 1;
    }
    return 0;
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
            Ideas Hopper
          </span>
          <h2 className="text-3xl font-bold mb-4">Organize & Prioritize Your Ideas</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Keep track of all your product ideas in one place with our powerful Ideas Hopper
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Filter:</span>
              <div className="flex overflow-x-auto space-x-2 p-1">
                {['all', 'high-priority', 'draft', 'in-progress'].map(option => (
                  <button 
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                      filter === option 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 border-0 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="score">Clarity Score</option>
                <option value="priority">Priority</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {sortedIdeas.map(idea => (
              <div 
                key={idea.id}
                className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-16 flex flex-row sm:flex-col items-center sm:justify-center gap-2 sm:gap-1">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center border-4 border-blue-100 dark:border-blue-900">
                      <span className="text-lg font-bold text-blue-500">{idea.score}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Score</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[idea.status]}`}>
                        {idea.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[idea.priority]}`}>
                        {idea.priority.charAt(0).toUpperCase() + idea.priority.slice(1)} Priority
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1">{idea.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{idea.description}</p>
                    
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex flex-wrap gap-1 mb-2 sm:mb-0">
                        {idea.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{idea.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col gap-2">
                    <button className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 