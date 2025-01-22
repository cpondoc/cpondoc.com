import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/mdUtils"
import { Github, Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Writing",
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <header className="mb-16 space-y-4">
        <div>
          <h1 className="text-2xl font-medium">Chris Pondoc</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            home
          </Link>
          <Link href="/writing" className="text-foreground font-medium">
            writing
          </Link>
        </nav>
      </header>

      <section className="mb-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
              <article>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{post.title}</h3>
                <p className="text-muted-foreground mb-1">{post.excerpt}</p>
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </article>
            </Link>
          ))}
        </div>
      </section>

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
          <Link href="mailto:clpondoc@stanford.edu" className="text-muted-foreground hover:text-foreground">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

