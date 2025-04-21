"use client"
import { Check, ChevronRight, X } from "lucide-react"

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  notIncluded: string[]
  isPopular: boolean
}

interface PricingPlansProps {
  title: string
  description: string
  plans: PricingPlan[]
}

export default function PricingPlans({ title, description, plans }: PricingPlansProps) {
  return (
    <div className="p-7">
      <div className="flex">
        <img
          src="https://www.sevenunique.com/assets/main_logo-BmA0ECeW.png"
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
          alt="Logo"
          width={50}
          height={50}
        />
        <h2 className="ml-[14px] text-[24px] md:text-[28px]">{title}</h2>
      </div>
      <p className="text-[15px] mt-6 leading-[21px] mb-[32px] md:mb-[12px] max-w-[715px]">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden border ${
              plan.isPopular ? "border-purple-500 shadow-lg relative" : "border-gray-200 shadow"
            }`}
          >
            {plan.isPopular && (
              <div className="bg-[#ab6545] text-white text-xs font-bold uppercase tracking-wider py-1 text-center">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="ml-1 text-sm text-gray-500">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.notIncluded.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Not included:</h4>
                  <ul className="space-y-3">
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                          <X className="h-3 w-3 text-gray-500" />
                        </span>
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                className={`mt-8 w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${
                  plan.isPopular
                    ? "bg-[#ab6545] text-white hover:bg-[#8a5038]"
                    : "bg-white border border-[#ab6545] text-[#ab6545] hover:bg-[#f8f1ee]"
                }`}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
