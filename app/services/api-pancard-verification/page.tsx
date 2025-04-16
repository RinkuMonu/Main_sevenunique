import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/api-pancard-verification/page-banner"
import { CheckCircle, Shield, Zap, FileSearch, Server } from "lucide-react"
import Banner from "@/components/banner"

export default function PancardVerificationApiPage() {
  const benefits = [
    "Instant PAN card verification with real-time results",
    "Reduce fraud and ensure compliance with KYC regulations",
    "Seamless integration with your existing systems",
    "High accuracy and reliability with official database checks",
    "Secure handling of sensitive information",
  ]

  const features = [
    {
      icon: <FileSearch className="h-10 w-10" />,
      title: "Real-time Verification",
      description: "Verify PAN card details instantly against official databases with real-time results.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Processing",
      description: "End-to-end encryption and secure handling of sensitive information in compliance with regulations.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "High Performance",
      description: "Fast and reliable API with high uptime and quick response times for seamless verification.",
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Comprehensive Data",
      description: "Detailed verification results including name, status, and other relevant information.",
    },
  ]

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=400&width=1920&text=PAN Verification API",
      title: "PAN Card Verification API",
      description: "Fast and reliable PAN card verification for your business needs",
      
    },
  ]
 

  return (
    <div className="pt-14">
      {/* Banner Section */}
      <Banner slides={bannerSlides}  />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable PAN Card Verification API</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our PAN Card Verification API provides a fast and reliable way to verify PAN card details against
                official databases. This API is essential for businesses that need to validate customer identities,
                comply with KYC regulations, and prevent fraud.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With our easy-to-integrate API, you can seamlessly add PAN card verification capabilities to your
                applications, websites, or internal systems, ensuring accurate and reliable verification results.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">Get API Access</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600&text=PAN Verification"
                alt="PAN Card Verification"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our PAN Card Verification API offers a comprehensive set of features to meet your verification needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our PAN Card Verification API is designed to be simple to integrate and use, with a straightforward
              workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Integrate our API with your application or system using our comprehensive documentation and SDK.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">API Request</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Send a verification request with the PAN card number and other required parameters.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our API verifies the PAN card details against official databases in real-time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive a detailed response with verification results, including status, name, and other relevant
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600&text=API Documentation"
                alt="API Documentation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="animate-slide-in-right order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Documentation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide detailed documentation to help you integrate and use our PAN Card Verification API
                effectively. Our documentation includes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>API reference with endpoint details and parameters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Integration guides and code samples</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Error handling and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Best practices for security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>SDK for popular programming languages</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/documentation/pancard-verification-api">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our PAN Card Verification API can be used in various scenarios to enhance your business processes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">KYC Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Verify customer identities as part of your KYC process to comply with regulatory requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Onboarding Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline customer onboarding by automating PAN card verification in your registration process.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Fraud Prevention</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prevent fraud by verifying the authenticity of PAN cards provided by customers or partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">For small businesses and startups</p>
              <div className="text-3xl font-bold mb-4">
                ₹3,000<span className="text-sm font-normal">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Up to 1,000 verifications per month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Standard API access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">For growing businesses</p>
              <div className="text-3xl font-bold mb-4">
                ₹8,000<span className="text-sm font-normal">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Up to 5,000 verifications per month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Advanced API features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Detailed reporting</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">For large organizations</p>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Unlimited verifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Full API feature set</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom integration support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Verify PAN Cards Instantly?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to get started with our PAN Card Verification API and streamline your verification process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get API Access</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/documentation/pancard-verification-api">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
