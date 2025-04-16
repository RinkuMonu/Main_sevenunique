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

const FlightBooking = () => {
  const features = [
    {
      title: "Global Flight Inventory",
      description: "Access real-time flight data from hundreds of airlines worldwide.",
      icon: <FaPlane className="text-primary text-xl" />,
    },
    {
      title: "Instant Search",
      description: "Get flight options in milliseconds with our powerful search engine.",
      icon: <FaSearch className="text-primary text-xl" />,
    },
    {
      title: "Live Pricing",
      description: "Access up-to-the-minute pricing and availability.",
      icon: <FaMoneyBillWave className="text-primary text-xl" />,
    },
    {
      title: "Secure Booking",
      description: "End-to-end encrypted transactions for safe reservations.",
      icon: <FaShieldAlt className="text-primary text-xl" />,
    },
    {
      title: "Flexible Changes",
      description: "Easy modifications and cancellations through our API.",
      icon: <FaExchangeAlt className="text-primary text-xl" />,
    },
    {
      title: "Detailed Analytics",
      description: "Comprehensive reporting on bookings and performance.",
      icon: <FaChartLine className="text-primary text-xl" />,
    },
  ];

  const useCases = [
    {
      title: "Travel Agencies",
      description: "Offer comprehensive flight booking services to your clients.",
      icon: <FaUserTie className="text-primary text-xl" />,
    },
    {
      title: "Corporate Travel",
      description: "Manage employee travel with policy-compliant flight options.",
      icon: <FaBuilding className="text-primary text-xl" />,
    },
    {
      title: "Tour Packages",
      description: "Bundle flights with hotels and activities for complete packages.",
      icon: <FaHotel className="text-primary text-xl" />,
    },
    {
      title: "Transportation Services",
      description: "Offer flight+ground transportation combos.",
      icon: <FaCar className="text-primary text-xl" />,
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
      description: "Generate commissions on every flight booking.",
      icon: <FaMoneyBillWave className="text-primary text-xl" />,
    },
    {
      title: "Competitive Edge",
      description: "Offer flight booking when competitors don't.",
      icon: <FaChartLine className="text-primary text-xl" />,
    },
    {
      title: "Seamless Experience",
      description: "Provide end-to-end travel solutions.",
      icon: <FaPlane className="text-primary text-xl" />,
    },
    {
      title: "Global Reach",
      description: "Access flights to destinations worldwide.",
      icon: <FaGlobe className="text-primary text-xl" />,
    }
  ];
  const bannerSlides = [
    {
      image: "/placeholder.svg?height=400&width=1920&text=PAN Verification API",
      title: "Flight Booking API",
      description: "Powerful flight booking and management API for travel applications",
    },
  ];

  return (
    <div className="pt-14">
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Flight Booking API</h2>
              <p className="text-gray-600 mb-4">
                Our Flight Booking API provides direct access to global flight inventory, enabling you to offer
                comprehensive flight booking capabilities within your application. With real-time availability,
                competitive pricing, and seamless integration, you can provide a complete travel experience to your users.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building a travel portal, corporate booking tool, or adding flight options to your
                existing platform, our API delivers the data and functionality you need with industry-leading reliability.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
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
                    <FaCheckCircle className="text-primary" />
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
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Developer Friendly</h3>
                    <p className="text-gray-600">
                      Comprehensive documentation and SDKs for easy integration.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Get API Access
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://via.placeholder.com/600x400?text=Flight+Booking+API"
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Flight Booking API offers everything you need to build a powerful flight booking experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-primary bg-opacity-10 rounded-full w-16 h-16 mb-4">
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our API powers flight booking solutions across multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-primary bg-opacity-10 rounded-full w-16 h-16 mb-4">
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
      <section className="py-12 md:py-20 bg-gray-50">
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
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method.includes("GET") ? "bg-green-100 text-green-800" : 
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How integrating flight booking can transform your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-primary bg-opacity-10 rounded-full w-16 h-16 mb-4">
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://via.placeholder.com/600x400?text=API+Integration"
                  alt="API Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Simple Integration</h2>
              <p className="text-gray-600 mb-8">
                Our Flight Booking API is designed for easy implementation with comprehensive documentation,
                code samples, and dedicated support to get you up and running quickly.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Clear Documentation</h3>
                    <p className="text-gray-600">
                      Detailed API reference with examples for all endpoints.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">SDKs & Libraries</h3>
                    <p className="text-gray-600">
                      Pre-built SDKs for popular programming languages and frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Test Environment</h3>
                    <p className="text-gray-600">
                      Full sandbox environment to test integration before going live.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Technical Support</h3>
                    <p className="text-gray-600">
                      Dedicated engineering support during integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Add Flight Booking?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn how our Flight Booking API can transform your travel business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get API Access
            </Link>
            <Link href="/services/apis" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
              Explore Other APIs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightBooking;