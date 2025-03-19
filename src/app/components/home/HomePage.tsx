'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ClarityScoreShowcase from './ClarityScoreShowcase';
import MentorShowcase from './MentorShowcase';
import MentorTestimonials from './MentorTestimonials';
import PRDEvolution from './PRDEvolution';
import StrategicAlignment from './StrategicAlignment';
import SuccessMetricsDashboard from './SuccessMetricsDashboard';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MentorShowcase />
      <ClarityScoreShowcase />
      <MentorTestimonials />
      <PRDEvolution />
      <StrategicAlignment />
      <SuccessMetricsDashboard />
    </main>
  );
} 