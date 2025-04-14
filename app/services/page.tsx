import Link from "next/link"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import { Smartphone, Globe, Code, Palette, Gamepad2, BarChart3, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data for the banner
const bannerSlides = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Our Services",
    description: "Comprehensive digital solutions tailored to your business needs",
  },
]

// Sample data for services
const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences with our expert design team. We focus on user-centered design principles to create interfaces that are both beautiful and functional.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Responsive Design",
      "Design Systems",
    ],
    href: "/services/ui-ux",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "App Development",
    description:
      "Build powerful mobile applications for iOS and Android platforms. Our mobile development team creates native and cross-platform apps that deliver exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "App Strategy & Planning",
      "UI/UX Design for Mobile",
      "App Testing & QA",
      "App Store Optimization",
    ],
    href: "/services/app-development",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Game Development",
    description:
      "Develop engaging and immersive games for multiple platforms. Our game development team combines creativity with technical expertise to create memorable gaming experiences.",
    features: [
      "2D & 3D Game Development",
      "Game Design & Mechanics",
      "Character & Environment Design",
      "Game Testing & QA",
      "Multiplayer Integration",
      "Monetization Strategies",
    ],
    href: "/services/game-development",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Create responsive and dynamic websites that drive results. Our web development team builds custom websites and web applications that are fast, secure, and scalable.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "Web Performance Optimization",
      "Accessibility Compliance",
    ],
    href: "/services/web-development",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. We develop scalable, secure, and maintainable software that helps streamline your operations and drive growth.",
    features: [
      "Custom Software Development",
      "Enterprise Solutions",
      "Cloud-Based Applications",
      "API Development & Integration",
      "Database Design & Management",
      "DevOps & CI/CD",
    ],
    href: "/services/software-development",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence and reach your target audience effectively. Our digital marketing team develops strategies that drive traffic, generate leads, and increase conversions.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    href: "/services/digital-marketing",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Services Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.href.split("/").pop()}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                <div className="mb-2 flex items-center">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.href}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
                </Link>
              </div>
              <div className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Expert solutions tailored to your needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and see how our services can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
