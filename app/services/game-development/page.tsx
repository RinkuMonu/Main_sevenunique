import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Gamepad2, Monitor, Smartphone, Globe } from "lucide-react"
import Banner from "@/components/banner"
 
export default function GameDevelopmentPage() {
  const benefits = [
    "Engage users with interactive and immersive experiences",
    "Create new revenue streams through in-app purchases and ads",
    "Build brand awareness and loyalty through gamification",
    "Reach a wider audience across multiple platforms",
    "Leverage cutting-edge technologies for innovative gameplay",
  ]
 
  const platforms = ["PC & Mac", "Mobile (iOS & Android)", "Web Browsers", "VR & AR", "Consoles", "Cross-Platform"]
 
  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Game Development Services",
      description: "From concept to launch, we create engaging, high-quality games tailored to your vision",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Immersive Game Development Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In the rapidly growing gaming industry, creating engaging and immersive games is essential for capturing
                and retaining players. Our game development services focus on creating captivating gaming experiences
                that entertain, engage, and drive results for your business.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team of experienced game developers combines technical expertise with creative storytelling to build
                games that resonate with your target audience and achieve your business objectives.
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
                src="/placeholder.svg?height=400&width=600&text=Game Development"
                alt="Game Development"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Game Development Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of game development services to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Monitor className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">PC & Console Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We develop high-quality games for PC and console platforms, leveraging powerful game engines to create
                immersive gaming experiences.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Unity and Unreal Engine development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>3D and 2D game development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Advanced graphics and physics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Multiplayer functionality</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Smartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We create engaging mobile games for iOS and Android platforms, optimized for performance and user
                experience on mobile devices.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>iOS and Android game development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Casual and hyper-casual games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>In-app purchases and monetization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Performance optimization for mobile</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We develop browser-based games that run smoothly across different devices and browsers, providing
                accessible gaming experiences.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>HTML5 and WebGL games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Responsive design for different devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Integration with web platforms</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Gamepad2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">AR/VR Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We create immersive augmented reality (AR) and virtual reality (VR) games that provide unique and
                engaging experiences.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>AR games for mobile devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>VR games for headsets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Mixed reality experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Immersive gameplay mechanics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* Platforms Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platforms We Support</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We develop games for a wide range of platforms to reach your target audience wherever they are.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Game Development Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured and collaborative approach to ensure the success of every game development project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Concept & Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We develop the game concept, storyline, characters, and gameplay mechanics, creating a solid foundation
                for your game.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create a playable prototype to test core gameplay mechanics and make necessary adjustments before
                full development.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Development & Testing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our developers build the game according to the approved design, with regular testing to ensure quality
                and functionality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We help you launch your game on the relevant platforms and provide ongoing support and updates.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Game Development Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent game development projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Game Project ${item}`}
                    alt={`Game Project ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Game Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of the project and the game development solutions we provided.
                  </p>
                  <Link
                    href={`/case-studies/game-project-${item}`}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Game?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your game development needs and how we can help you create an engaging and
            immersive gaming experience.
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