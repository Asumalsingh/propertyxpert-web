"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

type FormErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>

function validate(data: { name: string; email: string; phone: string; message: string }): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = "Full name is required."
  } else if (data.name.trim().length > 100) {
    errors.name = "Name must be 100 characters or less."
  }

  if (!data.email.trim()) {
    errors.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address."
  }

  const digitsOnly = data.phone.replace(/[\s\-().+]/g, "")
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required."
  } else if (!/^\d{10,15}$/.test(digitsOnly)) {
    errors.phone = "Enter a valid 10–15 digit phone number."
  }

  if (!data.message.trim()) {
    errors.message = "Message is required."
  }

  return errors
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")

    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          propertyType: formData.propertyType.trim() || undefined,
          source: 'website',
          customData: formData.message.trim() ? { message: formData.message.trim() } : undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setSubmitError(data?.message || "Something went wrong. Please try again.")
        return
      }

      setFormData({ name: "", email: "", phone: "", propertyType: "", message: "" })
      setSubmitted(true)
    } catch {
      setSubmitError("Unable to submit. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-6 py-12 md:py-20">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Get in touch with us to find your perfect property
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="py-8 text-center space-y-2">
                        <p className="text-lg font-semibold">Thank you for reaching out!</p>
                        <p className="text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
                        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
                          Send another message
                        </Button>
                      </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 8602429639"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Input
                          id="propertyType"
                          name="propertyType"
                          placeholder="e.g., Flat, Plot, Commercial"
                          value={formData.propertyType}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your property requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                      </div>

                      {submitError && (
                        <p className="text-sm text-destructive">{submitError}</p>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full gradient-primary hover:opacity-90 text-white"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Get in <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about buying property? Our team is here to help you make
                    the right decision. Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">info@propertyxpert.in</p>
                          <p className="text-muted-foreground">support@propertyxpert.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">+91 8602429639</p>
                          <p className="text-sm text-muted-foreground">Daily, 10:00 AM – 7:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Registered Office</h3>
                          <p className="text-muted-foreground">Unit No.202, 2nd Floor, Om Gurudev Plaza,</p>
                          <p className="text-muted-foreground">Bhamori, Vijay Nagar, Indore,</p>
                          <p className="text-muted-foreground">Madhya Pradesh – 452010</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday – Sunday: 10:00 AM – 7:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-muted/30">
          <Container>
            <div className="rounded-2xl gradient-primary p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to Find Your Dream Property?
                </h2>
                <p className="text-lg opacity-90">
                  Let our experts guide you through every step of your property buying journey.
                  Contact us today and experience real estate the expert way.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
