import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Building2, Users, Award, Target, CheckCircle2, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - PropertyXpert",
  description: "Learn about PropertyXpert, a professional real estate brokerage firm founded by an IITian entrepreneur helping buyers find verified properties across India.",
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-6 py-12 md:py-20">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                About <span className="gradient-text">PropertyXpert</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Your Trusted Partner in Making Smart Property Investments
              </p>
            </div>
          </Container>
        </Section>

        {/* Who We Are */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Who <span className="gradient-text">We Are</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    PropertyXpert is a new-age real estate consultancy dedicated to simplifying
                    your property buying journey. We help you find the right property at the right
                    price, whether you're looking for a home to live in, a plot to build on, or a
                    commercial property to invest in.
                  </p>
                  <p>
                    We specialize in residential properties (flats, villas, and plots), commercial
                    spaces (offices, showrooms, and shops), and new RERA-approved builder projects.
                  </p>
                  <p className="font-semibold text-foreground">
                    Our mission is to make every deal transparent, informed, and buyer-friendly.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <div className="mb-2">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Residential</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Flats, villas, and plots
                    </p>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Commercial</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Offices and showrooms
                    </p>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">RERA Approved</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      New builder projects
                    </p>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-2">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">100+ Partners</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Trusted network
                    </p>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Founder */}
        <Section className="bg-muted/30">
          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our <span className="gradient-text">Founder</span>
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-center">
                <p>
                  Founded by an <span className="font-semibold text-foreground">IIT Indore graduate</span>,
                  PropertyXpert was created with the vision to bring professionalism and trust to
                  the Indian real estate market.
                </p>
                <p>
                  After meeting and working with hundreds of brokers, builders, and homebuyers,
                  our founder realized that most buyers struggle with information gaps, fake listings,
                  and hidden costs — and decided to change that.
                </p>
                <p className="font-semibold text-foreground text-lg">
                  At PropertyXpert, every recommendation is verified, data-backed, and personally
                  reviewed for quality and value.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Channel Partners */}
        <Section>
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our <span className="gradient-text">Channel Partners</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Working with a strong network of professionals across India
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  We proudly work with a strong network of <span className="font-semibold text-foreground">100+ well-educated and experienced channel partners</span> across
                  multiple cities. Our partners are trained professionals who understand local markets,
                  builder credibility, and buyer needs.
                </p>
                <p>
                  Together, we ensure that every client receives personalized service, genuine options,
                  and smooth property transactions — no matter where they are.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Team */}
        <Section className="bg-muted/30">
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our <span className="gradient-text">Team</span>
                </h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-muted-foreground">
                  Behind PropertyXpert is a team of dedicated real estate advisors, marketing experts,
                  and field professionals who make property buying stress-free and secure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Shortlisting verified properties</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Comparing localities and builder reputation
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Scheduling site visits and price negotiations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Handling documentation and legal coordination
                    </p>
                  </div>
                </div>
                <p className="text-foreground font-semibold text-lg pt-4">
                  We don't just help you buy — we help you make the right decision.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Vision */}
        <Section>
          <Container>
            <div className="rounded-2xl gradient-primary p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Vision</h2>
                <p className="text-lg md:text-xl opacity-90">
                  To become India's most trusted property advisor, helping every buyer make informed
                  and secure real estate decisions through technology, expertise, and human connection.
                </p>
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Start Your Journey With Us
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
