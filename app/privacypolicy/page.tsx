import React from "react";
import Banner from "@/components/banner";

function Terms() {

  const bannerSlides = [
    {
      image: "/image/banner/Sport.jpg",
      title: "Sports Betting Software",
      description: "Build a powerful sports betting platform with our comprehensive software solutions",

    },
  ]
  return (
    <div className="px-5">
      <Banner slides={bannerSlides}/>

      <div className="container mx-auto mt-10 space-y-8 text-gray-800">
        <h2 className="text-2xl font-semibold">Salient features that we offer seclusion of your data</h2>
        <p className="leading-relaxed">
          Our privacy policy prioritizes the protection of your personal data,
          ensuring that any information we collect is securely stored and used
          exclusively for the purpose of delivering and enhancing our services.
          We are committed to respecting your privacy and will never share your
          data with third parties without your explicit consent. Additionally,
          we adhere to all applicable data protection laws and regulations,
          including GDPR and other relevant frameworks. Our policy ensures
          transparency, providing you with clear information on how your data is
          collected, processed, and stored, so you can make informed decisions
          about your privacy and security when interacting with our services.
        </p>

        <h2 className="text-2xl font-semibold">Data Security</h2>
        <p className="leading-relaxed">
          We take reasonable precautions to protect your personal data from
          unauthorized access, disclosure, alteration, or destruction. We use
          encryption, secure servers, and other measures to safeguard your
          information. These are measures and practices that protect digital data
          from unauthorized access, corruption, theft, or loss.
          <br />
          It is a critical aspect of safeguarding sensitive information and ensuring the
          privacy of individuals and organizations. The goal of data security is
          to maintain the confidentiality, integrity, and availability of data.
          <div className="text-xl font-semibold mt-4">Confidentiality</div>
          Ensures that sensitive information is only accessible to authorized individuals or systems. It can be maintained using encryption methods, access controls, and authentication mechanisms such as usernames, passwords, biometrics, or two-factor authentication.
          <div className="text-xl font-semibold mt-4">Integrity</div>
          Involves protecting data from being altered or tampered with, either accidentally or maliciously. To ensure data integrity, checksum algorithms, hash functions, and digital signatures are commonly used. These tools help verify that data remains accurate and unmodified during transmission or storage.
          <div className="text-xl font-semibold mt-4">Availability</div>
          ensures that data is accessible to authorized users when needed, despite
          any potential technical disruptions or cyberattacks. Measures like regular
          backups, redundant systems, disaster recovery plans, and ensuring network
          security (firewalls, intrusion detection systems) help protect data from
          being lost or made inaccessible.
        </p>

        <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
        <p className="leading-relaxed">
          At our company, we prioritize the protection of your personal information
          and respect your privacy. We do not engage in the sale, trade, or rental
          of your personal data to third parties for any marketing or commercial
          purposes.
          <br />
          Your information is solely used to enhance your experience with our
          services and to ensure we can provide the best possible service to you.
          <br />
          However, there are instances where we may need to share your information
          with trusted partners or service providers who assist us in operating our
          website or conducting business operations. These partners may include web
          hosting companies, payment processors, customer support services, or
          analytics providers. In these cases, we ensure that all third-party
          partners sign strict confidentiality agreements.
          <br />
          These agreements are designed to protect your data and ensure that it is
          used only for the purposes we have outlined, such as processing transactions
          or improving our services.
          <br />
          The third-party service providers we work with are required to follow
          industry standards for data protection and must adhere to similar privacy
          and security measures as we do. They are not permitted to use your
          information for any purpose other than to provide the specific services we
          have contracted them for.
          <br />
          We are transparent about these practices and make it clear to you when your
          information is being shared with such third parties. Additionally, we
          ensure that your personal data is only shared to the extent necessary for
          these partners to fulfill their role in helping us deliver the services you
          need. We take every precaution to prevent misuse or unauthorized access to
          your information, ensuring your data remains secure and confidential.
          <br />
          We will never disclose, sell, or lease your personal information to any
          entity without your explicit consent, except when required by law or as
          part of a legal process.
        </p>

        <h2 className="text-2xl font-semibold">Concern for Cookies</h2>
        <p className="leading-relaxed pb-10">
          While cookies offer significant benefits, they also raise concerns about
          privacy. As a result, you have control over them. Most modern browsers
          allow you to manage cookies by adjusting your settings. You can choose to
          block or delete cookies, although doing so might affect your experience on
          certain websites, as some features may no longer work as intended.
          <br />
          Our team implements a robust cookie policy that complies with privacy
          regulations like GDPR and CCPA.
          <br />
          This includes informing users about the types of cookies being used (such
          as necessary, performance, and advertising cookies) and providing them
          with clear options to consent or manage preferences. We deploy a cookie
          consent banner or pop-up when users first visit the website, allowing them
          to accept, reject, or customize cookie settings.
          <br />
          Additionally, it is important to ensure that only necessary cookies are
          used by default, with non-essential cookies activated only after user
          consent. We also maintain transparency in our privacy policy, regularly
          audit cookie practices for security and compliance, and offer users an
          easy way to opt-out or delete cookies at any time.
        </p>
      </div>
    </div>
  );
}

export default Terms;
