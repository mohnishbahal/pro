import React from "react";
import Link from "next/link";

// Sample data - would come from an API in a real app
const ideas = [
  {
    id: 1,
    title: "Voice-Controlled Shopping Assistant",
    clarity: 67,
    status: "In Progress",
    category: "E-commerce",
    priority: "High",
    submitter: "Sarah Chen",
    timestamp: "1 day ago",
  },
  {
    id: 2,
    title: "Augmented Reality Product Visualization",
    clarity: 82,
    status: "In Progress",
    category: "Mobile",
    priority: "Medium",
    submitter: "Alex Johnson",
    timestamp: "2 days ago",
  },
  {
    id: 3,
    title: "Predictive Inventory Management System",
    clarity: 53,
    status: "Draft",
    category: "Enterprise",
    priority: "Low",
    submitter: "Michael Brown",
    timestamp: "3 days ago",
  },
  {
    id: 4,
    title: "Dynamic Pricing Algorithm Based on User Behavior",
    clarity: 74,
    status: "In Progress",
    category: "Analytics",
    priority: "High", 
    submitter: "Jessica Lee",
    timestamp: "4 days ago",
  },
];

// Helper function to determine priority color
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Low":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};

// Helper function to determine status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "In Progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Draft":
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};

export default function IdeasHopperPreview() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Ideas Hopper</h2>
        <Link 
          href="/dashboard/ideas" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View All
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Idea
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Clarity
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {ideas.map((idea) => (
              <tr key={idea.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/idea/${idea.id}`}>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{idea.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{idea.category} • {idea.timestamp}</div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(idea.status)}`}>
                    {idea.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(idea.priority)}`}>
                    {idea.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2 w-24">
                      <div 
                        className={`h-2 rounded-full ${
                          idea.clarity > 80 
                          ? "bg-green-500" 
                          : idea.clarity > 50 
                          ? "bg-yellow-500" 
                          : "bg-red-500"
                        }`}
                        style={{ width: `${idea.clarity}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{idea.clarity}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 