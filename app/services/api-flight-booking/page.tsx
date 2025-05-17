import Link from "next/link";
import Image from "next/image";
import {
  FaPlane,
  FaSearch,
  FaShieldAlt,
  FaExchangeAlt,
  FaChartLine,
  FaCheckCircle,
  FaGlobe,
  FaMoneyBillWave,
  FaUserTie,
  FaHotel,
  FaCar,
  FaBuilding
} from "react-icons/fa";
import Banner from "@/components/banner";
import SEO from "@/components/SEO/SEO";

const FlightBooking = () => {
  const features = [
    {
      title: "Global Flight Inventory",
      description: "Gain real-time access to flight data from hundreds of domestic and international airlines, ensuring extensive route coverage and availability for your users.",
      icon: <FaPlane className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Instant Search",
      description: "Deliver quick and accurate search results within milliseconds, allowing users to filter flights by date, time, fare class, airlines, and other preferences for a smooth booking journey.",
      icon: <FaSearch className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Live Pricing",
      description: " Display up-to-the-minute flight fares and seat availability, helping users make informed decisions based on real-time data without surprises during checkout.",
      icon: <FaMoneyBillWave className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Secure Booking",
      description: " Process bookings safely with end-to-end encryption, PCI-compliant payment integration, and automated confirmation handling for reliable and secure transactions.",
      icon: <FaShieldAlt className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Flexible Changes",
      description: "Support modifications, rescheduling, and cancellations directly through the API, giving your users complete control over their travel plans.",
      icon: <FaExchangeAlt className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Detailed Analytics",
      description: "Gain insights into booking trends, customer behavior, and revenue generation with detailed analytics dashboards and reporting tools built for performance tracking.",
      icon: <FaChartLine className="text-[#ab6545] text-xl" />,
    },
  ];

  const useCases = [
    {
      title: "Travel Agencies",
      description: " Empower online and offline travel agencies to provide real-time flight options, competitive fares, and instant bookings, enhancing customer satisfaction and driving revenue.",
      icon: <FaUserTie className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Corporate Travel",
      description: " Enable businesses to manage employee travel with policy-compliant flight options, preferred airlines, and centralized booking control for cost-effective and efficient travel planning.",
      icon: <FaBuilding className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Tour Packages",
      description: " Bundle flights with hotel stays, local tours, and other services to create attractive and customizable travel packages for leisure or business travelers.",
      icon: <FaHotel className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Transportation Services",
      description: "Integrate air travel with on-ground transport services such as taxis, buses, or car rentals to offer seamless end-to-end travel solutions.",
      icon: <FaCar className="text-[#ab6545] text-xl" />,
    }
  ];

  const endpoints = [
    {
      name: "Flight Search",
      description: "Search for flights based on origin, destination, dates, and passengers.",
      method: "GET",
      path: "/api/v1/flights/search",
    },
    {
      name: "Flight Details",
      description: "Get comprehensive details about specific flights.",
      method: "GET",
      path: "/api/v1/flights/{flightId}",
    },
    {
      name: "Price Check",
      description: "Verify current pricing for specific flight options.",
      method: "GET",
      path: "/api/v1/flights/pricing",
    },
    {
      name: "Create Booking",
      description: "Reserve flights with passenger details and payment information.",
      method: "POST",
      path: "/api/v1/bookings",
    },
    {
      name: "Manage Booking",
      description: "Modify or cancel existing flight reservations.",
      method: "PUT/DELETE",
      path: "/api/v1/bookings/{bookingId}",
    },
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: " Earn additional income through commissions on every booking and upselling travel services.",
      icon: <FaMoneyBillWave className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Competitive Edge",
      description: " Differentiate your platform by offering integrated flight bookings that many competitors lack.",
      icon: <FaChartLine className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Seamless Experience",
      description: " Deliver a smooth, end-to-end travel journey by combining flights with hotels, transport, and more.",
      icon: <FaPlane className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Global Reach",
      description: "Tap into international travel demand with access to real-time flight inventory from global airlines.",
      icon: <FaGlobe className="text-[#ab6545] text-xl" />,
    }
  ];
  const bannerSlides = [
    {
      image: "/image/banner/FlightBooking.jpg",
      title: "Robust Flight Booking API’s For Real-time Availability, Pricing, And Reservations.",
      description: "Powerful flight booking and management API for travel applications",
    },
  ];

  return (
    <div className="">
      <SEO/>
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Flight Booking API</h2>
              <p className="text-gray-600 mb-4">
                Elevate your travel platform with our robust Flight Booking API, giving you seamless access to a global network of airlines and flight data. Designed for performance, accuracy, and ease of integration, our API allows you to deliver real-time flight search, booking, and management capabilities directly within your application.

              </p>
              <p className="text-gray-600 mb-8">
                Whether you're developing a full-fledged travel portal, a business travel management tool, or simply expanding your service offering, our API empowers you to provide users with a smooth, feature-rich flight booking experience.

              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Global Coverage</h3>
                    <p className="text-gray-600">
                      Access flights from over 700 airlines to destinations worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Real-time Data</h3>
                    <p className="text-gray-600">
                      Get up-to-the-second availability and pricing information.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Developer Friendly</h3>
                    <p className="text-gray-600">
                      Comprehensive documentation and SDKs for easy integration.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-block bg-[#ab6545] text-white px-8 py-2 rounded-sm hover:bg-primary-dark transition-colors">
                Get API Access
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/7712.jpg"
                  alt="Flight Booking API"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Flight Booking API is designed to deliver a seamless, scalable, and secure booking experience for your users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-opacity-10 rounded-full w-16 h-16">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Flight Booking API supports a wide range of applications across industries, enabling businesses to deliver seamless flight booking experiences tailored to their audience.

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-opacity-10 rounded-full w-16 h-16">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-12 md:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive endpoints for all flight booking functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${endpoint.method.includes("GET") ? "bg-green-100 text-green-800" :
                      endpoint.method.includes("POST") ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                    }`}>
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm font-mono">{endpoint.path}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrating our Flight Booking API can unlock new opportunities and elevate your travel-related offerings.

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-opacity-10 rounded-full w-16 h-16">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 md:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/2151896836.jpg"
                  alt="API Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Simple Integration</h2>
              <p className="text-gray-600 mb-8">
                Our Flight Booking API is built to integrate seamlessly with your applications, helping you launch quickly and confidently.

              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Clear Documentation</h3>
                    <p className="text-gray-600">
                      Access step-by-step API guides with real-world examples for every endpoint and use case.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">SDKs & Libraries</h3>
                    <p className="text-gray-600">
                      Use ready-to-go SDKs in popular programming languages and frameworks to accelerate development.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Test Environment</h3>
                    <p className="text-gray-600">
                      Safely test your integration in a fully-featured sandbox before switching to production.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Technical Support</h3>
                    <p className="text-gray-600">
                      Get expert assistance from our dedicated engineering team throughout your integration journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 md:px-24 bg-primary text-white" style={{ backgroundImage: "url(/image/2151662924.jpg)", backgroundAttachment: "fixed", backgroundPosition: "bottom", backgroundSize: "cover" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Add Flight Booking?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn how our Flight Booking API can transform your travel business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#ab6545] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get API Access
            </Link>
            {/* <Link href="/services/apis" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium"> */}
            <div className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
              Explore Other APIs
            </div>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightBooking;