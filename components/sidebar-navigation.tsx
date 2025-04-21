"use client"
import type React from "react"

interface SidebarNavigationProps {
  openAccordion: string | null
  toggleAccordion: (title: string, e: React.MouseEvent) => void
  activeItem: {
    name: string
    section: string
  }
  handleSelect: (name: string, section: string, e: React.MouseEvent) => void
  isActive: (name: string) => boolean
}

export default function SidebarNavigation({
  openAccordion,
  toggleAccordion,
  activeItem,
  handleSelect,
  isActive,
}: SidebarNavigationProps) {
  return (
    <div className="hidden md:block w-[550px] bg-white border-r border-gray-200 left-0 top-0 z-10">
      <div className="p-6 m-8 bg-[#ddeffd] rounded-md" style={{ height: "calc(100% - 60px)", overflowY: "auto" }}>
        {/* Collect Payments */}
        <div className="border-0 border-b-2 rounded-none">
          <button
            type="button"
            onClick={(e) => toggleAccordion("Collect Payments", e)}
            className="flex justify-between items-center w-full py-3 text-left"
          >
            <div className="text-xs font-bold text-black uppercase tracking-wider">Collect Payments</div>
            <span>{openAccordion === "Collect Payments" ? "−" : "+"}</span>
          </button>
          {openAccordion === "Collect Payments" && (
            <div className="py-2">
              <nav className="space-y-1 overflow-auto">
                {[{ name: "Payment Gateway" }, { name: "Payin" }, { name: "Payout" }].map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => handleSelect(item.name, "Collect Payments", e)}
                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors w-full text-left ${
                      isActive(item.name) ? "bg-[#f8f1ee] text-[#ab6545] mr-2" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="truncate">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* API's */}
        <div className="border-0 border-b-2 rounded-none mt-4">
          <button
            type="button"
            onClick={(e) => toggleAccordion("APIs", e)}
            className="flex justify-between items-center w-full py-3 text-left"
          >
            <div className="text-xs font-bold text-black uppercase tracking-wider">API's</div>
            <span>{openAccordion === "APIs" ? "−" : "+"}</span>
          </button>
          {openAccordion === "APIs" && (
            <div className="py-2">
              <nav className="space-y-1 h-[150px] overflow-auto">
                {["Recharge", "DMT", "Flight Booking", "Hotel Booking"].map((name, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => handleSelect(name, "API's", e)}
                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors w-full text-left ${
                      isActive(name) ? "bg-[#f8f1ee] text-[#ab6545] mr-2" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="truncate">{name}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Website Development Services */}
        <div className="border-0 border-b-2 rounded-none mt-4">
          <button
            type="button"
            onClick={(e) => toggleAccordion("Website Development", e)}
            className="flex justify-between items-center w-full py-3 text-left"
          >
            <div className="text-xs font-bold text-black uppercase tracking-wider">Website Development Services</div>
            <span>{openAccordion === "Website Development" ? "−" : "+"}</span>
          </button>
          {openAccordion === "Website Development" && (
            <div className="py-2">
              <nav className="space-y-1 h-[150px] overflow-auto">
                {["UI-UX", "Website development", "Cab Booking Software", "CRM Software"].map((name, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => handleSelect(name, "Website Development Services", e)}
                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors w-full text-left ${
                      isActive(name) ? "bg-[#f8f1ee] text-[#ab6545] mr-2" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="truncate">{name}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* App Development Services */}
        <div className="border-0 border-b-2 rounded-none mt-4">
          <button
            type="button"
            onClick={(e) => toggleAccordion("App Development", e)}
            className="flex justify-between items-center w-full py-3 text-left"
          >
            <div className="text-xs font-bold text-black uppercase tracking-wider">App Development Services</div>
            <span>{openAccordion === "App Development" ? "−" : "+"}</span>
          </button>
          {openAccordion === "App Development" && (
            <div className="py-2">
              <nav className="space-y-1 h-[150px] overflow-auto">
                {["Android App", "IOS App"].map((name, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => handleSelect(name, "App Development Services", e)}
                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors w-full text-left ${
                      isActive(name) ? "bg-[#f8f1ee] text-[#ab6545] mr-2" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="truncate">{name}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
