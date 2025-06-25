"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function About() {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Python", level: 75 },
    { name: "AWS/Cloud", level: 70 },
    { name: "GraphQL", level: 65 },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 creative-text">About Me</h1>
          <p className="text-lg text-muted-foreground">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden glow-effect">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile Photo" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello, I'm a Creative Engineer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating modern, scalable web
              applications that deliver exceptional user experiences. My journey began with a fascination for how
              technology can solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding,
              you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "Node.js", "MongoDB", "AWS", "Docker"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
