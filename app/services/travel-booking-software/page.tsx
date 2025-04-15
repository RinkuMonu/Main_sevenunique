import Banner from "@/components/banner";
import Link from "next/link";
import {
    BiCalendarCheck,
    BiBox,
    BiCreditCard,
    BiGroup,
    BiBarChartAlt2,
    BiCodeAlt
  } from 'react-icons/bi';
  import { FaCalendarAlt } from "react-icons/fa";
const TravelSoftware = () => {
    const features = [
        {
          title: "Booking Management",
          description: "Comprehensive booking management for flights, hotels, cars, and packages with real-time availability.",
          icon: <FaCalendarAlt  className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Inventory Management",
          description: "Manage your travel inventory, including rooms, seats, and packages, with real-time updates.",
          icon: <BiBox className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Payment Processing",
          description: "Secure payment processing with support for multiple payment methods and currencies.",
          icon: <BiCreditCard className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Customer Management",
          description: "Maintain customer profiles, preferences, and booking history for personalized service.",
          icon: <BiGroup className="text-blue-600 text-2xl"/>,
        },
        {
          title: "Reporting & Analytics",
          description: "Generate comprehensive reports and gain insights into your business performance.",
          icon: <BiBarChartAlt2 className="text-blue-600 text-2xl"/>,
        },
        {
          title: "API Integration",
          description: "Seamless integration with major GDS systems, OTAs, and other travel service providers.",
          icon: <BiCodeAlt className="text-blue-600 text-2xl"/>,
        },
      ];

  const modules = [
    {
      title: "Flight Booking",
      description: "Comprehensive flight booking system with real-time availability, pricing, and ticketing.",
      features: ["GDS Integration", "Multi-city Booking", "Fare Comparison", "E-ticketing"],
    },
    {
      title: "Hotel Reservation",
      description: "Complete hotel reservation system with room inventory management and dynamic pricing.",
      features: ["Room Inventory", "Dynamic Pricing", "Property Management", "Booking Engine"],
    },
    {
      title: "Car Rental",
      description: "Car rental management system with fleet management and booking capabilities.",
      features: ["Fleet Management", "Rental Agreements", "Pricing Rules", "Availability Calendar"],
    },
    {
      title: "Package Tours",
      description: "Create and manage package tours with customizable itineraries and pricing.",
      features: ["Itinerary Builder", "Package Pricing", "Group Bookings", "Tour Management"],
    },
  ];
  const bannerSlides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Travel Booking Software",
      description: "Comprehensive travel management solution for travel agencies and tour operators",
      
    },
  ]
 

  return (
    <div className="pt-14">
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Travel Management Software
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Our Travel Software is a comprehensive solution designed specifically for travel agencies, tour
                operators, and travel businesses. It streamlines operations, automates booking processes, and provides
                powerful tools for managing all aspects of your travel business.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Whether you're a small travel agency or a large tour operator, our Travel Software can be customized to
                meet your specific requirements, helping you provide exceptional service to your customers while
                improving operational efficiency.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "End-to-End Solution",
                    text: "Manage all aspects of your travel business from a single, integrated platform."
                  },
                  {
                    title: "Customizable",
                    text: "Tailor the software to meet your specific business needs and workflows."
                  },
                  {
                    title: "Scalable",
                    text: "Grow with a solution that scales with your business, from startup to enterprise."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                Get in Touch
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Software"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Our Travel Software offers a comprehensive set of features to help you manage your travel business effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                    {/* <i className={` ${feature.icon} text-blue-600 text-2xl`}></i> */}
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Software Modules
            </h2>
            <p className="text-xl text-gray-600">
              Our Travel Software includes specialized modules for different aspects of your travel business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our Travel Software
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Implementing our Travel Software can transform your travel business operations and drive significant
                improvements in efficiency, customer satisfaction, and profitability.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Increased Operational Efficiency",
                    text: "Automate booking processes, reduce manual work, and streamline operations."
                  },
                  {
                    title: "Enhanced Customer Experience",
                    text: "Provide faster service, personalized offers, and seamless booking experiences."
                  },
                  {
                    title: "Improved Revenue Management",
                    text: "Optimize pricing, identify upselling opportunities, and maximize revenue."
                  },
                  {
                    title: "Better Business Insights",
                    text: "Gain valuable insights into your business performance with comprehensive reporting and analytics."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Software Benefits"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our Travel Software and how it can help streamline your travel business operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
              Get in Touch
            </Link>
            <Link href="/services/software" className="inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Other Software
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelSoftware;