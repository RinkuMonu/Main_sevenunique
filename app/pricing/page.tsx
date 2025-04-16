import Link from "next/link";
import { Check, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Sidebar */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 z-10">
          <div className="p-6">
            <div className="h-12 w-32 bg-white mb-8">
              <div className="h-full w-full bg-gray-200 rounded"></div>
            </div>

            <nav className="space-y-1">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Collect Payments
              </div>
              {[
                { name: "Payment Gateway", active: true },
                { name: "Subscriptions" },
                { name: "Easy Split" },
                { name: "Instant Settlements" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    item.active
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}

              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-8 mb-3">
                Make Payouts
              </div>
              {[{ name: "Payouts" }, { name: "Cashgram" }].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          {/* Hero Section */}
          <section className="bg-[#2D0A6C] text-white">
            <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Lowest payment gateway
                  <br />
                  charges in India
                </h1>
                <p className="text-purple-200 text-lg max-w-lg">
                  Competitive rates with no hidden fees and complete
                  transparency
                </p>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800">
                  <div className="flex items-baseline">
                    <span className="text-purple-700 text-3xl font-bold">
                      1.95%<span className="text-sm align-top">*</span>
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      2.0%
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Starts at</p>
                  <p className="text-gray-800 font-medium mb-5">
                    Access complete payments and banking platform at friendly
                    pricing
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      "No setup or any other hidden fees",
                      "Pay only for actual transactions",
                      "Real-time transaction fees reporting",
                      "Paperless and same day onboarding",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
                    Create Account
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>

                  <p className="text-xs text-gray-500 mt-3">
                    *Pricing for Payment Gateway only. See for other{" "}
                    <button className="text-green-500 font-medium hover:underline">
                      products
                    </button>
                  </p>
                </div>

                <div className="bg-purple-900 rounded-xl p-6 text-white">
                  <p className="text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Enterprises
                  </p>
                  <h3 className="text-xl font-bold mb-4 leading-snug">
                    Custom pricing
                    <br />
                    designed for enterprises
                  </h3>

                  <div className="space-y-3 mb-5">
                    {[
                      "Early access to new features",
                      "Dedicated account manager",
                      "Discount pricing",
                      "Support over WhatsApp in addition to other channels",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-white/30 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-purple-300 text-xs mb-5">
                    Get in touch with our sales team to explore the right
                    products for your payment needs and get custom pricing.
                  </p>

                  <button className="w-full border border-white/50 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-white/10 transition-colors">
                    Contact Sales
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Gateway Section */}
          <section className="container mx-auto px-6 py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Payment Gateway</h2>
                  <p className="text-gray-600">
                    Accept payments in Indian Rupees (INR) and other 100+
                    foreign currencies
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2.5 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
                  Create Account
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-gray-300 text-gray-700 py-2.5 px-6 rounded-lg font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">
                  Contact Sales
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Payment Modes Accordion */}
              <div className="border rounded-xl mb-6 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">Payment Modes</h3>
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                </div>
                <div className="p-6 border-t">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mb-6 md:mb-0">
                      {["UPI", "Visa", "Mastercard", "RuPay", "PhonePe"].map(
                        (item, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="h-14 w-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-xs text-center font-medium">
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <div className="text-right">
                      <p className="line-through text-gray-500 text-sm">2%</p>
                      <p className="text-purple-700 text-2xl font-bold">
                        1.95%
                      </p>
                      <p className="text-gray-500 text-xs">platform fee</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Accordions */}
              {[
                { title: "UPI on Credit Cards", rate: "2.15%" },
                { title: "EMI", rate: "1.90%" },
                { title: "Pay Later", rate: "2.20%", oldRate: "2.50%" },
                { title: "Virtual Bank Accounts", rate: "₹5" },
                { title: "International Cards", rate: "2.95%" },
              ].map((item, i) => (
                <div key={i} className="border rounded-xl mb-4 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm mr-2">
                        Starting at
                      </span>
                      {item.oldRate && (
                        <span className="text-gray-500 text-sm line-through mr-2">
                          {item.oldRate}
                        </span>
                      )}
                      <span className="text-purple-700 font-semibold mr-3">
                        {item.rate}
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}

              <p className="text-xs text-gray-500 mt-6">
                * Platform fee shall be a fee paid by the Merchant for services
                such as Hosted Checkout, Plugins, SDKs, Dashboard, and
                Generation of Reports. The Platform Fee shall be calculated on
                either total transactions or a certain number of transactions or
                a certain percentage of transactions of the total transaction as
                may be mutually agreed between the parties.
              </p>
            </div>

            {/* Free Products Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 mb-10 text-white">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0">
                  <h3 className="text-xl font-bold mb-3">
                    3 Products free with our PG!
                  </h3>
                  <p className="text-purple-100">
                    Use our{" "}
                    <span className="font-semibold">
                      Payment Links, Payment Forms,
                    </span>{" "}
                    and <span className="font-semibold">softPOS</span> products
                    to collect payments wherever your customers are at no
                    additional cost!
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-24 w-24 bg-purple-500/30 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Services Section */}
            <div className="bg-purple-900 rounded-xl p-8 mb-10 text-white">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-3">
                    Avail exclusive access to our premium services
                  </h3>
                  <p className="text-purple-300 text-sm">
                    with an annual maintenance charge
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Dedicated Account Manager",
                        desc: "with fortnightly checkins to provide support and discuss business health",
                      },
                      {
                        title: "Priority business support",
                        desc: "with an assured response time of 30 mins",
                      },
                      {
                        title: "20% faster resolution",
                        desc: "to dispute management",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex">
                        <div className="flex-shrink-0 h-6 w-6 bg-purple-800 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.title}</p>
                          <p className="text-purple-300 text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 bg-transparent border border-white/50 text-white py-2.5 px-6 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    Talk to Sales
                  </button>
                </div>
              </div>
            </div>

            {/* Already Using Payment Gateway Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-8">
                Already using payment gateway?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Instant Settlements",
                  "Paperless and same day onboarding",
                  "Easy to use dashboard",
                  "International payments in 30+ currencies",
                  "Instant refunds",
                  "E-commerce plugins",
                  "Dedicated account manager",
                  "Developer friendly integration kits",
                  "Now live on Juspay. Connect today",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-8">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {[
                  {
                    q: "Are the payment gateway charges fixed? Can I get tailored pricing for my business?",
                    a: "Yes. We can offer customized payment gateway charges if your business has very high average order values or micro-transactions. For custom pricing get in touch with us here.",
                    open: true,
                  },
                  {
                    q: "When can I start accepting international cards?",
                    a: "You can start accepting international cards immediately after completing the KYC process and enabling the feature in your dashboard.",
                  },
                  {
                    q: "I have a PayPal business account. What are the payment gateway charges for enabling PayPal on the checkout page?",
                    a: "PayPal integration comes with a standard fee of 2.5% per transaction with no additional platform fees from our side.",
                  },
                  {
                    q: "Are the payment gateway charges deducted on a per transaction basis?",
                    a: "Yes, all charges are deducted per transaction. There are no monthly or annual fees unless you opt for premium services.",
                  },
                  {
                    q: "What is a Platform Fee?",
                    a: "Platform fee covers the cost of our hosted checkout, plugins, SDKs, dashboard, and reporting tools. It's calculated as a percentage of your total transaction volume.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center cursor-pointer group">
                      <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                        {item.q}
                      </h4>
                      {item.open ? (
                        <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-purple-600 flex-shrink-0 transition-colors" />
                      )}
                    </div>
                    {item.open && (
                      <p className="mt-3 text-gray-600">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Have more questions?</p>
                <a
                  href="#"
                  className="text-green-500 font-medium flex items-center hover:text-green-600 transition-colors"
                >
                  Visit our support page
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready to get started?
                </h2>
                <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
                  Collect customer payments, make payouts, manage international
                  payments and so much more. Create your account or contact our
                  experts to explore custom solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center transition-colors">
                    Create Account
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="border border-white/50 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center hover:bg-white/10 transition-colors">
                    Contact Sales
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
