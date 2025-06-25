export interface ContactSubmission {
  _id?: string
  name: string
  email: string
  message: string
  createdAt?: Date
  status?: "new" | "read" | "replied"
}

export const contactSchema = {
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  message: { type: "string", required: true },
  createdAt: { type: "date", default: Date.now },
  status: { type: "string", default: "new", enum: ["new", "read", "replied"] },
}
