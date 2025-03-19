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
          <HeroSection />
        </section>
        
        {/* 2. Mentor Testimonials */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <MentorTestimonials />
        </section>
        
        {/* 3. Mentor Showcase */}
        <section className="bg-white dark:bg-gray-900">
          <MentorShowcase />
        </section>
        
        {/* 4. Clarity Score Showcase */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <ClarityScoreShowcase />
        </section>
        
        {/* 5. Ideas Hopper */}
        <section className="bg-white dark:bg-gray-900">
          <IdeasHopper />
        </section>
        
        {/* 6. PRD Evolution */}
        <section className="bg-gray-50 dark:bg-gray-800/50">
          <PRDEvolution />
        </section>
        
        {/* 7. Strategic Alignment */}
        <section className="bg-white dark:bg-gray-900">
          <StrategicAlignment />
        </section>
        
        {/* 8. Success Metrics Dashboard */}
        <section className="bg-white dark:bg-gray-900">
          <SuccessMetricsDashboard />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
