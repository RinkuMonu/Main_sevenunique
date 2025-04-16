import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Smartphone,
  TabletSmartphone,
  Layers,
  Shield,
} from "lucide-react";
import Banner2 from "@/components/banner2";

export default function AppDevelopmentPage() {
  const benefits = [
    "Reach clients on the mobile platforms they prefer.",
    "Boost client loyalty and engagement",
    "Establish new sources of income",
    "Boost productivity and business procedures",
    "Gain competitive advantage in the market",
  ];

  const technologies = [
    "/image/Language/react-native.png",
    "/image/Language/Flutter.png",
    "/image/Language/Swift.png",
    "/image/Language/Kotlin.png",
  ];

  const bannerSlides = [
    {
      image: "/image/app-3.png",
      title: "IOS Development",
      description:
        "Create robust mobile apps for the iOS and Android operating systems.",
    },
    {
      image: "/image/app-4.png",
      title: "IOS Development",
      description:
        "Create robust mobile apps for the Android and iOS platforms.",
    },
    {
      image: "/image/app-5.png",
      title: "IOS Development",
      description:
        "Build powerful mobile applications for iOS and Android platforms",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "SUstylo",
      description:
        "a synopsis of the project and the services we offered for app development.",
      image: "/image/work/1.jpg",
      link: "https://sustylo.com/",
    },
    {
      id: 2,
      title: "FinUniques",
      description:
        "A brief description of the project and the app development solutions we provided.",
      image: "/image/work/2.jpg",
      link: "https://www.finuniques.in/",
    },
    {
      id: 3,
      title: "Gaming Platform",
      description:
        "An overview of the project and the app development services we offered.",
      image: "/image/work/3.jpg",
      link: "https://www.finuniquerummy.com/",
    },
  ];
  return (
    <div className="">
      <div className="w-full px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ab6545] mb-4">
              App Development Services
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              At SevenUnique Tech Solution Pvt. Ltd., we understand that in
              today’s fast-paced digital world, timely delivery and technical
              excellence are non-negotiable. That’s why our mobile app
              development services are built on the pillars of speed,
              scalability, and precision.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team of seasoned developers crafts high-performance
              applications compatible across all major platforms—Android, iOS,
              Windows, and more. Whether you're a startup or an enterprise, we
              design apps that are not only technically robust but also tailored
              to your business model and user needs.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <Banner2 slides={bannerSlides} />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mobile App Development Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At SevenUnique Tech Solution Pvt. Ltd., we don’t just develop
                apps—we become your strategic partner in navigating the dynamic
                world of digital transformation. With years of experience across
                diverse industries, our expert developers not only craft
                high-performance mobile applications but also provide tailored
                solutions that are aligned with your business objectives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From custom features to intuitive interfaces, our focus is on
                solving real-world problems while enhancing user experiences. By
                collaborating with us, you’re not just building an app—you’re
                investing in long-term growth and future-proof digital solutions
                that drive success.
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
      <section className="py-16 md:py-24 px-24   dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our App Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of app development services to meet
              your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Smartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Native App Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              For the iOS and Android platforms, we create high-performance native apps that take advantage of platform-specific capabilities to provide the greatest user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>iOS app development (Swift, React Native)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Android app development (React Native, Kotlin)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Platform-specific optimizations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Hardware integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <TabletSmartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Cross-Platform App Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              With a single codebase, we create cross-platform apps that function across several platforms, cutting down on development time and expenses without sacrificing user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>React Native development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Flutter development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Ionic framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Code reusability across platforms</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Layers className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                App Design & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              From concept to launch, we offer full-cycle app design and development services, guaranteeing a smooth and interesting user experience.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>UI/UX design for mobile apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Prototyping and wireframing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Custom app development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>App testing and quality assurance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                App Maintenance & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              To guarantee that your app is current, safe, and operates at its best, we offer continuous maintenance and support services.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Regular updates and improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Bug fixes and performance optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Security updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Technical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We create robust and scalable mobile applications by utilizing the newest frameworks and technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className=" dark:bg-gray-800 p-6 pb-0 rounded-lg  text-center"
              >
                <img className="font-bold w-[137px] h-[137px]" src={tech} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-24  dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our App Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            To guarantee the success of any app development project, we employ a methodical and cooperative approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Discovery & Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              To build a strong foundation for your project, we start by comprehending your target audience, company objectives, and app needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Design & Prototyping
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              Before development starts, we produce interactive prototypes and wireframes to see how the app will work and look.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Development & Testing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              Our developers construct the software in accordance with the authorized designs, testing it frequently to guarantee its functioning and quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Deployment & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              We assist you with releasing your app on the appropriate app stores and offer continuing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section className="py-16 md:py-24 px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our App Development Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out a few of our most recent app development endeavors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-[#ab6545] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-24 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your app development needs and how we
            can help you create a powerful mobile application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary text-black hover:bg-white hover:text-[#ab6545]"
              asChild
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
