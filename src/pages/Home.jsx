import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InteractiveDemo from '../components/InteractiveDemo';
import FeaturesSection from '../components/FeaturesSection';
import TechStackSection from '../components/TechStackSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

export default function Home() {
  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Home Page Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection onScrollToDemo={scrollToDemo} />
        <InteractiveDemo />
        <FeaturesSection />
        <TechStackSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
