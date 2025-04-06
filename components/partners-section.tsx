import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PartnersSection() {
  return (
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Partners</h2>
        <p className="mt-4 text-muted-foreground mx-auto max-w-[700px]">
          Collaborating with leading organizations to make this hackathon a success
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Karnataka State Police"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Karnataka State Police</h3>
            <p className="text-sm text-muted-foreground text-center">
              Official host and primary partner of the NamaSuraksha Hackathon
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Ministry of Electronics & IT"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Ministry of Electronics & IT</h3>
            <p className="text-sm text-muted-foreground text-center">
              Supporting digital innovation in public safety and security
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Karnataka Startup Cell"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Karnataka Startup Cell</h3>
            <p className="text-sm text-muted-foreground text-center">
              Fostering innovation and entrepreneurship in civic technology
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Tech Industry Partner"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Tech Industry Partner</h3>
            <p className="text-sm text-muted-foreground text-center">
              Providing technical expertise and mentorship to participants
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Academic Partner"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Academic Partner</h3>
            <p className="text-sm text-muted-foreground text-center">
              Supporting student participation and academic innovation
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-24 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Corporate Sponsor"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-center">Corporate Sponsor</h3>
            <p className="text-sm text-muted-foreground text-center">
              Providing financial support and implementation opportunities
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-6">
          Interested in becoming a partner? Contact us for collaboration opportunities
        </p>
        <a
          href="mailto:partnerships@namasuraksha.gov.in"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Become a Partner
        </a>
      </div>
    </div>
  )
}

