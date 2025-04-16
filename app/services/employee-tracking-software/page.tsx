import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function EmployTrackingSoftwarePage() {
    const bannerSlides = [
        {
          image: "/image/banner/employe.jpg",
          title: "Employee Tracking Software",
          description: "Monitor productivity and optimize workforce management with our comprehensive tracking solution",
          
        },
      ]

  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides} />

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Advanced Employee Tracking</h2>
              <p className="text-muted-foreground md:text-lg">
              Our employee tracking software provides a robust and all-inclusive solution for businesses aiming to manage and monitor their workforce more effectively. Whether you need to track employee working hours, assess performance levels, monitor attendance, or ensure compliance with labor regulations, our platform offers a comprehensive set of tools to optimize productivity. With this solution, you can ensure accurate and transparent tracking of your employees' activities, driving both individual and team efficiency. Our software is designed to help businesses of all sizes streamline their workforce management while fostering a culture of accountability and trust. It not only tracks time but also provides actionable insights to improve performance and optimize overall business operations.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Accurate time and attendance tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Activity monitoring and productivity analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Project time tracking and billing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Location tracking for field employees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Comprehensive reporting and analytics</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/image/5765.jpg"
                alt="Employee Tracking Software"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="mx-auto text-muted-foreground ">
              Our employee tracking software is packed with a comprehensive set of advanced features, all crafted to optimize your workforce management, increase productivity, and provide complete transparency. Whether you are managing a remote team or monitoring employees in the office, our platform ensures that every aspect of your team's performance is tracked efficiently and in real time.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Time Tracking</h3>
              <p className="text-muted-foreground">
              Track employees' working hours accurately with clock-in/out functionality, break management, and overtime calculations to ensure proper compensation and productivity analysis.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20v-6M6 20V10M18 20V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Productivity Monitoring</h3>
              <p className="text-muted-foreground">
              Gain valuable insights into employee activity by monitoring application usage, website visits, and overall activity levels, helping you assess individual performance and optimize workflows.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Location Tracking</h3>
              <p className="text-muted-foreground">
              Use GPS tracking to monitor field employees’ locations in real time. With geofencing capabilities and route optimization, you can ensure employees are on schedule and make adjustments as needed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Project Tracking</h3>
              <p className="text-muted-foreground">
              Track time spent on specific projects and tasks, ensuring accurate billing, proper resource allocation, and a better understanding of project progress and timelines.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Attendance Management</h3>
              <p className="text-muted-foreground">
              Easily manage attendance with robust features that handle leave management, work schedule tracking, and real-time absence notifications, keeping your workforce organized and on track.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Screenshot Monitoring</h3>
              <p className="text-muted-foreground">
              Capture screenshots at configurable intervals to verify work progress, ensure quality assurance, and maintain transparency across tasks and projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image
                src="/image/2150041867.jpg"
                alt="Employee Tracking Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our Employee Tracking Software
              </h2>
              <p className="text-muted-foreground md:text-lg">
              Our employee tracking software is built to cater to the evolving needs of businesses of all sizes, ensuring that you have a solution that not only improves productivity but also respects your employees' privacy. With a user-friendly interface, scalable architecture, and seamless integration with your existing systems, our software provides a streamlined experience for both managers and employees. Here’s why our solution stands out:
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545] mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Privacy-Focused</h3>
                    <p className="text-muted-foreground">
                    We prioritize employee privacy with transparent monitoring features and configurable settings to ensure that tracking remains fair and respectful of individual rights.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545] mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">User-Friendly Interface</h3>
                    <p className="text-muted-foreground">
                    Our intuitive design ensures that both managers and employees can navigate the platform with ease, reducing the learning curve and increasing overall efficiency.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545] mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Seamless Integration</h3>
                    <p className="text-muted-foreground">
                    The software integrates smoothly with your existing HR systems, payroll software, and project management tools, helping to create a cohesive workflow without disruptions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545] mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                    From initial implementation to ongoing usage, our dedicated support team is available to assist you, ensuring smooth operations and providing timely solutions to any issues that may arise.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 text-white"  style={{backgroundImage:"url(/image/254275.jpg)", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Optimize Your Workforce Management?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our employee tracking software can help you improve productivity and
                streamline operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
