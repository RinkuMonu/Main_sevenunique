import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"
import seoConfig from "@/app/seoConfig";
import SEO from "@/components/SEO/SEO";
export default function FantasySportSoftwarePage() {

  const bannerSlides = [
    {


      image: "/image/banner/Fantasy.jpg",

      title: "Fantasy Sport Software",
      description: "Build engaging fantasy sports platforms with our comprehensive software solutions",

    },
  ]

  return (
    <div className="flex flex-col">
       <SEO seo={seoConfig["/services/fantasy-sport-software"]} />
      <Banner slides={bannerSlides} />

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cutting-Edge Fantasy Sports Solutions</h2>
              <p className="text-muted-foreground md:text-lg">
                Enter the world of fantasy sports with our all-in-one software platform designed to simplify the complexities of running a successful fantasy sports business. From managing players and creating dynamic contests to providing real-time scoring and insights, our software offers a robust solution for businesses in the fantasy sports industry.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-25 w-25 text-[#ab6545]" />
                  <span>Comprehensive player and team management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-25 w-25 text-[#ab6545]" />
                  <span>Flexible contest creation and management</span>
                </li>
                <li className="flex items-center gap-2">

                  <CheckCircle className="h-25 w-25 text-[#ab6545]" />

                  <span>Real-time scoring and statistics
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-25 w-25 text-[#ab6545]" />
                  <span>Secure payment processing and wallet management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-25 w-25 text-[#ab6545]" />
                  <span>Advanced analytics and reporting tools</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/image/37654.jpg"
                alt="Fantasy Sport Software"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>

              <p className="mx-auto  text-muted-foreground md:text-sm">

                Our fantasy sports software by SevenUnique Tech Solutions is built to offer an immersive, dynamic, and competitive experience for users, ensuring that every aspect of the game—from player management to prize distribution—is seamless, secure, and highly engaging. We have incorporated a range of robust features designed to optimize user interaction, enhance gameplay, and provide a versatile platform that can be tailored to a wide variety of fantasy sports games. Below are the standout features that set our solution apart:
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Player Management</h3>
              <p className="text-muted-foreground">
                Maintain an extensive player database with detailed statistics, performance metrics, and live updates, allowing users to make informed decisions while crafting their fantasy teams.
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
              <h3 className="text-xl font-bold mb-2">Dynamic Contest Creation</h3>
              <p className="text-muted-foreground">
                Offer a wide variety of contest formats, flexible entry fees, and customizable prize structures. Tailor each contest to match user preferences and boost engagement.
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
              <h3 className="text-xl font-bold mb-2">Live Scoring & Real-Time Leaderboards</h3>
              <p className="text-muted-foreground">
                Keep users hooked with real-time scoring updates and interactive leaderboards, ensuring constant excitement and competition throughout the duration of each contest.
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payment & Wallet Integration
              </h3>
              <p className="text-muted-foreground">
                Ensure smooth, secure transactions with multiple payment options, along with an integrated wallet system for easy fund management, deposits, and withdrawals.
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Prize Distribution</h3>
              <p className="text-muted-foreground">
                Simplify the prize payout process with automated distribution, customizable payout structures, and flexible withdrawal options, ensuring a seamless experience for users
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Robust User Management</h3>
              <p className="text-muted-foreground">
                Offer a personalized experience with advanced user profiles, performance tracking, and social features to engage users, allowing them to interact, share achievements, and increase platform loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video mx-w[800px] overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image
                src="/image/27535.jpg"
                alt="Fantasy Sports App"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our Fantasy Sports Software
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our fantasy sports software is engineered to provide a seamless, engaging, and reliable platform for fantasy sports businesses. Whether you are a startup or an established brand, our solution is built to scale, adapt, and meet your evolving needs. Here’s why our software stands out.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545] mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Scalable Solution</h3>
                    <p className="text-muted-foreground">
                      Our platform is designed to support millions of users and contests simultaneously without compromising on performance. Whether you’re running a small league or a large-scale global competition, our solution can handle high traffic volumes with ease, ensuring smooth operations even during peak usage times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545]  mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Customizable Interface</h3>
                    <p className="text-muted-foreground">
                      With a fully customizable interface, you can align the platform with your brand identity and specific business goals. From color schemes and logos to custom features and functionalities, our software allows you to personalize the user experience, making it uniquely yours.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545]  mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      We understand the importance of operating within legal frameworks. Our fantasy sports software is built to adhere to regulatory requirements in multiple regions, ensuring that your business remains compliant with laws and policies related to gaming and sports betting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#ab6545]  mt-1" width={70} height={70} />
                  <div>
                    <h3 className="font-bold">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Our team of experts is always ready to assist you. From initial setup and configuration to ongoing support, we provide comprehensive assistance to ensure smooth platform operation. Whether you face technical challenges or need help optimizing features, our dedicated support team is just a call away.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">

                  <CheckCircle className="text-[#ab6545]  mt-1" width={70} height={70} />

                  <div>
                    <h3 className="font-bold">Advanced Security Features</h3>
                    <p className="text-muted-foreground">
                      Security is our top priority. Our platform uses the latest encryption technologies to safeguard sensitive user data and financial transactions. We implement multi-layered security protocols to ensure that both users and administrators are protected from any potential threats.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:px-24 bg-[#AB6545] text-white"  style={{backgroundImage:"url(/image/477491.jpg)",  backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Launch Your Fantasy Sports Platform?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our fantasy sports software can help you create an engaging and
                profitable platform.
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
