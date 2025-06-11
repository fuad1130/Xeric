
"use client";

import { CSSProperties, ReactElement, cloneElement } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className,
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      {/* Base text layer */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated shimmer overlay */}
      <div 
        className="absolute inset-0 z-20 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundSize: `${shimmerWidth}px 100%`,
          backgroundPosition: '-100% 0',
          backgroundRepeat: 'no-repeat',
          WebkitMask: 'linear-gradient(90deg, transparent, black, transparent)',
          mask: 'linear-gradient(90deg, transparent, black, transparent)',
        }}
      />
      
      {/* Continuous shimmer effect */}
      <div 
        className="absolute inset-0 z-15 animate-shimmer-continuous"
        style={{
          background: `linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.8) 50%, transparent 75%)`,
          backgroundSize: `${shimmerWidth * 2}px 100%`,
          backgroundPosition: '-200% 0',
          backgroundRepeat: 'no-repeat',
          WebkitMask: 'linear-gradient(90deg, transparent, black, transparent)',
          mask: 'linear-gradient(90deg, transparent, black, transparent)',
        }}
      />
    </div>
  );
}
