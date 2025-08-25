// components/sections/HeroBanner.tsx
"use client";

import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';

/**
 * The main hero section for the landing page.
 * Features the clinic name and a subtitle over an animated background with an integrated grid.
 */
export default function HeroBanner() {
  return (
    // The main container with a relative position to anchor all layers
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image.png')" }} // Assumes image is in public/images/
      />
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 h-full w-full bg-[#0A192F] opacity-70" />

      {/* UPDATED: Reverted to the original square grid pattern */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]"
        )}
      />
      
      {/* The content is now a direct child, positioned with z-index */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-4xl lg:text-7xl font-bold text-center text-white">
          Illawarra Specialist Healthcare
        </h1>
        <p className="mt-4 text-lg text-white/70 md:text-xl">
          Specialising in your wellbeing first.
        </p>
        <div className="relative h-40 w-full md:w-[40rem]">
          {/* Gradients to add a soft glow */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

          {/* Core Sparkles Component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={1000}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient for a centered vignette effect */}
          <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
    </div>
  );
};
