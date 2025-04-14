import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import Banner from "@/components/banner"
import { CheckCircle, Target, Lightbulb, Users, Award } from "lucide-react"

// Sample data for the banner
const bannerSlides = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to industry leaders"
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2010, our company began with a small team of passionate developers and designers with a
                shared vision: to create innovative digital solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Over the years, we've grown into a full-service digital agency, expanding our services and team to meet
                the evolving needs of our clients. Today, we're proud to have worked with businesses of all sizes across
                various industries, helping them achieve their goals through technology.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. We've
                stayed at the forefront of technological advancements, constantly refining our skills and processes to
                deliver the best possible solutions for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64 mt-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64 -mt-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Our Office"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=400"
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
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
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
                    <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation at the Core</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We strive to be at the forefront of technological innovation, constantly exploring new ways to
                      solve complex problems and create value for our clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We envision a world where businesses of all sizes can harness the power of technology to transform
                      their operations, reach new customers, and achieve sustainable growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inclusive Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We believe in creating digital solutions that are accessible, user-friendly, and inclusive,
                      ensuring that technology serves the needs of all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="Empowering businesses through technology"
                centered={false}
              />
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Excellence in Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We are committed to delivering high-quality digital solutions that exceed our clients'
                      expectations and help them achieve their business objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client Partnership</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We believe in building long-term relationships with our clients based on trust, transparency, and
                      mutual success. We see ourselves as partners in our clients' journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We are dedicated to continuous learning and improvement, staying updated with the latest
                      technologies and best practices to provide the best possible solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide our work and relationships" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in everything we do, from the quality of our code to the service we provide to
                our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in the power of teamwork and collaboration, both within our team and with our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace innovation and creative thinking to solve complex problems and deliver unique solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our
                clients and partners.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We put our clients at the center of everything we do, focusing on their needs and working to exceed
                their expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to continuous learning and professional development, staying updated with the latest
                technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for a digital partner for your next project or interested in joining our team, we'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/career">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
