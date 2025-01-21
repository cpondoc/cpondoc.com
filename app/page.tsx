import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

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
          I'm a co-terminal master's student at Stanford studying computer science. Currently, I'm working on
          information retrieval research alongside of{" "}
          <Link
            href="https://scholar.google.com/citations?user=7Vd7QFYAAAAJ"
            className="font-medium hover:text-primary"
          >
            Douwe Kiela
          </Link>
          .
        </p>

        <p className="text-lg leading-relaxed">
          I also did my undergrad at Stanford, also in computer science. While there, I worked on data and
          infrastructure teams at{" "}
          <Link href="https://www.splunk.com/" className="font-medium hover:text-primary">
            Splunk
          </Link>{" "}
          and{" "}
          <Link href="https://www.coinbase.com/" className="font-medium hover:text-primary">
            Coinbase
          </Link>
          ; published{" "}
          <Link href="#" className="font-medium hover:text-primary">
            ML research
          </Link>{" "}
          across human-AI interaction, computer vision, and reinforcement learning; and also got involved with startups,
          both on the venture side at{" "}
          <Link href="https://www.tcv.com/" className="font-medium hover:text-primary">
            TCV
          </Link>{" "}
          as well as building my{" "}
          <Link href="#" className="font-medium hover:text-primary">
            own
          </Link>
          .
        </p>

        <p className="text-lg leading-relaxed">
          Feel free to check out my{" "}
          <Link href="https://github.com/chrispondoc" className="font-medium hover:text-primary">
            Github
          </Link>{" "}
          and reach out through{" "}
          <Link href="mailto:your@email.com" className="font-medium hover:text-primary">
            email
          </Link>{" "}
          or{" "}
          <Link href="https://linkedin.com/in/chrispondoc" className="font-medium hover:text-primary">
            LinkedIn
          </Link>
          .
        </p>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-8 border-t">
        <div className="font-medium">Chris Pondoc</div>
        <div className="flex gap-4">
          <Link href="https://github.com/chrispondoc" className="text-muted-foreground hover:text-foreground">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/chrispondoc" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

