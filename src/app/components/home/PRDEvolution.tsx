'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for PRD evolution stages
const prdStages = [
  {
    id: 'initial',
    title: 'Initial Notes',
    description: 'Scattered thoughts and initial concept',
    content: [
      { type: 'heading', text: 'Team Chat App Idea' },
      { type: 'text', text: 'Build something for remote teams to communicate better.' },
      { type: 'text', text: 'Include messaging, maybe file sharing?' },
      { type: 'text', text: 'Should be easy to use and have a good mobile experience.' },
      { type: 'heading', text: 'Questions' },
      { type: 'text', text: 'How to make it different from Slack?' },
      { type: 'text', text: 'What features would teams actually use?' },
    ]
  },
  {
    id: 'structured',
    title: 'Structured Outline',
    description: 'Organized into basic sections',
    content: [
      { type: 'heading', text: 'Project: TeamSync' },
      { type: 'subheading', text: 'Problem Statement' },
      { type: 'text', text: 'Remote teams struggle with communication across time zones and keeping information organized.' },
      { type: 'subheading', text: 'Solution Overview' },
      { type: 'text', text: 'A communication platform optimized for asynchronous collaboration with smart notifications.' },
      { type: 'subheading', text: 'Target Users' },
      { type: 'text', text: 'Distributed teams working across multiple time zones.' },
      { type: 'subheading', text: 'Key Features' },
      { type: 'bulletList', items: [
        'Time zone aware messaging',
        'Smart notification batching',
        'Integrated file sharing',
        'Mobile-first design'
      ] },
    ]
  },
  {
    id: 'detailed',
    title: 'Detailed PRD',
    description: 'Comprehensive product requirements',
    content: [
      { type: 'heading', text: 'TeamSync: Asynchronous Team Collaboration Platform' },
      
      { type: 'subheading', text: '1. Executive Summary' },
      { type: 'text', text: 'TeamSync enables remote teams to collaborate effectively across time zones with smart notification management and context preservation, addressing the $8.5B productivity loss from timezone fragmentation.' },
      
      { type: 'subheading', text: '2. Problem Analysis (Score: 87/100)' },
      { type: 'text', text: 'Remote teams face three critical challenges: notification overload, context loss during handoffs, and inefficient knowledge sharing across time zones.' },
      { type: 'bulletList', items: [
        'Employees spend 2.5 hours daily processing irrelevant notifications',
        'Context switching costs an estimated 40% of productive time',
        '73% of remote teams report knowledge silos as a major barrier'
      ] },
      
      { type: 'subheading', text: '3. User Segments (Score: 92/100)' },
      { type: 'text', text: 'Primary: Tech companies with 50-500 employees across 3+ time zones' },
      { type: 'text', text: 'Secondary: Consulting firms with distributed client teams' },
      { type: 'text', text: 'Tertiary: Global enterprises with cross-functional projects' },
      
      { type: 'subheading', text: '4. Feature Set (Score: 85/100)' },
      { type: 'bulletList', items: [
        'Smart Notification Batching: ML-based priority system with scheduled delivery',
        'Timezone-Aware Status: Visual indicators of team member availability',
        'Context Preservation: Automated meeting summaries and decision tracking',
        'Knowledge Graph: Semantic search across all team communications',
        'Handoff Protocol: Structured process for work transitions between regions'
      ] },
    ]
  },
  {
    id: 'complete',
    title: 'Complete Document',
    description: 'Ready for stakeholder review',
    content: [
      { type: 'heading', text: 'TeamSync: Comprehensive Product Requirements Document' },
      { type: 'metadata', text: 'Version 1.0 | Last Updated: June 5, 2024 | Status: Approved' },
      
      { type: 'subheading', text: '1. Executive Summary' },
      { type: 'text', text: 'TeamSync is an AI-powered asynchronous collaboration platform designed specifically for globally distributed teams. By intelligently managing communication flows, preserving context, and optimizing for time zone differences, TeamSync addresses the $8.5B annual productivity loss caused by poor collaboration across time zones.' },
      
      { type: 'subheading', text: '2. Strategic Alignment (Score: 95/100)' },
      { type: 'text', text: 'This initiative directly supports our company\'s FY25 OKRs:' },
      { type: 'bulletList', items: [
        'O1: Expand enterprise customer base - TeamSync targets mid-market and enterprise customers',
        'O2: Increase product differentiation - Unique approach to asynchronous communication',
        'O3: Build AI/ML capabilities - Core notification intelligence and knowledge features'
      ] },
      
      { type: 'subheading', text: '3. Market Analysis (Score: 89/100)' },
      { type: 'text', text: 'The team collaboration market is valued at $23.3B with 17% YoY growth. Current solutions like Slack and Teams optimize for synchronous communication, creating an opportunity for asynchronous-first approach:' },
      { type: 'bulletList', items: [
        'Remote work adoption increasing 13% annually post-pandemic',
        'Global talent distribution accelerating due to labor shortages',
        'Executive priority on productivity tools with measurable ROI'
      ] },
      
      { type: 'subheading', text: '4. User Personas (Score: 94/100)' },
      { type: 'text', text: 'Primary: Engineering Managers leading distributed teams' },
      { type: 'text', text: 'Secondary: C-Suite executives coordinating global operations' },
      { type: 'text', text: 'Tertiary: Project managers with cross-functional responsibilities' },
      
      { type: 'subheading', text: '5. Success Metrics (Score: 92/100)' },
      { type: 'bulletList', items: [
        'Reduce interruption rate by 40% within first 3 months',
        'Decrease context-switching time by 25% within 6 months',
        'Improve documented knowledge accessibility by 75% within 1 year',
        'Achieve NPS of 60+ within first year',
        'Reach 10K paid seats within 18 months'
      ] },
      
      { type: 'subheading', text: '6. Phased Implementation' },
      { type: 'text', text: 'Phase 1 (Q3 2024): Core communication and notification system' },
      { type: 'text', text: 'Phase 2 (Q4 2024): Knowledge graph and semantic search' },
      { type: 'text', text: 'Phase 3 (Q1 2025): Advanced AI features and analytics dashboard' },
      { type: 'text', text: 'Phase 4 (Q2 2025): Enterprise deployment options and compliance features' },
    ]
  }
];

export default function PRDEvolution() {
  const [currentStage, setCurrentStage] = useState('initial');
  
  const handleStageChange = (index: number) => {
    setCurrentStage(prdStages[index].id);
  };
  
  const currentStageData = prdStages.find(stage => stage.id === currentStage);
  
  // Generate component based on content type
  const renderContentItem = (item: {type: string; text?: string; items?: string[]}, index: number) => {
    switch (item.type) {
      case 'heading':
        return (
          <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-100">
            {item.text}
          </h3>
        );
      case 'subheading':
        return (
          <h4 key={index} className="text-base font-semibold mt-3 mb-1 text-gray-700 dark:text-gray-200">
            {item.text}
          </h4>
        );
      case 'text':
        return (
          <p key={index} className="text-sm mb-2 text-gray-600 dark:text-gray-300">
            {item.text}
          </p>
        );
      case 'bulletList':
        return (
          <ul key={index} className="list-disc text-sm pl-5 mb-3 text-gray-600 dark:text-gray-300">
            {item.items?.map((text: string, i: number) => (
              <li key={i} className="mb-1">{text}</li>
            ))}
          </ul>
        );
      case 'metadata':
        return (
          <div key={index} className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">
            {item.text}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
            Document Generation
          </span>
          <h2 className="text-3xl font-bold mb-4">From Rough Ideas to Polished PRDs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how ProFlow transforms scattered thoughts into comprehensive, well-structured product requirements documents.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stage selector tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto pb-1">
            {prdStages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => handleStageChange(index)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap mr-2 rounded-t-lg transition-colors
                  ${currentStage === stage.id 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                {stage.title}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {/* Left panel - Stage information */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 sticky top-4">
                <h3 className="text-xl font-bold mb-2">{currentStageData?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {currentStageData?.description}
                </p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Document Completion</h4>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-500 ease-out"
                      style={{ width: `${(prdStages.indexOf(currentStageData) + 1) * 25}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>Basic</span>
                    <span>Complete</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Document Attributes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Structure</span>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-5 h-2 rounded-sm ml-1 ${
                              i <= prdStages.indexOf(currentStageData) ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Detail</span>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-5 h-2 rounded-sm ml-1 ${
                              i <= prdStages.indexOf(currentStageData) ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Strategic Alignment</span>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-5 h-2 rounded-sm ml-1 ${
                              i <= prdStages.indexOf(currentStageData) ? 'bg-purple-500' : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button 
                    className={`w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      prdStages.indexOf(currentStageData) < prdStages.length - 1
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    }`}
                    onClick={() => {
                      if (prdStages.indexOf(currentStageData) < prdStages.length - 1) {
                        handleStageChange(prdStages.indexOf(currentStageData) + 1);
                      } else {
                        // Export action for completed document
                        alert('PRD ready for export!');
                      }
                    }}
                  >
                    {prdStages.indexOf(currentStageData) < prdStages.length - 1 ? 'Continue Refining' : 'Export Document'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right panel - Document preview */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Document header */}
                <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">TeamSync PRD</h3>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Updated {prdStages.indexOf(currentStageData) > 0 ? (prdStages.indexOf(currentStageData) > 2 ? '2 hours ago' : '5 hours ago') : 'yesterday'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Document content */}
                <motion.div 
                  key={currentStageData?.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 max-h-[600px] overflow-y-auto"
                >
                  {currentStageData?.content.map((item, index) => renderContentItem(item, index))}
                  
                  {/* Empty state for incomplete documents */}
                  {currentStageData && prdStages.indexOf(currentStageData) < 3 && (
                    <div className="border-t border-dashed border-gray-200 dark:border-gray-700 mt-4 pt-4">
                      <div className="flex items-center text-gray-400 dark:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm italic">Content continues in next stage</span>
                      </div>
                    </div>
                  )}
                </motion.div>
                
                {/* Document footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center">
                  <div>
                    {currentStageData && prdStages.indexOf(currentStageData) === 0 && 'Draft • 1 min read'}
                    {currentStageData && prdStages.indexOf(currentStageData) === 1 && 'Draft • 2 min read'}
                    {currentStageData && prdStages.indexOf(currentStageData) === 2 && 'Draft • 5 min read'}
                    {currentStageData && prdStages.indexOf(currentStageData) === 3 && 'Ready for review • 8 min read'}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>AI-generated with ProFlow</span>
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