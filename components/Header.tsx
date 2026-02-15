"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isWriting = pathname.startsWith("/writing")

  return (
    <header className="mb-16 space-y-4">
      <div>
        <h1 className="text-2xl font-medium">Christopher Pondoc</h1>
      </div>
      <nav className="flex gap-6">
        <Link 
          href="/" 
          className={isHome ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}
        >
          home
        </Link>
        <Link 
          href="/writing" 
          className={isWriting ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}
        >
          writing
        </Link>
      </nav>
    </header>
  )
}
