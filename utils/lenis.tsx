"use client";

import { ReactLenis as Lenis } from "@studio-freight/react-lenis";

export function ReactLenis({
  root,
  options,
  children,
  ...props
}: {
  root?: boolean;
  options?: any;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Lenis root={root} options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, ...options }} {...props}>
      {children}
    </Lenis>
  );
}
