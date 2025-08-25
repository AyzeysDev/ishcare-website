// components/sections/HeroBanner.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';

/**
 * The main hero section for the landing page.
 * Features a two-column layout with the clinic name and subtitle on the left,
 * and an image on the right over an animated background with an integrated grid.
 */
export default function HeroBanner() {
  return (
    // The main container with a relative position to anchor all layers
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image.png')" }}
      />
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 h-full w-full bg-[#0A192F] opacity-70" />

      {/* The square grid pattern overlay */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]"
        )}
      />
      
      {/* Content container using Flexbox for the two-column layout */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        
        {/* Left Column: Text Content */}
        <div className="flex w-full flex-col text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold text-white md:text-6xl lg:text-6xl">
            Illawarra Specialist Healthcare
          </h1>
          <h4 className="mt-4 text-2xl font-bold text-white/90 md:text-6xl lg:text-2xl">
            Specialising in your wellbeing first.
          </h4>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            We are committed to providing the highest quality care possible. Our team of skilled physicians work tirelessly to ensure that each and every patient receives the best possible treatment.
          </p>
          
          {/* Sparkles container, now directly under the paragraph */}
          <div className="relative mt-6 h-40 w-full">
            {/* Gradients adjusted for the left-aligned layout */}
            <div className="absolute left-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
            <div className="absolute left-0 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="absolute left-0 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent blur-sm" />
            <div className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

            {/* Core Sparkles Component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={1000}
              className="h-full w-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient for a focused vignette effect */}
            <div className="absolute inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
        </div>

        {/* Right Column: Nurse Image (Hidden on mobile)
        <div className="hidden md:flex md:mt-0 md:w-1/2 md:justify-end">
          <Image
            src="/images/banner-1.png"
            alt="Illawarra Specialist Healthcare Nurse"
            width={550}
            height={550}
            className="h-auto w-full max-w-sm md:max-w-md"
            priority
          />
        </div> */}
      </div>
    </div>
  );
}
