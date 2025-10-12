import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions - PropertyXpert",
  description: "Read the terms and conditions for using PropertyXpert's services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-6 py-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Terms <span className="gradient-text">&</span> Conditions
              </h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    Welcome to PropertyXpert. These Terms and Conditions govern your use of our website
                    and services. By accessing or using our services, you agree to be bound by these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                  <p className="text-muted-foreground mb-3">
                    PropertyXpert provides real estate brokerage and consultancy services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Property search and recommendation services</li>
                    <li>Assistance in buying flats, plots, villas, and commercial properties</li>
                    <li>Connection with verified channel partners</li>
                    <li>Property documentation support</li>
                    <li>Loan assistance coordination</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                  <p className="text-muted-foreground mb-3">As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect the intellectual property rights of PropertyXpert</li>
                    <li>Not misuse or attempt to gain unauthorized access to our systems</li>
                    <li>Conduct your own due diligence before making property decisions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Property Information</h2>
                  <p className="text-muted-foreground">
                    While we strive to provide accurate and up-to-date property information, PropertyXpert
                    does not guarantee the accuracy, completeness, or reliability of any property listings
                    or information. Users are advised to independently verify all property details before
                    making any decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Brokerage and Fees</h2>
                  <p className="text-muted-foreground">
                    PropertyXpert may charge brokerage fees for successful property transactions. All fees
                    will be clearly communicated before engagement. Payment terms and conditions will be
                    outlined in separate service agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    PropertyXpert acts as a facilitator and consultant. We are not liable for any losses,
                    damages, or disputes arising from property transactions. Final decisions and agreements
                    are between buyers and sellers/builders.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Privacy</h2>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please refer to our Privacy Policy for information
                    on how we collect, use, and protect your personal data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content on the PropertyXpert website, including text, graphics, logos, and software,
                    is the property of PropertyXpert and is protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
                  <p className="text-muted-foreground">
                    PropertyXpert reserves the right to modify these Terms and Conditions at any time.
                    Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms and Conditions are governed by the laws of India. Any disputes will be
                    subject to the exclusive jurisdiction of courts in India.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: info@propertyxpert.in<br />
                    Phone: +91 1234567890
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
