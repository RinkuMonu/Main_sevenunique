"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

interface ContactDetailsFormProps {
  formData: any
  updateFormData: (step: string, data: any) => void
}

export default function ContactDetailsForm({ formData, updateFormData }: ContactDetailsFormProps) {
  const [name, setName] = useState(formData.contactDetails.name || "")
  const [phone, setPhone] = useState(formData.contactDetails.phone || "")
  const [email, setEmail] = useState(formData.contactDetails.email || "")
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }

  useEffect(() => {
    const nameValid = name.trim().length > 0
    const phoneValid = validatePhone(phone)
    const emailValid = validateEmail(email)

    const isValid = nameValid && phoneValid && emailValid

    updateFormData("contactDetails", {
      name,
      phone,
      email,
      isValid,
    })

    setErrors({
      name: nameValid ? "" : "Name is required",
      phone: phoneValid ? "" : "Valid 10-digit phone number is required",
      email: emailValid ? "" : "Valid email is required",
    })
  }, [name, phone, email]) // Remove updateFormData from dependencies

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Contact Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={errors.name ? "border-red-500" : ""}
            />
            {!errors.name && name && <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />}
          </div>
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className={errors.phone ? "border-red-500" : ""}
            />
            {!errors.phone && phone && <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />}
          </div>
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email ID <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={errors.email ? "border-red-500" : ""}
          />
          {!errors.email && email && <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />}
        </div>
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
    </div>
  )
}
