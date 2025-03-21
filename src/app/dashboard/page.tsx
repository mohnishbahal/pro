import { Metadata } from "next";
import DashboardLayout from "./components/DashboardLayout";
import ProjectsOverview from "./components/ProjectsOverview";
import ClarityScoreMetrics from "./components/ClarityScoreMetrics";
import RecentConversations from "./components/RecentConversations";
import QuickActions from "./components/QuickActions";
import IdeasHopperPreview from "./components/IdeasHopperPreview";

export const metadata: Metadata = {
  title: "Dashboard | ProFlow",
  description: "Your ProFlow dashboard with project overview and insights",
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold mb-6">Welcome, User</h1>
          <QuickActions />
        </div>
        
        <div className="lg:col-span-2">
          <ProjectsOverview />
        </div>
        
        <div className="lg:col-span-1">
          <ClarityScoreMetrics />
        </div>
        
        <div className="lg:col-span-2">
          <IdeasHopperPreview />
        </div>
        
        <div className="lg:col-span-1">
          <RecentConversations />
        </div>
      </div>
    </DashboardLayout>
  );
} 