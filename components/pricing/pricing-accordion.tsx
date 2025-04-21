"use client"
import type React from "react"
import { ChevronRight } from "lucide-react"
import { sections } from "@/components/data/payment-gateway-data"

interface PricingAccordionProps {
  openIndex: number | null
  toggleSection: (index: number, e: React.MouseEvent) => void
}

export default function PricingAccordion({ openIndex, toggleSection }: PricingAccordionProps) {
  return (
    <div>
      <div className="p-7">
        <div className="flex">
          <img
            src="https://www.sevenunique.com/assets/main_logo-BmA0ECeW.png"
            className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
            alt="Logo"
            width={50}
            height={50}
          />
          <h2 className="ml-[14px] text-[24px] md:text-[28px]">Payment Gateway</h2>
        </div>
        <p className="text-[15px] mt-6 leading-[21px] mb-[32px] md:mb-[12px] max-w-[715px]">
          Accept payments in Indian Rupees (INR) and other 100+ foreign currencies with minimal integration effort and
          go live in no time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 my-5">
          <button
            type="button"
            className="bg-[#ab6545] hover:bg-[#8a5038] text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            Create Account
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
          <button
            type="button"
            className="border border-gray-300 text-black bg-gray-100 py-3 px-8 rounded-lg font-medium flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            Contact Sales
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="max-full mx-auto mb-10 p-4 space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md">
            <button
              type="button"
              onClick={(e) => toggleSection(idx, e)}
              className="w-full flex justify-between items-center p-4 font-semibold text-purple-900"
            >
              <span>{section.title}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 space-y-4 text-sm text-gray-700 w-full">
                {section.methods && (
                  <div className="flex flex-wrap gap-4">
                    {section.methods.map((method, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-full px-4 py-1 shadow text-purple-800 cursor-pointer hover:bg-purple-50 transition-colors"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                )}

                {section.subSections &&
                  section.subSections.map((sub, subIdx) => (
                    <div key={subIdx}>
                      <h4 className="font-semibold text-purple-800 mb-2">{sub.title}</h4>
                      <div className="flex flex-wrap gap-3 mb-2">
                        {sub.methods.map((m, i) => (
                          <div key={i} className="bg-white border rounded-full px-3 py-1 text-purple-700 shadow">
                            {m}
                          </div>
                        ))}
                      </div>
                      {sub.platformFee && (
                        <div className="text-right text-purple-700 font-medium">
                          {sub.platformFee} <span className="text-xs text-gray-500">platform fee</span>
                        </div>
                      )}
                      {sub.extraFee && <div className="text-right text-purple-700 font-medium">{sub.extraFee}</div>}
                    </div>
                  ))}

                {section.subInfo &&
                  section.subInfo.map((info, i) => (
                    <div key={i} className="flex justify-between items-center bg-white px-3 py-2 border rounded">
                      <span>{info.label}</span>
                      <span className="text-purple-700 font-medium">{info.fee} platform fee</span>
                    </div>
                  ))}

                {section.platformFee && (
                  <div className="text-right text-purple-700 font-bold text-lg">
                    {section.originalFee && (
                      <span className="line-through text-sm text-gray-400 mr-1">{section.originalFee}</span>
                    )}
                    {section.platformFee} <span className="text-xs font-medium text-gray-500">platform fee</span>
                  </div>
                )}

                {section.altFee && (
                  <div className="text-right text-purple-700 font-medium">
                    {section.altFee} <span className="text-xs text-gray-500">platform fee</span>
                  </div>
                )}

                {section.extraNote && (
                  <div className="text-right text-xs text-gray-500 italic">{section.extraNote}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
