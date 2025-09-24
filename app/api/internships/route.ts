import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { InternshipFormData } from "@/lib/types"

// GET all internships
export async function GET(request: NextRequest) {
  try {
    console.log("[v0] GET /api/internships called")
    const client = await clientPromise
    console.log("[v0] MongoDB client connected")
    const db = client.db("internship_portal")

    const internships = await db
      .collection("internships")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    console.log("[v0] Found", internships.length, "internships in database")

    // Convert _id and dates to string for frontend
    const sanitizedInternships = internships.map((i) => ({
      ...i,
      _id: i._id.toString(),
      createdAt: i.createdAt.toISOString(),
      updatedAt: i.updatedAt.toISOString(),
      applicationDeadline: i.applicationDeadline
        ? new Date(i.applicationDeadline).toISOString()
        : null,
    }))

    return NextResponse.json(sanitizedInternships)
  } catch (error) {
    console.error("[v0] Database error:", error)
    return NextResponse.json(
      { error: "Failed to fetch internships" },
      { status: 500 }
    )
  }
}

// POST a new internship
export async function POST(request: NextRequest) {
  try {
    const body: InternshipFormData = await request.json()
    console.log("[v0] POST /api/internships called with:", body)

    // Validate required fields
    const requiredFields = [
      "title",
      "company",
      "location",
      "type",
      "duration",
      "description",
      "requirements",
      "skills",
      "applicationDeadline",
      "contactEmail",
    ]
    for (const field of requiredFields) {
      if (!body[field as keyof InternshipFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const client = await clientPromise
    const db = client.db("internship_portal")

    // Transform the data for MongoDB
    const internshipData = {
      title: body.title,
      company: body.company,
      location: body.location,
      type: body.type,
      duration: body.duration,
      description: body.description,
      requirements: body.requirements
        .split("\n")
        .map((req) => req.trim())
        .filter((req) => req),
      skills: body.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill),
      stipend: body.stipend || null,
      applicationDeadline: new Date(body.applicationDeadline),
      contactEmail: body.contactEmail,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("internships").insertOne(internshipData)
    console.log("[v0] Internship inserted with ID:", result.insertedId)

    return NextResponse.json(
      { message: "Internship created successfully", id: result.insertedId.toString() },
      { status: 201 }
    )
  } catch (error) {
    console.error("[v0] Database error:", error)
    return NextResponse.json(
      { error: "Failed to create internship" },
      { status: 500 }
    )
  }
}
