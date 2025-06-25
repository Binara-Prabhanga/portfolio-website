// MongoDB seeding script for portfolio database
// Run with: node scripts/seed-database.js

const { MongoClient } = require("mongodb")

const uri = process.env.MONGODB_URI || "mongodb+srv://binaraprabhanga:Rt7E3jvNTgxCkzFM@portfolio.ymz8nr9.mongodb.net/"

async function seedDatabase() {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("portfolio")

    // Clear existing data
    await db.collection("blogs").deleteMany({})
    await db.collection("contacts").deleteMany({})

    // Seed blog posts
    const blogPosts = [
      {
        title: "Building Modern Web Applications with Next.js 14",
        excerpt:
          "Explore the latest features in Next.js 14 and how they can improve your development workflow and application performance.",
        content:
          "Next.js 14 introduces several groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore the App Router, Server Components, and the new streaming capabilities that make your applications faster and more efficient. We'll also dive into the new Image component optimizations and how they can significantly improve your site's Core Web Vitals scores.",
        tags: ["Next.js", "React", "Web Development", "JavaScript"],
        publishedAt: new Date("2024-01-15"),
        readTime: 8,
        slug: "building-modern-web-applications-nextjs-14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Art of Clean Code: Best Practices for JavaScript Developers",
        excerpt:
          "Learn essential principles and practices for writing maintainable, readable, and efficient JavaScript code that scales with your projects.",
        content:
          "Writing clean code is an art that every developer should master. In this article, we'll dive deep into the principles that make JavaScript code not just functional, but beautiful and maintainable. From naming conventions to function design, we'll cover everything you need to know to write code that your future self will thank you for. We'll explore concepts like single responsibility principle, proper error handling, and effective commenting strategies.",
        tags: ["JavaScript", "Clean Code", "Best Practices", "Software Engineering"],
        publishedAt: new Date("2024-01-10"),
        readTime: 12,
        slug: "art-of-clean-code-javascript-best-practices",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mastering MongoDB: From Basics to Advanced Queries",
        excerpt:
          "A comprehensive guide to MongoDB covering everything from basic CRUD operations to complex aggregation pipelines and performance optimization.",
        content:
          "MongoDB has become one of the most popular NoSQL databases, and for good reason. Its flexibility and scalability make it perfect for modern applications. In this tutorial, we'll start with the basics and work our way up to advanced querying techniques. You'll learn about document structure, indexing strategies, aggregation pipelines, and performance optimization techniques that will make your MongoDB applications lightning fast.",
        tags: ["MongoDB", "Database", "NoSQL", "Backend Development"],
        publishedAt: new Date("2024-01-05"),
        readTime: 15,
        slug: "mastering-mongodb-basics-to-advanced-queries",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    await db.collection("blogs").insertMany(blogPosts)
    console.log("Blog posts seeded successfully")

    // Create indexes
    await db.collection("blogs").createIndex({ slug: 1 }, { unique: true })
    await db.collection("blogs").createIndex({ publishedAt: -1 })
    await db.collection("contacts").createIndex({ createdAt: -1 })

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
  }
}

seedDatabase()
