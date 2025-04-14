import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageBanner from "@/components/page-banner"
import { CheckCircle, ArrowRight, Globe, Code, Database, BarChart4 } from "lucide-react"
import Banner from "@/components/banner"
 
export default function WebDevelopmentPage() {
  const benefits = [
    "Establish a strong online presence",
    "Improve user engagement and conversion rates",
    "Enhance brand credibility and trust",
    "Reach a wider audience globally",
    "Gather valuable data and insights about your customers",
  ]
 
  const technologies = [
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "PHP",
    "Laravel",
    "WordPress",
    "Shopify",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ]
 

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Web Development Services",
      description: "Create responsive and dynamic websites that drive results",
    },
  ]
  return (
    <div className="pt-14">
      {/* Banner Section */}
      <Banner slides={bannerSlides}   />
 
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Web Development Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In today's digital world, having a strong online presence is essential for businesses of all sizes. Our
                web development services focus on creating custom websites that not only look great but also deliver
                results for your business.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced web developers combines technical expertise with creative design to build
                websites that engage your audience, reflect your brand identity, and achieve your business objectives.
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
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Web Development"
                alt="Web Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of web development services to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Website Design & Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We create custom websites that are visually appealing, user-friendly, and optimized for performance
                across all devices.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Responsive web design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom website development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>UI/UX design for web</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Application Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We build powerful web applications that provide advanced functionality and solve complex business
                challenges.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Progressive Web Apps (PWAs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>SaaS product development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>API development and integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Database className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We develop e-commerce websites that provide seamless shopping experiences and drive sales for your
                business.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom e-commerce websites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Shopify and WooCommerce development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Shopping cart and checkout optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <BarChart4 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Website Maintenance & Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide ongoing maintenance and support services to ensure your website remains secure, up-to-date,
                and performs optimally.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Regular updates and security patches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Performance monitoring and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Content updates and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Technical support and troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* Technologies Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build powerful and scalable web solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured and collaborative approach to ensure the success of every web development project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We begin by understanding your business goals, target audience, and website requirements to create a
                solid foundation for your project.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design & Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create wireframes and design mockups to visualize the website's layout and appearance before
                development begins.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Development & Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our developers build the website according to the approved designs, with regular testing to ensure
                quality and functionality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deploy your website to the live server and provide ongoing support and maintenance to ensure its
                continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent web development projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Web Project ${item}`}
                    alt={`Web Project ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Web Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of the project and the web development solutions we provided.
                  </p>
                  <Link
                    href={`/case-studies/web-project-${item}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your web development needs and how we can help you create a powerful online
            presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
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