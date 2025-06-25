import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { ContactSubmission } from "@/lib/models/Contact"

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("portfolio")
    const contactData: ContactSubmission = await request.json()

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Add timestamp and default status
    contactData.createdAt = new Date()
    contactData.status = "new"

    const result = await db.collection<ContactSubmission>("contacts").insertOne(contactData)

    return NextResponse.json({ message: "Contact form submitted successfully", id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("portfolio")
    const contacts = await db.collection<ContactSubmission>("contacts").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
