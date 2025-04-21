import { Check, ChevronRight } from "lucide-react"

export default function PayoutSection() {
  return (
    <div className="p-7 bg-white rounded-lg shadow-md">
      <div className="flex">
        <img
          src="https://www.sevenunique.com/assets/main_logo-BmA0ECeW.png"
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
          alt="Logo"
          width={50}
          height={50}
        />
        <h2 className="ml-[14px] text-[24px] md:text-[28px]">Payout Solution</h2>
      </div>

      <p className="text-[15px] mt-6 leading-[21px] mb-[32px] md:mb-[12px] max-w-[715px]">
        Send money to vendors, employees, or customers with our efficient Payout solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#f8f1ee] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#ab6545] mb-4">Payout Features</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Multiple Payment Methods (IMPS, NEFT, RTGS)</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Same-day Bank Transfers</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Tiered Pricing Based on Amount</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Bulk Payout Support</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full bg-[#ab6545] hover:bg-[#8a5038] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Payout Rates</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">₹1 to ₹1,000</span>
              <span className="text-[#ab6545] font-bold">₹6 + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">₹1,001 to ₹5,000</span>
              <span className="text-[#ab6545] font-bold">₹8 + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">₹5,001 and above</span>
              <span className="text-[#ab6545] font-bold">0.40% + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">Payment Methods</span>
              <span className="text-gray-700">IMPS, NEFT, RTGS</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">Processing Time</span>
              <span className="text-gray-700">Same-day Bank Transfer</span>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              Our Payout solution enables you to send money to vendors, employees, or customers with tiered pricing
              based on the transaction amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
