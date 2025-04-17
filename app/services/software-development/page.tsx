// pages/software-development.tsx

import Banner from "@/components/banner"
import Link from "next/link"


const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "software solutions that are specifically tailored to your company's goals and issues.",
      features: ["Requirement Analysis", "Custom Architecture", "Scalable Solutions", "Ongoing Support"],
    },
    {
      title: "Enterprise Software",
      description:
        "dependable business apps that boost productivity, simplify processes, and spur expansion.",
      features: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Workflow Automation"],
    },
    {
      title: "SaaS Development",
      description:
        "software-as-a-service options that are cloud-based and offer accessibility, scalability, and flexibility.",
      features: ["Multi-tenant Architecture", "Subscription Management", "API Integration", "Analytics Dashboard"],
    },
    {
      title: "Legacy System Modernization",
      description: "Convert your antiquated systems into secure, effective, and contemporary apps.",
      features: ["Code Refactoring", "Platform Migration", "UI/UX Modernization", "Performance Optimization"],
    },
  ]

  const technologies = [
    "Java", "Python", "C#", ".NET", "Node.js", "React", "Angular", "Vue.js",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "MySQL",
  ]


  const bannerSlides = [
    {
      image: "/image/banner/software.jpg",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
    },
  ]
  return (
    <div className="">
      <Banner  slides={bannerSlides}  />

      {/* Overview */}
      <section className="py-10 md:py-14 px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-3">
              we specialize in custom software development that is fully tailored to meet your specific operational needs, industry demands, and future goals.

              </p>
              <p className="text-gray-600 mb-6">
              Our expert team crafts scalable, secure, and high-performance software solutions designed to streamline your workflows, reduce manual effort, and boost overall productivity.
              </p>
              <p className="text-gray-600 mb-6">
              From concept to deployment and beyond, we align our strategies with your business vision—delivering solutions that work for you, not the other way around.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Tailored Solutions",
                    desc: "We create software that specifically addresses the particular business problems you face.",
                  },
                  {
                    title: "Scalable Architecture",
                    desc: "Our systems are designed to expand with your company.",
                  },
                  {
                    title: "Agile Development",
                    desc: "For speed, flexibility, and transparency, we employ agile approaches.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <i className="bi bi-check-circle text-[#ab6545] mt-1"></i>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary">
                Discuss Your Software Project
              </Link>
            </div>

            <div>
              <img
                src="/image/2149901785.jpg"
                alt="Software Development"
                className="rounded w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-14 px-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Our Software Development Services</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          we specialize in creating innovative software solutions that drive business growth and streamline operations.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded shadow p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="bi bi-check-circle text-[#ab6545] mr-2 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 md:py-14 px-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Technologies We Use</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We leverage the latest technologies and tools to build robust, scalable software.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded shadow p-4 text-center">
                <h3 className="font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-14 px-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Our Development Process</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            A structured approach ensures successful delivery of every project.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Discovery & Planning",
                desc: "Recognize your objectives, specify the project's scope, and create a roadmap.",
              },
              {
                title: "Design & Architecture",
                desc: "Establish a solid base with a well-defined system architecture and design.",
              },
              {
                title: "Development & Testing",
                desc: "ongoing performance and quality testing along with iterative development.",
              },
              {
                title: "Deployment & Support",
                desc: "seamless implementation, as well as ongoing upkeep and assistance.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded shadow p-6 relative">
                <div className="absolute -top-4 -left-4 bg-[#AB6545] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 px-24 bg-[#AB6545] text-white text-center"  style={{backgroundImage:"url(/image/1694.jpg)",  backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="mb-6 max-w-xl mx-auto">
          To explore your software development requirements and how we might assist, get in touch with us right now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn btn-light text-[#ab6545]">
              Contact Us
            </Link>
            <Link href="/services" className="btn btn-outline-light border-white">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareDevelopment
