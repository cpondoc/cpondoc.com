import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processedContent = remark().use(html).processSync(content).toString()

  return {
    slug,
    ...data,
    content: processedContent,
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""))
}

export function getAllPosts() {
  const slugs = getAllPostSlugs()
  const posts = slugs.map((slug) => getPostData(slug))
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

