'use client';

import Nav from './Nav';
import Hero from './Hero';
import RaycastShowcase from './RaycastShowcase';
import Extensions from './Extensions';
import AISection from './AISection';
import Automation from './Automation';
import Keyboard from './Keyboard';
import Testimonials from './Testimonials';
import WhatElse from './WhatElse';
import { Tagline, Community, Developers, CTA, Footer } from './Sections';

export default function RaycastInspiredPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* Fixed navigation */}
      <Nav />

      {/* Main content */}
      <main>
        {/* Hero with animated gradient blinds background */}
        <Hero />

        {/* Raycast interactive showcase — macbook mockup with feature tabs */}
        <RaycastShowcase />

        {/* Extensions carousel */}
        <Extensions />

        {/* AI section */}
        <AISection />

        {/* Keyboard section with 3D tilt */}
        <Keyboard />

        {/* Automation / snippets / quicklinks */}
        <Automation />

        {/* Tagline break */}
        <Tagline />

        {/* Testimonials */}
        <Testimonials />

        {/* What else section */}
        <WhatElse />

        {/* Community */}
        <Community />

        {/* Developers section */}
        <Developers />

        {/* Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
