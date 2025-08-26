// components/sections/HeroBanner.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';

/**
 * The main hero section for the landing page.
 * Features a two-column layout with a light, welcoming theme.
 */
export default function HeroBanner() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image3.jpeg')" }}
      />
      
      {/* Left Side Grid Pattern - Only on left side */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        {/* Top-left corner grid */}
        <div
          className={cn(
            "absolute top-0 left-0 w-64 h-64",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
          )}
        />
        
        {/* Bottom-left corner grid */}
        <div
          className={cn(
            "absolute bottom-0 left-0 w-64 h-64",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
          )}
        />
      </div>
      
      {/* Content container using Flexbox for the two-column layout */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        
        {/* Left Column: Text Content */}
        <div className="flex w-full flex-col text-center md:w-1/2 md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Illawarra Specialist Healthcare
          </h1>
          <h4 className="mt-4 text-2xl font-bold text-sky-700 md:text-3xl lg:text-4xl">
            Specialising in your wellbeing first.
          </h4>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            We are committed to providing the highest quality care possible. Our team of skilled physicians work tirelessly to ensure that each and every patient receives the best possible treatment.
          </p>
          
          {/* Sparkles container */}
          <div className="relative mt-6 h-40 w-full">
            {/* Gradients for the sparkles */}
            <div className="absolute left-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute left-0 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="absolute left-0 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
            <div className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            {/* Core Sparkles Component with updated color */}
            <SparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={1000}
              className="h-full w-full"
              particleColor="#0ea5e9" // A nice sky blue color
            />

            {/* Radial Gradient for a vignette effect */}
            <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
        </div>

        {/* Right Column: Nurse Image (Hidden on mobile) */}
        <div className="hidden md:flex md:mt-0 md:w-1/2 md:justify-end">
          <Image
            src="/images/banner-1.png"
            alt="Illawarra Specialist Healthcare Nurse"
            width={650}
            height={650}
            className="h-auto w-full max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
