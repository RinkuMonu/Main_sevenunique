import Link from "next/link";
import Image from "next/image";
import {
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
  FaSlidersH,
  FaBolt,
  FaLock,
  FaUniversity,
  FaHome,
  FaBriefcase,
  FaUmbrella,
  FaCheckCircle,
  FaBook,
  FaCode,
  FaLaptopCode,
  FaHeadset
} from "react-icons/fa";
import Banner from "@/components/banner";

const CivilScore = () => {
  const features = [
    {
      title: "Comprehensive Credit Assessment",
      description: "Evaluate creditworthiness with a comprehensive analysis of financial history and behavior.",
      icon: <FaChartLine className="text-primary text-xl" />,
    },
    {
      title: "Identity Verification",
      description: "Verify identity through multiple data points to prevent fraud and ensure compliance.",
      icon: <FaShieldAlt className="text-primary text-xl" />,
    },
    {
      title: "Risk Assessment",
      description: "Assess risk levels with advanced algorithms and machine learning models.",
      icon: <FaExclamationTriangle className="text-primary text-xl" />,
    },
    {
      title: "Customizable Parameters",
      description: "Tailor the scoring model to your specific business needs and risk tolerance.",
      icon: <FaSlidersH className="text-primary text-xl" />,
    },
    {
      title: "Real-time Processing",
      description: "Get instant results with our real-time processing capabilities.",
      icon: <FaBolt className="text-primary text-xl" />,
    },
    {
      title: "Secure Data Handling",
      description: "Ensure data security and compliance with industry standards and regulations.",
      icon: <FaLock className="text-primary text-xl" />,
    },
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Evaluate loan applications, credit card approvals, and other financial services with confidence.",
      icon: <FaUniversity className="text-primary text-xl" />,
    },
    {
      title: "Rental Screening",
      description: "Screen potential tenants for rental properties with comprehensive background checks.",
      icon: <FaHome className="text-primary text-xl" />,
    },
    {
      title: "Employment Verification",
      description: "Verify employment history and conduct background checks for potential employees.",
      icon: <FaBriefcase className="text-primary text-xl" />,
    },
    {
      title: "Insurance Underwriting",
      description: "Assess risk for insurance policies with detailed applicant information.",
      icon: <FaUmbrella className="text-primary text-xl" />,
    },
  ];

  const endpoints = [
    {
      name: "Credit Score",
      description: "Get a comprehensive credit score based on financial history and behavior.",
      method: "GET",
      path: "/api/v1/civil-score/credit",
    },
    {
      name: "Identity Verification",
      description: "Verify identity through multiple data points to prevent fraud.",
      method: "POST",
      path: "/api/v1/civil-score/identity",
    },
    {
      name: "Background Check",
      description: "Conduct a comprehensive background check including criminal history.",
      method: "POST",
      path: "/api/v1/civil-score/background",
    },
    {
      name: "Employment Verification",
      description: "Verify employment history and current employment status.",
      method: "POST",
      path: "/api/v1/civil-score/employment",
    },
    {
      name: "Address Verification",
      description: "Verify current and previous addresses for accuracy.",
      method: "POST",
      path: "/api/v1/civil-score/address",
    },
  ];

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=400&width=1920&text=PAN Verification API",
      title: "Civil Score API",
      description: "Comprehensive credit assessment and identity verification API",
    },
  ];

  return (
    <div className="pt-14">
      <Banner slides={bannerSlides}/>

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Civil Score API</h2>
              <p className="text-gray-600 mb-4">
                Our Civil Score API provides a comprehensive solution for credit assessment, identity verification, and
                risk evaluation. With advanced algorithms and access to multiple data sources, our API enables you to
                make informed decisions about individuals and businesses.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're evaluating loan applications, screening tenants, verifying employment, or conducting
                background checks, our Civil Score API provides the data and insights you need to make confident
                decisions while minimizing risk.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Accurate & Reliable</h3>
                    <p className="text-gray-600">
                      Access accurate and reliable data from multiple trusted sources for comprehensive assessments.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fast & Efficient</h3>
                    <p className="text-gray-600">
                      Get instant results with our real-time processing capabilities for quick decision-making.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Secure & Compliant</h3>
                    <p className="text-gray-600">
                      Ensure data security and compliance with industry standards and regulations.
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
                  src="https://via.placeholder.com/600x400?text=Civil+Score+API"
                  alt="Civil Score API"
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
              Our Civil Score API offers a comprehensive set of features for credit assessment and identity verification.
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
              Our Civil Score API can be used in various industries and applications to assess risk and verify identity.
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
              Our API provides a comprehensive set of endpoints for credit assessment and identity verification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === "GET" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
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
                We've designed our Civil Score API to be easy to integrate into your applications, with comprehensive
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
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Civil Score?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Civil Score API and how it can help you make better decisions.
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

export default CivilScore;