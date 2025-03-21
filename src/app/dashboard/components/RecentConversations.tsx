import React from "react";
import Link from "next/link";

// Sample data - would come from an API in a real app
const conversations = [
  {
    id: 1,
    projectId: 1,
    projectTitle: "AI-Powered Customer Support Chatbot",
    mentor: "Elon Musk",
    lastMessage: "Have you considered how this could scale to handle thousands of simultaneous conversations?",
    timestamp: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    projectId: 4,
    projectTitle: "Smart Home Energy Optimization System",
    mentor: "Aristotle",
    lastMessage: "Let us categorize the different types of energy consumption patterns more precisely.",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    projectId: 2,
    projectTitle: "Mobile App Redesign for Financial Platform",
    mentor: "Steve Jobs",
    lastMessage: "The interface is too cluttered. Remember, simplicity is the ultimate sophistication.",
    timestamp: "3 days ago",
    unread: false,
  },
];

export default function RecentConversations() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Recent Conversations</h2>
      </div>
      
      <div className="space-y-4">
        {conversations.map((convo) => (
          <Link href={`/dashboard/conversation/${convo.id}`} key={convo.id}>
            <div className={`p-4 rounded-lg border ${
              convo.unread 
              ? "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20" 
              : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            } transition-colors cursor-pointer`}>
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {convo.projectTitle}
                </h3>
                {convo.unread && (
                  <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                )}
              </div>
              
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs mr-2">
                  {convo.mentor.charAt(0)}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{convo.mentor}</span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                {convo.lastMessage}
              </p>
              
              <div className="text-xs text-right text-gray-500 dark:text-gray-500">
                {convo.timestamp}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {conversations.length > 0 && (
        <div className="mt-4 text-center">
          <Link 
            href="/dashboard/conversations" 
            className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline"
          >
            View all conversations
          </Link>
        </div>
      )}
    </div>
  );
} 