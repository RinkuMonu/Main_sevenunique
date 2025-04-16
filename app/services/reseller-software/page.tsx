import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { CheckCircle, Users, BarChart4, Shield, Settings } from "lucide-react"
import Banner from "@/components/banner"
 
export default function ResellerSoftwarePage() {
  const benefits = [
    "Create multiple reseller accounts with different commission structures",
    "Automate commission calculations and payouts",
    "Provide white-label solutions for your resellers",
    "Track performance and generate detailed reports",
    "Scale your business by expanding your distribution network",
  ]
 
  const features = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "Multi-level Reseller Management",
      description:
        "Create and manage multiple levels of resellers with different commission structures and permissions.",
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "Commission Management",
      description: "Automated commission calculations, tracking, and payout management for all reseller levels.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "White-label Solution",
      description: "Provide branded portals for your resellers with your logo, colors, and domain name.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Service Configuration",
      description: "Configure which services are available to different resellers and set custom pricing for each.",
    },
  ]

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Reseller Software Solutions",
      description: "Expand your business through a network of resellers with our comprehensive management platform",
      
    },
  ]
 
  return (
    <div className="pt-14">
      {/* Banner Section */}
      <Banner slides={bannerSlides} />
 
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Reseller Management Platform</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our reseller software provides a complete solution for businesses looking to expand their distribution
                network through resellers. Whether you're offering digital services, products, or APIs, our platform
                makes it easy to manage your reseller network efficiently.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With our customizable and feature-rich reseller management system, you can create multiple levels of
                resellers, automate commission calculations, provide white-label solutions, and track performance—all
                from a single, intuitive platform.
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
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Reseller Software"
                alt="Reseller Software"
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
              Our reseller software comes with a wide range of features to help you manage your reseller network
              effectively.
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
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reporting & Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive reporting and analytics to track reseller performance and business growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Sales and revenue reports by reseller</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Commission tracking and payout reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Service usage and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Customizable dashboards for different user roles</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Billing & Payments</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automated billing and payment processing for resellers and end customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Multiple payment gateway integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Automated invoicing and receipt generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Wallet and credit management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Tax calculation and management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our reseller software is designed to be intuitive and easy to use for both administrators and resellers.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Configure your services, pricing, commission structures, and branding for your reseller network.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Onboard</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create reseller accounts, set permissions, and provide access to your white-labeled platform.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Manage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor reseller activities, track sales, and manage commissions through the admin dashboard.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Scale</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Grow your business by expanding your reseller network and adding new services or products.
              </p>
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
              Our reseller software is versatile and can be used across various industries and business models.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">API Reselling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create a network of resellers for your APIs, such as payment gateways, verification services, or data
                services, with customized pricing and access controls.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Digital Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expand the distribution of your digital services, such as web hosting, domain registration, or software
                subscriptions, through a reseller network.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Travel Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enable travel agencies to resell your flight, hotel, or package booking services with their own branding
                and markup.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#AB6545] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our reseller software and how it can help you create and manage a
            successful reseller network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#ab6545]"
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