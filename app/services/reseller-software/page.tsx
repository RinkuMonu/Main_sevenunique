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
      title: "Multi-Level Reseller Management",
      description:
        "Easily manage multiple levels of resellers, each with its unique commission structure, permissions, and access. This feature allows you to create a scalable reseller network, ensuring that you can support both individual resellers and large distributor networks.",
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "Commission Management",
      description: "Our platform automates commission calculations, tracking, and payout management for resellers at every level. This helps eliminate manual errors, saves time, and ensures transparency in how commissions are distributed.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "White-label Solution",
      description: "Provide resellers with fully branded portals that carry your company’s logo, colors, and domain name. This white-label functionality allows resellers to offer services under their own brand while still leveraging your platform.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Service Configuration",
      description: "Easily configure which services are available to each reseller, set custom pricing, and manage availability across different regions or reseller tiers. This feature ensures flexibility in offering tailored services based on the needs of each reseller.",
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
                Our reseller software provides a robust, all-in-one solution designed to help businesses expand their distribution network through resellers. Whether you're selling digital services, physical products, or APIs, our platform is built to streamline the management and scaling of your reseller network.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With our software, you can easily onboard new resellers, track their performance, and manage your entire reseller network efficiently. It simplifies the complex tasks of commission management, tier-based reseller structures, and sales monitoring, making it easier for you to focus on growth and customer satisfaction.
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
              Our reseller software is equipped with a comprehensive set of features designed to optimize and simplify the management of your reseller network, providing efficiency, flexibility, and complete control over your business operations.
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
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reporting & Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Gain valuable insights into your reseller network’s performance and business growth. Our software provides detailed sales and revenue reports, commission tracking, service usage metrics, and customizable dashboards, making it easier to measure the success of your network.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Sales and revenue reports by reseller</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Commission tracking and payout reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Service usage and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customizable dashboards for different user roles</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Billing & Payments</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Simplify the billing and payment process for both resellers and end customers. Our platform offers multiple payment gateway integrations, automated invoicing, receipt generation, and robust wallet and credit management features to ensure smooth transactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Multiple payment gateway integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Automated invoicing and receipt generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Wallet and credit management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
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
            Our reseller software is designed to be user-friendly, offering a seamless experience for both administrators and resellers. The process is streamlined into four simple steps:
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Begin by configuring your services, pricing models, commission structures, and branding options. This allows you to customize the platform according to your business needs and create a solid foundation for your reseller network.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Onboard</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Create and manage reseller accounts, define their access levels, and assign permissions. Provide resellers with access to your white-labeled platform, enabling them to start offering your products or services under their brand with ease.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Manage</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Use the admin dashboard to monitor reseller activities, track sales performance, and manage commissions. This centralized control panel ensures you can oversee all operations and maintain full visibility of your reseller network.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Scale</h3>
              <p className="text-gray-600 dark:text-gray-300">
              As your business grows, expand your reseller network by adding new resellers, products, or services. This scalable model allows you to easily
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
            Our reseller software is versatile and adaptable to a wide range of industries and business models, allowing businesses to expand their reach and grow their networks efficiently. Here are some of the top use cases:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">API Reselling</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Build a network of resellers for your APIs, such as payment gateways, verification services, or data services. With customized pricing, access controls, and reseller-specific settings, you can manage and scale your API distribution effortlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Digital Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Distribute your digital services—like web hosting, domain registration, and software subscriptions—through a network of resellers. Customize commission structures, pricing, and marketing materials to enable resellers to offer your services with their own branding and value-added features.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Travel Services</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Empower travel agencies and resellers to offer your travel services, including flights, hotel bookings, and vacation packages. With white-label solutions, customized pricing, and reseller performance tracking, you can expand your travel services globally while maintaining brand integrity.
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