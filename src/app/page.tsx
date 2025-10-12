import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Building2, Home, Users, Shield, CheckCircle2, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-8 py-12 md:py-20">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Welcome to{" "}
                  <span className="gradient-text">PropertyXpert</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Your Trusted Partner in Buying Property
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Buying property is one of life's biggest investments — and at PropertyXpert,
                we make sure it's the smartest one. Founded by an IITian entrepreneur, we help
                you find verified flats, plots, villas, and commercial spaces across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact-us">
                  <Button size="lg" className="gradient-primary hover:opacity-90 text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services Section */}
        <Section>
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our <span className="gradient-text">Services</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive real estate solutions tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Home className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>Flat Buying Assistance</CardTitle>
                    <CardDescription>
                      Choose from verified new and resale flats across India
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>Plot Selection Guidance</CardTitle>
                    <CardDescription>
                      Find safe, RERA-approved plots in top localities
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>Commercial Property Deals</CardTitle>
                    <CardDescription>
                      Office spaces, showrooms, and retail investments
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>New Project Consultation</CardTitle>
                    <CardDescription>
                      Access exclusive builder launches and offers
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>Loan & Legal Support</CardTitle>
                    <CardDescription>
                      Assistance with home loans and property documentation
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle>100+ Channel Partners</CardTitle>
                    <CardDescription>
                      Trusted network of professionals across India
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why Choose Us Section */}
        <Section className="bg-muted/30">
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Why Choose <span className="gradient-text">PropertyXpert</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Founded by an IITian</h3>
                    <p className="text-muted-foreground text-sm">
                      Built on ethics, logic, and professionalism
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">100+ Trusted Partners</h3>
                    <p className="text-muted-foreground text-sm">
                      Network of verified channel partners across India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transparent Deals</h3>
                    <p className="text-muted-foreground text-sm">
                      Verified listings only, no hidden costs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">End-to-End Guidance</h3>
                    <p className="text-muted-foreground text-sm">
                      From search to registration, we're with you
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiple Property Types</h3>
                    <p className="text-muted-foreground text-sm">
                      Residential, commercial, and project sales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Dedicated advisors and field professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section>
          <Container>
            <div className="rounded-2xl gradient-primary p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  Find Your Perfect Property Today
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  Looking for your dream home, plot, or commercial space? Let PropertyXpert
                  guide you every step of the way.
                </p>
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Contact Us Now
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
