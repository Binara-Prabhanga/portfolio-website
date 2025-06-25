import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { BlogPost } from "@/lib/models/Blog"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("portfolio")
    const blogs = await db.collection<BlogPost>("blogs").find({}).sort({ publishedAt: -1 }).toArray()

    return NextResponse.json(blogs)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("portfolio")
    const blogData: BlogPost = await request.json()

    // Add timestamps
    blogData.createdAt = new Date()
    blogData.updatedAt = new Date()

    const result = await db.collection<BlogPost>("blogs").insertOne(blogData)

    return NextResponse.json({ message: "Blog post created successfully", id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
