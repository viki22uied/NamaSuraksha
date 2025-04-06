"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Who can participate in the Namma Suraksha Hackathon?",
      answer:
        "The hackathon is open to students, professionals, startups, and innovators from across India. Participants can form teams of 2-4 members. Cross-disciplinary teams are encouraged to bring diverse perspectives to the solutions.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in the Namma Suraksha Hackathon is completely free of charge. We believe in providing equal opportunities for all innovators to showcase their talent.",
    },
    {
      question: "What kind of solutions are expected?",
      answer:
        "We're looking for innovative solutions in four key areas: public safety, data analytics, cybersecurity, and sustainability. Your solution should address real-world challenges faced by law enforcement and communities in these domains.",
    },
    {
      question: "Will there be mentorship available?",
      answer:
        "Yes, participants will have access to mentors from the Karnataka State Police, technology experts, and industry professionals throughout the hackathon. Mentors will provide guidance on technical aspects as well as domain-specific knowledge.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Solutions will be judged based on innovation, technical implementation, feasibility, scalability, and potential impact. The judging panel will include representatives from Karnataka State Police, Presidency University, and industry experts.",
    },
    {
      question: "Do we need to bring our own hardware/equipment?",
      answer:
        "Yes, participants are expected to bring their own laptops and any specific hardware required for their solution. Basic internet connectivity and power supply will be provided at the venue.",
    },
  ]

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gold-100/80 mx-auto max-w-[700px]">
          Find answers to common questions about the Namma Suraksha Hackathon
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className={`overflow-hidden transition-all duration-300 hover:shadow-md bg-navy-800/50 backdrop-blur-sm border-gold-500/30 ${
              openIndex === index ? "ring-1 ring-gold-400" : ""
            }`}
          >
            <CardContent className="p-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gold-100">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 text-gold-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gold-100/80">{faq.answer}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

