"use client"
import { Check, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [hoveredBox, setHoveredBox] = useState<"starter" | "enterprise" | null>(null)

  return (
    <section className="bg-[#ec956c] bg-gradient-to-b from-[#ec956c] to-white text-white">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Lowest payment gateway
            <br />
            charges in India
          </h1>
          <p className="text-white text-lg max-w-lg">Competitive rates with no hidden fees and complete transparency</p>
        </div>

        <div className="lg:w-4/6 md:flex md:items-center relative afterclass">
          <div
            onMouseEnter={() => setHoveredBox("starter")}
            onMouseLeave={() => setHoveredBox(null)}
            className={`bg-white px-4 md:px-6 py-6 sm:h-full shadow-lg rounded-l-[4px] flex flex-col justify-center relative overflow-hidden border-cf-primary w-full lg:w-2/4 duration-300 transition-all pricing-starts-at  
                  ${hoveredBox === "enterprise" ? "scaledown" : ""}
                  px-6 py-6 rounded-l-[4px] w-full lg:w-2/4`}
          >
            <div className="flex items-baseline">
              <span className="text-purple-700 text-3xl font-bold">
                1.95%<span className="text-sm align-top">*</span>
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">2.0%</span>
            </div>
            <p className="text-gray-500 text-sm mb-3">Starts at</p>
            <p className="text-gray-800 font-medium mb-5">
              Access complete payments and banking platform at friendly pricing
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
                  <span className="text-sm text-black">{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="w-full bg-[#ab6545] hover:bg-[#8a5038] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              Create Account
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>

            <p className="text-xs text-gray-500 mt-3">
              *Pricing for Payment Gateway only. See for other{" "}
              <button type="button" className="text-green-500 font-medium hover:underline">
                products
              </button>
            </p>
          </div>

          <div
            onMouseEnter={() => setHoveredBox("enterprise")}
            onMouseLeave={() => setHoveredBox(null)}
            className={`bg-[#3B1F66] mt-12 mb-9 md:my-0 w-full md:w-2/4 px-[16px] md:px-[24px] py-[24px] sm:h-full rounded-r-[4px] flex flex-col relative overflow-hidden border-t-[7px] border-cf-primary duration-300 transition-all pricing-enterprises
            ${hoveredBox === "starter" ? "scaledown" : ""}
            px-6 py-6 rounded-r-[4px] w-full lg:w-2/4`}
          >
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Enterprises</p>
            <h3 className="text-xl text-white  font-bold mb-4 leading-snug">
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
                  <span className="text-sm text-white ">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-purple-300 text-xs mb-5">
              Get in touch with our sales team to explore the right products for your payment needs and get custom
              pricing.
            </p>

            <button
              type="button"
              className="w-full border border-white/50 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Contact Sales
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
