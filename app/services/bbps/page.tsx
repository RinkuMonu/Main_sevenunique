import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"
export default function BBPSSoftwarePage() {

    const bannerSlides = [
        {
          image: "/image/banner/BBPS.jpg",
          title: "BBPS Software",
          description: "Comprehensive Bharat Bill Payment System solution for businesses",
          
        },
      ]
    
  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides} />

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Complete BBPS Solution</h2>
              <p className="text-muted-foreground md:text-lg">
              SevenUnique Tech Solutions Pvt. Ltd. offers comprehensive BBPS (Bharat Bill Payment System) solutions that enable businesses to provide secure, seamless, and efficient bill payment services to their customers.

              </p>
              <p className="text-muted-foreground md:text-lg">
              With our expertise in integrating BBPS solutions, we offer a robust, easy-to-use platform that ensures a hassle-free experience for both customers and businesses. Our solution allows you to manage bill payments for utilities, taxes, recharges, and more—all in one place.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>All BBPS billers are supported in a variety of categories.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Secure payment gateway integration with multiple options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Comprehensive distributor and retailer management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Real-time transaction tracking and reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>White-label solution with customizable branding</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/placeholder.svg?height=600&width=600" alt="BBPS Software" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Numerous features in our BBPS software are intended to assist you in managing a profitable bill payment business.
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Category Support</h3>
              <p className="text-muted-foreground">
              All BBPS categories are supported, including DTH, insurance, telecom, gas, water, and electricity.
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Integration</h3>
              <p className="text-muted-foreground">
              smooth interaction with several payment gateways to provide safe and easy transactions.
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Level Hierarchy</h3>
              <p className="text-muted-foreground">
              complete control of distributors and retailers, including role-based access and commission schemes.
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
              <h3 className="text-xl font-bold mb-2">Commission Management</h3>
              <p className="text-muted-foreground">
              All user levels can have flexible commission setting options with biller- and category-wise configurations.
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transaction Management</h3>
              <p className="text-muted-foreground">
              complete reporting for all bill payments, status updates, and real-time transaction tracking.
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
                  <path d="M12 20v-6M6 20V10M18 20V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
              <p className="text-muted-foreground">
              Detailed reporting capabilities to monitor commissions, payments, user performance, and company expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our BBPS software is built with robust functionality and ease of use in mind.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-[#ab6545]-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Setup</h3>
              <p className="text-muted-foreground">
              Fast setup with BBPS and payment gateway connectivity, as well as customisable branding.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-[#ab6545]-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">User Management</h3>
              <p className="text-muted-foreground">
              Provide suitable commission structures and access controls for distributors and retailers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-[#ab6545]-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Bill Payments</h3>
              <p className="text-muted-foreground">
              Handle bill payments in a variety of categories while providing commission distribution and real-time status information.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 rounded-full bg-primary text-[#ab6545]-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Reporting</h3>
              <p className="text-muted-foreground">
              Provide thorough reports on user performance, commissions, transactions, and company expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="BBPS Software Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our BBPS Software</h2>
              <p className="text-muted-foreground md:text-lg">
              Our scalable architecture, user-friendly interface, and strong features set our BBPS software apart from the competitors. Our system is made to accommodate companies of all sizes.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">NPCI Compliant</h3>
                    <p className="text-muted-foreground">
                    Complete adherence to the rules and guidelines set forth by the NPCI for BBPS operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">High Success Rate</h3>
                    <p className="text-muted-foreground">
                    High transaction success rates and little downtime are guaranteed by several API connectors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Comprehensive Support</h3>
                    <p className="text-muted-foreground">
                    All clients receive dedicated account management, frequent upgrades, and round-the-clock technical assistance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Security First</h3>
                    <p className="text-muted-foreground">
                    sophisticated security features include secure authentication, fraud detection, and encryption.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 bg-primary text-[#ab6545]-foreground">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your BBPS Business?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
              Get in touch with us right now to find out how our BBPS software will assist you in starting and expanding your bill payment company.
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
