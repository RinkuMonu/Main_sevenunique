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
import SEO from "@/components/SEO/SEO";

const AadharVerification = () => {
  const features = [
    {
      title: "Instant Verification",
      description: "Authenticate Aadhaar details in real time to reduce wait and improve onboarding efficiency.",
      icon: <FaBolt className="text-[#b0552b] text-xl" />
    },
    {
      title: "Secure Processing",
      description: "Ensure data protection with end-to-end encryption and full compliance with UIDAI and KYC regulations.",
      icon: <FaShieldAlt className="text-[#b0552b] text-xl" />
    },
    {
      title: "Multiple Verification Methods",
      description: "Supports Aadhaar number, VID, and QR code scanning for flexible use across different scenarios.",
      icon: <FaListCheck className="text-[#b0552b] text-xl" />
    },
    {
      title: "Demographic Verification",
      description: "Cross-check name, DOB, gender, and address with Aadhaar records for accurate identity validation.",
      icon: <FaUserCheck className="text-[#b0552b] text-xl" />
    },
    {
      title: "Comprehensive Reporting",
      description: "Access detailed logs, audit trails, and analytics dashboards to support audits and internal reviews.",
      icon: <FaFileAlt className="text-[#b0552b] text-xl" />
    },
    {
      title: "Easy Integration",
      description: "Developer-friendly RESTful API with docs, code samples, and SDKs for easy integration.",
      icon: <FaCode className="text-[#b0552b] text-xl" />
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Streamline onboarding by verifying Aadhaar for account openings, loans, insurance, and KYC compliance.",
      icon: <FaUniversity className="text-[#b0552b] text-xl" />
    },
    {
      title: "Telecom",
      description: "Enable quick, secure subscriber verification for SIM activations, number portability, and digital enrollments that reducing fraud.",
      icon: <FaPhone className="text-[#b0552b] text-xl" />
    },
    {
      title: "E-commerce",
      description: "Boost trust in high-value or restricted purchases by verifying identity before processing, reducing transaction and delivery risks.",
      icon: <FaShoppingCart className="text-[#b0552b] text-xl" />
    },
    {
      title: "Government Services",
      description: "Authenticate citizens for digital services, benefits, subsidies, and document verification to ensure accurate service delivery.",
      icon: <FaBuilding className="text-[#b0552b] text-xl" />
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
      image: "/image/banner/Aadhaar.jpg",
      title: "Aadhar Verification API",
      description: "Secure and reliable Aadhar verification API for identity verification",
    },
  ];

  return (
    <div className="">
      <SEO/>
      <Banner  slides={bannerSlides}/>

      {/* Overview Section */}
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Aadhar Verification API</h2>
              <p className="text-gray-600 mb-4">
              Our Aadhar Verification API offers a secure, robust, and real-time solution for verifying customer identities using Aadhaar, India’s unique biometric identification system. Designed to support a wide range of industries—from banking and fintech to telecom, e-commerce, and government services.
              </p>
              <p className="text-gray-600 mb-8">
              Whether you're validating identities during onboarding or verifying users for sensitive transactions, our Aadhar API ensures accurate, instant, and compliant identity verification at scale.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#AB6545]" />
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
                    <FaCheckCircle className="text-[#AB6545]" />
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
                    <FaCheckCircle className="text-[#AB6545]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Easy to Integrate</h3>
                    <p className="text-gray-600">
                      Integrate seamlessly with your existing systems using our developer-friendly API.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-block text-white bg-[#AB6545] px-8 py-2 rounded-sm hover:bg-primary-dark transition-colors">
                Get API Access
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/20357.jpg"
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
      <section className="py-12 md:py-20 md:px-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Our Aadhar Verification API is packed with powerful features that ensure accurate, fast, and secure identity verification, helping you stay compliant and fraud-resistant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-opacity-10 rounded-full w-16 h-16 text-[#b0552b] mb-4">
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
              Our Aadhar Verification API can be used in various industries and applications to verify identity securely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center bg-opacity-10 rounded-full w-16 h-16 text-[#ab6545]">
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
      <section className="py-12 md:py-20 md:px-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/35.jpg"
                  alt="API Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Easy Integration</h2>
              <p className="text-gray-600 mb-8">
              Our Aadhar Verification API is built for seamless integration, enabling you to add identity verification to your application with minimal effort. With detailed resources and expert support, you can get up and running quickly and confidently.

              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#b0552b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Comprehensive Documentation</h3>
                    <p className="text-gray-600">
                    Step-by-step guides, detailed endpoint references, and practical examples make it easy to understand and implement the API in your system.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#b0552b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">SDKs for Popular Languages</h3>
                    <p className="text-gray-600">
                    Access ready-to-use SDKs for widely used programming languages such as Java, Python, PHP, Node.js, and more—so your team can integrate faster with less code.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#b0552b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Sandbox Environment</h3>
                    <p className="text-gray-600">
                    Use our secure sandbox environment to test API calls, simulate real-time responses, and ensure everything works smoothly before going live.

                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <FaCheckCircle className="text-[#b0552b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Dedicated Support</h3>
                    <p className="text-gray-600">
                    Our experienced technical team is available to assist you during every stage of integration, from setup to post-launch troubleshooting.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 md:px-24 bg-primary text-black" style={{backgroundImage:"url(/image/3283.jpg)",   backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundPosition:"bottom", backgroundSize:"cover"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Integrate Aadhar Verification?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Aadhar Verification API and how it can help you make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#b0552b] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
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

export default AadharVerification;