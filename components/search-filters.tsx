import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function SearchFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Work Type */}
        <div>
          <h3 className="font-medium mb-3">Work Type</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="remote" />
              <Label htmlFor="remote" className="text-sm">
                Remote
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="onsite" />
              <Label htmlFor="onsite" className="text-sm">
                On-site
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="hybrid" />
              <Label htmlFor="hybrid" className="text-sm">
                Hybrid
              </Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Duration */}
        <div>
          <h3 className="font-medium mb-3">Duration</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="1-3months" />
              <Label htmlFor="1-3months" className="text-sm">
                1-3 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="3-6months" />
              <Label htmlFor="3-6months" className="text-sm">
                3-6 months
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="6months+" />
              <Label htmlFor="6months+" className="text-sm">
                6+ months
              </Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Skills */}
        <div>
          <h3 className="font-medium mb-3">Skills</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="javascript" />
              <Label htmlFor="javascript" className="text-sm">
                JavaScript
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="python" />
              <Label htmlFor="python" className="text-sm">
                Python
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="react" />
              <Label htmlFor="react" className="text-sm">
                React
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="design" />
              <Label htmlFor="design" className="text-sm">
                UI/UX Design
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
