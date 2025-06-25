import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Engineer - Full Stack Developer Portfolio",
  description:
    "Portfolio of a creative full-stack developer specializing in modern web applications, UI/UX design, and software engineering.",
  keywords: "full-stack developer, web developer, UI/UX designer, software engineer, portfolio",
  authors: [{ name: "Creative Engineer" }],
  openGraph: {
    title: "Creative Engineer - Full Stack Developer Portfolio",
    description: "Portfolio of a creative full-stack developer specializing in modern web applications.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
