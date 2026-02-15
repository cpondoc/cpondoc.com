import { getPageContent } from "@/lib/mdUtils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const homeContent = getPageContent("home")

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <Header />

      {/* Introduction */}
      <section className="prose prose-slate max-w-none mb-16 space-y-4">
        <div 
          className="text-lg leading-relaxed [&_a]:font-medium [&_a]:hover:text-primary"
          dangerouslySetInnerHTML={{ __html: homeContent.content }}
        />
      </section>

      <Footer />
    </div>
  )
}
