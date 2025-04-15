import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "@/components/banner";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import TeamMember from "./team/page";
import ProjectCard from "@/components/project-card";
import {
  Smartphone,
  Globe,
  Code,
  Palette,
  Gamepad2,
  BarChart3,
  CheckCircle,
  Zap,
} from "lucide-react";

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
];

// Sample data for services
const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Our UI/UX Design team crafts seamless, intuitive, and engaging user experiences that drive customer satisfaction and improve overall usability. We focus on creating user-friendly designs that captivate and deliver high engagement.",
    href: "/services/ui-ux",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "App Development",
    description:
      "We specialize in mobile app development for both iOS and Android platforms. Whether you need a native or hybrid app, our expert developers will build solutions that are fast, responsive, and feature-rich to meet your business needs.",
    href: "/services/app-development",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Game Development",
    description: "We develop engaging and interactive mobile and web games that provide immersive experiences. Whether it's a simple casual game or a complex multiplayer platform, our team builds solutions that delight users and keep them engaged.",
    href: "/services/game-development",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description: "Our web development services encompass everything from building dynamic websites to developing full-fledged e-commerce platforms. We ensure that all websites are responsive, SEO-friendly, and user-centric.",
    href: "/services/web-development",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    description: "We offer comprehensive software development solutions tailored to meet your specific business requirements. From enterprise solutions to custom applications, our team ensures that your software is scalable, secure, and user-friendly.",
    href: "/services/software-development",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Digital Marketing",
    description:
      "Our digital marketing services focus on increasing your online presence and driving business growth. From SEO to social media marketing, we use data-driven strategies to help your business rank higher, attract more customers, and convert leads into sales.",
    href: "/services/digital-marketing",
  },
];

// Sample data for projects
const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "./image/e-commerce-platform.jpg",
    href: "/projects/e-commerce-platform",
  },
  {
    title: "Fitness Tracking App",
    category: "App Development",
    image: "./image/app-dev.jpg",
    href: "/projects/fitness-app",
  },
  {
    title: "Corporate Branding",
    category: "UI/UX Design",
    image: "./image/ui-ux.jpg",
    href: "/projects/corporate-branding",
  },
  {
    title: "Adventure Game",
    category: "Game Development",
    image: "./image/Game-Development.jpg",
    href: "/projects/adventure-game",
  },
];

// Sample data for testimonials
const testimonials = [
  {
    content:
      "Working with this team was a game-changer for our business. They delivered our project on time and exceeded our expectations.",
    author: "John Smith",
    position: "CEO",
    company: "Tech Innovations",
    avatar: "./image/avatar.jpg",
    rating: 5,
  },
  {
    content:
      "The attention to detail and technical expertise demonstrated by the team was impressive. Our app has received great feedback from users.",
    author: "Sarah Johnson",
    position: "Product Manager",
    company: "StartUp Inc",
    avatar: "./image/avatar.jpg",
    rating: 5,
  },
  {
    content:
      "Professional, responsive, and incredibly skilled. They transformed our outdated website into a modern, user-friendly platform.",
    author: "Michael Brown",
    position: "Marketing Director",
    company: "Global Solutions",
    avatar: "./image/avatar.jpg",
    rating: 4,
  },
];

// Sample data for team members
const teamMembers = [
  {
    name: "Dinesh Kumar",
    position: "Founder & Promoter (MD)",
    image: "./image/team/SEVNOO01.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Amit Balotiya",
    position: "Founder & Promoter (CEO)",
    image: "./image/team/SEVNOO02.webp",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vimal Verma",
    position: "Vice President",
    image: "./image/team/SEVNOO04.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Kamlesh Meena",
    position: "Sr. business development manager",
    image: "./image/team/SEVNOO05.webp",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

// Sample data for strategy steps
const strategies = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Discovery & Planning",
    description:
      "We begin by comprehending your company's objectives and needs in order to develop an extensive project strategy.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Prototyping",
    description:
      "Before development starts, our design team produces user-friendly prototypes and interfaces for your approval.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development & Testing",
    description:
      "We use the newest technologies to design your solution, and we thoroughly test it to guarantee its quality.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Deployment & Launch",
    description:
      "We take care of the deployment procedure and guarantee a seamless project launch.",
  },
];

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Services Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle=""
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
      <section className="py-16 md:py-24 px-24 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e8ab8f]  dark:bg-[#AB6545] rounded-lg -z-10"></div>
                <Image
                  src="./image/124515.jpg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e8ab8f] dark:bg-purple-900/30 rounded-lg -z-10"></div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="About Our Company"
                subtitle=" At SevenUnique Tech Solutions, we are committed to providing cutting-edge solutions that empower businesses to grow and succeed. Founded by Mr. Dinesh Kumar and Amit Balotiya, we specialize in offering tailored digital solutions in the fields of UI/UX design, app development, web development, game development, digital marketing, and software development."
                centered={false}
              />
              {/* <p className="text-gray-600 dark:text-gray-400 mb-8">
              We believe in delivering quality, innovation, and results that help our clients navigate the evolving digital landscape. Our team of experts is driven by a passion for technology and a commitment to providing top-notch solutions that exceed client expectations.
              </p> */}
              <Link href="/about">
                <Button
                  size="lg"
                  className=" bg-[#e8ab8f] text-white"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
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

          {/* <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-24">
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
      <section className="py-16 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Founder & Promoter"
            subtitle="Our talented team of professionals is dedicated to delivering exceptional results for our clients."
          />

          <div className="">
            <TeamMember limit={2} />
            {/* <Link
              href="/team-member"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              More Team
            </Link> */}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Strategy"
            subtitle="We follow a proven methodology to ensure the success of your project from start to finish."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative"
              >
                {index < strategies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform translate-x-1/2">
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-[#AB6545] rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                  </div>
                )}
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center dark:text-[#e8ab8f] mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and see how we
            can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-purple-700 hover:bg-gray-100"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-black"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
