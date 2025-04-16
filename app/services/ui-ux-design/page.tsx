import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Banner from "@/components/banner";

export default function UIUXDesignPage() {
  const bannerSlides = [
    {
      image: "/image/banner/ui-ux.jpg",
      title: "UI/UX Design Services",
      description:
        "Work with our talented design team to create user experiences that are interesting and easy to use.",
    },
  ];

  return (
    <div className="flex flex-col">
      <Banner slides={bannerSlides}  />
      

      <section className="py-16 md:py-24 px-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                User-Centered Design Approach
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Developing user experiences that are simple, interesting, and
                productive that produce outcomes is the main goal of our UI/UX
                design services. We create digital goods that people adore by
                fusing usefulness and beauty.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Researching users and creating personas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Information architecture and wireframing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Interactive prototyping and user testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Visual design and UI component systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545]" />
                  <span>Accessibility and inclusive design</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
              <Image
                src="/image/services/2.jpg"
                alt="UI/UX Design Process"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Design Process
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                To make sure your digital products satisfy user needs and
                corporate objectives, we employ a thorough design process.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545] font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
              We begin by comprehending your project needs, target audience, and business objectives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545] font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-muted-foreground">
              In order to find chances for innovation, we study our competitors and perform user research.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545] font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">
              We produce graphic designs, wireframes, and prototypes that complement your brand and user requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-[#AB6545]/10 p-4 text-[#ab6545] font-bold text-xl">
                04
              </div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-muted-foreground">
              To guarantee the best outcomes, we test designs with users and make adjustments in response to their comments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24 md:px-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square order-2 lg:order-1">
              <Image
                src="/image/services/3.jpg"
                alt="UI/UX Design Portfolio"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our UI/UX Design Services
              </h2>
              <p className="text-muted-foreground md:text-lg">
              Our design team delivers outstanding user experiences that increase engagement and conversion by fusing creativity and smart thinking.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">User-Centered Approach</h3>
                    <p className="text-muted-foreground">
                    By placing users at the heart of the design process, we make sure that the final products fulfill their requirements and expectations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Research-Driven Design</h3>
                    <p className="text-muted-foreground">
                    Our designs are not solely based on trends or aesthetics, but also on sound research and statistics.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Collaborative Process</h3>
                    <p className="text-muted-foreground">
                    We collaborate closely with your team, including you in all phases of the design process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#ab6545] mt-1" />
                  <div>
                    <h3 className="font-bold">Conversion-Focused</h3>
                    <p className="text-muted-foreground">
                    In addition to being aesthetically pleasing, our designs are thoughtfully created to meet your company's objectives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-24  bg-gray-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your User Experience?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
              Get in touch with us right now to find out how our UI/UX design services may assist you in producing user-loving digital goods.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-100 bg-white hover:bg-[#AB6545] hover:text-white"
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
