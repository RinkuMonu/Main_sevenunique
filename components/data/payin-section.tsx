import { Check, ChevronRight } from "lucide-react"

export default function PayinSection() {
  return (
    <div className="p-7 bg-white rounded-lg shadow-md">
      <div className="flex">
        <img
          src="/image/logo.png"
          className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
          alt="Logo"
          width={50}
          height={50}
        />
        <h2 className="ml-[14px] text-[24px] md:text-[28px]">Payin Solution</h2>
      </div>

      <p className="text-[15px] mt-6 leading-[21px] mb-[32px] md:mb-[12px] max-w-[715px]">
        Accept payments from your customers with our competitive Payin solution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#f8f1ee] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#ab6545] mb-4">Payin Features</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">All Bank Support</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">All Payment Methods</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Real-time Processing</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#ab6545] flex items-center justify-center mt-0.5 mr-3">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-sm text-gray-700">Secure Transactions</span>
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">Payin Pricing</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">D1</span>
              <span className="text-[#ab6545] font-bold">1% + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">D3</span>
              <span className="text-[#ab6545] font-bold">3% + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">Real-time</span>
              <span className="text-[#ab6545] font-bold">4% + tax</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="font-medium">Supported</span>
              <span className="text-gray-700">All Banks + All Payment Methods</span>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600">
              Our Payin solution allows you to accept payments from customers through various payment methods with
              competitive rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
