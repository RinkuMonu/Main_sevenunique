'use client'

import Link from 'next/link'
import Banner from '@/components/banner'

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: "Our team employs proven SEO techniques, including on-page optimization, link building, and technical SEO, to drive organic traffic and increase your online presence.",
      features: ['Keyword Research', 'On-page Optimization', 'Technical SEO', 'Off-page Optimization'],
      icon: '🔍'
    },
    {
      title: 'Social Media Marketing',
      description: 'We help your brand thrive across various social platforms such as Facebook, Instagram, Twitter, LinkedIn, and more',
      features: ['Platform Strategy', 'Content Creation', 'Engagement Strategies', 'Paid Campaigns'],
      icon: '📱'
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: ' We manage and optimize your paid ads on platforms like Google Ads, Bing Ads, and social media to drive targeted traffic to your website.',
      features: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Remarketing'],
      icon: '💰'
    },
    {
      title: 'Content Marketing',
      description: ' We develop high-quality, SEO-optimized content that engages your audience, builds trust, and drives conversions',
      features: ['Content Strategy', 'Blog Posts', 'Whitepapers', 'Video Content'],
      icon: '✍️'
    },
    {
      title: 'Email Marketing',
      description: 'We develop personalized email campaigns that nurture leads, build relationships with customers, and keep your audience engaged.',
      features: ['Campaign Strategy', 'Email Design', 'Automation', 'Performance Analysis'],
      icon: '✉️'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Our team continuously tracks, measures, and analyzes the performance of your digital marketing campaigns.',
      features: ['Custom Dashboards', 'Performance Tracking', 'Conversion Analysis', 'ROI Measurement'],
      icon: '📊'
    },
  ]

  const bannerSlides = [
    {
      image: "/image/banner/Digital-Marketing.jpg",
      title: "Digital Marketing Solutions",
      description: "Data-driven strategies to grow your online presence and convert more customers",
      cta: "Get Your Free Audit"
    },
  ]

  return (
    <div className="bg-white">
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 lg:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-fade-in">
              <span className="inline-block mb-3 text-sm font-semibold text-[#ab6545] tracking-widest">DIGITAL MARKETING</span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Strategic Marketing for <span className="text-[#ab6545]">Measurable Growth</span></h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-600">
                In today’s digital-first world, a well-executed digital marketing strategy is key to achieving sustained business growth and maximizing ROI.
                </p>
                <p className="text-lg text-gray-600">
                At SevenUnique Tech Solution Pvt. Ltd., we blend innovative strategies with data-driven insights to create customized marketing campaigns that resonate with your target audience and drive real, measurable results.

                </p>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  {
                    title: 'Performance-Focused',
                    desc: 'We use business results, not simply vanity measures, to gauge performance.',
                  },
                  {
                    title: 'Omnichannel Integration',
                    desc: 'synchronization across all digital platforms for optimal effect.',
                  },
                  {
                    title: 'Continuous Optimization',
                    desc: 'real-time modifications in response to market changes and performance data.',
                  },
                ].map((item, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#AB6545] text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-2 bg-[#AB6545] hover:bg-[#AB6545]-dark text-white font-medium rounded-sm transition duration-300">
                  Get Started
                </Link>
                <Link href="#services" className="px-8 py-2 border border-gray-300 hover:border-primary text-gray-700 hover:text-[#ab6545] font-medium rounded-sm transition duration-300">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/image/434 (1).jpg"
                  alt="Digital marketing strategy meeting"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Our Clients See Results</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold">3.5x</p>
                        <p className="text-sm">Avg. ROI Increase</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">+87%</p>
                        <p className="text-sm">Lead Growth</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">-45%</p>
                        <p className="text-sm">Cost Per Acquisition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 lg:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-[#ab6545] tracking-widest">SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Digital Marketing <span className="text-[#ab6545]">Services</span></h2>
            <p className="text-xl text-gray-600">
              Integrated solutions tailored to your business goals and audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-[#ab6545] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <Link href="/contact" className="text-[#ab6545] font-medium inline-flex items-center group-hover:underline">
                    Get this service
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 lg:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-[#ab6545] tracking-widest">PROCESS</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Proven <span className="text-[#ab6545]">Marketing Framework</span></h2>
            <p className="text-xl text-gray-600">
              A systematic approach that delivers consistent results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Discovery & Audit', 
                desc: 'thorough examination of the competitive environment and marketing you are currently using.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                )
              },
              { 
                title: 'Strategy Development', 
                desc: "Personalized marketing plan in line with your company's goals.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                )
              },
              { 
                title: 'Execution', 
                desc: 'flawless execution in every channel that was chosen.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                )
              },
              { 
                title: 'Optimization', 
                desc: 'For optimal performance, testing and improvement are ongoing.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                )
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-primary transition duration-300">
                <div className="text-[#ab6545] mb-5">
                  {step.icon}
                </div>
                <div className="text-xl font-bold mb-3 flex items-center">
                  <span className="mr-3 text-gray-400">0{idx + 1}</span>
                  {step.title}
                </div>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 lg:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-[#ab6545] tracking-widest">CASE STUDIES</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Marketing Success <span className="text-[#ab6545]">Stories</span></h2>
            <p className="text-xl text-gray-600">
              Real businesses achieving real results with our strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Growth",
                description: "300% revenue increase in 6 months through PPC and SEO",
                image: "/image/300.jpg",
                tags: ["SEO", "PPC", "Conversion"],
                results: [
                  { value: "300%", label: "Revenue Growth" },
                  { value: "150%", label: "Traffic Increase" },
                  { value: "40%", label: "ROI Improvement" }
                ]
              },
              {
                title: "SaaS Lead Generation",
                description: "Scaled qualified leads by 5x through content marketing",
                image: "/image/2150038851.jpg",
                tags: ["Content", "Email", "Automation"],
                results: [
                  { value: "5x", label: "More Leads" },
                  { value: "-35%", label: "Cost Per Lead" },
                  { value: "2.8x", label: "Conversion Rate" }
                ]
              },
              {
                title: "Local Service Expansion",
                description: "National expansion through localized digital strategies",
                image: "/image/3598.jpg",
                tags: ["Local SEO", "Social", "Reputation"],
                results: [
                  { value: "8x", label: "Market Expansion" },
                  { value: "+92%", label: "Inquiries" },
                  { value: "4.5★", label: "Average Rating" }
                ]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#AB6545]/10 text-[#ab6545] text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-[#ab6545]">{result.value}</p>
                        <p className="text-xs text-gray-500">{result.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* <Link href={`/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center font-medium text-[#ab6545] group-hover:underline">
                    Read full case study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
          
            
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 lg:py-20 md:px-24 bg-gradient-to-r from-primary to-secondary" style={{backgroundImage:"url(/image/17745.jpg)",  backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-[#ab6545]-light max-w-2xl mx-auto mb-10">
          Make an appointment for your free consultation to receive a personalized marketing plan..
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-[#ab6545] font-bold rounded-lg hover:bg-gray-100 transition duration-300">
              Get Started Today
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300">
              Request Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketing