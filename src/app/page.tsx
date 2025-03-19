'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from "./components/home/HeroSection";
import ClarityScoreShowcase from "./components/home/ClarityScoreShowcase";
import MentorShowcase from "./components/home/MentorShowcase";
import MentorTestimonials from "./components/home/MentorTestimonials";
import PRDEvolution from "./components/home/PRDEvolution";
import StrategicAlignment from "./components/home/StrategicAlignment";
import SuccessMetricsDashboard from "./components/home/SuccessMetricsDashboard";
import IdeasHopper from "./components/home/IdeasHopper";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";
import FlowLines from "./components/ui/FlowLines";

// Array of section data for navigation and highlights
const sections = [
  { id: "hero", name: "Home", icon: "🏠" },
  { id: "testimonials", name: "Testimonials", icon: "💬" },
  { id: "mentors", name: "AI Mentors", icon: "🧠" },
  { id: "clarity", name: "Clarity Score", icon: "✨" },
  { id: "ideas", name: "Ideas Hopper", icon: "💡" },
  { id: "prd", name: "PRD Evolution", icon: "📝" },
  { id: "alignment", name: "Strategic Alignment", icon: "🎯" },
  { id: "metrics", name: "Success Metrics", icon: "📊" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const { scrollYProgress } = useScroll({ target: mainRef });
  
  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);
  
  // Observer for section visibility
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    // Observe which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    // Observe all section elements
    Object.keys(sectionRefs.current).forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Helper function for setting section refs
  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };
  
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Visual Flow Lines */}
      <FlowLines count={5} opacity={0.15} />
      
      {/* Floating Section Navigator */}
      <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 py-2 px-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hidden md:flex">
        {sections.map((section) => (
          <a 
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center justify-center p-2 mx-1 rounded-full transition-all duration-300 group ${
              activeSection === section.id 
                ? 'bg-indigo-500 text-white' 
                : 'hover:bg-indigo-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className="block sm:hidden">{section.icon}</span>
            <span className={`hidden sm:block text-xs font-medium ${
              activeSection === section.id ? '' : 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
            }`}>
              {section.name}
            </span>
          </a>
        ))}
      </div>
      
      {/* Flowing Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl"></div>
        </motion.div>
        <motion.div
          style={{ opacity: gradientOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/30 dark:to-transparent"
        ></motion.div>
      </div>
      
      <main ref={mainRef} className="min-h-screen overflow-x-hidden relative">
        {/* 1. Hero Section */}
        <section 
          id="hero" 
          ref={setSectionRef('hero')}
          className="relative"
        >
          <HeroSection />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-start justify-center p-1">
              <motion.div 
                animate={{ 
                  y: [0, 12, 0] 
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-2 h-2 bg-indigo-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </section>
        
        {/* 2. Mentor Testimonials */}
        <section 
          id="testimonials" 
          ref={setSectionRef('testimonials')}
          className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/70"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-24 top-0 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
          </div>
          <ScrollReveal>
            <MentorTestimonials />
          </ScrollReveal>
        </section>
        
        {/* 3. Mentor Showcase */}
        <section 
          id="mentors" 
          ref={setSectionRef('mentors')}
          className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/30 to-transparent dark:from-indigo-950/20 dark:to-transparent"></div>
          </div>
          <ScrollReveal direction="right">
            <MentorShowcase />
          </ScrollReveal>
        </section>
        
        {/* 4. Clarity Score Showcase */}
        <section 
          id="clarity" 
          ref={setSectionRef('clarity')}
          className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/70"
        >
          <ScrollReveal direction="left">
            <ClarityScoreShowcase />
          </ScrollReveal>
        </section>
        
        {/* 5. Ideas Hopper */}
        <section 
          id="ideas" 
          ref={setSectionRef('ideas')}
          className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900"
        >
          <ScrollReveal>
            <IdeasHopper />
          </ScrollReveal>
        </section>
        
        {/* 6. PRD Evolution */}
        <section 
          id="prd" 
          ref={setSectionRef('prd')}
          className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/70"
        >
          <ScrollReveal direction="right">
            <PRDEvolution />
          </ScrollReveal>
          <div className="absolute w-full h-40 top-0 left-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 pointer-events-none"></div>
        </section>
        
        {/* 7. Strategic Alignment */}
        <section 
          id="alignment" 
          ref={setSectionRef('alignment')}
          className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/70 dark:to-gray-900"
        >
          <ScrollReveal direction="left">
            <StrategicAlignment />
          </ScrollReveal>
        </section>
        
        {/* 8. Success Metrics Dashboard */}
        <section 
          id="metrics" 
          ref={setSectionRef('metrics')}
          className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50"
        >
          <ScrollReveal>
            <SuccessMetricsDashboard />
          </ScrollReveal>
          <div className="absolute -bottom-px left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10"></div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
