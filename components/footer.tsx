export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t bg-card/50 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ashbin P A. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

