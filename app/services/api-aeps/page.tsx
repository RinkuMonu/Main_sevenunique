import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AEPSAPIPage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/image/banner/AePS.jpg" alt="AEPS API" fill priority className="object-cover" />
        
      </section>

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive AEPS API Solution</h2>
              <p className="text-muted-foreground md:text-lg">
              Our APES APIs are designed to help financial institutions, payment service providers, and businesses integrate and streamline their operations efficiently. By leveraging our comprehensive set of APIs, you can enhance security, improve transaction processing, and provide seamless customer experiences in the evolving digital finance landscape.

              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Cash withdrawal using Aadhaar authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Balance inquiry for linked bank accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Mini statement generation for recent transactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Aadhaar to Aadhaar fund transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Secure biometric authentication integration</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/image/578.jpg" alt="AEPS API" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground">
              Our AEPS API is packed with powerful features that offer seamless integration, making it easy for businesses to deliver secure and efficient financial services to their customers.

              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cash Withdrawal</h3>
              <p className="text-muted-foreground">
              Allow your customers to easily withdraw cash using their Aadhaar number and biometric authentication.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Balance Inquiry</h3>
              <p className="text-muted-foreground">
              Enable customers to check their bank account balance securely by authenticating with their Aadhaar number and biometrics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fund Transfer</h3>
              <p className="text-muted-foreground">
              Facilitate Aadhaar to Aadhaar fund transfers with enhanced security, leveraging biometric authentication for safe and reliable money transfers between accounts.

              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-muted-foreground">
              Our AEPS API offers end-to-end encryption and UIDAI compliance, ensuring secure, authentic transactions and protection of customer data.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
              Our AEPS API features easy integration with a REST interface, detailed docs, sample code, and multi-language support for quick developer onboarding.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-[#ab6545]">
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
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
              Our technical support team is always ready to assist with integration, address any issues, and provide guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-white"  style={{backgroundImage:"url(/image/2147669958.jpg)",   backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our AEPS API can help you offer secure and convenient banking services
                to your customers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
