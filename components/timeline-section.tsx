"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Code, Trophy, Clock } from "lucide-react"
import confetti from "canvas-confetti"

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineItems = [
    {
      date: "April 20, 2025",
      title: "Registration Closes",
      description: "Last date to register your team for the hackathon.",
      icon: <Calendar className="h-5 w-5" />,
      position: "left",
    },
    {
      date: "April 28, 2025",
      title: "Day 1: Hackathon Begins",
      description: "Inauguration and bootcamp sessions to kickstart the event.",
      icon: <Code className="h-5 w-5" />,
      position: "right",
      expandable: true,
      details: [
        { time: "9:00 AM", event: "Inauguration Session" },
        { time: "9:30 AM - 12:30 PM", event: "Bootcamp Session 1" },
        { time: "1:30 PM - 3:00 PM", event: "Collective Working Session #1" },
        { time: "3:20 PM - 5:00 PM", event: "Collective Working Session #2" },
        { time: "5:20 PM - 7:00 PM", event: "Collective Working Session #3" },
      ],
    },
    {
      date: "April 29, 2025",
      title: "Day 2: Development",
      description: "Continue working on your solutions with mentorship support.",
      icon: <Code className="h-5 w-5" />,
      position: "left",
      expandable: true,
      details: [
        { time: "9:00 AM - 10:30 AM", event: "Collective Working Session #4" },
        { time: "10:50 AM - 12:30 PM", event: "Collective Working Session #5" },
        { time: "1:30 PM - 3:00 PM", event: "Collective Session #5" },
        { time: "3:20 PM - 7:00 PM", event: "Collective Working Session #6" },
      ],
    },
    {
      date: "April 30, 2025",
      title: "Day 3: Final Day",
      description: "Presentations, judging, and winners announcement.",
      icon: <Trophy className="h-5 w-5" />,
      position: "right  and winners announcement.",
      icon: <Trophy className="h-5 w-5" />,
      position: "right",
      expandable: true,
      details: [
        { time: "9:00 AM - 10:30 AM", event: "Final Working Session & Presentations" },
        { time: "1:30 PM - 2:30 PM", event: "Jury Deliberations" },
        { time: "2:30 PM - 3:30 PM", event: "Winners Announcement & Award Ceremony" },
        { time: "3:30 PM - 4:00 PM", event: "Participation Certificate Distribution" },
      ],
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "-1")
            setActiveIndex(index)

            // Trigger confetti when the last item becomes visible
            if (index === timelineItems.length - 1) {
              setTimeout(() => {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                })
              }, 500)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const timelineElements = document.querySelectorAll(".timeline-item")
    timelineElements.forEach((el) => observer.observe(el))

    return () => {
      timelineElements.forEach((el) => observer.unobserve(el))
    }
  }, [timelineItems.length])

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          Event Timeline
        </h2>
        <p className="mt-4 text-gold-100/80 mx-auto max-w-[700px]">
          Key dates and schedule for the Namma Suraksha Hackathon
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl" ref={timelineRef}>
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gold-500/30"></div>

        {/* Timeline items */}
        <div className="space-y-16">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex transition-opacity duration-700 ${
                activeIndex >= index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Content positioning */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 w-full ${
                  item.position === "right" ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Empty column for positioning */}
                {item.position === "right" && <div className="hidden md:block"></div>}

                {/* Content card */}
                <div
                  className={`relative ${
                    activeIndex >= index
                      ? "translate-y-0"
                      : item.position === "left"
                        ? "-translate-x-10"
                        : "translate-x-10"
                  } transition-all duration-700`}
                >
                  <Card
                    className={`overflow-hidden bg-navy-800/70 backdrop-blur-sm border-gold-500/30 relative ${
                      expandedIndex === index ? "ring-2 ring-gold-400" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="mb-2 text-sm font-bold text-gold-400">{item.date}</div>
                      <h3 className="mb-2 text-xl font-bold text-gold-100">{item.title}</h3>
                      <p className="text-gold-100/80 mb-4">{item.description}</p>

                      {item.expandable && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-sm text-gold-400 hover:text-gold-300 flex items-center gap-1"
                        >
                          {expandedIndex === index ? "Hide Details" : "View Schedule"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                      )}

                      {item.expandable && expandedIndex === index && (
                        <div className="mt-4 space-y-3 pt-4 border-t border-gold-500/20 animate-fadeIn">
                          {item.details?.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Clock className="h-4 w-4 text-gold-400 mt-1 flex-shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-gold-300">{detail.time}</div>
                                <div className="text-sm text-gold-100/80">{detail.event}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Line connecting to center */}
                  <div
                    className={`absolute top-1/2 h-0.5 bg-gold-500/50 w-8 ${
                      item.position === "left" ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                    } -translate-y-1/2 hidden md:block`}
                  ></div>
                </div>

                {/* Empty column for positioning */}
                {item.position === "left" && <div className="hidden md:block"></div>}
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 border-2 border-gold-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

