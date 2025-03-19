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

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      <main className="min-h-screen overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="sr-only">Transform Ideas Into Products With AI</h2>
          </div>
          <HeroSection />
        </section>
        
        {/* 2. Mentor Testimonials */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Trusted by 500+ Innovation Leaders
              </span>
            </h2>
          </div>
          <MentorTestimonials />
        </section>
        
        {/* 3. Mentor Showcase */}
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                AI Mentors: Your Product Innovation Partners
              </span>
            </h2>
          </div>
          <MentorShowcase />
        </section>
        
        {/* 4. Clarity Score Showcase */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Clarity Score™: From Fuzzy Ideas to Clear Vision
              </span>
            </h2>
          </div>
          <ClarityScoreShowcase />
        </section>
        
        {/* 5. Ideas Hopper */}
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Ideas Hopper: Prioritize What Matters Most
              </span>
            </h2>
          </div>
          <IdeasHopper />
        </section>
        
        {/* 6. PRD Evolution */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                AI-Powered PRD: Build Your Blueprint for Success
              </span>
            </h2>
          </div>
          <PRDEvolution />
        </section>
        
        {/* 7. Strategic Alignment */}
        <section className="bg-white dark:bg-gray-900">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Strategic Alignment: Connect Products to Business Goals
              </span>
            </h2>
          </div>
          <StrategicAlignment />
        </section>
        
        {/* 8. Success Metrics Dashboard */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto pt-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Measure the ROI of Innovation
              </span>
            </h2>
          </div>
          <SuccessMetricsDashboard />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
