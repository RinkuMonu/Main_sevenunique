"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

interface BankDetailsFormProps {
  formData: any
  updateFormData: (step: string, data: any) => void
}

export default function BankDetailsForm({ formData, updateFormData }: BankDetailsFormProps) {
  const [accountHolderName, setAccountHolderName] = useState(formData.bankDetails.accountHolderName || "")
  const [accountNumber, setAccountNumber] = useState(formData.bankDetails.accountNumber || "")
  const [ifscCode, setIfscCode] = useState(formData.bankDetails.ifscCode || "")
  const [errors, setErrors] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  })

  const validateIfsc = (ifsc: string) => {
    const re = /^[A-Z]{4}0[A-Z0-9]{6}$/
    return re.test(ifsc)
  }

  useEffect(() => {
    const nameValid = accountHolderName.trim().length > 0
    const accountNumberValid = accountNumber.trim().length >= 9 && accountNumber.trim().length <= 18
    const ifscValid = validateIfsc(ifscCode)

    const isValid = nameValid && accountNumberValid && ifscValid

    updateFormData("bankDetails", {
      accountHolderName,
      accountNumber,
      ifscCode,
      isValid,
    })

    setErrors({
      accountHolderName: nameValid ? "" : "Account holder name is required",
      accountNumber: accountNumberValid ? "" : "Valid account number is required (9-18 digits)",
      ifscCode: ifscValid ? "" : "Valid IFSC code is required (format: ABCD0123456)",
    })
  }, [accountHolderName, accountNumber, ifscCode])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="accountHolderName">
          Account Holder Name <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="accountHolderName"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            placeholder="Enter account holder name"
            className={errors.accountHolderName ? "border-red-500" : ""}
          />
          {!errors.accountHolderName && accountHolderName && (
            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
          )}
        </div>
        {errors.accountHolderName && <p className="text-xs text-red-500">{errors.accountHolderName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountNumber">
          Account Number <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter account number"
            className={errors.accountNumber ? "border-red-500" : ""}
          />
          {!errors.accountNumber && accountNumber && (
            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
          )}
        </div>
        {errors.accountNumber && <p className="text-xs text-red-500">{errors.accountNumber}</p>}
      </div>
      </div>
     

      <div className="space-y-2">
        <Label htmlFor="ifscCode">
          IFSC Code <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <Input
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
            placeholder="Enter IFSC code"
            className={errors.ifscCode ? "border-red-500" : ""}
          />
          {!errors.ifscCode && ifscCode && (
            <Check className="absolute right-3 top-2.5 h-4 w-4 text-green-500" />
          )}
        </div>
        {errors.ifscCode && <p className="text-xs text-red-500">{errors.ifscCode}</p>}
      </div>
    </div>
  )
}
