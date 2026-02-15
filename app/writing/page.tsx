import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdUtils"
import WritingList from "@/components/WritingList"

export const metadata: Metadata = {
  title: "Writing",
}

export default function WritingPage() {
  const posts = getAllPosts()
  return <WritingList posts={posts} />
}

