import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import Banner from "@/components/banner"
import { CheckCircle, Target, Lightbulb, Users, Award } from "lucide-react"

// Sample data for the banner
const bannerSlides = [
  {
    image: "./image/banner/About.jpg",
    title: "About Our Company",
    description: "Learn more about our journey, mission, and the team behind our success.",
  },
]

// Sample data for partners
const partners = [
  { name: "Partner 1", logo: "/placeholder-logo.svg" },
  { name: "Partner 2", logo: "/placeholder-logo.svg" },
  { name: "Partner 3", logo: "/placeholder-logo.svg" },
  { name: "Partner 4", logo: "/placeholder-logo.svg" },
  { name: "Partner 5", logo: "/placeholder-logo.svg" },
  { name: "Partner 6", logo: "/placeholder-logo.svg" },
]

export default function AboutPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* About Content Section */}
      <section className="py-16 md:py-24 px-24 ">
        <div className="container mx-auto px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to industry leaders"
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              At SevenUnique Tech Solutions, we are driven by a single mission: to simplify, secure, and revolutionize digital payments for businesses and individuals alike.

              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded by visionary leaders, Mr. Dinesh Kumar and Amit Balotiya, we are committed to bridging the digital divide, making digital payment solutions accessible, safe, and future-ready for all.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              With years of industry expertise, we have evolved into a prominent player in the financial technology sector. Our platform empowers millions of users across India, including over 2,300 distributors and 120,000+ retailers, spanning 1,000+ districts. From urban cities to rural areas, we have successfully ensured that digital payments are within everyone's reach.
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
      <section className="py-16 md:py-24 px-24 md:px-24 bg-gray-50 dark:bg-gray-900">
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
                  <div className="mr-4 mt-1">
                    <Target className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation at the Core</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We work hard to be at the forefront of technical innovation, always looking for fresh approaches to challenging issues and methods to add value for our customers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lightbulb className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    In our ideal future, companies of all sizes will be able to use technology to revolutionize their business processes, attract new clients, and achieve long-term success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Users className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inclusive Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We are committed to developing inclusive, user-friendly, and accessible digital solutions that meet the demands of all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-24 md:px-24">
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
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Excellence in Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We are dedicated to providing our clients with superior digital solutions that surpass their expectations and enable them to accomplish their business goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client Partnership</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We are committed to establishing enduring bonds of trust, openness, and mutual success with our clients. We regard ourselves as collaborators on our clients' path.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#ab6545] dark:text-[#e8ab8f]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    In order to deliver the greatest solutions, we are committed to lifelong learning and development, keeping up with the newest innovations and industry best practices.
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
      <section className="py-16 md:py-24 px-24 bg-gray-50 md:px-24 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide our work and relationships" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
              We strive for excellence in every project, ensuring we meet and exceed expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in the power of teamwork and collaboration, both within our team and with our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
              We continuously push the boundaries of what is possible, adopting new technologies and approaches to stay ahead of the curve.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
              We uphold the highest standards of honesty, transparency, and ethical practices in everything we do.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
              We place the needs of our clients and customers at the core of every solution we provide.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-[#ab6545] dark:text-[#e8ab8f] mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
              We are dedicated to lifelong learning and professional growth, keeping abreast of emerging technology and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Trusted Partners"
            subtitle="We collaborate with leading companies and organizations to deliver exceptional solutions"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-24 bg-white-50 dark:bg-gray-900">
      <SectionHeading title="Join Our Journey" subtitle="Whether you're looking for a digital partner for your next project or interested in joining our team, we'd
            love to hear from you." />
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-purple-700 hover:bg-purple-400 hover:text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/career">
              <Button size="lg" variant="outline" className="bg-white text-purple-700 hover:bg-purple-400 hover:text-white">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
