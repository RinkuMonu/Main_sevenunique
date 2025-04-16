import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function CRMSoftwarePage() {

    const bannerSlides = [
        {
          image: "/image/banner/CRM.jpg",
          title: "CRM Software",
          description: "Streamline customer relationships with our comprehensive CRM solution",
          
        },
      ]
  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides} />

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powerful CRM Solutions</h2>
              <p className="text-muted-foreground md:text-lg">
                Our Customer Relationship Management (CRM) software provides a complete solution for businesses looking
                to optimize customer interactions, streamline sales processes, and enhance customer service. From lead
                management to customer support, our platform handles every aspect of your customer relationships.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Comprehensive contact and lead management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Sales pipeline tracking and forecasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Customer service and support ticket management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Marketing campaign management and automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Advanced reporting and analytics</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/placeholder.svg?height=600&width=600" alt="CRM Software" fill className="object-cover" />
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
                Our CRM software comes packed with features designed to optimize your customer relationships and sales
                processes.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
              <h3 className="text-xl font-bold mb-2">Contact Management</h3>
              <p className="text-muted-foreground">
                Centralized database for all customer information with comprehensive profiles and interaction history.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
              <h3 className="text-xl font-bold mb-2">Sales Pipeline</h3>
              <p className="text-muted-foreground">
                Visual sales pipeline management with deal tracking, forecasting, and opportunity management.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                Ticket management system with automated routing, escalation, and resolution tracking.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing Automation</h3>
              <p className="text-muted-foreground">
                Email marketing, campaign management, and lead nurturing workflows to drive engagement.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
              <h3 className="text-xl font-bold mb-2">Task Management</h3>
              <p className="text-muted-foreground">
                Comprehensive task management with reminders, assignments, and follow-up tracking.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
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
                Comprehensive reporting tools to track sales performance, customer metrics, and team productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image src="/placeholder.svg?height=600&width=600" alt="CRM Dashboard" fill className="object-cover" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our CRM Software</h2>
              <p className="text-muted-foreground md:text-lg">
                Our CRM software stands out from the competition with its robust features, scalable architecture, and
                user-friendly interface. We've designed our solution to meet the needs of businesses of all sizes.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Scalable Solution</h3>
                    <p className="text-muted-foreground">
                      Our platform grows with your business, from a small team to a large enterprise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">User-Friendly Interface</h3>
                    <p className="text-muted-foreground">
                      Intuitive design that's easy to use for sales teams, marketers, and customer support staff.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Seamless Integration</h3>
                    <p className="text-muted-foreground">
                      Easily integrate with existing systems, email providers, and third-party services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Our team provides comprehensive support throughout implementation and beyond.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 bg-[#AB6545] text-[#ab6545]-foreground">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Customer Relationships?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our CRM software can help you streamline sales processes and enhance
                customer experience.
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
