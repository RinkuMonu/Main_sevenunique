import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import TeamMember from "@/components/team-member"
import ProjectCard from "@/components/project-card"
import { Smartphone, Globe, Code, Palette, Gamepad2, BarChart3, CheckCircle, Zap } from "lucide-react"

const bannerSlides = [
  {
    image: "./image/1.jpg",
    // title: "Innovative Digital Solutions",
    // description:
    //   "We help businesses transform their ideas into reality with cutting-edge technology and creative design.",
  },
  {
    image: "./image/2.jpg",
    // title: "Expert Development Team",
    // description: "Our team of experienced developers and designers are ready to bring your vision to life.",
  },
  {
    image: "./image/3.jpg",
    // title: "Comprehensive Digital Services",
    // description: "From web development to digital marketing, we offer end-to-end solutions for your business needs.",
  },
]

// Sample data for services
const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences with our expert design team.",
    href: "/services/ui-ux",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "App Development",
    description: "Build powerful mobile applications for iOS and Android platforms.",
    href: "/services/app-development",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Game Development",
    description: "Develop engaging and immersive games for multiple platforms.",
    href: "/services/game-development",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description: "Create responsive and dynamic websites that drive results.",
    href: "/services/web-development",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    href: "/services/software-development",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience effectively.",
    href: "/services/digital-marketing",
  },
]

// Sample data for projects
const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/e-commerce-platform",
  },
  {
    title: "Fitness Tracking App",
    category: "App Development",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/fitness-app",
  },
  {
    title: "Corporate Branding",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/corporate-branding",
  },
  {
    title: "Adventure Game",
    category: "Game Development",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/adventure-game",
  },
]

// Sample data for testimonials
const testimonials = [
  {
    content:
      "Working with this team was a game-changer for our business. They delivered our project on time and exceeded our expectations.",
    author: "John Smith",
    position: "CEO",
    company: "Tech Innovations",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "The attention to detail and technical expertise demonstrated by the team was impressive. Our app has received great feedback from users.",
    author: "Sarah Johnson",
    position: "Product Manager",
    company: "StartUp Inc",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    content:
      "Professional, responsive, and incredibly skilled. They transformed our outdated website into a modern, user-friendly platform.",
    author: "Michael Brown",
    position: "Marketing Director",
    company: "Global Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

// Sample data for team members
const teamMembers = [
  {
    name: "Alex Morgan",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=500&width=400",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jessica Chen",
    position: "Lead Designer",
    image: "/placeholder.svg?height=500&width=400",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Wilson",
    position: "Senior Developer",
    image: "/placeholder.svg?height=500&width=400",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emma Thompson",
    position: "Marketing Specialist",
    image: "/placeholder.svg?height=500&width=400",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

// Sample data for strategy steps
const strategies = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals and requirements to create a comprehensive project plan.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Prototyping",
    description:
      "Our design team creates intuitive interfaces and prototypes for your approval before development begins.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development & Testing",
    description:
      "We develop your solution using the latest technologies and conduct thorough testing to ensure quality.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Deployment & Launch",
    description: "We handle the deployment process and ensure a smooth launch of your project.",
  },
]

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a wide range of digital services to help your business grow and succeed in the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                <Image
                  src="./image/124515.jpg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="About Our Company"
                subtitle="We are a team of passionate developers, designers, and digital marketers dedicated to delivering exceptional digital solutions."
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2010, our company has grown from a small team of dedicated professionals to a full-service
                digital agency. We take pride in our work and are committed to delivering high-quality solutions that
                meet our clients' needs and exceed their expectations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our mission is to help businesses of all sizes leverage technology to achieve their goals. We believe in
                building long-term relationships with our clients based on trust, transparency, and results.
              </p>
              <Link href="/about">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Projects"
            subtitle="Take a look at some of our recent projects and see how we've helped our clients achieve their goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                href={project.href}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our talented team of professionals is dedicated to delivering exceptional results for our clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                socialLinks={member.socialLinks}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Strategy"
            subtitle="We follow a proven methodology to ensure the success of your project from start to finish."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
                {index < strategies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform translate-x-1/2">
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-purple-600 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                  </div>
                )}
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
