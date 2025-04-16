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
      description: "Access a full credit profile—financial history, transaction behavior, and debt-to-income ratios—for precise creditworthiness evaluation before making decisions.",
      icon: <FaChartLine className="text-primary text-xl" />,
    },
    {
      title: " Multi-Faceted Identity Verification",
      description: "Prevent fraud and ensure compliance with secure identity verification using personal data, biometrics, address checks, and more—streamlining your KYC process and reducing risk.",
      icon: <FaShieldAlt className="text-primary text-xl" />,
    },
    {
      title: "Advanced Risk Assessment",
      description: "Use advanced machine learning and predictive algorithms to assess customer risk, analyze behavior patterns, and forecast future stability—enabling real-time, informed decisions.",
      icon: <FaExclamationTriangle className="text-primary text-xl" />,
    },
    {
      title: "Customizable Scoring Parameters",
      description: "Customize scoring to match your business needs—set thresholds, prioritize data points, and fine-tune models for industry-specific relevance.",
      icon: <FaSlidersH className="text-primary text-xl" />,
    },
    {
      title: "Real-time Processing",
      description: "Make fast, confident decisions with real-time insights into creditworthiness, identity, and risk.",
      icon: <FaBolt className="text-primary text-xl" />,
    },
    {
      title: "Secure & Compliant Data Handling",
      description: "Secure sensitive data with end-to-end encryption and ensure compliance with global standards like GDPR and PCI-DSS, protecting both your business and customers.",
      icon: <FaLock className="text-primary text-xl" />,
    },
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Use the Civil Score API to evaluate the creditworthiness of individuals or businesses before approving loan applications, credit card requests, or other financial services. With detailed insights into financial behavior and payment history, you can reduce default risk and make better lending decisions.",
      icon: <FaUniversity className="text-primary text-xl" />,
    },
    {
      title: "Rental Screening",
      description: "For real estate companies and property managers, the Civil Score API offers a reliable way to screen potential tenants. Perform comprehensive background checks, evaluate financial stability, and verify identity to ensure that tenants meet your leasing criteria and reduce the risk of defaults or fraud.",
      icon: <FaHome className="text-primary text-xl" />,
    },
    {
      title: "Employment Verification",
      description: "In human resources and recruitment, verifying employment history, job stability, and criminal records is essential. The Civil Score API simplifies this process by providing accurate identity verification and background checks, helping HR teams ensure that candidates have a trustworthy history before making hiring decisions.",
      icon: <FaBriefcase className="text-primary text-xl" />,
    },
    {
      title: "Insurance Underwriting",
      description: "Insurance providers can use the Civil Score API to assess risk when underwriting policies. With detailed applicant information including credit scores, identity verification, and financial history, insurance companies can better understand applicants' risk profiles and adjust premiums or policy terms accordingly.",
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
      <Banner slides={bannerSlides} />

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Civil Score API</h2>
              <p className="text-gray-600 mb-4">
                Harness the Civil Score API for real-time, data-driven insights in credit assessment, identity verification, and risk evaluation—empowering smarter, compliant decision-making through advanced algorithms and diverse data integration.
              </p>
              <p className="text-gray-600 mb-8">
                From finance to real estate and employment screening, Civil Score API delivers accurate insights into financial and behavioral reliability—eliminating guesswork for smarter, scalable, and secure decisions.
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
              Our Civil Score API comes equipped with a comprehensive set of features to support credit assessment, identity verification, and risk evaluation. Built for businesses in industries ranging from financial services to real estate, the API is packed with powerful capabilities designed to help you make smarter, more confident decisions.
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
              The Civil Score API can be seamlessly integrated into various industries and business processes, helping you assess risk, verify identity, and make informed decisions. Whether you're in finance, real estate, human resources, or insurance, the API delivers valuable insights to help mitigate risk and enhance your operations.
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
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${endpoint.method === "GET" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
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
                Integrating the Civil Score API into your systems has never been easier. We’ve built the API to be developer-friendly, ensuring that your team can quickly get up and running with minimal effort. With comprehensive resources, SDKs, and a dedicated support team, you’ll be able to seamlessly integrate risk evaluation and credit scoring capabilities into your platform.
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