import Link from "next/link"
import Header from "@/components/Header"

interface BlogPostProps {
  title: string
  date: string
  content: string
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <Header />

      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <time className="text-muted-foreground block mb-8">{date}</time>
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      <footer className="mt-16 pt-8 border-t">
        <Link href="/writing" className="text-muted-foreground hover:text-foreground">
          ← Back to all posts
        </Link>
      </footer>
    </div>
  )
}
