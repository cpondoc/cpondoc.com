import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
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
        <Link href="mailto:clpondoc@cs.stanford.edu" className="text-muted-foreground hover:text-foreground">
          <Mail className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </footer>
  )
}
