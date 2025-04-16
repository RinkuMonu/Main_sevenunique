import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/banner";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTh,
  FaShieldAlt,
  FaCog,
  FaChartLine,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUsers,
  FaTrophy,
  FaBolt,
} from "react-icons/fa";

const BusBooking = () => {
  const features = [
    {
      title: "Extensive Bus Network",
      description: "Access to a vast network of bus operators and routes across the country.",
      icon: <FaMapMarkerAlt className=" text-xl" />,
    },
    {
      title: "Real-time Availability",
      description: "Check real-time seat availability and pricing for all routes and operators.",
      icon: <FaClock className=" text-xl" />,
    },
    {
      title: "Seat Selection",
      description: "Allow customers to select their preferred seats with interactive seat maps.",
      icon: <FaTh className=" text-xl" />,
    },
    {
      title: "Secure Booking",
      description: "Process bookings securely with multiple payment options and instant confirmation.",
      icon: <FaShieldAlt className=" text-xl" />,
    },
    {
      title: "Booking Management",
      description: "Manage bookings with options for cancellation, rescheduling, and refunds.",
      icon: <FaCog className=" text-xl" />,
    },
    {
      title: "Comprehensive Analytics",
      description: "Access detailed reports and analytics on bookings, revenue, and performance.",
      icon: <FaChartLine className=" text-xl" />,
    },
  ];

  const endpoints = [
    {
      name: "Search Routes",
      description: "Search for available bus routes between source and destination with date filters.",
      method: "GET",
      path: "/api/v1/bus/routes",
    },
    {
      name: "Bus Details",
      description: "Get detailed information about a specific bus, including amenities and policies.",
      method: "GET",
      path: "/api/v1/bus/{busId}",
    },
    {
      name: "Seat Availability",
      description: "Check seat availability and pricing for a specific bus and date.",
      method: "GET",
      path: "/api/v1/bus/{busId}/seats",
    },
    {
      name: "Create Booking",
      description: "Create a new bus booking with passenger information and payment details.",
      method: "POST",
      path: "/api/v1/bus/bookings",
    },
    {
      name: "Booking Management",
      description: "Manage existing bookings, including cancellations and modifications.",
      method: "PUT/DELETE",
      path: "/api/v1/bus/bookings/{bookingId}",
    },
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Generate additional revenue by offering bus booking services to your customers.",
      icon: <FaMoneyBillWave className=" text-xl" />,
    },
    {
      title: "Enhanced User Experience",
      description: "Provide a seamless booking experience with real-time availability and seat selection.",
      icon: <FaUsers className=" text-xl" />,
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors by offering comprehensive bus booking capabilities.",
      icon: <FaTrophy className=" text-xl" />,
    },
    {
      title: "Operational Efficiency",
      description: "Streamline operations with automated booking processes and real-time updates.",
      icon: <FaBolt className=" text-xl" />,
    },
  ];

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=400&width=1920&text=PAN Verification API",
      title: "Bus Booking API",
      description: "Comprehensive bus booking API for travel applications and websites",
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
              <h2 className="text-4xl font-bold mb-6">Bus Booking API</h2>
              <p className="text-gray-600 mb-4">
                Our Bus Booking API provides a comprehensive solution for integrating bus booking capabilities into your
                applications and websites. With access to a vast network of bus operators and routes, real-time
                availability, and secure booking management, our API enables you to offer a complete bus booking
                experience to your customers.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building a travel booking platform, a corporate travel management system, or enhancing
                your existing application with bus booking capabilities, our API provides the tools and data you need to
                create a seamless bus booking experience.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Comprehensive Coverage</h3>
                    <p className="text-gray-600">
                      Access to a vast network of bus operators and routes across the country.
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
                  src="https://via.placeholder.com/600x400?text=Bus+Booking+API"
                  alt="Bus Booking API"
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
              Our Bus Booking API offers a comprehensive set of features to enable seamless bus booking experiences.
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
              Our API provides a comprehensive set of endpoints for bus search, booking, and management.
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrating our Bus Booking API can provide numerous benefits for your business and customers.
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
      <section className="py-12 md:py-20">
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
                We've designed our Bus Booking API to be easy to integrate into your applications, with comprehensive
                documentation, SDKs for popular programming languages, and dedicated support to help you get started
                quickly.
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
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Bus Booking?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Bus Booking API and how it can enhance your applications.
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

export default BusBooking;