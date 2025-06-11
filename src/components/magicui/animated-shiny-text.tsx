
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
      <div className="animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [background-image:linear-gradient(110deg,transparent,rgba(255,255,255,0.9),transparent)] relative z-10">
        {children}
      </div>
    </div>
  );
}
