"use client";

import { ReactLenis as Lenis } from "lenis/react";

export function ReactLenis({
  root,
  options,
  ...props
}: {
  root?: boolean;
  options?: any;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Lenis
      root={root}
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2, // Better touch responsiveness
        ...options
      }}
      {...props}
    />
  );
}
