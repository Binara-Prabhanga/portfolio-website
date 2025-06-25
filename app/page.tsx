"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="Hero Background" fill className="object-cover opacity-30" priority />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 creative-text">CREATIVE</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Front-End Developer | UI and UX Designer | Software Engineer
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-foreground/80">ENGINEER</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-4">SCROLL TO KNOW MORE</p>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Crafting Digital Experiences</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating innovative web
              applications. With expertise in modern technologies and a creative approach to problem-solving, I bring
              ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glow-effect">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, I handle every aspect of web development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description:
                  "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
                icon: "🎨",
              },
              {
                title: "Backend Engineering",
                description:
                  "Building robust APIs and server-side applications with Node.js, databases, and cloud services.",
                icon: "⚙️",
              },
              {
                title: "UI/UX Design",
                description:
                  "Designing intuitive user experiences with attention to detail and modern design principles.",
                icon: "✨",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
