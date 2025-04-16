import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function HRMSSoftwarePage() {
    const bannerSlides = [
        {
          image: "/image/banner/HRMS.jpg",
          title: "HRMS Software",
          description: "Streamline your human resources operations with our comprehensive HRMS solution",
          
        },
      ]
  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides}  />

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Complete HR Management Solution</h2>
              <p className="text-muted-foreground md:text-lg">
              At SevenUnique Tech Solutions, we offer comprehensive HR management solutions that streamline all aspects of human resources processes within your organization. Our solution integrates modern technology, data-driven insights, and user-friendly interfaces to help you manage, nurture, and grow your workforce more efficiently.

              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Comprehensive employee information management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Recruitment and onboarding automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Time and attendance tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Payroll processing and management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Performance evaluation and management</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image src="/image/2150389111.jpg" alt="HRMS Software" fill className="object-cover" />
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
              Numerous capabilities in our HRMS software are intended to maximize your human resources operations.
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Employee Management</h3>
              <p className="text-muted-foreground">
              centralized database that houses all employee data, including detailed biographies and document administration.
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
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Recruitment</h3>
              <p className="text-muted-foreground">
              complete hiring management, including posting jobs, choosing candidates, and onboarding them.
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Time & Attendance</h3>
              <p className="text-muted-foreground">
              Precise timekeeping featuring various clock-in choices, leave administration, and attendance documentation.
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
              <h3 className="text-xl font-bold mb-2">Payroll Management</h3>
              <p className="text-muted-foreground">
              automated payroll processing that offers several payment alternatives, tax computations, and deductions.
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Management</h3>
              <p className="text-muted-foreground">
              Tools for comprehensive performance evaluation that include development planning, goal-setting, and feedback.
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
              All-inclusive reporting solutions for monitoring workforce analytics, compliance, and HR data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image src="/image/121542.jpg" alt="HRMS Dashboard" fill className="object-cover" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our HRMS Software</h2>
              <p className="text-muted-foreground md:text-lg">
              Our HRMS software's scalable architecture, user-friendly interface, and strong features set it apart from the competitors. Our system is made to accommodate companies of all sizes.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Scalable Solution</h3>
                    <p className="text-muted-foreground">
                    Tailored to fit the needs of both small businesses and large enterprises.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">User-Friendly Interface</h3>
                    <p className="text-muted-foreground">
                    Easy-to-use interface ensures a smooth experience for HR managers and employees alike.

                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Integration-ready</h3>
                    <p className="text-muted-foreground">
                    Our system seamlessly integrates with existing software like ERP, payroll, and accounting systems.
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

      <section className="py-16 md:py-24 px-24 text-black "   style={{backgroundImage:"url(/image/18853.jpg)", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your HR Operations?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our HRMS software can help you streamline HR processes and enhance
                employee experience.
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
