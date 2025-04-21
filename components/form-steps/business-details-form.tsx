"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

interface BusinessDetailsFormProps {
  formData: any
  updateFormData: (step: string, data: any) => void
}

export default function BusinessDetailsForm({ formData, updateFormData }: BusinessDetailsFormProps) {
  const [businessName, setBusinessName] = useState(formData.businessDetails.businessName || "")
  const [businessType, setBusinessType] = useState(formData.businessDetails.businessType || "")
  const [address, setAddress] = useState(formData.businessDetails.address || "")
  const [errors, setErrors] = useState({
    businessName: "",
    businessType: "",
    address: "",
  })

  useEffect(() => {
    const businessNameValid = businessName.trim().length > 0
    const businessTypeValid = businessType.trim().length > 0
    const addressValid = address.trim().length > 0

    const isValid = businessNameValid && businessTypeValid && addressValid

    updateFormData("businessDetails", {
      businessName,
      businessType,
      address,
      isValid,
    })

    setErrors({
      businessName: businessNameValid ? "" : "Business name is required",
      businessType: businessTypeValid ? "" : "Business type is required",
      address: addressValid ? "" : "Address is required",
    })
  }, [businessName, businessType, address])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="businessName">
          Business Name <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter business name"
            className={errors.businessName ? "border-red-500" : ""}
          />
          {!errors.businessName && businessName && (
            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
          )}
        </div>
        {errors.businessName && <p className="text-xs text-red-500">{errors.businessName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">
          Business Type <span className="text-red-500">*</span>
        </Label>
        <Select value={businessType} onValueChange={setBusinessType}>
          <SelectTrigger id="businessType" className={errors.businessType ? "border-red-500" : ""}>
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="llp">Limited Liability Partnership</SelectItem>
            <SelectItem value="private-limited">Private Limited Company</SelectItem>
            <SelectItem value="public-limited">Public Limited Company</SelectItem>
          </SelectContent>
        </Select>
        {errors.businessType && <p className="text-xs text-red-500">{errors.businessType}</p>}
      </div>
      </div>
      

      <div className="space-y-2">
        <Label htmlFor="address">
          Business Address <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter business address"
          className={errors.address ? "border-red-500" : ""}
          rows={3}
        />
        {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
      </div>
    </div>
  )
}
