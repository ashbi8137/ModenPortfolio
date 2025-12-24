import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ReactLenis } from "@/utils/lenis"
import { cn } from "@/lib/utils"
import TransitionWrapper from "@/components/TransitionWrapper"
import BackgroundElements from "@/components/background-elements"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ashbin P A | Digital Experience",
  description: "Personal portfolio of Ashbin P A - Crafting premium digital experiences.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        manrope.variable,
        playfair.variable
      )}>
        <ReactLenis root>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <BackgroundElements />
            <TransitionWrapper>
              {children}
            </TransitionWrapper>
            <Toaster />
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  )
}