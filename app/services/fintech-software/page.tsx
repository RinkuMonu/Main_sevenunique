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
        " Our secure and efficient payment processing solutions provide seamless transactions with multiple gateway integrations. Our platform also includes advanced fraud prevention features to ensure that every payment is safe and secure.",
    },
    {
      icon: <Banknote className="h-10 w-10" />,
      title: "Digital Banking",
      description: " Transform the way you manage customer accounts with our comprehensive digital banking platforms. Offer seamless account management, instant fund transfers, and a variety of financial tools that enhance customer engagement and satisfaction.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "KYC & Compliance",
      description: " Meet all regulatory requirements effortlessly with our automated Know Your Customer (KYC) verification and compliance management system. Streamline identity verification processes and ensure you stay compliant with industry regulations.",
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "Financial Analytics",
      description: " Harness the power of data with our advanced financial analytics and reporting tools. Track performance, gain valuable insights, and make data-driven decisions that will propel your business forward in the competitive financial industry.",
    },
  ]

  const bannerSlides = [
    {
      image: "/image/banner/Fintech.jpg",
      title: "Fintech Software Solutions",
      description: "Innovative financial technology solutions for modern businesses",
      
    },
  ]
 
  return (
    <div className="">
      {/* Banner Section */}
      <Banner slides={bannerSlides}/>
 
      {/* Overview Section */}
      <section className="py-16 md:py-24 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Financial Services with Technology</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our fintech software solutions are tailored to help financial institutions, payment service providers, and businesses revolutionize their operations. By leveraging cutting-edge technology, we enable you to enhance security, optimize efficiency, and provide outstanding customer experiences in today’s fast-paced digital landscape.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              Whether you're a bank, a payment gateway provider, or a financial startup, our customizable fintech platforms allow you to stay competitive, reduce operational costs, and adapt to changing industry demands.
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
                <Link href="/contact" className="text-white">Request a Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/image/124767 (1).jpg"
                alt="Fintech Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Solutions Section */}
      <section className="py-16 md:py-24 md:px-24 bg-gray-50 dark:bg-gray-900">
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
                <div className=" text-[#ab6545] mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Features Section */}
      <section className="py-16 md:py-24 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[800px]">
              <Image
                src="/image/198.jpg"
                alt="Advanced Features"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our fintech software is designed with cutting-edge features to ensure your financial services are secure, efficient, and provide an exceptional user experience.

              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Security & Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>End-to-end encryption to protect sensitive data and ensure transaction security.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Multi-factor authentication for added user security.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Full compliance with financial regulations, including PCI DSS, GDPR, and more, ensuring you meet industry standards.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Integration Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>API-first architecture for seamless integration with existing systems and third-party services.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Easy integration with banking systems, payment gateways, and financial institutions, allowing for smooth operation across platforms.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Third-party service integrations to extend the functionality of your fintech platform and offer additional services to your customers.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">User Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Intuitive, responsive, and user-friendly interfaces for both customers and administrators, ensuring a seamless experience across devices.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Customizable dashboards and reports that can be tailored to meet specific business needs and performance tracking.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                      <span>Mobile-first design, providing customers with on-the-go access and ensuring a seamless experience across all devices.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Use Cases Section */}
      <section className="py-16 md:py-24 md:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our fintech software solutions are versatile and adaptable, making them suitable for various financial services and business models. Whether you're in banking, payments, or lending, our platform is designed to meet your needs and help you scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Digital Banking</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create a full-featured digital banking platform, offering services such as account management, money transfers, bill payments, and comprehensive financial tools. Empower your customers with modern banking experiences, accessible from any device.
 
              </p>
              <Link href="/contact" className="inline-flex items-center text-[#ab6545] hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Payment Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Implement secure and efficient payment processing systems tailored for e-commerce, retail, or service-based businesses. Our platform supports multiple payment gateways, fraud prevention, and streamlined transaction management to enhance your customers' experience.
           
              </p>
              <Link href="/contact" className="inline-flex items-center text-[#ab6545] hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Lending Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build robust digital lending platforms equipped with loan origination, credit scoring, and loan management features. Automate and streamline the lending process, improving efficiency and reducing operational costs while offering better services to your borrowers
              </p>
              <Link href="/contact" className="inline-flex items-center text-[#ab6545] hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      {/* Implementation Process Section */}
      <section className="py-16 md:py-24 md:px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We follow a clear, step-by-step process to ensure the successful implementation and seamless integration of our fintech solutions into your business operations. From understanding your needs to providing continuous support, we ensure everything runs smoothly.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
              We begin by understanding your specific business requirements, challenges, and goals. This helps us tailor the solution to your needs, ensuring that it aligns with your vision and operational demands.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
              In this phase, we design the solution’s architecture, user interfaces, and integration points. Our team works closely with you to ensure the design is aligned with your branding and user experience expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
              We configure and customize the solution to fit your unique needs. Our experts ensure seamless integration with your existing systems and perform rigorous testing to ensure everything works as expected.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
              After successful deployment, we provide training to ensure your team can use the platform effectively. We offer continuous support and maintenance to ensure the solution performs optimally, helping you overcome any future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-16 md:py-24 md:px-24 text-white"  style={{backgroundImage:"url(/image/8268.jpg)",  backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our fintech software solutions and how they can help you streamline
            operations, enhance security, and deliver exceptional customer experiences.
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