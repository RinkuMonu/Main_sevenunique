import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function CabBookingSoftwarePage() {

    
    const bannerSlides = [
        {
          image: "/image/banner/Cab.jpg",
          title: "Cab Booking Software",
          description: "Streamline transportation services with our advanced cab booking solutions",
          
        },
      ]
  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides} />

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Modern Cab Booking Solutions by SevenUnique</h2>
              <p className="text-muted-foreground md:text-lg">
                Transform your transportation business with our robust and feature-rich cab booking software. Designed for modern mobility needs, our solution helps you manage bookings, monitor drivers in real-time, optimize routes, and deliver a seamless experience to both drivers and passengers. Whether you're a local taxi provider or a large fleet operator, our system scales with your growth and ensures operational efficiency.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Real-time GPS tracking and route optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Secure payment processing and fare calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Driver management and performance analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Customer apps for iOS and Android platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Customizable to match your brand identity</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/image/2149184229.jpg"
                alt="Cab Booking Software"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features of Our Cab Booking Software</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                At SevenUnique Tech Solutions Pvt. Ltd., our cab booking platform is designed with powerful features to enhance efficiency, elevate customer experience, and grow your transportation business seamlessly.
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
                  <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Booking Management</h3>
              <p className="text-muted-foreground">
                Simplify ride scheduling with a smart dashboard that allows easy handling of bookings, reassignments, cancellations, and automated ride confirmations.
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
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2"> Real-Time Vehicle Tracking</h3>
              <p className="text-muted-foreground">
                Enable customers and admins to track drivers live on the map. Leverage route optimization and dynamic ETAs to improve ride accuracy and reduce wait times.
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
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                  <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                  <path d="M16 11h0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Driver Management System</h3>
              <p className="text-muted-foreground">
                Onboard, verify, and manage driver profiles in one place. Monitor performance, assign rides, manage availability, and streamline driver payouts.
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
              <h3 className="text-xl font-bold mb-2">Secure Payment Gateway
              </h3>
              <p className="text-muted-foreground">
                Support all major payment methods—credit/debit cards, UPI, wallets, and cash—through a secure and encrypted system with real-time payment updates.
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
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Built-in Customer Support Tools</h3>
              <p className="text-muted-foreground">
                Enhance rider satisfaction with in-app support including chat, direct call, and real-time issue resolution features. Feedback and rating systems help you improve service quality.
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
              <h3 className="text-xl font-bold mb-2"> Advanced Analytics & Reporting</h3>
              <p className="text-muted-foreground">
                Get access to real-time reports on earnings, ride history, driver performance, customer insights, and business trends to make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image src="/image/51664.jpg" alt="Cab Booking App" fill className="object-cover" />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Cab Booking Software?</h2>
              <p className="text-muted-foreground md:text-lg">
                At SevenUnique Tech Solutions Pvt. Ltd., we don’t just build cab booking platforms — we create smart, scalable, and future-ready solutions tailored for modern transportation businesses. Here’s why our software stands out:
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold"> End-to-End Customization</h3>
                    <p className="text-muted-foreground">
                      Our platform adapts to your unique business model — whether you run a city taxi, airport transfer service, or ride-hailing startup. Every module, from design to functionality, is fully customizable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Seamless User Experience
                    </h3>
                    <p className="text-muted-foreground">
                      With intuitive interfaces for both drivers and passengers, our software ensures quick bookings, smooth navigation, and easy payments — leading to high user satisfaction and retention.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Scalable Architecture</h3>
                    <p className="text-muted-foreground">
                      From a single city operation to a multi-region fleet, our cloud-based system is built to scale effortlessly as your business grows.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Robust Security Standards</h3>
                    <p className="text-muted-foreground">
                      We follow strict data protection and encryption protocols to ensure safe transactions, user privacy, and secure ride management across all devices.

                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24 bg-primary text-[#ab6545]-foreground" style={{backgroundImage:"url(/image/196225.jpg)", backgroundAttachment:"fixed", backgroundPosition:"center"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                5. Quick Deployment & Continuous Support
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Get your business up and running in no time. Plus, our dedicated support team is always ready to help with updates, integrations, or troubleshooting as your needs evolve.
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
