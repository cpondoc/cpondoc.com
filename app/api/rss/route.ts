import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/mdUtils"

export async function GET() {
  const posts = getAllPosts()
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Your Blog Title</title>
      <link>https://yourdomain.com</link>
      <description>Your blog description</description>
      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>https://yourdomain.com/writing/${post.slug}</link>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${post.excerpt}</description>
        </item>
      `,
        )
        .join("")}
    </channel>
  </rss>`

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

