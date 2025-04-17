import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
      description: "Instantly verify PAN card details against official government databases, providing real-time results for quick decision-making.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Processing",
      description: "Our API employs end-to-end encryption and ensures secure handling of sensitive personal data, including KYC guidelines.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "High Performance",
      description: "With a fast and reliable API, you can rely on quick response times, ensuring a seamless verification experience for your users.",
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Comprehensive Data",
      description: "Get verification results with the PAN card holder’s name, status, and other relevant details for transparency and reliability.",
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
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable PAN Card Verification API</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our PAN Card Verification API offers a fast, efficient, and reliable solution for validating PAN card details against official government databases. This API is vital for businesses needing to authenticate customer identities, meet KYC regulations, and prevent fraud.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              By integrating our easy-to-use API, you can add real-time PAN card verification functionality to your applications, websites, or internal systems, ensuring the highest level of accuracy and reliability.

              </p>
              <h3 className="text-xl font-bold mb-3">Key Benefits:</h3>
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact" className="text-white bg-[#d59172]">Get API Access</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/image/13087.jpg"
                alt="PAN Card Verification"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our PAN Card Verification API is designed to provide a robust and efficient solution for validating PAN card details, ensuring both accuracy and security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-[#ab6545] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Integrating our PAN Card Verification API into your application is simple and streamlined. Here's how it works.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Begin by integrating our API with your application or system using our comprehensive documentation and SDK. It’s designed for easy setup with multiple programming language support.

              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">API Request</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Send a verification request by providing the PAN card number along with other necessary parameters. The API accepts standard HTTP requests for maximum compatibility.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Our system cross-checks the PAN card details with official government databases in real-time, ensuring that the information is accurate and up-to-date.

              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Once the verification is complete, you'll receive a detailed response. This will include essential information such as the verification status, holder's name, and other relevant details.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/image/51286.jpg"
                alt="API Documentation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="animate-slide-in-right order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Documentation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              We provide detailed, clear, and user-friendly documentation to ensure a seamless integration process for your PAN Card Verification API.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>API reference with endpoint details and parameters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Integration guides and code samples</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Error handling and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Best practices for security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>SDK for popular programming languages</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/documentation/pancard-verification-api"  className="text-white bg-[#AB6545]">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our PAN Card Verification API is designed to serve various business needs, ensuring seamless operations, enhanced security, and better compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">KYC Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
              In order to comply with financial services regulations, it is simple to confirm the identity of customers via KYC.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Onboarding Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Automate PAN card verification during registration or account creation to accelerate onboarding and reduce errors.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Fraud Prevention</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Prevent identity theft and fraud by verifying that PAN card details are legitimate and match official records.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Loan & Credit Applications</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Verify PAN details during loan or credit applications to confirm identity, prevent fraud, and assess applicant credibility.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Tax Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Validate PAN cards to ensure accurate tax information, reduce errors, and ensure compliance with tax regulations.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 px-24 bg-primary text-white"    style={{backgroundImage:"url(/image/2299.jpg)", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Verify PAN Cards Instantly?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to get started with our PAN Card Verification API and streamline your verification process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact" className="text-black bg-[#AB6545]">Get API Access</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#ab6545]"
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
