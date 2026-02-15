import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { getPageContent } from "@/lib/mdUtils"

export default function Home() {
  const homeContent = getPageContent("home")

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      {/* Header */}
      <header className="mb-16 space-y-4">
        <div>
          <h1 className="text-2xl font-medium">Christopher Pondoc</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-foreground font-medium">
            home
          </Link>
          <Link href="/writing" className="text-muted-foreground hover:text-foreground">
            writing
          </Link>
        </nav>
      </header>

      {/* Introduction */}
      <section className="prose prose-slate max-w-none mb-16 space-y-4">
        <div 
          className="text-lg leading-relaxed [&_a]:font-medium [&_a]:hover:text-primary"
          dangerouslySetInnerHTML={{ __html: homeContent.content }}
        />
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-8 border-t">
        <div className="flex gap-4">
          <Link href="https://github.com/cpondoc" className="text-muted-foreground hover:text-foreground">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/pondoc" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:clpondoc@cs.stanford.edu" className="text-muted-foreground hover:text-foreground">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
