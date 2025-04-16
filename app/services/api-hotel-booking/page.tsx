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
      description: "Access real-time availability and rates from thousands of hotels worldwide.",
      icon: <FaClock className="text-primary text-xl" />,
    },
    {
      title: "Comprehensive Hotel Data",
      description: "Detailed hotel information including amenities, room types, policies, and images.",
      icon: <FaInfoCircle className="text-primary text-xl" />,
    },
    {
      title: "Booking Management",
      description: "Complete booking management with confirmation, modification, and cancellation capabilities.",
      icon: <FaCalendarCheck className="text-primary text-xl" />,
    },
    {
      title: "Secure Transactions",
      description: "Secure payment processing with support for multiple payment methods and currencies.",
      icon: <FaShieldAlt className="text-primary text-xl" />,
    },
    {
      title: "Flexible Integration",
      description: "Easy integration with your existing systems through our comprehensive API documentation.",
      icon: <FaCode className="text-primary text-xl" />,
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed analytics and reporting to track bookings, revenue, and performance.",
      icon: <FaChartLine className="text-primary text-xl" />,
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Hotel Management API</h2>
              <p className="text-gray-600 mb-4">
                Our Hotel Management API provides a comprehensive solution for integrating hotel booking and management
                capabilities into your applications. With access to a vast inventory of hotels worldwide, real-time
                availability, and secure booking management, our API enables you to offer a complete hotel booking
                experience to your customers.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building a travel booking platform, a corporate travel management system, or enhancing
                your existing application with hotel booking capabilities, our API provides the tools and data you need
                to create a seamless hotel booking experience.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
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
                    <FaCheckCircle className="text-primary" />
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
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Developer-Friendly</h3>
                    <p className="text-gray-600">
                      Comprehensive documentation, SDKs, and support to simplify integration.
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
                  src="https://via.placeholder.com/600x400?text=Hotel+Management+API"
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Hotel Management API offers a comprehensive set of features to enable seamless hotel booking
              experiences.
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

      {/* API Endpoints Section */}
      <section className="py-12 md:py-20">
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
              <h2 className="text-4xl font-bold mb-6">Easy Integration</h2>
              <p className="text-gray-600 mb-8">
                We've designed our Hotel Management API to be easy to integrate into your applications, with
                comprehensive documentation, SDKs for popular programming languages, and dedicated support to help you
                get started quickly.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Comprehensive Documentation</h3>
                    <p className="text-gray-600">
                      Detailed API documentation with examples and guides to help you understand and implement our API.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">SDKs for Popular Languages</h3>
                    <p className="text-gray-600">
                      Ready-to-use SDKs for popular programming languages to simplify integration.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Sandbox Environment</h3>
                    <p className="text-gray-600">
                      Test your integration in our sandbox environment before going live.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Our team of API experts is available to help you with integration and troubleshooting.
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
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Hotel Booking?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Hotel Management API and how it can enhance your applications.
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

export default HotelManagement;