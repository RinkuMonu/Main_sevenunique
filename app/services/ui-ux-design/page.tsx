import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function UIUXDesignPage() {
  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "UI/UX Design Services",
      description: "Create intuitive and engaging user experiences with our expert design team",
    },
  ]
  
  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides}  />

      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">User-Centered Design Approach</h2>
              <p className="text-muted-foreground md:text-lg">
                Our UI/UX design services focus on creating intuitive, engaging, and effective user experiences that
                drive results. We combine aesthetics with functionality to design digital products that users love.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>User research and persona development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Information architecture and wireframing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Interactive prototyping and user testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Visual design and UI component systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Accessibility and inclusive design</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="UI/UX Design Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Design Process</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We follow a comprehensive design process to ensure your digital products meet user needs and business
                objectives.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary font-bold text-xl">01</div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and project requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary font-bold text-xl">02</div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-muted-foreground">
                We conduct user research, analyze competitors, and identify opportunities for innovation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary font-bold text-xl">03</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">
                We create wireframes, prototypes, and visual designs that align with your brand and user needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary font-bold text-xl">04</div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-muted-foreground">
                We validate designs through user testing and iterate based on feedback to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="UI/UX Design Portfolio"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our UI/UX Design Services</h2>
              <p className="text-muted-foreground md:text-lg">
                Our design team combines creativity with strategic thinking to deliver exceptional user experiences that
                drive engagement and conversion.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">User-Centered Approach</h3>
                    <p className="text-muted-foreground">
                      We put users at the center of our design process, ensuring products that meet their needs and
                      expectations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Research-Driven Design</h3>
                    <p className="text-muted-foreground">
                      Our designs are based on solid research and data, not just aesthetics or trends.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Collaborative Process</h3>
                    <p className="text-muted-foreground">
                      We work closely with your team, involving you at every stage of the design process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Conversion-Focused</h3>
                    <p className="text-muted-foreground">
                      Our designs not only look good but are strategically crafted to achieve your business goals.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your User Experience?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to discuss how our UI/UX design services can help you create digital products that
                users love.
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
