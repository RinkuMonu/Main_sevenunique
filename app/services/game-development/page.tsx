import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Gamepad2,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";
import Banner from "@/components/banner";

export default function GameDevelopmentPage() {
  const benefits = [
    "Engage players with immersive storylines and responsive gameplay",
    "Unlock new revenue channels through in-app purchases and strategic ad integration",
    "Strengthen brand loyalty and user retention with gamified experiences",
    "Expand your reach across platforms including mobile, web, PC, and console",
    "Harness the latest game engines and technologies like Unity, Unreal Engine, and AR/VR",
  ];

  const platforms = [
    "PC & Mac",
    "Mobile Android",
    "Web Browsers",
    "Mobile ios",
    "Consoles",
    "Cross-Platform",
  ];

  const bannerSlides = [
    {
      image: "/image/banner/Game.jpg",
      title: "Game Development Services",
      description:
        "From concept to launch, we create engaging, high-quality games tailored to your vision",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "Rummy",
      description:
        "a synopsis of the project and the services we offered for Game development.",
      image: "/image/2151933847.jpg",
      link: "https://www.finuniquerummy.com/rummy",
    },
    {
      id: 2,
      title: "Poker",
      description:
        "A brief description of the project and the Game development solutions we provided.",
      image: "/image/6640325_23142.jpg",
      link: "https://www.finuniquerummy.com/poker",
    },
    {
      id: 3,
      title: "Pool",
      description:
        "An overview of the project and the Game development services we offered.",
      image: "/image/2814.jpg",
      link: "https://www.finuniquerummy.com/pool",
    },
  ];
  return (
    <div className="">
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Immersive Game Development Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At SevenUnique, we understand that the future of gaming lies in
                immersive storytelling and seamless interactivity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our game development services are designed to bring your ideas
                to life through visually captivating, technically robust, and
                creatively engaging experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you're aiming to entertain, educate, or monetize, our
                expert team merges innovation with strategic thinking to build
                games that not only capture attention but also deliver
                measurable impact.
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
                <Link href="/contact" className="text-white">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/image/2151941537.jpg"
                alt="Game Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Game Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              we specialize in developing immersive, interactive, and
              high-performing games tailored to your brand vision and user
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Monitor className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                PC & Console Game Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From indie games to large-scale AAA-level projects, we develop
                robust PC and console games using engines like Unity and Unreal
                Engine.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>High-definition visuals and responsive gameplay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Integration with Steam, PlayStation, Xbox</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Story-based and competitive gaming models</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Advanced performance optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Smartphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Mobile Game Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We build highly engaging and visually appealing mobile games for
                Android and iOS platforms. Our games are designed with
                performance, monetization, and user retention in mind.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Casual, arcade, and multiplayer game development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Cross-platform mobile gaming solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>In-app purchases and ad monetization systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Real-time player interaction features</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We create fast, lightweight web-based games that are accessible
                via any modern browser and device.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>HTML5, WebGL, and JavaScript-based games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Social media-integrated games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Interactive branded experiences (advergames)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Real-time web multiplayer gaming</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-[#ab6545] mb-4">
                <Gamepad2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">AR/VR Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We offer next-generation gaming experiences using augmented and
                virtual reality technologies for deeply immersive gameplay.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>AR-based mobile and smart glasses games</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>VR simulations and gamified training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Support for Oculus, HTC Vive, and other devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mr-2 mt-0.5" />
                  <span>Educational and enterprise-focused solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platforms We Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              we build games that perform seamlessly across a wide range of
              platforms to ensure maximum reach, performance, and player
              engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="font-bold">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Game Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              we follow a streamlined, collaborative, and results-driven
              approach to game development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Concept & Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We establish a strong basis for your game by developing the
                characters, plot, gaming mechanics, and game concept.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Before beginning full production, we construct a playable
                prototype to evaluate essential gameplay elements and make any
                necessary modifications.
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
                Our developers construct the game in accordance with the
                authorized design, testing it frequently to guarantee its
                functioning and quality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#AB6545] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                In addition to offering continuous maintenance and updates, we
                assist you in launching your game on the appropriate platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Game Development Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent game development projects.
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
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-24 bg-gary-50 text-white"   style={{backgroundImage:"url(/image/15031301.jpg)",   backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Game?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your game development needs and how we
            can help you create an engaging and immersive gaming experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-100 text-black hover:bg-white hover:text-[#ab6545]"
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
