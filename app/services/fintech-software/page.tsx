import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, CreditCard, Banknote, Shield, BarChart4 } from "lucide-react"
import Banner from "@/components/banner"
 
export default function FintechSoftwarePage() {
  const benefits = [
    "Streamline financial operations and reduce manual processes",
    "Enhance security with advanced encryption and authentication",
    "Improve customer experience with intuitive interfaces",
    "Gain insights through comprehensive analytics and reporting",
    "Scale your financial services with a robust and flexible platform",
  ]
 
  const solutions = [
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Payment Processing",
      description:
        "Secure and efficient payment processing solutions with multiple gateway integrations and fraud prevention.",
    },
    {
      icon: <Banknote className="h-10 w-10" />,
      title: "Digital Banking",
      description: "Comprehensive digital banking platforms with account management, transfers, and financial tools.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "KYC & Compliance",
      description: "Automated KYC verification and compliance management to meet regulatory requirements.",
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "Financial Analytics",
      description: "Advanced analytics and reporting tools to track performance and make data-driven decisions.",
    },
  ]

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Fintech Software Solutions",
      description: "Innovative financial technology solutions for modern businesses",
      
    },
  ]
 
  return (
    <div className="pt-14">
      {/* Banner Section */}
      <Banner slides={bannerSlides}/>
 
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Financial Services with Technology</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our fintech software solutions are designed to help financial institutions, payment service providers,
                and businesses streamline their operations, enhance security, and deliver exceptional customer
                experiences in the digital age.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With our customizable and feature-rich fintech platforms, you can modernize your financial services,
                reduce operational costs, and stay ahead in a rapidly evolving industry.
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
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Fintech Solutions"
                alt="Fintech Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Fintech Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of fintech solutions to meet the diverse needs of financial businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-primary mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Advanced Features"
                alt="Advanced Features"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our fintech software comes with a wide range of advanced features to help you deliver secure, efficient,
                and user-friendly financial services.
              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Security & Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>End-to-end encryption for data protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Compliance with financial regulations (PCI DSS, GDPR, etc.)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Integration Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>API-first architecture for seamless integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Integration with banking systems and payment gateways</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Third-party service integrations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">User Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Intuitive and responsive user interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Customizable dashboards and reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Mobile-first design for on-the-go access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our fintech software solutions are versatile and can be applied across various financial services and
              business models.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Digital Banking</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create a full-featured digital banking platform with account management, transfers, bill payments, and
                financial tools.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Payment Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Implement secure and efficient payment processing systems for e-commerce, retail, or service businesses.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lending Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Build digital lending platforms with loan origination, credit scoring, and loan management capabilities.
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      {/* Implementation Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure the successful implementation of our fintech solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand your business requirements, challenges, and goals to tailor our solution to your needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We design the solution architecture, user interfaces, and integration points based on your requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We configure and customize the solution, integrate with your existing systems, and conduct thorough
                testing.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deploy the solution, provide training, and offer ongoing support and maintenance to ensure optimal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#AB6545] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our fintech software solutions and how they can help you streamline
            operations, enhance security, and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}