// components/ui/GridBackground.tsx
"use client";

import { cn } from "@/lib/utils";
import React from "react";

/**
 * A reusable component that provides a responsive grid background.
 * It acts as a wrapper, allowing any child components to be rendered on top.
 * @param children - The content to be displayed over the grid background.
 * @param className - Additional classes for styling the container.
 */
export default function GridBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // The main container with a relative position to anchor the grid
    <div className={cn("relative w-full bg-white", className)}>
      {/* The grid pattern using linear gradients */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          // Grid line styling
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // Dark mode grid line styling
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient to create a faded, vignette effect at the edges */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* The content passed as children is rendered here, on top of the background */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
