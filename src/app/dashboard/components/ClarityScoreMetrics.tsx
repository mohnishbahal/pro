import React from "react";

// In a real app, we would import a chart library like Chart.js or Recharts
// For this demo, we'll create a simple visualization

// Sample data - this would come from an API in a real app
const clarityDimensions = [
  { name: "Problem Statement", score: 85 },
  { name: "Solution Approach", score: 72 },
  { name: "Target Users", score: 94 },
  { name: "Value Proposition", score: 68 },
  { name: "Market Context", score: 53 },
  { name: "Strategic Alignment", score: 89 },
  { name: "Feature Set", score: 75 },
  { name: "Expected Impact", score: 82 },
  { name: "Risks & Challenges", score: 60 },
  { name: "Validation Approach", score: 47 },
];

// Calculate overall score
const overallScore = Math.round(
  clarityDimensions.reduce((sum, dim) => sum + dim.score, 0) / clarityDimensions.length
);

export default function ClarityScoreMetrics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Clarity Metrics
      </h2>
      
      {/* Overall Score */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative w-36 h-36">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <circle 
              cx="60" 
              cy="60" 
              r="54" 
              fill="none" 
              stroke="#e2e8f0" 
              strokeWidth="12" 
              className="dark:stroke-gray-700"
            />
            <circle 
              cx="60" 
              cy="60" 
              r="54" 
              fill="none" 
              stroke="#6366f1" 
              strokeWidth="12" 
              strokeDasharray="339.3"
              strokeDashoffset={339.3 - (339.3 * overallScore / 100)} 
              className="dark:stroke-indigo-500"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-800 dark:text-gray-200">{overallScore}%</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">Overall</span>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {overallScore > 80 
            ? "Excellent clarity across dimensions" 
            : overallScore > 60 
            ? "Good progress, with areas to improve" 
            : "Needs more development in key areas"}
        </div>
      </div>
      
      {/* Dimensions List */}
      <div className="space-y-3">
        {clarityDimensions.slice(0, 5).map((dimension) => (
          <div key={dimension.name} className="group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{dimension.name}</span>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{dimension.score}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  dimension.score > 80 
                  ? "bg-green-500" 
                  : dimension.score > 50 
                  ? "bg-yellow-500" 
                  : "bg-red-500"
                }`}
                style={{ width: `${dimension.score}%` }}
              ></div>
            </div>
          </div>
        ))}
        
        <div className="pt-2">
          <button className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
            View all dimensions
          </button>
        </div>
      </div>
      
      {/* Suggestion */}
      <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
        <h4 className="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Suggested Focus</h4>
        <p className="text-sm text-indigo-600 dark:text-indigo-400">
          Improving your "Validation Approach" could raise your overall clarity by 8%.
        </p>
      </div>
    </div>
  );
} 