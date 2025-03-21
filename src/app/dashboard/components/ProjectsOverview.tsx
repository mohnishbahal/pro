import React from "react";
import Link from "next/link";

// Sample project data - in a real app this would come from an API
const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Chatbot",
    clarity: 78,
    lastUpdated: "2 hours ago",
    status: "In Progress",
    mentorType: "Elon Musk"
  },
  {
    id: 2,
    title: "Mobile App Redesign for Financial Platform",
    clarity: 92,
    lastUpdated: "Yesterday",
    status: "Completed",
    mentorType: "Steve Jobs"
  },
  {
    id: 3,
    title: "Blockchain Integration for Supply Chain",
    clarity: 45,
    lastUpdated: "3 days ago",
    status: "Draft",
    mentorType: "Jeff Bezos"
  },
  {
    id: 4,
    title: "Smart Home Energy Optimization System",
    clarity: 63,
    lastUpdated: "1 week ago",
    status: "In Progress",
    mentorType: "Aristotle"
  }
];

export default function ProjectsOverview() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Your Projects</h2>
        <Link 
          href="/dashboard/new-project" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          New Project
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link href={`/dashboard/project/${project.id}`} key={project.id}>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{project.title}</h3>
                <div 
                  className={`px-2 py-1 rounded-full text-xs ${
                    project.status === "Completed" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                    : project.status === "In Progress" 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {project.status}
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">With {project.mentorType}</span>
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Updated {project.lastUpdated}</span>
              </div>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                      Clarity Score
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                      {project.clarity}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mt-1 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                  <div 
                    style={{ width: `${project.clarity}%` }} 
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      project.clarity > 80 
                      ? "bg-green-500" 
                      : project.clarity > 50 
                      ? "bg-yellow-500" 
                      : "bg-red-500"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {projects.length > 4 && (
        <div className="mt-6 text-center">
          <Link 
            href="/dashboard/all-projects" 
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View all projects
          </Link>
        </div>
      )}
    </div>
  );
} 