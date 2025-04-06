"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Database, Lock, Leaf } from "lucide-react"
import { motion } from "framer-motion"

export default function ThematicCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const themes = [
    {
      title: "Public Safety",
      description:
        "Develop solutions that enhance emergency response, community policing, and public safety infrastructure.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/70",
      iconColor: "text-blue-400",
    },
    {
      title: "Data Analytics",
      description: "Create data-driven solutions for crime prediction, resource allocation, and pattern recognition.",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/70",
      iconColor: "text-purple-400",
    },
    {
      title: "Cybersecurity",
      description:
        "Build tools to protect digital infrastructure, prevent cyber crimes, and enhance digital forensics.",
      icon: <Lock className="h-8 w-8" />,
      color: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      hoverColor: "group-hover:border-red-500/70",
      iconColor: "text-red-400",
    },
    {
      title: "Sustainability",
      description:
        "Develop eco-friendly solutions for environmental monitoring, disaster management, and sustainable policing.",
      icon: <Leaf className="h-8 w-8" />,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500/70",
      iconColor: "text-green-400",
    },
  ]

  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          Hackathon Themes
        </h2>
        <p className="mt-4 text-gold-100/80 mx-auto max-w-[700px]">
          Explore these four key areas and develop innovative solutions
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card
              className={`group h-full overflow-hidden bg-gradient-to-br ${theme.color} backdrop-blur-sm ${theme.borderColor} ${theme.hoverColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold-500/10`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy-800/50 ${theme.iconColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  {theme.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gold-100">{theme.title}</h3>
                <p className="text-gold-100/80 flex-grow">{theme.description}</p>

                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 pt-4 border-t border-gold-500/20"
                  >
                    <span className="text-sm text-gold-400">Click to explore this theme</span>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

