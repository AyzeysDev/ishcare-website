// app/page.tsx
import React from 'react';
import ModernNavbar from '@/components/layout/ModernNavBar';
import HeroBanner from '@/components/sections/HeroBanner';
import GridBackground from '@/components/ui/GridBackground'; // Import the new component

/**
 * This is the main homepage of the application.
 * It assembles the primary components like the navbar, hero section, and the new grid background.
 */
export default function HomePage() {
  return (
    <main className="font-sans">
      {/* The modern, animated navbar */}
      <ModernNavbar />
      
      {/* The hero banner with the Sparkles animation */}
      <HeroBanner />

      {/* The content area now uses the GridBackground component */}
      <GridBackground className="min-h-screen p-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 pt-20">Page Content Starts Here</h2>
          <p className="text-gray-600 mt-4">
            This content is now inside the grid background. Scroll down to see the navigation bar adapt.
            You can add any components or sections here, and they will appear on top of the grid.
          </p>
          {/* You can add more content or components here */}
          <div className="mt-10 h-[150vh]">
            {/* Extra space to ensure scrolling is possible */}
          </div>
        </div>
      </GridBackground>
    </main>
  );
}
