import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import { CheckCircle, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"

// Sample data for the banner
const bannerSlides = [
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Join Our Team",
    description: "Explore career opportunities and grow with us",
  },
]

// Sample data for job openings
const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "We're looking for an experienced Frontend Developer to join our team and help build beautiful, responsive web applications.",
    responsibilities: [
      "Develop new user-facing features using React.js and modern frontend technologies",
      "Build reusable components and libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with backend developers and designers",
    ],
    requirements: [
      "3+ years of experience with React.js and modern JavaScript (ES6+)",
      "Strong proficiency in HTML5, CSS3, and responsive design",
      "Experience with state management libraries (Redux, Context API, etc.)",
      "Familiarity with RESTful APIs and GraphQL",
      "Understanding of cross-browser compatibility issues and ways to work around them",
      "Excellent problem-solving skills and attention to detail",
    ],
    slug: "senior-frontend-developer",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description: "We're seeking a talented UX/UI Designer to create amazing user experiences for our products.",
    responsibilities: [
      "Create user flows, wireframes, prototypes, and mockups",
      "Design UI elements and components that are visually appealing and user-friendly",
      "Conduct user research and usability testing",
      "Collaborate with product managers and developers to implement designs",
      "Stay up-to-date with the latest UI/UX trends and techniques",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating your design process and solutions",
      "Understanding of user-centered design principles",
      "Experience with design systems and component libraries",
      "Excellent communication and collaboration skills",
    ],
    slug: "ux-ui-designer",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "We're looking for a Full Stack Developer to build and maintain both frontend and backend systems.",
    responsibilities: [
      "Develop and maintain web applications using modern JavaScript frameworks",
      "Design and implement RESTful APIs and database schemas",
      "Ensure the performance, quality, and responsiveness of applications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Identify and fix bugs and performance bottlenecks",
    ],
    requirements: [
      "4+ years of experience in full stack development",
      "Proficiency in JavaScript/TypeScript and modern frameworks (React, Next.js, etc.)",
      "Experience with backend technologies (Node.js, Express, etc.)",
      "Knowledge of database systems (SQL, NoSQL)",
      "Understanding of server-side rendering and API optimization",
      "Experience with cloud services (AWS, Azure, or GCP)",
    ],
    slug: "full-stack-developer",
  },
]

// Sample data for benefits
const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer competitive compensation packages that recognize your skills and experience.",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Remote Work",
    description: "Enjoy the flexibility of working remotely from anywhere in the world.",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Flexible Hours",
    description: "We understand the importance of work-life balance and offer flexible working hours.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Professional Development",
    description: "We invest in your growth with learning stipends and conference attendance.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation policy, plus paid sick leave and holidays.",
    icon: <Clock className="h-6 w-6" />,
  },
]

export default function CareerPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Work With Us"
                subtitle="Join our team of talented professionals and make an impact"
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At our company, we believe that our success is driven by our people. We're committed to creating an
                inclusive, collaborative environment where talented individuals can thrive, grow, and make a real
                impact.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We're looking for passionate, creative, and driven individuals who share our vision and values. If
                you're excited about technology and want to be part of a team that's building innovative solutions for
                real-world problems, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Collaborative and inclusive work environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Opportunities for professional growth and development
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Work on challenging and meaningful projects</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Competitive compensation and benefits</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits & Perks"
            subtitle="We offer a range of benefits to support your well-being and professional growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Open Positions"
            subtitle="Explore our current job openings and find your next opportunity"
          />

          <div className="space-y-6 mt-12">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href={`/career/${job.slug}`}>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">Apply Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Application Process"
            subtitle="What to expect when you apply for a position with us"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900/30 transform md:translate-x-px"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Application Review</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our team reviews your application and resume to assess your qualifications and experience.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 pt-8 md:pt-0"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 pb-8 md:pb-0"></div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 order-2 md:order-2 pt-8 md:pt-0">
                    <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If your profile matches our requirements, we'll schedule a phone or video interview to get to know
                      you better.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Depending on the role, you may be asked to complete a technical assessment or case study to
                      demonstrate your skills.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 pt-8 md:pt-0"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 order-1 md:order-1 pb-8 md:pb-0"></div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 order-2 md:order-2 pt-8 md:pt-0">
                    <h3 className="text-xl font-bold mb-2">Team Interview</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Meet with potential team members and stakeholders to discuss your experience and how you'd fit
                      into the team.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Offer</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you're the right fit, we'll extend an offer and welcome you to the team!
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 pt-8 md:pt-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="bg-white text-purple-700 hover:bg-gray-100">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
