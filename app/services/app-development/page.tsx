import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Smartphone, TabletSmartphone, Layers, Shield } from "lucide-react"
import Banner from "@/components/banner"
 
export default function AppDevelopmentPage() {
  const benefits = [
    "Reach customers on their preferred mobile platforms",
    "Increase customer engagement and loyalty",
    "Create new revenue streams",
    "Improve business processes and efficiency",
    "Gain competitive advantage in the market",
  ]
 
  const technologies = ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Native Android & iOS"]
 
  const bannerSlides = [
    {
      image: "/image/app-dev.jpg",
      title: "App Development Services",
      description: "Build powerful mobile applications for iOS and Android platforms",
    },
  ]
  return (
    <div className="">
      {/* Banner Section */}
      <Banner slides={bannerSlides} />
 
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile App Development Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In today's mobile-first world, having a powerful and user-friendly mobile application is essential for
                businesses looking to engage with their customers effectively. Our app development services focus on
                creating custom mobile applications that deliver exceptional user experiences and drive business growth.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced developers combines technical expertise with creative problem-solving to build
                mobile applications that meet your specific business needs and exceed user expectations.
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
                src="/image/app-dev.jpg"
                alt="App Development"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of app development services to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Smartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Native App Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We develop high-performance native applications for iOS and Android platforms, leveraging
                platform-specific features to deliver the best possible user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>iOS app development (Swift, Objective-C)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Android app development (Kotlin, Java)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Platform-specific optimizations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Hardware integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <TabletSmartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform App Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We build cross-platform applications that run on multiple platforms from a single codebase, reducing
                development time and costs while maintaining a consistent user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>React Native development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Flutter development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Ionic framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Code reusability across platforms</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Layers className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">App Design & Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide end-to-end app design and development services, from concept to launch, ensuring a seamless
                and engaging user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>UI/UX design for mobile apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Prototyping and wireframing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom app development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>App testing and quality assurance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">App Maintenance & Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide ongoing maintenance and support services to ensure your app remains up-to-date, secure, and
                performs optimally.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Regular updates and improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Bug fixes and performance optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Security updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Technical support</span>
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
              We leverage the latest technologies and frameworks to build powerful and scalable mobile applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured and collaborative approach to ensure the success of every app development project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery & Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We begin by understanding your business goals, target audience, and app requirements to create a solid
                foundation for your project.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design & Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create wireframes and interactive prototypes to visualize the app's interface and functionality
                before development begins.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Development & Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our developers build the app according to the approved designs, with regular testing to ensure quality
                and functionality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Deployment & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We help you launch your app on the relevant app stores and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our App Development Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent app development projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=App Project ${item}`}
                    alt={`App Project ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">App Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of the project and the app development solutions we provided.
                  </p>
                  <Link
                    href={`/case-studies/app-project-${item}`}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your app development needs and how we can help you create a powerful mobile
            application.
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