"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Event Chair",
      organization: "Presidency University",
      image: "/placeholder.svg",
    },
    {
      name: "Smt. Anupama Singh",
      role: "Police Coordinator",
      organization: "Karnataka State Police",
      image: "/placeholder.svg",
    },
    {
      name: "Prof. Aditya Sharma",
      role: "Technical Lead",
      organization: "Presidency University",
      image: "/placeholder.svg",
    },
    {
      name: "Mr. Vikram Desai",
      role: "Industry Mentor",
      organization: "Tech Solutions Inc.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          Organizing Team
        </h2>
        <p className="mt-4 text-gold-100/80 mx-auto max-w-[700px]">
          Meet the dedicated team behind the Namma Suraksha Hackathon
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="overflow-hidden bg-navy-800/50 backdrop-blur-sm border-gold-500/30 h-full">
              <CardContent className="p-6">
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-gold-500/50">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gold-100">{member.name}</h3>
                  <p className="text-gold-400">{member.role}</p>
                  <p className="text-sm text-gold-100/70">{member.organization}</p>

                  <div className="mt-4 flex justify-center gap-3">
                    <a href="#" className="text-gold-100/70 hover:text-gold-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-gold-100/70 hover:text-gold-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-gold-100/70 hover:text-gold-400 transition-colors">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

