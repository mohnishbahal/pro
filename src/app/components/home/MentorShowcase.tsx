'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for our data structures
type MentorId = 'steve-jobs' | 'elon-musk' | 'jeff-bezos' | 'aristotle' | 'sun-tzu' | 'cpo';

type ScoreMetrics = {
  market: number;
  technical: number;
  user: number;
  clarity: number;
};

type Mentor = {
  id: MentorId;
  name: string;
  avatar: string;
  description: string;
  color: string;
  lightBg: string;
  darkBg: string;
  style: string;
  strengths: string[];
  ideaFor: string;
};

// Helper function to validate text
const isValidText = (text: string): boolean => {
  // Check if text contains actual readable content
  // This is a simple check for completely random characters
  const validCharRatio = text.split('').filter(char => 
    /[a-zA-Z0-9,.?!;: ]/.test(char)
  ).length / text.length;
  
  return validCharRatio > 0.7 && text.length > 0;
};

// Fallback responses in case of jibberish
const fallbackResponses: Record<MentorId, string> = {
  'steve-jobs': 'Focus on creating an experience that delights users. Simplicity is the ultimate sophistication.',
  'elon-musk': 'We need to think about this from first principles. What\'s physically possible, and how can we push those boundaries?',
  'jeff-bezos': 'Start with the customer and work backwards. What would create the most value for the people using this?',
  'aristotle': 'We must categorize this problem carefully and examine it from multiple perspectives to find the ideal solution.',
  'sun-tzu': 'Analyze the competitive landscape and find the position of strength where you can maximize your advantages.',
  'cpo': 'Let\'s analyze the data and align this initiative with our strategic objectives to ensure maximum business impact.'
};

const mentors: Mentor[] = [
  {
    id: 'steve-jobs',
    name: 'Steve Jobs',
    avatar: '🧠',
    description: 'The Perfectionist Visionary',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    darkBg: 'bg-purple-900/30',
    style: 'This isn\'t revolutionary enough. How does this delight the user? Let\'s simplify, then simplify again.',
    strengths: ['User experience', 'Design elegance', 'Market disruption'],
    ideaFor: 'Products that need to create emotional connections with users'
  },
  {
    id: 'elon-musk',
    name: 'Elon Musk',
    avatar: '🚀',
    description: 'The First Principles Thinker',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    darkBg: 'bg-blue-900/30',
    style: 'Let\'s break this down to first principles. What\'s the physics-based limitation here? Is this 10x better than what exists?',
    strengths: ['Technological innovation', 'Scalability', 'First principles'],
    ideaFor: 'Ambitious projects requiring breakthrough innovations'
  },
  {
    id: 'jeff-bezos',
    name: 'Jeff Bezos',
    avatar: '📦',
    description: 'The Customer Obsessed',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    darkBg: 'bg-amber-900/30',
    style: 'What does this do for the customer? Let\'s work backwards from the ideal experience. Are we thinking long-term enough?',
    strengths: ['Customer experience', 'Operational excellence', 'Long-term thinking'],
    ideaFor: 'Products focused on exceptional customer experience'
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    avatar: '🏛️',
    description: 'The Systematic Categorizer',
    color: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'bg-emerald-900/30',
    style: 'Let us first define our terms. What is the essence of this problem? We must consider all four causes.',
    strengths: ['Clear definitions', 'Logical categorization', 'Ethical considerations'],
    ideaFor: 'Complex problems requiring structured analysis'
  },
  {
    id: 'sun-tzu',
    name: 'Sun Tzu',
    avatar: '⚔️',
    description: 'The Strategic Mastermind',
    color: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    darkBg: 'bg-rose-900/30',
    style: 'Know your users and know yourself. The supreme art of product is to solve the problem without creating new ones.',
    strengths: ['Competitive positioning', 'Resource efficiency', 'Strategic advantage'],
    ideaFor: 'Products entering competitive markets'
  },
  {
    id: 'cpo',
    name: 'Strategic CPO',
    avatar: '📊',
    description: 'The Data-Driven Product Leader',
    color: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'bg-indigo-900/30',
    style: 'We need to consider our KPIs and OKRs. How will this move our core metrics? Let\'s validate with A/B testing.',
    strengths: ['Metrics-driven', 'Business alignment', 'ROI optimization'],
    ideaFor: 'Business-critical initiatives requiring measurable outcomes'
  }
];

// Sample user ideas that users can try with different mentors
const sampleIdeas = [
  "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms.",
  "We need a productivity app that helps remote teams collaborate across time zones.",
  "I want to build an AI-powered financial advisor for young investors.",
  "My idea is a subscription service for sustainable household products."
];

// Validate sample ideas
const validatedSampleIdeas = sampleIdeas.map(idea => 
  isValidText(idea) ? idea : "I'm working on a new product idea and need your guidance."
);

// Add example conversations for each mentor
const exampleConversations: Record<MentorId, {role: 'user' | 'mentor', text: string}[]> = {
  'steve-jobs': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Is this truly revolutionary or just an iteration? Users don't want another smart assistant - they want magic. How will this create an emotional connection? How will it surprise and delight in ways no one has thought of? And simplify. Strip away anything that isn't essential to the core experience." },
    { role: 'user', text: "I want it to be simpler than existing solutions, with a focus on natural conversation." },
    { role: 'mentor', text: "Better isn't enough - it needs to be insanely great. What if the interface disappeared completely? What if it anticipated needs before users even asked? Focus obsessively on the three most important things it should do, and cut everything else. Make those three things so intuitive a child could use them. That's the difference between a product and an experience users will evangelize." }
  ],
  'elon-musk': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Let's break this down to first principles. What's the fundamental limitation of current voice assistants? Is it processing power? Accuracy? Privacy? If we removed all constraints, what would the perfect solution look like? And is your approach 10x better, not just 10% better?" },
    { role: 'user', text: "Privacy is a big constraint - all the current solutions send data to the cloud." },
    { role: 'mentor', text: "That's a fundamental limitation we can exploit. Physics doesn't require cloud processing - it's an architectural choice. What if we built edge computing capabilities that enable full processing locally? The power requirements would be significant, but we could innovate on the hardware front with custom silicon optimized specifically for voice processing. This isn't just incrementally better - it's a fundamentally different approach that could give users both privacy and performance." }
  ],
  'jeff-bezos': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Let's work backwards from the perfect customer experience. What are customers trying to accomplish with voice assistants today, and what are their biggest frustrations? How could this solution make their lives meaningfully better? Remember, we're optimizing for long-term customer value, not short-term gains." },
    { role: 'user', text: "Users are frustrated with having to remember specific commands and the lack of integration across devices." },
    { role: 'mentor', text: "That's a real customer pain point. What if we created a solution that learned from natural conversation rather than requiring memorized commands? And what if interoperability was the core feature, not an afterthought? This could create massive customer value. We should set audacious goals: 99.9% comprehension accuracy and compatibility with 95% of smart home devices within two years. Now let's build a detailed working backwards document and define precisely how we'll measure success." }
  ],
  'aristotle': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Let us first define what we mean by 'voice-controlled,' 'smart home,' 'assistant,' and 'integration.' We must be precise in our language to ensure clarity of thought. What is the essential nature of an assistant? What are the four causes: material, formal, efficient, and final? What is the telos - the ultimate purpose?" },
    { role: 'user', text: "I want to help people control their homes more easily through natural language." },
    { role: 'mentor', text: "A noble aim. Let us categorize this purpose according to virtue ethics. Is this product promoting human flourishing and excellence? How does it embody practical wisdom? We must consider both the pragmatic function and the ethical implications. I propose we develop a systematic framework with clearly defined categories for all possible interactions, and ensure each aspect is logically consistent with first principles. This methodical approach will yield a product of both utility and virtue." }
  ],
  'sun-tzu': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Before beginning, you must know the competitive landscape as you know yourself. Where are your enemies vulnerable? Where are they strong? All warfare is based on deception - appear weak where you are strong, and strong where you are weak. What unique position can you occupy that larger forces cannot contest?" },
    { role: 'user', text: "The major players all have privacy concerns and walled gardens that limit integration." },
    { role: 'mentor', text: "Then privacy and openness are your battleground. The supreme art of war is to subdue the enemy without fighting - create an offering so compelling in these dimensions that competitors must respond on your terms. Move like water to the low ground of opportunity they've left open. Attack where they are unprepared, appear where you are unexpected. The resourceful strategist focuses resources precisely where they will create maximum advantage. Supreme excellence consists in breaking the enemy's resistance without fighting." }
  ],
  'cpo': [
    { role: 'user', text: "I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms." },
    { role: 'mentor', text: "Let's analyze this in terms of our business objectives and market opportunity. What metrics would define success? What's the addressable market size? How does this align with our strategic OKRs? We should validate this concept with data before proceeding." },
    { role: 'user', text: "We want to enter the growing smart home market, which is projected to reach $140B by 2026." },
    { role: 'mentor', text: "The TAM is significant, but we need to define our specific segment and go-to-market strategy. I'd recommend starting with a specific vertical where we can achieve product-market fit before expanding. We should define clear KPIs: user adoption rate, daily active users, retention at 30/60/90 days, and conversion metrics for premium features. Let's build an MVP focused on our core differentiator, test with a cohort of early adopters, and iterate based on quantitative usage data and qualitative feedback." }
  ]
};

export default function MentorShowcase() {
  const [activeMentor, setActiveMentor] = useState<Mentor>(mentors[0]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIdea, setCurrentIdea] = useState('');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showMentorDetails, setShowMentorDetails] = useState(false);
  const [assessmentScores, setAssessmentScores] = useState<ScoreMetrics>({
    'market': 65,
    'technical': 82,
    'user': 43,
    'clarity': 68
  });
  
  // Replace single message with conversation array
  const [conversation, setConversation] = useState<{role: 'user' | 'mentor', text: string, mentorId: MentorId}[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const conversationRef = useRef<HTMLDivElement>(null);
  
  // Handler for text validation
  const validateAndSetMessage = useCallback((message: string) => {
    if (isValidText(message)) {
      return message;
    }
    return "I'm working on a new product idea and need your guidance.";
  }, []);

  // Get mentor's response (with fallback for jibberish)
  const getMentorResponse = useCallback((mentor: Mentor) => {
    return isValidText(mentor.style) ? mentor.style : fallbackResponses[mentor.id];
  }, []);
  
  // Simulate scoring change when mentor changes
  useEffect(() => {
    // Simulate different assessment perspectives based on mentor type
    const newScores: Record<MentorId, ScoreMetrics> = {
      'steve-jobs': { market: 85, technical: 70, user: 55, clarity: 75 },
      'elon-musk': { market: 60, technical: 65, user: 80, clarity: 72 },
      'jeff-bezos': { market: 55, technical: 95, user: 60, clarity: 80 },
      'aristotle': { market: 75, technical: 80, user: 65, clarity: 85 },
      'sun-tzu': { market: 60, technical: 55, user: 90, clarity: 70 },
      'cpo': { market: 50, technical: 65, user: 60, clarity: 60 },
    };

    // Animate the score changes
    const targetScores = newScores[activeMentor.id];
    
    // Animate each score
    const animateScores = () => {
      setAssessmentScores(prev => {
        const newScores = {...prev};
        
        // Animate each metric towards target
        (Object.keys(targetScores) as Array<keyof ScoreMetrics>).forEach(key => {
          const current = newScores[key];
          const target = targetScores[key];
          const diff = target - current;
          
          // Move 10% of the way to target (easing function)
          newScores[key] = Math.round(current + (diff * 0.1));
        });
        
        return newScores;
      });
    };
    
    // Run animation every 50ms
    const interval = setInterval(animateScores, 50);
    
    // Check if we're close enough to targets to stop
    const checkComplete = () => {
      const isComplete = (Object.keys(targetScores) as Array<keyof ScoreMetrics>).every(key => {
        return Math.abs(assessmentScores[key] - targetScores[key]) <= 1;
      });
      
      if (isComplete) {
        clearInterval(interval);
      }
    };
    
    const completionCheck = setInterval(checkComplete, 50);
    
    return () => {
      clearInterval(interval);
      clearInterval(completionCheck);
    };
  }, [activeMentor.id, assessmentScores]);

  // Scroll to bottom of conversation when new messages are added
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [conversation, typingText]);

  useEffect(() => {
    // Show example conversation when first selecting a mentor (unless user has already started chatting)
    if (!hasInteracted) {
      const exampleConvo = exampleConversations[activeMentor.id];
      if (exampleConvo) {
        // Map the example conversation to include the mentor ID
        const mentorExampleConvo = exampleConvo.map(msg => ({
          ...msg,
          mentorId: activeMentor.id
        }));
        setConversation(mentorExampleConvo);
      }
    }
  }, [activeMentor.id, hasInteracted]);

  // Simulate typing with proper text handling
  const simulateTyping = useCallback((text: string) => {
    // Validate text before typing
    const validatedText = isValidText(text) ? text : fallbackResponses[activeMentor.id];
    
    setIsTyping(true);
    setTypingText('');
    
    let i = 0;
    const typeWriter = () => {
      if (i < validatedText.length) {
        setTypingText(prev => prev + validatedText.charAt(i));
        i++;
        setTimeout(typeWriter, 30);
      } else {
        setIsTyping(false);
        // Add completed response to conversation
        setConversation(prev => [...prev, {
          role: 'mentor',
          text: validatedText,
          mentorId: activeMentor.id
        }]);
        setTypingText('');
      }
    };
    
    typeWriter();
  }, [activeMentor.id]);

  // Add email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentIdea.trim() || isTyping || !emailSubmitted) return;
    
    // Mark that user has interacted
    setHasInteracted(true);
    
    // Validate user input
    const validatedMessage = validateAndSetMessage(currentIdea);
    
    // Add user message to conversation
    setConversation(prev => [...prev, {
      role: 'user',
      text: validatedMessage,
      mentorId: activeMentor.id // Store which mentor the message was sent to
    }]);
    
    setCurrentIdea('');
    
    // Get valid mentor response
    const mentorResponse = getMentorResponse(activeMentor);
    
    // Reset typing animation and start new response
    simulateTyping(mentorResponse);
  };

  const handleEmailSubmit = () => {
    if (isValidEmail(email)) {
      setEmailSubmitted(true);
    }
  };

  const selectSampleIdea = (idea: string) => {
    if (isTyping) return;
    
    // Mark that user has interacted
    setHasInteracted(true);
    
    // Clear any example conversation
    setConversation([]);
    
    const validatedIdea = validateAndSetMessage(idea);
    
    // Add sample idea to conversation
    setConversation(prev => [...prev, {
      role: 'user',
      text: validatedIdea,
      mentorId: activeMentor.id
    }]);
    
    // Get valid mentor response
    const mentorResponse = getMentorResponse(activeMentor);
    simulateTyping(mentorResponse);
  };

  const handleMentorChange = (mentor: Mentor) => {
    if (mentor.id === activeMentor.id || isTyping) return;
    
    setActiveMentor(mentor);
    
    // If user hasn't interacted yet, we'll show the example conversation
    // via the useEffect that watches activeMentor.id
    if (!hasInteracted) {
      // Clear previous mentor's conversation
      setConversation([]);
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-3">
            Your Creative Partners
          </span>
          <h2 className="text-3xl font-bold mb-4">Expert AI Mentors Guide Your Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pick your ideal thinking partner. Each mentor brings specialized expertise to help transform your spark of inspiration into a well-structured vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 h-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Choose Your Mentor</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Each mentor brings a unique perspective to help develop your product idea from different angles.
              </p>
              
              <div className="space-y-2">
              {mentors.map((mentor) => (
                  <button
                  key={mentor.id}
                    className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    activeMentor.id === mentor.id 
                        ? `${mentor.color} text-white`
                        : `bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-600`
                  }`}
                  onClick={() => handleMentorChange(mentor)}
                >
                    <span className="text-2xl mr-3">{mentor.avatar}</span>
                    <div className="text-left">
                      <div className="font-medium">{mentor.name}</div>
                      <div className={`text-xs ${activeMentor.id === mentor.id ? 'text-white opacity-90' : 'text-gray-800 dark:text-gray-200 font-medium'}`}>{mentor.strengths[0]}</div>
                    </div>
                  </button>
                ))}
                    </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                <p>Not sure which mentor to pick?</p>
                <button className="mt-2 text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 font-medium">
                  Try a multi-mentor session →
                </button>
                  </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className={`${activeMentor.color} px-4 sm:px-6 py-4 text-white flex items-center`}>
                <div className="text-2xl mr-3">{activeMentor.avatar}</div>
                  <div>
                  <h3 className="font-bold text-lg">{activeMentor.name} Mentor</h3>
                  <p className="text-xs opacity-90">{activeMentor.style}</p>
                </div>
              </div>

              <div 
                ref={conversationRef}
                className="flex-grow px-4 sm:px-6 py-4 overflow-y-auto h-64 sm:h-80 flex flex-col space-y-2"
              >
                {/* Render conversation messages */}
                {conversation.map((message, index) => (
                  <div key={index} className={`flex mb-2`}>
                    {message.role === 'user' ? (
                      // User message
                      <>
                        <div className="flex-1"></div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl rounded-tr-none max-w-[80%] sm:max-w-md">
                          <p className="text-sm text-gray-700 dark:text-gray-300">{message.text}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 ml-3 flex-shrink-0">
                          👤
                        </div>
                      </>
                    ) : (
                      // Mentor message
                      <>
                        {/* Get mentor info by ID */}
                        {(() => {
                          const mentor = mentors.find(m => m.id === message.mentorId) || activeMentor;
                          return (
                            <>
                              <div className={`w-8 h-8 rounded-full ${mentor.color} flex items-center justify-center text-white flex-shrink-0`}>
                                {mentor.avatar}
                              </div>
                              <div className={`ml-3 ${mentor.lightBg} dark:${mentor.darkBg} p-3 rounded-xl rounded-tl-none max-w-[80%] sm:max-w-md`}>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                  {message.text}
                                </p>
                              </div>
                              <div className="flex-1"></div>
                            </>
                          );
                        })()}
                      </>
                    )}
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className={`flex mb-2`}>
                    <div className={`w-8 h-8 rounded-full ${activeMentor.color} flex items-center justify-center text-white flex-shrink-0`}>
                            {activeMentor.avatar}
                          </div>
                    <div className={`ml-3 ${activeMentor.lightBg} dark:${activeMentor.darkBg} p-3 rounded-xl rounded-tl-none max-w-[80%] sm:max-w-md`}>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                              {typingText}
                        <span className="inline-block h-4 w-2 ml-1 bg-gray-500 animate-pulse"></span>
                      </p>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                )}
                
                {/* Empty state */}
                {conversation.length === 0 && !isTyping && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="text-4xl mb-3">💬</div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Start a conversation</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Choose a mentor and describe your product idea
                            </p>
                          </div>
                )}
                      </div>

              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                {!emailSubmitted ? (
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Enter your email to start a conversation
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="youremail@example.com"
                        className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-gray-700 dark:text-gray-300"
                      />
                      <button
                        onClick={handleEmailSubmit}
                        disabled={!isValidEmail(email)}
                        className={`px-4 py-2 ${activeMentor.color} text-white rounded-lg transition-colors flex-shrink-0 ${
                          !isValidEmail(email) ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      We'll use this to save your conversation and send you insights from our mentors.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input 
                          type="text" 
                          value={currentIdea}
                          onChange={(e) => setCurrentIdea(e.target.value)}
                      placeholder="Describe your product idea..."
                      className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 text-gray-700 dark:text-gray-300"
                        />
                        <button 
                          type="submit"
                      disabled={isTyping || !currentIdea.trim()}
                      className={`px-4 py-2 ${activeMentor.color} text-white rounded-lg transition-colors flex-shrink-0 whitespace-nowrap ${
                        isTyping || !currentIdea.trim() ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                        >
                      Start a conversation
                        </button>
                      </form>
                )}
                
                {!hasInteracted && conversation.length === 0 && !isTyping && emailSubmitted && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Try one of these sample ideas:</p>
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => selectSampleIdea("I'm thinking of creating a voice-controlled smart home assistant that integrates with existing platforms.")}
                        className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        Voice assistant
                      </button>
                      <button 
                        onClick={() => selectSampleIdea("I want to build a voice-controlled smart home system with privacy as the core feature.")}
                        className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        Privacy-focused voice assistant
                      </button>
                      <button 
                        onClick={() => selectSampleIdea("I'm creating a voice assistant that works with all smart home brands.")}
                        className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        Universal smart home control
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 