import { Header } from "@/components/header"
import { InternshipCard } from "@/components/internship-card"
import { SearchFilters } from "@/components/search-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

async function getInternships() {
  try {
    // Use relative URL for internal API calls
    const apiUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/internships`;
    console.log(`[v0] Fetching from: ${apiUrl}`);

    const res = await fetch(apiUrl, {
      cache: "no-store",
    })

    console.log("[v0] API Response status:", res.status)

    if (!res.ok) {
      console.error("[v0] API Error:", res.status, res.statusText)
      return []
    }

    const data = await res.json()
    console.log("[v0] Fetched internships:", data.length, "items")
    return data
  } catch (error) {
    console.error("[v0] Failed to fetch internships:", error)
    return []
  }
}

export default async function HomePage() {
  const internships = await getInternships()
  console.log("[v0] Rendering homepage with", internships.length, "internships")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Find Your Perfect <span className="text-primary">Internship</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Connect with top companies and kickstart your career with meaningful internship opportunities.
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search internships, companies, or skills..." className="pl-10" />
            </div>
            <Button size="lg">Search</Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <Button variant="outline" size="sm">
              Software Engineering
            </Button>
            <Button variant="outline" size="sm">
              Marketing
            </Button>
            <Button variant="outline" size="sm">
              Data Science
            </Button>
            <Button variant="outline" size="sm">
              Design
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <SearchFilters />
          </aside>

          {/* Internship Listings */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">{internships.length} Internships Available</h2>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Most Recent</option>
                <option>Deadline Soon</option>
                <option>Company A-Z</option>
              </select>
            </div>

            <div className="space-y-4">
              {internships.length > 0 ? (
                internships.map((internship: any) => (
                  <InternshipCard key={internship._id} internship={internship} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No internships found.</p>
                  <Button asChild>
                    <a href="/post">Post the first internship</a>
                  </Button>
                </div>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}
