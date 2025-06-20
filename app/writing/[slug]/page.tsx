import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostData, getAllPostSlugs } from "@/lib/mdUtils"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug)
  return { title: post.title }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <header className="mb-16 space-y-4">
        <div>
          <h1 className="text-2xl font-medium">Christopher Pondoc</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            home
          </Link>
          <Link href="/writing" className="text-muted-foreground hover:text-foreground">
            writing
          </Link>
        </nav>
      </header>

      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-muted-foreground block mb-8">{post.date}</time>
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <footer className="mt-16 pt-8 border-t">
        <Link href="/writing" className="text-muted-foreground hover:text-foreground">
          ← Back to all posts
        </Link>
      </footer>
    </div>
  )
}

