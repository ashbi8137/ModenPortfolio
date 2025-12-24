export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t bg-card/50 backdrop-blur-sm" style={{ cursor: 'url(/icon.png), auto' }}>
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ashbin P A. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/30 font-mono">
          v2.2 Gold Edition
        </p>
      </div>
    </footer>
  )
}

