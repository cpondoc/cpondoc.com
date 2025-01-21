import { NextResponse } from "next/server"
import RSS from "rss"

export async function GET() {
  const feed = new RSS({
    title: "Your Blog Title",
    description: "Your blog description",
    feed_url: "https://yourdomain.com/rss.xml",
    site_url: "https://yourdomain.com",
  })

  // Add your blog posts to the feed
  feed.item({
    title: "The Future of Creative Tools",
    description: "Exploring how AI and new interfaces will transform creative work",
    url: "https://yourdomain.com/writing/future-of-creative-tools",
    date: "May 18, 2024",
  })

  // Add more items as needed

  const rss = feed.xml({ indent: true })

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

