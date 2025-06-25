-- This is a MongoDB script to seed blog posts
-- Run this in MongoDB Compass or MongoDB shell

use portfolio;

db.blogs.insertMany([
  {
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features in Next.js 14 and how they can improve your development workflow and application performance.",
    content: "Next.js 14 introduces several groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore the App Router, Server Components, and the new streaming capabilities that make your applications faster and more efficient...",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    publishedAt: new Date("2024-01-15"),
    readTime: 8,
    slug: "building-modern-web-applications-nextjs-14",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "The Art of Clean Code: Best Practices for JavaScript Developers",
    excerpt: "Learn essential principles and practices for writing maintainable, readable, and efficient JavaScript code that scales with your projects.",
    content: "Writing clean code is an art that every developer should master. In this article, we'll dive deep into the principles that make JavaScript code not just functional, but beautiful and maintainable. From naming conventions to function design, we'll cover it all...",
    tags: ["JavaScript", "Clean Code", "Best Practices", "Software Engineering"],
    publishedAt: new Date("2024-01-10"),
    readTime: 12,
    slug: "art-of-clean-code-javascript-best-practices",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Mastering MongoDB: From Basics to Advanced Queries",
    excerpt: "A comprehensive guide to MongoDB covering everything from basic CRUD operations to complex aggregation pipelines and performance optimization.",
    content: "MongoDB has become one of the most popular NoSQL databases, and for good reason. Its flexibility and scalability make it perfect for modern applications. In this tutorial, we'll start with the basics and work our way up to advanced querying techniques...",
    tags: ["MongoDB", "Database", "NoSQL", "Backend Development"],
    publishedAt: new Date("2024-01-05"),
    readTime: 15,
    slug: "mastering-mongodb-basics-to-advanced-queries",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
