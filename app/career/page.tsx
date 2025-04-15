import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "@/components/banner";
import SectionHeading from "@/components/section-heading";
import {
  CheckCircle,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  IndianRupee,
} from "lucide-react";

// Sample data for the banner
const bannerSlides = [
  {
    image: "/image/Career-01.jpg",
    title: "Join Our Team",
    description: "Explore career opportunities and grow with us",
  },
];

// Sample data for job openings
const jobOpenings = [
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Onsite",
    type: "Full-time",
    salary: "₹90,000 - ₹120,000",
    description:
      "We're looking for an experienced Frontend Developer to join our team and help build beautiful, responsive web applications.",
    responsibilities: [
      "Develop and maintain web applications.",
      "Write clean, maintainable, and scalable code.",
      "Collaborate with design and product teams to deliver high-quality features.",
    ],
    requirements: [
      "Strong knowledge of JavaScript, HTML, CSS, and frameworks like React or Angular.",
      "Proficiency in back-end technologies like Node.js, PHP, or Python.",
      "Familiarity with databases like MySQL, MongoDB.",
      "Ability to work in a fast-paced environment and manage multiple tasks.",
    ],
    slug: "Full Stack Developer",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "₹80,000 - ₹110,000",
    description:
      "We're seeking a talented UX/UI Designer to create amazing user experiences for our products.",
    responsibilities: [
      "Design intuitive user interfaces for web and mobile applications.",
      "Collaborate with developers to implement designs seamlessly.",
      "Conduct user research and usability testing.",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Adobe XD, Sketch, or others.",
      "Strong understanding of user-centered design principles.",
      "Ability to create wireframes, prototypes, and visual assets.",
    ],
    slug: "ux-ui-designer",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Jaipur",
    type: "Full-time",
    salary: "₹100,000 - ₹130,000",
    description:
      "We're looking for a Digital Marketing Specialist to plan, execute, and optimize our online marketing efforts across various digital channels.",
    responsibilities: [
      "Develop and execute digital marketing campaigns.",
      "Monitor and analyze the effectiveness of campaigns.s",
      "Manage SEO strategies and improve search engine rankings.",
      "Create and manage content for social media platforms.",
      "Collaborate with cross-functional teams to define, design, and ship new features",
    ],
    requirements: [
      "4+ years of experience in Digital Marketing",
      "Strong knowledge of digital marketing channels, including SEO, SEM, email marketing, and social media.",
      "Expertise in SEO, SEM, Google Analytics, and social media platforms.",
      "Experience with content strategy and paid campaigns.",
      "Strong analytical skills and ability to track and report on KPIs.",
    ],
    slug: "Digital Marketing Specialist",
  },
];

// Sample data for benefits
const benefits = [
  {
    title: "Competitive Salary",
    description:
      "We offer competitive compensation packages that recognize your skills and experience.",
    icon: <IndianRupee className="h-6 w-6" />,
  },
  {
    title: "Paid Time Off (PTO)",
    description:
      "Take the time you need to rest, recharge, and take care of personal matters with our generous paid time off policy.",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Innovative Environment",
    description:
      "We encourage creativity and the free exchange of ideas, ensuring that our team has the opportunity to grow and innovate.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Health Insurance",
    description:
      "Comprehensive health, dental, and vision insurance for you and your dependents.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Professional Development",
    description:
      "We invest in your growth with learning stipends and conference attendance.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Inclusive Culture",
    description:
      "We value diversity and promote a culture of respect, collaboration, and inclusion.",
    icon: <Clock className="h-6 w-6" />,
  },
];

export default function CareerPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner slides={bannerSlides} />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-24 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Work With Us"
                subtitle="Become a member of our accomplished team and have an influence."
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At our organization, we think that our employees are the key to
                our success. Our goal is to establish a welcoming, cooperative
                atmosphere where gifted people can flourish and truly make an
                influence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We are seeking ambitious, imaginative, and enthusiastic people
                who share our values and vision. We would love to speak with you
                if you have a strong interest in technology and would like to
                work with a group that is developing creative answers to
                pressing issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                  An inclusive and cooperative workplace
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                  Possibilities for career advancement and development
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                  Work on worthwhile and difficult projects.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                  Competitive pay and benefits
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              <Image
                src="/image/2149667031.jpg"
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
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits & Perks"
            subtitle="We offer a range of benefits to support your well-being and professional growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 px-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Open Positions"
            subtitle="Explore our current job openings and find your next opportunity"
          />

          <div className="space-y-6 mt-12">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
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
                   
                    <span>{job.salary}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>
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
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
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
                    <h3 className="text-xl font-bold mb-2">
                      Application Review
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We will carefully review your resume to understand your
                      skills and experience.
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
                    <h3 className="text-xl font-bold mb-2">
                      Initial Interview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      A quick conversation with our HR team to learn more about
                      you and your interest in the role.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">
                      Technical Assessment
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      For technical roles, you’ll be given a problem-solving
                      task or a coding challenge.
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
                      A discussion with the hiring manager to assess your fit
                      for the role and the team.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Offer</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If selected, we will extend an offer and begin your
                      onboarding process!
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
      <section className="py-16 md:py-24 px-24 bg-gray-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See a Position That Fits?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Talented people are always welcome to join our team. Tell us how you can help and send us your CV.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="default"
              className="hover:bg-white hover:text-purple-700 bg-purple-600 text-white"
            >
              Contact Us 
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
