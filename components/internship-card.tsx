import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar, DollarSign } from "lucide-react"
import type { Internship } from "@/lib/types"

interface InternshipCardProps {
  internship: Internship
}

export function InternshipCard({ internship }: InternshipCardProps) {
  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-balance">{internship.title}</h3>
            <p className="text-primary font-medium">{internship.company}</p>
          </div>
          <Badge variant={internship.type === "remote" ? "default" : "secondary"}>{internship.type}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {internship.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {internship.duration}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Apply by {formatDate(internship.applicationDeadline)}
          </div>
          {internship.stipend && (
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              {internship.stipend}
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{internship.description}</p>

        <div className="flex flex-wrap gap-2">
          {internship.skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {internship.skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{internship.skills.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline">Save</Button>
        </div>
      </CardContent>
    </Card>
  )
}
