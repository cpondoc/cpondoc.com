import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")
const contentDirectory = path.join(process.cwd(), "content")

interface PostData {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  [key: string]: unknown
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processedContent = remark().use(html).processSync(content).toString()

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
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

interface PageContent {
  content: string
  [key: string]: unknown
}

export function getPageContent(pageName: string): PageContent {
  const fullPath = path.join(contentDirectory, `${pageName}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processedContent = remark().use(html).processSync(content).toString()

  return {
    ...data,
    content: processedContent,
  }
}