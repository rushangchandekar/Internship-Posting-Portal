export interface Internship {
  _id?: string
  title: string
  company: string
  location: string
  type: "remote" | "on-site" | "hybrid"
  duration: string
  description: string
  requirements: string[]
  skills: string[]
  stipend?: string
  applicationDeadline: Date
  contactEmail: string
  createdAt: Date
  updatedAt: Date
}

export interface InternshipFormData {
  title: string
  company: string
  location: string
  type: "remote" | "on-site" | "hybrid"
  duration: string
  description: string
  requirements: string
  skills: string
  stipend?: string
  applicationDeadline: string
  contactEmail: string
}
