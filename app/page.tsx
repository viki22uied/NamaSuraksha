"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronDown, Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import TimelineSection from "@/components/timeline-section"
import ThematicCards from "@/components/thematic-cards"
import FAQSection from "@/components/faq-section"
import TeamSection from "@/components/team-section"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  // Hackathon end date
  const endDate = new Date("April 30, 2025")

  return (
    <div className="relative flex min-h-screen flex-col bg-navy-950">
      <ParticlesBackground />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gold-500/20 bg-navy-950/80 backdrop-blur supports-[backdrop-filter]:bg-navy-950/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="namasuraksha.jpg"
              alt="Namma Suraksha Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-white">Namma Suraksha</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-gold-100 transition-colors hover:text-gold-400">
              About
            </Link>
            <Link href="#themes" className="text-sm font-medium text-gold-100 transition-colors hover:text-gold-400">
              Themes
            </Link>
            <Link href="#timeline" className="text-sm font-medium text-gold-100 transition-colors hover:text-gold-400">
              Timeline
            </Link>
            <Link href="#team" className="text-sm font-medium text-gold-100 transition-colors hover:text-gold-400">
              Team
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gold-100 transition-colors hover:text-gold-400">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Image
              src="/presidency logo.png"
              alt="Presidency University Logo"
              width={40}
              height={40}
              className="h-10 w-auto hidden md:block"
            />
            <Button className="bg-gold-500 text-navy-950 hover:bg-gold-400">Register Now</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent opacity-70"></div>
          <div className="container relative flex flex-col items-center justify-center gap-8 py-24 text-center md:py-32">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Image
                src="/namma-suraksha-logo.png"
                alt="Namma Suraksha Logo"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-navy-800/50 px-4 py-1 text-sm backdrop-blur-sm border border-gold-500/30">
                Presidency University & Karnataka State Police Present
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Namma </span>
                <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Suraksha
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-gold-100/80 md:text-xl">Our Safety, Our Innovation</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-gold-400" />
                  <div className="text-sm text-gold-100/80">Event Dates</div>
                  <div className="font-bold text-gold-100">April 28–30, 2025</div>
                </CardContent>
              </Card>

              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-6 w-6 mx-auto mb-2 text-gold-400" />
                  <div className="text-sm text-gold-100/80">Prize Pool</div>
                  <div className="font-bold text-gold-100">₹60,000/-</div>
                </CardContent>
              </Card>

              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-gold-400" />
                  <div className="text-sm text-gold-100/80">Teams</div>
                  <div className="font-bold text-gold-100">50+</div>
                </CardContent>
              </Card>

              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-gold-400" />
                  <div className="text-sm text-gold-100/80">Location</div>
                  <div className="font-bold text-gold-100">Presidency University</div>
                </CardContent>
              </Card>
            </div>

            <CountdownTimer targetDate={endDate} />

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-gold-500 text-navy-950 hover:bg-gold-400 px-8">
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gold-400 border-gold-500/50 hover:bg-navy-800/50 px-8"
              >
                Learn More
              </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-gold-400/70" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-navy-900">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                About the Hackathon
              </h2>
              <div className="mt-4 mx-auto max-w-[800px]">
                <p className="text-gold-100/80">
                  Namma Suraksha brings together innovators, developers, and problem-solvers to create technology
                  solutions that enhance public safety, cybersecurity, environmental sustainability, and data-driven
                  crime prevention across Karnataka.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gold-400 mb-4">Why Participate?</h3>
                  <ul className="space-y-3 text-gold-100/80">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Showcase your innovative solutions to real-world safety challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Win exciting cash prizes worth ₹60,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Network with police officials, tech experts, and industry leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Opportunity to implement your solution with Karnataka State Police</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Enhance your portfolio and gain valuable experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gold-400 mb-4">Who Can Participate?</h3>
                  <p className="text-gold-100/80 mb-4">
                    The hackathon is open to students, professionals, startups, and innovators from across India.
                  </p>

                  <h4 className="text-lg font-semibold text-gold-300 mb-2">Team Requirements:</h4>
                  <ul className="space-y-3 text-gold-100/80">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Teams of 2-4 members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Cross-disciplinary teams are encouraged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-gold-500/20 p-1 mt-1">
                        <Check className="h-3 w-3 text-gold-400" />
                      </div>
                      <span>Registration deadline: April 20, 2025</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Thematic Cards Section */}
        <section id="themes" className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <ThematicCards />
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 md:py-24 bg-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
          <TimelineSection />
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-navy-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <TeamSection />
        </section>

        {/* Registration Section */}
        <section
          id="register"
          className="py-16 md:py-24 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent opacity-70"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-6">
                Register Now
              </h2>
              <p className="text-gold-100/80 mb-8">
                Join us for an exciting three-day hackathon and showcase your innovative solutions for public safety and
                security.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <Card className="bg-navy-800/50 border-gold-500/30 backdrop-blur-sm overflow-hidden w-64 h-64 flex items-center justify-center">
                  <CardContent className="p-4">
                    <Image
                      src="/registrations.png"
                      alt="Registration QR Code"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gold-400">Registration Details</h3>
                    <p className="text-gold-100/80">
                      Scan the QR code 
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gold-100/80">
                      Registration Deadline: <span className="font-bold text-gold-300">April 20, 2025</span>
                    </p>
                    <p className="text-gold-100/80">
                      Team Size: <span className="font-bold text-gold-300">3-4 members</span>
                    </p>
                  </div>

                  <RegisterButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-navy-900">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold-500/20 bg-navy-950">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/namma-suraksha-logo.png"
                  alt="Namma Suraksha Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold text-gold-400">Namma Suraksha</span>
              </div>
              <p className="text-sm text-gold-100/70">
                A national-level hackathon hosted by Presidency University in collaboration with Karnataka State Police.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gold-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-gold-100/70 hover:text-gold-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#themes" className="text-gold-100/70 hover:text-gold-400">
                    Themes
                  </Link>
                </li>
                <li>
                  <Link href="#timeline" className="text-gold-100/70 hover:text-gold-400">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gold-100/70 hover:text-gold-400">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gold-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gold-100/70">
                  <Mail className="h-4 w-4 text-gold-400" />
                  <span>nammasuraksha@presidency.edu.in</span>
                </li>
                <li className="flex items-center gap-2 text-gold-100/70">
                  <Phone className="h-4 w-4 text-gold-400" />
                  <span>+91 80 XXXX XXXX</span>
                </li>
                <li className="flex items-start gap-2 text-gold-100/70">
                  <MapPin className="h-4 w-4 text-gold-400 mt-1" />
                  <span>Presidency University, Bangalore, Karnataka</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gold-400">Connect With Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gold-100/70 hover:text-gold-400">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gold-100/70 hover:text-gold-400">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gold-100/70 hover:text-gold-400">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gold-100/70 hover:text-gold-400">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>

              <div className="mt-6">
                <Image
                  src="/presidency-logo.png"
                  alt="Presidency University Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gold-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gold-100/70">
              © {new Date().getFullYear()} Namma Suraksha Hackathon. All rights reserved.
            </p>
            <p className="text-xs text-gold-100/70">A Presidency University & Karnataka State Police Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Additional components
function Trophy() {
  return (
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
      className="lucide lucide-trophy"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function Users() {
  return (
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
      className="lucide lucide-users"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function Check() {
  return (
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
      className="lucide lucide-check"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function RegisterButton() {
  return (
    <Button
      size="lg"
      className="bg-gold-500 text-navy-950 hover:bg-gold-400 px-8 w-full"
      onClick={() => {
        import("canvas-confetti").then((confetti) => {
          confetti.default({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
        })
      }}
    >
      Register Your Team
    </Button>
  )
}

