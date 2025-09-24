import { Header } from "@/components/header"
import { InternshipForm } from "@/components/internship-form"

export default function PostInternshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-balance mb-4">Post an Internship</h1>
            <p className="text-muted-foreground text-balance">
              Find talented students and recent graduates for your internship program.
            </p>
          </div>

          <InternshipForm />
        </div>
      </div>
    </div>
  )
}
