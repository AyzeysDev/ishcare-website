// components/layout/ModernNavbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/config/nav';
import { cn } from '@/lib/utils';

/**
 * A modern, floating, and adaptive navigation bar that changes on scroll.
 * It features an animated active link indicator and a responsive mobile menu.
 */
export default function ModernNavbar() {
  const [active, setActive] = useState(navItems[0].name);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to detect scroll position for styling changes
  useEffect(() => {
    const handleScroll = () => {
      // The scroll threshold is now very small to trigger the effect almost immediately
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial state on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
      >
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "w-full max-w-7xl mx-auto px-6 transition-all duration-300",
            isScrolled
              ? "py-2 rounded-full mt-2 bg-white/90 shadow-lg backdrop-blur-lg"
              : "py-4 bg-transparent"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo1.png" 
                alt="Illawarra Specialist Healthcare Logo"
                width={isScrolled ? 140 : 160}
                height={40}
                className="transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center gap-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active === item.name
                      ? (isScrolled ? "text-blue-900" : "text-white")
                      : (isScrolled ? "text-gray-600 hover:text-blue-900" : "text-gray-300 hover:text-white")
                  )}
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="active-pill"
                      className={cn(
                        "absolute inset-0 rounded-full",
                        isScrolled ? "bg-blue-500/20" : "bg-white/20"
                      )}
                      style={{ borderRadius: 9999 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Call Now Button */}
            <div className="hidden md:block">
              <button className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Call Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
                <svg className={cn("w-6 h-6 transition-colors duration-300", isScrolled ? "text-gray-800" : "text-white")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-24 inset-x-4 z-40 bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 px-5 py-3 text-md font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
