import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
}

interface WritingListProps {
  posts: Post[]
}

export default function WritingList({ posts }: WritingListProps) {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <Header />

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

      <Footer />
    </div>
  )
}
