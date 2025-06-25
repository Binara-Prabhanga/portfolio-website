export interface BlogPost {
  _id?: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  publishedAt: Date
  readTime: number
  slug: string
  createdAt?: Date
  updatedAt?: Date
}

export const blogSchema = {
  title: { type: "string", required: true },
  excerpt: { type: "string", required: true },
  content: { type: "string", required: true },
  tags: { type: "array", required: true },
  publishedAt: { type: "date", required: true },
  readTime: { type: "number", required: true },
  slug: { type: "string", required: true, unique: true },
  createdAt: { type: "date", default: Date.now },
  updatedAt: { type: "date", default: Date.now },
}
