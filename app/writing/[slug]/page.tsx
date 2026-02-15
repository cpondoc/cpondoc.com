import { notFound } from "next/navigation"
import { getPostData, getAllPostSlugs } from "@/lib/mdUtils"
import BlogPost from "@/components/BlogPost"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug)
  return { title: post.title }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost title={post.title} date={post.date} content={post.content} />
}

