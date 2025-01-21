import Link from "next/link"
import { getAllPosts } from "@/lib/mdUtils"

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
        <h2 className="text-3xl font-bold mb-8">Writing</h2>
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
        <div className="font-medium">Chris Pondoc</div>
      </footer>
    </div>
  )
}

