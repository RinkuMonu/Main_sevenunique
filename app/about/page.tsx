import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import Banner from "@/components/banner";
import { CheckCircle, Target, Lightbulb, Users, Award } from "lucide-react";
import seoConfig from "../seoConfig";
import SEO from "@/components/SEO/SEO";

// Sample data for the banner
const bannerSlides = [
  {
    image: "/image/banner/About.jpg",
    title: "About Our Company",
    description:
      "Learn more about our journey, mission, and the team behind our success.",
  },
];

// Sample data for partners
const partners = [
  { name: "Partner 1", logo: "/placeholder-logo.svg" },
  { name: "Partner 2", logo: "/placeholder-logo.svg" },
  { name: "Partner 3", logo: "/placeholder-logo.svg" },
  { name: "Partner 4", logo: "/placeholder-logo.svg" },
  { name: "Partner 5", logo: "/placeholder-logo.svg" },
  { name: "Partner 6", logo: "/placeholder-logo.svg" },
];

export default function AboutPage() {
  return (
    <>
    <SEO  />
      {/* Banner Section */}
      <Banner slides={bannerSlides} />
      
      {/* About Content Section */}
      <section className="py-16 md:py-5 lg:py-24 md:px-24 ">
        <div className="container mx-auto md:px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to industry leaders"
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At SevenUnique Tech Solutions, we are driven by a single
                mission: to simplify, secure, and revolutionize digital payments
                for businesses and individuals alike.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded by visionary leaders, Mr. Dinesh Kumar and Mr. Amit
                Balotiya, we are committed to bridging the digital divide,
                making digital payment solutions accessible, safe, and
                future-ready for all.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                With years of industry expertise, we have evolved into a
                prominent player in the financial technology sector. Our
                platform empowers millions of users across India, including over
                2,300 distributors and 120,000+ retailers, spanning 1,000+
                districts. From urban cities to rural areas, we have
                successfully ensured that digital payments are within everyone's
                reach.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64">
                <Image
                  src="/images/242405.jpg"
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64 mt-8">
                <Image
                  src="/images/13181.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64 -mt-8">
                <Image
                  src="/images/27531.jpg"
                  alt="Our Office"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/2788.jpg"
                  alt="Working Together"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 md:px-24 md:md:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e8ab8f] dark:bg-purple-900/30 rounded-lg -z-10"></div>
                <Image
                  src="/images/7031.jpg"
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e8ab8f] dark:bg-purple-900/30 rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading
                title="Our Vision"
                subtitle="Creating a digital future that works for everyone"
                centered={false}
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Innovation at the Core
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We envision a world where every individual and business
                      can participate in the digital economy, effortlessly
                      managing their finances with secure, fast, and efficient
                      solutions. Our ultimate goal is to make India the world's
                      top economy by 2040, leading with innovation and
                      inclusivity. We aspire to create an operating system that
                      empowers individuals and businesses to manage their money
                      with ease, providing them with cutting-edge technology and
                      solutions that enhance their daily lives and foster
                      economic growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 md:px-24 md:md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="Empowering businesses through technology"
                centered={false}
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Excellence in Delivery
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our mission is simple: To build trust, foster innovation,
                      and create secure, reliable digital payment solutions. We
                      aim to revolutionize the way India interacts with digital
                      financial services by offering scalable, high-performance
                      solutions that benefit both businesses and consumers.
                      Through constant evolution and a customer-first approach,
                      we’re ensuring that digital payments are accessible to
                      everyone, everywhere. We believe in showing up every day
                      with dedication and solving the most pressing challenges
                      faced by businesses, consumers, and regulatory bodies. We
                      take pride in delivering impact-driven solutions that
                      contribute to the economic prosperity and digital
                      transformation of the nation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e8ab8f] dark:bg-purple-900/30 rounded-lg -z-10"></div> */}
                <Image
                  src="/images/4229.jpg"
                  alt="Our Mission"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                {/* <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#e8ab8f] dark:bg-purple-900/30 rounded-lg -z-10"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 md:px-24 bg-gray-50 md:md:px-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in every project, ensuring we meet and
                exceed expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in the power of teamwork and collaboration, both
                within our team and with our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We continuously push the boundaries of what is possible,
                adopting new technologies and approaches to stay ahead of the
                curve.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We uphold the highest standards of honesty, transparency, and
                ethical practices in everything we do.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We place the needs of our clients and customers at the core of
                every solution we provide.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We are dedicated to lifelong learning and professional growth,
                keeping abreast of emerging technology and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24 md:px-24 text-white"
        style={{
          backgroundImage: "url(/image/653382.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join Our Journey
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
              Whether you're looking for a digital partner for your next project or interested in joining our team, we'd
              love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-purple-700 hover:bg-[#e8ab8f] hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/career">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-gray-100  hover:bg-[#AB6545] hover:text-white"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
