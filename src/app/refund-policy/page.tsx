import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Refund Policy - PropertyXpert",
  description: "Learn about PropertyXpert's refund policy and how we handle returns and refunds.",
}

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
          <Container>
            <div className="flex flex-col items-center text-center space-y-6 py-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Refund <span className="gradient-text">Policy</span>
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
                    At PropertyXpert, we are committed to ensuring customer satisfaction with our services.
                    This Refund Policy outlines the terms and conditions under which refunds are granted for
                    services purchased through our platform. We believe in transparent and fair refund practices
                    to protect the interests of our customers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Eligibility for Refunds</h2>
                  <p className="text-muted-foreground mb-3">
                    You may be eligible for a refund under the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Service was not provided as advertised or described</li>
                    <li>Service was significantly defective or of poor quality</li>
                    <li>Duplicate charges were made to your account</li>
                    <li>You cancel your service within the specified refund window</li>
                    <li>Technical issues prevented you from accessing paid services</li>
                    <li>You did not receive the promised service deliverables</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Refund Timeline and Process</h2>
                  <p className="text-muted-foreground mb-3">
                    <strong>Refund Window:</strong> You must request a refund within 30 days of the service purchase
                    or completion date. Requests submitted after this period may not be eligible for refund.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>How to Request a Refund:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Contact our customer support team at support@propertyxpert.in</li>
                    <li>Provide your order/transaction ID and reason for refund</li>
                    <li>Include relevant details and documentation supporting your claim</li>
                    <li>Our team will review your request within 5-7 business days</li>
                  </ul>
                  <p className="text-muted-foreground">
                    <strong>Processing Time:</strong> Once approved, refunds will be processed within 7-10 business days.
                    The refund will be credited to your original payment method.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Non-Refundable Services</h2>
                  <p className="text-muted-foreground mb-3">
                    The following services are generally non-refundable:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Services that have been fully delivered and used</li>
                    <li>Subscription services used beyond the trial period</li>
                    <li>Services canceled due to customer breach of terms and conditions</li>
                    <li>Consultation or advisory services that have been provided</li>
                    <li>Premium listing services that have been active for more than 14 days</li>
                    <li>Services purchased during promotional periods (unless explicitly stated otherwise)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Partial Refunds</h2>
                  <p className="text-muted-foreground mb-3">
                    Partial refunds may be issued for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Services partially rendered or used</li>
                    <li>Subscription services canceled mid-term (pro-rated refund for unused portion)</li>
                    <li>Multiple services where only some are being refunded</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    The refund amount will be calculated based on the portion of service not provided or used.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Payment Method and Refund Amount</h2>
                  <p className="text-muted-foreground mb-3">
                    <strong>Refund Method:</strong> All refunds will be credited to the original payment method used
                    for the purchase. If the original payment method is no longer available, we will process the refund
                    through an alternative method at our discretion.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Currency and Exchange Rates:</strong> Refunds will be processed in the same currency as the
                    original purchase. Exchange rates at the time of refund processing may differ from the original
                    transaction rate.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Conditions for Refund Approval</h2>
                  <p className="text-muted-foreground mb-3">
                    Your refund request may be denied if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>The refund request is made beyond the 30-day window</li>
                    <li>You have violated the terms and conditions of the service</li>
                    <li>The request lacks sufficient details or supporting documentation</li>
                    <li>The service was delivered as described and functioning properly</li>
                    <li>You are requesting a refund for services used and fully completed</li>
                    <li>The request appears to be fraudulent or abusive</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Subscription and Recurring Charges</h2>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cancellation:</strong> You may cancel your subscription at any time through your account
                    settings or by contacting customer support.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Refund on Cancellation:</strong> If you cancel before the next billing cycle, you will not
                    be charged again. Refunds for the current billing period are only available if the cancellation is
                    made within 7 days of the charge and the service has not been substantially used.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Auto-Renewal:</strong> Please note that some services may have auto-renewal features. You must
                    actively cancel your subscription to stop recurring charges.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Disputed Transactions</h2>
                  <p className="text-muted-foreground mb-3">
                    If you believe a transaction was unauthorized or fraudulent:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Contact us immediately at support@propertyxpert.in</li>
                    <li>Provide details of the disputed transaction</li>
                    <li>We will investigate and take appropriate action</li>
                    <li>You may also dispute the charge with your payment provider or bank</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Service Quality Issues</h2>
                  <p className="text-muted-foreground mb-3">
                    If you experience technical issues or quality problems with our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Report the issue to our support team immediately</li>
                    <li>We will attempt to resolve the issue within 48 hours</li>
                    <li>If the issue cannot be resolved, you may request a refund</li>
                    <li>Provide documentation of the problem encountered</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Third-Party Service Refunds</h2>
                  <p className="text-muted-foreground mb-3">
                    PropertyXpert partners with various channel partners, developers, and service providers. Refunds for
                    services provided by third parties are subject to their specific refund policies. We will assist in
                    coordinating refund requests with our partners but cannot guarantee their approval.
                  </p>
                  <p className="text-muted-foreground">
                    In cases of disputes with third-party services, we act as a mediator and will work to resolve the issue
                    fairly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. No Liability for Force Majeure</h2>
                  <p className="text-muted-foreground">
                    PropertyXpert is not liable for service disruptions or failures caused by circumstances beyond our control,
                    including but not limited to natural disasters, government actions, internet outages, or cyber attacks.
                    Refunds for such events are made at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Changes to Refund Policy</h2>
                  <p className="text-muted-foreground mb-3">
                    We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately
                    upon posting to our website. For significant changes, we will provide at least 30 days' notice.
                  </p>
                  <p className="text-muted-foreground">
                    Your continued use of our services after changes indicates your acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                  <p className="text-muted-foreground mb-3">
                    For refund requests, questions, or concerns about this Refund Policy, please contact us:
                  </p>
                  <p className="text-muted-foreground">
                    Email: support@propertyxpert.in<br />
                    Phone: +91 8602429639<br />
                    Office Hours: 10:00 AM – 7:00 PM<br />
                    Registered Office: Unit No.202, 2nd Floor, Om Gurudev Plaza, Bhamori, Vijay Nagar, Indore, Madhya Pradesh – 452010
                  </p>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> This Refund Policy is part of our Terms and Conditions. In case of any conflict
                    between this policy and the Terms and Conditions, the Terms and Conditions will prevail. By using PropertyXpert's
                    services, you agree to be bound by this Refund Policy.
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
