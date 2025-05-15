import Link from "next/link";
import Image from "next/image";
import {
  FaClock,
  FaInfoCircle,
  FaCalendarCheck,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaCheckCircle} from "react-icons/fa";
import Banner from "@/components/banner";

const HotelManagement = () => {
  const features = [
    {
      title: "Real-time Availability",
      description: " Get instant access to live room availability, dynamic pricing, and real-time updates across a global network of hotel partners.",
      icon: <FaClock className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Comprehensive Hotel Data",
      description: " Display rich hotel profiles with detailed descriptions, room categories, images, amenities, location info, guest policies, and cancellation rules.",
      icon: <FaInfoCircle className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Booking Management",
      description: "Manage the entire booking process—initiate, confirm, modify, or cancel reservations—with instant response and real-time status updates.",
      icon: <FaCalendarCheck className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Secure Transactions",
      description: "Support secure payment processing with multiple currencies and payment gateways, backed by industry-standard encryption and compliance.",
      icon: <FaShieldAlt className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Flexible Integration",
      description: " Integrate effortlessly using our developer-centric REST API, complete with detailed documentation, code samples, and SDKs for faster deployment.",
      icon: <FaCode className="text-[#ab6545] text-xl" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Gain visibility into performance metrics with advanced reporting on bookings, revenue, cancellation trends, and user behavior.",
      icon: <FaChartLine className="text-[#ab6545] text-xl" />,
    },
  ];

  const endpoints = [
    {
      name: "Hotel Search",
      description: "Search for hotels based on location, dates, guests, and other criteria.",
      method: "GET",
      path: "/api/v1/hotels/search",
    },
    {
      name: "Hotel Details",
      description: "Get detailed information about a specific hotel, including amenities and policies.",
      method: "GET",
      path: "/api/v1/hotels/{hotelId}",
    },
    {
      name: "Room Availability",
      description: "Check room availability and rates for a specific hotel and date range.",
      method: "GET",
      path: "/api/v1/hotels/{hotelId}/availability",
    },
    {
      name: "Create Booking",
      description: "Create a new hotel booking with guest information and payment details.",
      method: "POST",
      path: "/api/v1/bookings",
    },
    {
      name: "Booking Management",
      description: "Manage existing bookings, including modifications and cancellations.",
      method: "PUT/DELETE",
      path: "/api/v1/bookings/{bookingId}",
    },
  ];

  const bannerSlides = [
    {
      image: "/image/banner/Hotel-Booking.jpg",
      title: "Hotel Management API",
      description: "Comprehensive hotel booking and management API for travel applications",
    },
  ];

  return (
    <div>
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Hotel Management API</h2>
              <p className="text-gray-600 mb-4">
              Deliver a world-class hotel booking experience with our powerful and versatile Hotel Management API. Designed to support dynamic travel platforms, corporate booking systems, and custom travel applications, our API enables real-time access to global hotel inventories, seamless booking workflows, and robust property management features—all through a single integration.
              </p>
              <p className="text-gray-600 mb-8">
              Whether you're scaling your travel tech business or upgrading an existing solution, our API gives you everything you need to streamline operations and delight your customers with fast, flexible, and secure hotel booking capabilities.

              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Global Hotel Inventory</h3>
                    <p className="text-gray-600">
                      Access to thousands of hotels worldwide with comprehensive property information.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Reliable & Scalable</h3>
                    <p className="text-gray-600">
                      Built on a robust infrastructure to ensure high availability and performance.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Developer-Friendly</h3>
                    <p className="text-gray-600">
                      Comprehensive documentation, SDKs, and support to simplify integration.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-block  text-white px-6 py-3 rounded-lg hover:bg[#ab6545]-dark transition-colors">
                Get API Access
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/2151908123.jpg"
                  alt="Hotel Management API"
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
            Our Hotel Management API is packed with powerful features to help you deliver a seamless, scalable, and secure hotel booking experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center  bg-opacity-10 rounded-full w-16 h-16 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our API provides a comprehensive set of endpoints for hotel search, booking, and management.
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

      {/* Integration Section */}
      <section className="py-12 md:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/78640.jpg"
                  alt="API Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Easy Integration</h2>
              <p className="text-gray-600 mb-8">
              Our Hotel Management API is built with developers in mind, making integration smooth, fast, and flexible. Whether you're building from scratch or enhancing an existing platform, our tools and resources ensure a hassle-free experience.

              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Comprehensive Documentation</h3>
                    <p className="text-gray-600">
                    Step-by-step API documentation with detailed endpoint descriptions, parameters, and real-world examples to guide you through every aspect of integration.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">SDKs for Popular Languages</h3>
                    <p className="text-gray-600">
                    Pre-built SDKs for popular programming languages like Java, Python, Node.js, and PHP—accelerating your development process and reducing time-to-market.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Sandbox Environment</h3>
                    <p className="text-gray-600">
                    Safely test your API calls, booking flows, and error handling in a secure, fully functional sandbox before moving to production.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#ab6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Dedicated Support</h3>
                    <p className="text-gray-600">
                    Access to our expert support team for technical assistance, implementation guidance, and troubleshooting whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 md:px-24  text-white" style={{backgroundImage:"url(/image/9520.jpg)",   backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Hotel Booking?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Hotel Management API and how it can enhance your applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#ab6545] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get API Access
            </Link>
            <div className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium">
              Explore Other APIs
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelManagement;