'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Feature = ({ title, description, icon, color }: FeatureProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3">
          Key Features
        </span>
        <h2 className="text-3xl font-bold mb-4">AI-Augmented Product Development</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Rapidly develop ideas into well-defined product requirements with our intelligent platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature 
          title="Ideation Chat Interface"
          description="Engage with AI mentors for guided conversations to refine your product concepts and generate comprehensive PRDs."
          color="bg-blue-50 dark:bg-blue-900/30"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
        />

        <Feature 
          title="Assessment Visualization"
          description="Track progress with radar charts showing scores across 10 dimensions, achievement badges, and focus area recommendations."
          color="bg-purple-50 dark:bg-purple-900/30"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />

        <Feature 
          title="Ideas Hopper"
          description="Prioritize and manage your ideas with our card-based view, including filtering, sorting, and visual indicators for idea maturity."
          color="bg-green-50 dark:bg-green-900/30"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
        />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Feature 
          title="Dynamic PRD Generation"
          description="Generate comprehensive Product Requirement Documents with structured sections, export controls, version history, and sharing options."
          color="bg-amber-50 dark:bg-amber-900/30"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />

        <Feature 
          title="AI Mentor Selection"
          description="Choose from 6 different AI mentor personalities to guide your product development process with tailored insights and feedback."
          color="bg-rose-50 dark:bg-rose-900/30"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
        />
      </div>
    </section>
  );
} 