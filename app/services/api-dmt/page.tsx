import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import Banner from "@/components/banner";

export default function DMTAPIPage() {
  const bannerSlides = [
    {
      image: "/image/banner/DMT.jpg",
      title: "Ast And Secure DMT APIs For Seamless Money Transfers And Integrations.",
      description: "Comprehensive travel management solution for travel agencies and tour operators",
      
    },
  ]
  return (
    <div className="flex flex-col">
      <SEO/>
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Banner slides={bannerSlides}/>
        {/* <Image
          src="/image/banner/DMT.jpg"
          alt="DMT API"
          fill
          priority
          className="object-cover"
        /> */}
      </section>

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Comprehensive DMT API Solution
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our Domestic Money Transfer (DMT) API is a robust and secure
                solution designed to empower your platform with instant money
                transfer capabilities across India. Whether you're a fintech
                startup, retail service provider, or enterprise-level business,
                our DMT API enables you to offer fast, reliable, and secure bank
                transfers to your customers with minimal integration effort.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Bank account verification and validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>IMPS, NEFT, and RTGS transfer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Real-time transaction status and tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Beneficiary management and quick transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>
                    Secure integration with multiple authentication options
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/image/2124.jpg"
                alt="DMT API"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Our Domestic Money Transfer (DMT) API offers a powerful set of
                features tailored to ensure fast, reliable, and secure money
                transfers within India.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
              <h3 className="text-xl font-bold mb-2">Account Verification</h3>
              <p className="text-muted-foreground">
                Instantly verify the validity of beneficiary bank account
                details before processing a transaction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
              <h3 className="text-xl font-bold mb-2">
                Multiple Transfer Modes
              </h3>
              <p className="text-muted-foreground">
                Seamlessly support IMPS, NEFT, and RTGS payment rails with
                intelligent routing and transaction limits
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
              <h3 className="text-xl font-bold mb-2">Beneficiary Management</h3>
              <p className="text-muted-foreground">
                Easily manage beneficiaries and save frequent recipients for
                faster, error-free transfers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
              <h3 className="text-xl font-bold mb-2">Transaction Tracking</h3>
              <p className="text-muted-foreground">
                Monitor every transaction in real time with status updates,
                detailed logs, and instant confirmations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
                our RESTful API includes clean documentation, sandbox testing,
                and sample code for smooth onboarding.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-md bg-background shadow-sm">
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
                Dedicated team support always available for integration,
                troubleshooting, and post-deployment help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Integration Process
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Integrating our DMT API is quick and developer-friendly,
                designed to get your system up and running with minimal effort.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              <div className="mb-4 rounded-full bg-purple-100 text-[#ab6545] w-12 h-12 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Register on our platform and complete the necessary KYC and
                verification steps to obtain your unique API credentials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              <div className="mb-4 rounded-full bg-purple-100 text-[#ab6545] w-12 h-12 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-muted-foreground">
                Use our well-documented REST API and ready-to-use sample code to
                seamlessly integrate DMT capabilities into your existing system.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              <div className="mb-4 rounded-full bg-purple-100 text-[#ab6545] w-12 h-12 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-muted-foreground">
                Test your implementation in our secure sandbox environment to
                validate functionality and ensure transaction flow accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md">
              <div className="mb-4 rounded-full bg-purple-100 text-[#ab6545] w-12 h-12 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Go Live</h3>
              <p className="text-muted-foreground">
                Once you're confident with your setup, move to the live
                environment and start executing real-time transactions with full
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white"   style={{backgroundImage:"url(/image/2151575474.jpg)", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our DMT API can help you offer
                secure and convenient money transfer services to your customers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white hover:bg-white/10"
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
