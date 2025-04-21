"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Select from "react-select"
import axios from "axios"
import Swal from "sweetalert2"
import {
  Api,
  Banking,
  Game,
  MobileDevlopment,
  Software,
  WebDevlopment,
  Otherserivces,
  Solutions,
} from "@/components/data/services" 

interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  fullName: string
  email: string
  number: string
  message: { value: string; label: string } | null
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoader, setLoader] = useState(false)
  const router = useRouter()

  // Combine all services
  const apis = [
    ...Api,
    ...Banking,
    ...Game,
    ...Software,
    ...MobileDevlopment,
    ...WebDevlopment,
    ...Otherserivces,
    ...Solutions,
  ]

  const options = apis.map((service) => ({
    value: service.id,
    label: service.name,
  }))

  // State for Form Data with proper typing
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    number: "",
    message: null,
  })

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle dropdown selection with proper typing
  const handleDropdownChange = (selectedOption: { value: string; label: string } | null) => {
    setFormData(prev => ({ ...prev, message: selectedOption }))
  }

  // Handle form submission
  const handleSubmit = async () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address",
      })
      return
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.number)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a 10-digit phone number",
      })
      return
    }

    // Name validation
    if (!formData.fullName.trim()) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please enter your full name",
      })
      return
    }

    setLoader(true)
    try {
      const finalData = {
        fullName: formData.fullName,
        email: formData.email,
        number: formData.number,
        message: formData.message?.label || "No service selected",
      }

      const response = await axios.post(
        "https://admin-backend-dm97.onrender.com/api/submit-form",
        finalData
      )

      Swal.fire({
        title: "Thank You!",
        text: "We will contact you soon",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setFormData({
          fullName: "",
          email: "",
          number: "",
          message: null,
        })
        onClose()
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "Something went wrong. Please try again.",
      })
    } finally {
      setLoader(false)
    }
  }

  if (!isOpen || !isMounted) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side background - hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2">
            <img 
              src="./image/2150010130.jpg" 
              alt="Contact us" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Let's Connect And Grow</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors text-3xl"
                aria-label="Close popup"
              >
                &times;
              </button>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="number"
                  placeholder="Enter Number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  maxLength={10}
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="email"
                  placeholder="Enter E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Services
                </label>
                <Select
                  options={options}
                  value={formData.message}
                  onChange={handleDropdownChange}
                  placeholder="Select Services"
                  isSearchable
                  className="react-select-container"
                  classNamePrefix="react-select"
                  noOptionsMessage={() => "No services found"}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                disabled={isLoader}
                className={`px-6 py-2 bg-[#AB6545] text-white rounded-md hover:bg-[#050708] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isLoader ? "opacity-75 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmit}
              >
                {isLoader ? (
                  <span className="flex items-center justify-center">
                    <iframe 
                      src="https://lottie.host/embed/83e0baff-a6fa-43d8-82a5-fb1ca79cef99/MSr81ZVIPG.lottie" 
                      className="w-6 h-6"
                      title="Loading animation"
                    />
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup