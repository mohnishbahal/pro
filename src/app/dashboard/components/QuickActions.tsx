import React from "react";
import Link from "next/link";

// Custom icon components
const NewIdeaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
  </svg>
);

const ChooseMentorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const ContinueWorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);

export default function QuickActions() {
  // Actions array
  const actions = [
    {
      title: "New Idea",
      description: "Start developing a new product concept",
      icon: <NewIdeaIcon />,
      href: "/dashboard/new-project",
      primary: true,
    },
    {
      title: "Choose Mentor",
      description: "Work with a different AI personality",
      icon: <ChooseMentorIcon />,
      href: "/dashboard/mentors",
      primary: false,
    },
    {
      title: "Continue Work",
      description: "Resume your last ideation session",
      icon: <ContinueWorkIcon />,
      href: "/dashboard/project/1", // Would be dynamic in real app
      primary: false,
    },
    {
      title: "Your Analytics",
      description: "Review your innovation metrics",
      icon: <AnalyticsIcon />,
      href: "/dashboard/analytics",
      primary: false,
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link href={action.href} key={action.title}>
            <div 
              className={`flex flex-col h-full p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow ${
                action.primary 
                ? "bg-indigo-600 dark:bg-indigo-700 text-white" 
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              <div className={`p-2 rounded-lg inline-block mb-3 ${
                action.primary 
                ? "bg-indigo-500 dark:bg-indigo-600" 
                : "bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
              }`}>
                {action.icon}
              </div>
              
              <h4 className={`font-semibold mb-1 ${
                action.primary ? "text-white" : "text-gray-800 dark:text-gray-200"
              }`}>{action.title}</h4>
              
              <p className={`text-sm ${
                action.primary ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"
              }`}>{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 