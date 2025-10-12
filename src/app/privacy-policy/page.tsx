import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - PropertyXpert",
  description: "Learn how PropertyXpert collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-6 py-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Privacy <span className="gradient-text">Policy</span>
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
                    At PropertyXpert, we are committed to protecting your privacy and personal information.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">We collect the following types of information:</p>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Name, email address, phone number</li>
                    <li>Property preferences and requirements</li>
                    <li>Financial information (for loan assistance)</li>
                    <li>Communication records and correspondence</li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-2">Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>IP address, browser type, and device information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-3">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide and improve our real estate services</li>
                    <li>Match you with suitable properties and channel partners</li>
                    <li>Communicate with you about properties and services</li>
                    <li>Process transactions and maintain records</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Analyze and improve our website and services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground mb-3">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Our verified channel partners to facilitate property transactions</li>
                    <li>Property developers and sellers (with your consent)</li>
                    <li>Financial institutions for loan processing</li>
                    <li>Legal and regulatory authorities when required by law</li>
                    <li>Service providers who assist in our operations</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    We do not sell or rent your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the Internet is 100% secure,
                    and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    Our website uses cookies and similar tracking technologies to enhance user experience,
                    analyze website traffic, and personalize content. You can control cookie preferences
                    through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Lodge a complaint with relevant authorities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy, unless a longer retention period is required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites. We are not responsible for
                    the privacy practices or content of these external sites. Please review their privacy
                    policies before providing any personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not intended for individuals under the age of 18. We do not knowingly
                    collect personal information from children. If you believe we have collected information
                    from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any
                    significant changes by posting the new policy on our website with an updated
                    "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions or concerns about this Privacy Policy or our data practices,
                    please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Email: privacy@propertyxpert.com<br />
                    Phone: +91 1234567890<br />
                    Address: India
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
