"use client"

import { useTheme } from "next-themes"

export default function BackgroundElements() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)/0.2) 1px, transparent 1px), 
                            linear-gradient(to bottom, hsl(var(--primary)/0.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px] bg-primary/30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.1] blur-[100px] bg-accent/30" />

      {/* Accent lines */}
      <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Floating dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)/0.7) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)) 1px, transparent 1px, transparent 10px)`,
        }}
      />
    </div>
  )
}

