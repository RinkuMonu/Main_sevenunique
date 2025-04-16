import Link from "next/link";
import Image from "next/image";
import {
  FaBolt,
  FaShieldAlt,
 
  FaUserCheck,
  FaFileAlt,
  FaCode,
  FaUniversity,
  FaPhone,
  FaShoppingCart,
  FaBuilding,
  FaCheckCircle,
  
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import Banner from "@/components/banner";

const AadharVerification = () => {
  const features = [
    {
      title: "Instant Verification",
      description: "Verify Aadhar details in real-time with our fast and reliable API.",
      icon: <FaBolt className="text-primary text-xl" />
    },
    {
      title: "Secure Processing",
      description: "Ensure data security with our encrypted and compliant verification process.",
      icon: <FaShieldAlt className="text-primary text-xl" />
    },
    {
      title: "Multiple Verification Methods",
      description: "Verify using Aadhar number, virtual ID, or QR code scanning.",
      icon: <FaListCheck className="text-primary text-xl" />
    },
    {
      title: "Demographic Verification",
      description: "Verify name, address, gender, and date of birth against Aadhar records.",
      icon: <FaUserCheck className="text-primary text-xl" />
    },
    {
      title: "Comprehensive Reporting",
      description: "Access detailed verification reports and analytics for compliance and auditing.",
      icon: <FaFileAlt className="text-primary text-xl" />
    },
    {
      title: "Easy Integration",
      description: "Integrate seamlessly with your existing systems using our developer-friendly API.",
      icon: <FaCode className="text-primary text-xl" />
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Verify customer identity for account opening, loan applications, and KYC compliance.",
      icon: <FaUniversity className="text-primary text-xl" />
    },
    {
      title: "Telecom",
      description: "Verify subscriber identity for SIM card activation and service provisioning.",
      icon: <FaPhone className="text-primary text-xl" />
    },
    {
      title: "E-commerce",
      description: "Verify customer identity for high-value purchases and secure transactions.",
      icon: <FaShoppingCart className="text-primary text-xl" />
    },
    {
      title: "Government Services",
      description: "Verify citizen identity for service delivery and benefit disbursement.",
      icon: <FaBuilding className="text-primary text-xl" />
    }
  ];

  const endpoints = [
    {
      name: "Aadhar Verification",
      description: "Verify Aadhar details using Aadhar number or virtual ID.",
      method: "POST",
      path: "/api/v1/aadhar/verify"
    },
    {
      name: "QR Code Verification",
      description: "Verify Aadhar details by scanning the QR code on the Aadhar card.",
      method: "POST",
      path: "/api/v1/aadhar/verify-qr"
    },
    {
      name: "Demographic Verification",
      description: "Verify demographic details (name, address, etc.) against Aadhar records.",
      method: "POST",
      path: "/api/v1/aadhar/verify-demographic"
    },
    {
      name: "Verification Status",
      description: "Check the status of a verification request.",
      method: "GET",
      path: "/api/v1/aadhar/status/{requestId}"
    },
    {
      name: "Verification Report",
      description: "Generate a detailed verification report for compliance and auditing.",
      method: "GET",
      path: "/api/v1/aadhar/report/{requestId}"
    }
  ];

  const bannerSlides = [
    {
      image: "/placeholder.svg?height=400&width=1920&text=PAN Verification API",
      title: "Aadhar Verification API",
      description: "Secure and reliable Aadhar verification API for identity verification",
    },
  ];

  return (
    <div className="pt-14">
      <Banner  slides={bannerSlides}/>

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Aadhar Verification API</h2>
              <p className="text-gray-600 mb-4">
                Our Aadhar Verification API provides a secure and reliable solution for verifying identity using Aadhar,
                India's unique identification system. With real-time verification capabilities and multiple verification
                methods, our API enables you to verify customer identity quickly and accurately, ensuring compliance with
                KYC regulations.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're in financial services, telecom, e-commerce, or government services, our Aadhar Verification
                API provides the tools you need to verify customer identity securely and efficiently, reducing fraud and
                ensuring regulatory compliance.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fast & Reliable</h3>
                    <p className="text-gray-600">
                      Verify Aadhar details in real-time with our fast and reliable API.
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
                      Ensure data security and compliance with our encrypted verification process.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Easy to Integrate</h3>
                    <p className="text-gray-600">
                      Integrate seamlessly with your existing systems using our developer-friendly API.
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
                  src="https://via.placeholder.com/600x400?text=Aadhar+Verification+API"
                  alt="Aadhar Verification API"
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
              Our Aadhar Verification API offers a comprehensive set of features for secure and reliable identity verification.
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
              Our Aadhar Verification API can be used in various industries and applications to verify identity securely.
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
              Our API provides a comprehensive set of endpoints for Aadhar verification and reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
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
                We've designed our Aadhar Verification API to be easy to integrate into your applications, with comprehensive
                documentation, SDKs for popular programming languages, and dedicated support to help you get started quickly.
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
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Aadhar Verification?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Aadhar Verification API and how it can help you make better decisions.
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

export default AadharVerification;