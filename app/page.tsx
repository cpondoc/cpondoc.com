import type { Metadata } from "next"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Chris Pondoc",
}

export default function Page() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      {/* Header */}
      <header className="mb-16 space-y-4">
        <div>
          <h1 className="text-2xl font-medium">Chris Pondoc</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-foreground font-medium">
            home
          </Link>
          <Link href="/writing" className="text-muted-foreground hover:text-foreground">
            writing
          </Link>
        </nav>
      </header>

      {/* Introduction */}
      <section className="prose prose-slate max-w-none mb-16 space-y-4">
        <p className="text-lg leading-relaxed">
          I'm a master's student at Stanford studying computer science. Currently, I'm working on {" "}
          <Link
            href="https://douwekiela.github.io/"
            className="font-medium hover:text-primary"
          >
            information retrieval research
          </Link>{" "} and helping software projects in
          {" "} <Link
            href="https://stanford.edu/class/cs210/index.html"
            className="font-medium hover:text-primary"
          >
            CS 210
          </Link>
          .
        </p>

        <p className="text-lg leading-relaxed">
          I also did my undergrad at Stanford, also in computer science. During that time, I did engineering at{" "}
          <Link href="https://www.splunk.com/" className="font-medium hover:text-primary">
            Splunk
          </Link>{" "}
          and{" "}
          <Link href="https://www.coinbase.com/" className="font-medium hover:text-primary">
            Coinbase
          </Link>
          , published{" "}
          <Link href="https://scholar.google.com/citations?user=9SLlqYkAAAAJ&hl=en" className="font-medium hover:text-primary">
            ML research
          </Link>, and got <Link href="https://www.tcv.com/" className="font-medium hover:text-primary">
            involved
          </Link>{" "}
          <Link href="https://academy.unusual.vc/" className="font-medium hover:text-primary">
            with
          </Link>{" "} <Link href="https://www.loom.com/share/447352ad1e5a4b7aba343abff16d4991?sid=09591bc5-7af6-402e-97f0-37490d7d9f17" className="font-medium hover:text-primary">
            startups
          </Link>.
        </p>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-8 border-t">
        <div className="flex gap-4">
          <Link href="https://github.com/cpondoc" className="text-muted-foreground hover:text-foreground">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/pondoc" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:clpondoc@stanford.edu" className="text-muted-foreground hover:text-foreground">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

