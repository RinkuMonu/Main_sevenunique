"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FileIcon, PlusCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface VerifyDocumentsFormProps {
  formData: any
  updateFormData: (step: string, data: any) => void
}

export default function VerifyDocumentsForm({ formData, updateFormData }: VerifyDocumentsFormProps) {
  const [activeDocument, setActiveDocument] = useState<string>("business-pan")
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>(
    formData.verifyDocuments.uploadedFiles || {
      "business-pan": null,
      "certificate-of-incorporation": null,
      "gst-certificate": null,
      "moa-aoa": null,
      "board-resolution": null,
      "kyc-authorised-signatory": null,
    },
  )
  const [consensus, setConsensus] = useState<string[]>(formData.verifyDocuments.consensus || [])

  const documents = [
    { id: "business-pan", label: "Business PAN", required: true },
    { id: "certificate-of-incorporation", label: "Certificate of Incorporation", required: true },
    { id: "gst-certificate", label: "GST Certificate", required: true },
    { id: "moa-aoa", label: "MOA/AOA", required: false },
    { id: "board-resolution", label: "Board Resolution for Authorised Person", required: true },
    { id: "kyc-authorised-signatory", label: "KYC for Authorised Signatory", required: true },
  ]

  const cipherOptions = [
    { id: "cipher-connect", label: "1. Cipher Connect" },
    { id: "cipher-payout", label: "2. Cipher Payout" },
    { id: "cipher-reseller", label: "4. Cipher Reseller" },
    { id: "cipher-aggregator", label: "5. Cipher Aggregator" },
  ]

  const toggleConsensus = (id: string) => {
    setConsensus((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleFileUpload = (documentId: string, file: File | null) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [documentId]: file,
    }))
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, documentId: string) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (isValidFileType(file) && isValidFileSize(file)) {
        handleFileUpload(documentId, file)
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, documentId: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (isValidFileType(file) && isValidFileSize(file)) {
        handleFileUpload(documentId, file)
      }
    }
  }

  const isValidFileType = (file: File) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"]
    return validTypes.includes(file.type)
  }

  const isValidFileSize = (file: File) => {
    const maxSize = 2 * 1024 * 1024 // 2MB
    return file.size <= maxSize
  }

  const removeFile = (documentId: string) => {
    handleFileUpload(documentId, null)
  }

  useEffect(() => {
    // Check if required documents are uploaded
    const requiredDocumentsUploaded = documents.filter((doc) => doc.required).every((doc) => uploadedFiles[doc.id])

    const isValid = requiredDocumentsUploaded && consensus.length > 0

    updateFormData("verifyDocuments", {
      uploadedFiles,
      consensus,
      isValid,
    })
  }, [uploadedFiles, consensus])

  return (
    <div className="space-y-6">
      {/* Document list sidebar */}
      <div className="hidden md:block">
        <div className="space-y-1">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-md px-3 py-2",
                activeDocument === doc.id ? "bg-blue-50" : "hover:bg-gray-50",
              )}
              onClick={() => setActiveDocument(doc.id)}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {doc.label}
                  {doc.required && <span className="text-red-500">*</span>}
                </span>
              </div>
              {uploadedFiles[doc.id] ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                  <span className="text-xs">✓</span>
                </div>
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 bg-white text-xs text-blue-500">
                  <span className="text-xs">+</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile document selector */}
      <div className="block md:hidden">
        <select
          className="w-full rounded-md border border-gray-300 p-2"
          value={activeDocument}
          onChange={(e) => setActiveDocument(e.target.value)}
        >
          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.label}
              {doc.required && "*"}
              {uploadedFiles[doc.id] ? " (Uploaded)" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Active document upload area */}
      <div className="mt-4">
        {documents.map(
          (doc) =>
            activeDocument === doc.id && (
              <div key={doc.id} className="space-y-4">
                <h3 className="text-lg font-medium text-blue-600">
                  {doc.label} {doc.required && <span className="text-red-500">*</span>}
                </h3>

                {uploadedFiles[doc.id] ? (
                  <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileIcon className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">{uploadedFiles[doc.id]?.name}</p>
                          <p className="text-sm text-gray-500">
                            {(uploadedFiles[doc.id]?.size! / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(doc.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 p-8"
                    onDrop={(e) => handleDrop(e, doc.id)}
                    onDragOver={handleDragOver}
                  >
                    <div className="mb-4 text-gray-400">
                      <PlusCircle className="mx-auto h-12 w-12" />
                    </div>
                    <div className="mb-2 text-center text-sm text-gray-500">Allowed Format - JPG, JPEG, PNG</div>
                    <div className="mb-4 text-center text-sm text-gray-500">Max File Size 2MB</div>
                    <div className="text-center">
                      <span className="text-gray-500">Drop file here or </span>
                      <label className="cursor-pointer text-blue-600 hover:underline">
                        <span>Click to Upload</span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, doc.id)}
                        />
                      </label>
                    </div>
                  </div>
                )}

                <div className="text-sm text-gray-600">
                  Details should be of the mentioned business only
                  <span className="text-red-500">*</span>
                </div>
              </div>
            ),
        )}
      </div>

      {/* Consensus section */}
      {activeDocument === "business-pan" && (
        <div className="mt-8 space-y-4">
          <h3 className="text-base font-medium">Please give consensus for</h3>
          <div className="space-y-3 rounded-md bg-gray-50 p-4">
            {cipherOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={consensus.includes(option.id)}
                  onCheckedChange={() => toggleConsensus(option.id)}
                />
                <Label htmlFor={option.id} className="text-sm">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
