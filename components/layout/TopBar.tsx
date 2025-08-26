// components/layout/TopBar.tsx
"use client";

import React from 'react';
import { Clock, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-100 text-slate-700 border-b border-slate-200">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-2 text-xs md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <div className="flex items-center transition-colors hover:text-sky-600">
            <MapPin className="mr-2 h-4 w-4 text-sky-500" />
            <span>Welcome to ISHCARE</span>
          </div>
          <div className="flex items-center transition-colors hover:text-sky-600">
            <Clock className="mr-2 h-4 w-4 text-sky-500" />
            <span>Mon - Fri: 9.00am - 4.30pm</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-x-6 md:mt-0">
          <div className="flex items-center transition-colors hover:text-sky-600">
            <Globe className="mr-2 h-4 w-4" />
            <span>English</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-300 md:block" />
          <div className="flex items-center gap-x-4 text-slate-500">
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-sky-600">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-sky-600">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-sky-600">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-sky-600">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
