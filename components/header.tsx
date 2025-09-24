import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Briefcase className="h-6 w-6" />
            InternHub
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Browse Internships
            </Link>
            <Link href="/post" className="text-muted-foreground hover:text-foreground transition-colors">
              Post Internship
            </Link>
            <Button asChild>
              <Link href="/post">Post a Job</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
